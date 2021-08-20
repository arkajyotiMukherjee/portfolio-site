export type Frontmatter = {
  published: string;
  title: string;
  date: string;
  author: string;
  description: string;
  keywords: string[];
  banner: string;
  bannerCredit: string;
};

export type Node = {
  id: string;
  frontmatter: Frontmatter;
  fields: {
    slug: string;
  };
};

export interface IPageQuery {
  data: {
    allMdx: {
      nodes: Node[];
    };
  };
}
