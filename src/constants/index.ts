import guitar from "../images/svg/hobbies/guitar.svg";
import reading from "../images/svg/hobbies/reading.svg";
import writing from "../images/svg/hobbies/writing.svg";
import github from "../images/svg/social/github.svg";
import linkedIn from "../images/svg/social/linkedIn.svg";
import twitter from "../images/svg/social/twitter.svg";

type Job = {
  id: string;
  designation: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
};

type TreeNode = {
  name: string;
  isExpanded?: boolean;
  children?: TreeNode[];
};

export type Project = {
  projectID: string;
  name: string;
  description: string;
  tags: string[];
  about: string;
  features: string;
  techSpec: string[];
  links: Link[];
};

type Link = {
  name: string;
  url: string;
};

const constants = {
  texts: {
    maxCharacterLimit: 350,
    ellipses: "...",
    readMore: "read more",
    readLess: "read less",
  },

  // Nav component
  nav: {
    logoAlt: "logo",
    about: "about",
    projects: "projects",
    contact: "contact",
    blogs: "blogs",
  },

  // Hero section
  head: {
    intro: "hi, I'm",
    name: "arko",
  },

  // About section
  about: {
    heading: "About",
    name: "Arkajyoti Mukherjee",
    designation: "Software Developer",
    tabs: {
      tab1: {
        heading: "me",
        aboutMe: `I Arkajyoti Mukherjee, nicknamed Arko, belong to the species of Homo sapiens. 
          I love to type in my keyboard until it resembles something that the sapiens use to automate things in their lives, called code. 
          I won't bore the reader by saying clichés like I am a creative person or have a desire to change the world. 
          Sometimes people even after understanding the vanity and fleeting nature of things desire to leave a mark upon this world. 
          They do that by the stories they tell and the people they touch. This is my little mark on the world. 
          As weird as it may sound, I like to believe I can express myself through the work that I do, even if they are lifeless characters on a computer screen. 
          I'm fascinated by the capabilities that it can unlock and the problems it solves. 
          Here you'll find some of the problems I tried to solve in my duration on this planet.`,
        hobbiesHeading: "hobbies:",
        hobbies: [
          {
            name: "guitar",
            src: guitar,
          },
          {
            name: "reading",
            src: reading,
          },
          {
            name: "writing",
            src: writing,
          },
        ],
      },
      tab2: {
        heading: "skills",
        skills: {
          name: "skills",
          children: [
            {
              name: "frontend",
              children: [
                { name: "JS/TS" },
                { name: "HTML/CSS" },
                { name: "react" },
                { name: "CSS-in-JS" },
                { name: "gatsby" },
                { name: "flutter" },
              ],
            },
            {
              name: "backend",
              children: [
                { name: "mongo" },
                { name: "go" },
                { name: "CI/CD" },
                { name: "k8s" },
              ],
            },
          ],
        } as TreeNode,
      },
      tab3: {
        heading: "experience",
        jobs: [
          {
            id: "1",
            designation: "SDE",
            company: "ChaosNative",
            location: "Bangaluru, Karnataka, India",
            startDate: "Feb 2021",
            endDate: "Present",
            description: `
              * Create a CLI for LitmusChaos named litmusctl in Go with Cobra and Viper.
              * Worked towards releasing Litmus 2.0 with enchantment such as LitmusPortal, Gitops, and Probs for resiliency calculation of the system.
              * Created the Unit testing setup for the backend, written in Go.
              * Working on Observability of Chaos injected by Chaos Engineering frameworks like Litmus.
            `,
          },
          {
            id: "2",
            designation: "SDE",
            company: "Mayadata",
            location: "Bangaluru, Karnataka, India",
            startDate: "May 2020",
            endDate: "Feb 2021",
            description: `
              * Created the foundation and lead frontend developer for Litmus Portal, an on-prem portal that comes with LitmusChaos installation (CNCF sandbox project for Chaos Engineering).
              * Created and lead the frontend team of Kubera (an enterprise SaaS platform) that involved various products like an OEM for Lirmus Portal, Mayastor and other products related to data storage and backup in Kubernetes.
              * Worked on kuberactl a CLI for interacting with the Kubera Enterprise in Go with Cobra and Viper.
              * Build the main website for LitmusChaos (https://litmuschaos.io/) and an Experiment Hub for LitmusChaos (https://hub.litmuschaos.io/).
              * Created a component library in React (published in npm here: https://www.npmjs.com/package/kubera-ui).
              * Coached several employees on React, Typescript, GraphQL, Apollo and MaterialUI.
              * Held interviews for recruitment two times.
              * Helped in introducing graphql to the company.
            `,
          },
          {
            id: "3",
            designation: "Research Intern",
            company: "National Institute of Technology Rourkela",
            location: "Rourkela, Odisha, India",
            startDate: "Dec 2019",
            endDate: "Jan 2020",
            description: `
              * Created a new clustering method in Wireless Sensor Networks (WSN) using Genetic Algorithm and wrote multiple research publications on the ﬁndings of the results.
              * Implemented a few of the existing algorithms in WSN and wrote a comparative study on them.
              * Implemented compression techniques (Arithmetic coding, DCT and DWT) for EEG signals and transmitted them between two systems, comparing the results based on diﬀerent metrics such as compression ratio, latency and RMS loss, as well as proposing the integration of said compression techniques for EEG signals in the telemedicine systems.
            `,
          },
          {
            id: "4",
            designation: "Frontend Web Developer",
            company: "Lattice Protocol",
            location: "Bhubaneswar, Odisha, India",
            startDate: "Mar 2018",
            endDate: "July 2018",
            description: `
              * Developed design mockups for the main company website.
              * Translated UX wireframes and mockups into responsive, interactive features, using HTML/CSS and JavaScript.
              * Automated image optimization, using Gulp and minified JS and CSS, which reduced page load times by up to 30%.
              * Used service workers to cache the data in browser for faster load times.
            `,
          },
        ] as Job[],
      },
    },
  },

  // Projects section
  projects: {
    heading: "Projects",
    about: "About",
    features: "Features",
    techSpec: "Tech Spec",
    links: "Links",
    projectList: [
      {
        projectID: "web-litmuschaos",
        name: "LitmusChaos website",
        description:
          "Landing page for an CNCF sandbox open-source product called Litmuschaos.",
        tags: ["gatsby", "SEO", "react"],
        about: `
        Landing page for an CNCF sandbox open-source product called Litmuschaos.
        I acted as the lead frontend developer for the project 
        and ensured one of its key aspects an SEO score of 100 in web.dev 
        to help market the product in search engines.
        `,
        features: `
        - One of the major challenges were to get a good SEO score as it is a landing page and I used a static site generator called Gatsby to achieve that.
        - That also allowed me to keep an option open for integration with content management systems(CMS) like Contentful/Wordpress if the need arises.
        `,
        techSpec: [
          "gatsby",
          "react",
          "javascript/typescript",
          "html/css",
          "styled-components",
          "webapp",
        ],
        links: [
          {
            name: "website",
            url: "https://litmuschaos.io/",
          },
          {
            name: "github",
            url: "https://github.com/litmuschaos/website-litmuschaos",
          },
        ],
      },
      {
        projectID: "hub-litmuschaos",
        name: "Litmus experiment hub",
        description: "A hub for chaos experiments of Litmus.",
        tags: ["react", "golang", "design"],
        about: `
        A hub to see and use the experiments provided by LitmusChaos. Built with dynamic content in mind, the hub features realtime stats relevant to the project.
        The backend is implements a REST API with golang and the React based frontend performs complicated query filtering.
        `,
        features: `
        - Built with resiliency in mind it uses Typescript to write a more structured code with less bugs.
        - Used MaterialUI to provide a easily customizable UI and has been helpful in undergoing a full UI overhaul with minimal code change and in short amount of time.
        `,
        techSpec: [
          "react",
          "javascript/typescript",
          "html/css",
          "materialUI",
          "golang",
        ],
        links: [
          {
            name: "website",
            url: "https://hub.litmuschaos.io/",
          },
          {
            name: "github",
            url: "https://github.com/litmuschaos/charthub.litmuschaos.io",
          },
        ],
      },
    ] as Project[],
  },

  // Contact section
  contact: {
    heading: "Contact",
    dropMail: "You can drop me an email at ",
    email: "arkajyoti31@gmail.com",
    reachMe: "or reach me via:",
    socialLinks: [
      {
        name: "github",
        src: github,
        url: "https://github.com/arkajyotiMukherjee",
      },
      {
        name: "linkedIn",
        src: linkedIn,
        url: "https://www.linkedin.com/in/arkajyotimukherjee/",
      },
      {
        name: "twitter",
        src: twitter,
        url: "https://twitter.com/guywithpajamas",
      },
    ],
    downloadResume: "Download my resume in pdf or doc",
    resumes: [
      {
        format: "pdf",
        url: "https://github.com/arkajyotiMukherjee/portfolio-site/raw/main/resume/Arkajyoti-Mukherjee-Resume.pdf",
      },
      {
        format: "docx",
        url: "https://github.com/arkajyotiMukherjee/portfolio-site/raw/main/resume/Arkajyoti-Mukherjee-Resume.docx",
      },
    ],
  },
};

export { constants };
