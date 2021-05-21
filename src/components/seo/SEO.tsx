import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";

type MetaItem = {
  name: string;
  content: string;
};

type SEOProps = {
  title?: string;
  description?: string;
  url?: string;
  author?: string;
  keywords?: string[];
  meta?: MetaItem[];
  image?: string;
};

const SEO: React.FC<SEOProps> = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          author
          siteUrl
          keywords
          image
        }
      }
    }
  `);

  const { siteMetadata } = data.site;

  const {
    title,
    description,
    siteUrl,
    author,
    meta = [],
    keywords = [],
    image,
  } = siteMetadata;
  const siteTitle = props.title || title;
  const siteDescription = props.description || description;
  const url = props.url || siteUrl;
  const siteAuthor = props.author || author;
  const siteImage = props.image || image;
  const siteKeywords = [...keywords, props.keywords].join(",");
  const metaData = [
    {
      name: "canonical",
      content: url,
    },
    {
      name: "description",
      content: siteDescription,
    },
    {
      name: "image",
      content: siteImage,
    },
    {
      name: "og:url",
      content: url,
    },
    {
      name: "og:type",
      content: "article",
    },
    {
      name: "og:title",
      content: siteTitle,
    },
    {
      name: "og:description",
      content: siteDescription,
    },
    {
      name: "og:image",
      content: siteImage,
    },
    {
      name: "twitter:card",
      content: "summary_large_image",
    },
    {
      name: "twitter:creator",
      content: siteAuthor,
    },
    {
      name: "twitter:title",
      content: siteTitle,
    },
    {
      name: "twitter:description",
      content: siteDescription,
    },
    {
      name: "twitter:image",
      content: siteImage,
    },
    {
      name: "keywords",
      content: siteKeywords,
    },
  ].concat(meta);

  const linkData = [
    {
      rel: "shortcut icon",
      href: "favicon.ico",
    },
    {
      rel: "apple-touch-icon",
      href: "icons/apple-touch-icon.png",
    },
  ];
  return (
    <Helmet
      htmlAttributes={{ lang: "en" }}
      title={siteTitle}
      // titleTemplate={`%s | ${siteTitle}`}
      meta={metaData}
      link={linkData}
    />
  );
};

export { SEO };
