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

  // Nav section
  nav: {
    logoAlt: "logo",
    about: "about",
    projects: "projects",
    contact: "contact",
    blogs: "blogs",
  },

  // Footer section
  footer: {
    copyright: "© 2021 Arkajyoti Mukherjee",
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
          People, sometimes, even after understanding the vanity and fleeting nature of things desire to leave a mark upon this world. 
          They do so by the stories they tell and the people they touch. This is my little mark on the world. 
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
            location: "Bengaluru, Karnataka, India",
            startDate: "May 2021",
            endDate: "Present",
            description: `
              * Created the foundation and lead frontend developer for ChaosCenter, an on-prem portal that comes with LitmusChaos 2.0 installation (CNCF sandbox project for Chaos Engineering).
              * Was responsible for the Information Architecture for the docs for Litmuschaos 2.0 (https://docs.litmuschaos.io/).
              * Created and Maintained an opensource UI library named litmus-ui (https://ui.litmuschaos.io).
              * Worked on an open source CLI for LitmusChaos called litmusctl with Golang, cobra and viper to create a cluster agent and execute Litmus CRDs in a cluster
              * Worked on Observability of Chaos injected by Chaos Engineering frameworks like Litmus.
              * Created several backend APIs and optimized Database querying in mongoDB.
              * Created the Unit testing setup for the backend, written in Go.
              * Build the main website for LitmusChaos (https://litmuschaos.io/) and an Experiment Hub for LitmusChaos (https://hub.litmuschaos.io/).
            `,
          },
          {
            id: "2",
            designation: "SDE Intern",
            company: "Mayadata",
            location: "Bengaluru, Karnataka, India",
            startDate: "May 2020",
            endDate: "May 2021",
            description: `
              * Created and lead the frontend team of Kubera (an enterprise SaaS platform) that involved various products like an OEM for Litmus Portal, Mayastor and other products related to data storage and backup in Kubernetes.
              * Worked on kuberactl a CLI for interacting with the Kubera Enterprise in Go with Cobra and Viper.
              * Created a component library in React (published in npm here: https://www.npmjs.com/package/kubera-ui).
              * Coached several employees on React, Typescript, GraphQL, Apollo and MaterialUI.
              * Held interviews for recruitment multiple times.
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
            designation: "Frontend Web Developer Intern",
            company: "Lattice Engineering",
            location: "Bengaluru, Karnataka, India",
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
        projectID: "chaos-center",
        name: "LitmusChaos 2.0",
        description:
          "Chaos Engineering management portal/dashboard for LitmusChaos.",
        tags: ["react", "golang", "SaaS"],
        about: `
        The ChaosCenter is a single source of truth to control all the different Chaos Activities happening around Litmus. 
        From the ChaosCenter you get the freedom to manage every single part of Litmus and shape your workflows exactly the way you want it. 
        I was instrumental in forming the architecture for the product and lead and worked with multiple teams over the course of 1 year complete this project. 
        I had majorly worked in the frontend setup, decisions and code and in the backend while forming various APIs, effective DB queries and unit testing.
        `,
        features: `
        - ChaosCenter contains several components from Frontend website, Backend, Database, CLI, and a UI component library. Fortunately I've been able to work in almost all of these components.
        - One of the key highlights is the extensible UI library called litmus-ui. Where we had to build custom graphing system to provide monitoring support in ChaosCenter.
        `,
        techSpec: [
          "react",
          "golang",
          "javascript/typescript",
          "mongoDB",
          "UI library",
          "Enterprise software",
        ],
        links: [
          {
            name: "website",
            url: "https://litmus.preview.chaosnative.com/",
          },
          {
            name: "github",
            url: "https://github.com/litmuschaos/litmus",
          },
        ],
      },
      {
        projectID: "litmus-ui",
        name: "Litmus UI",
        description: "UI component library for LitmusChaos.",
        tags: ["react", "components", "graphs"],
        about: `
        Litmus UI provides simple consumable components to aid in building fast and tested UI in ChaosCenter. 
        Built with composition and structure in mind this has features to intake external themes and re-brand the components. 
        I have been instrumental in forming the entire structure and forming the core designing principles of the components.
        `,
        features: `
        - This project which I've started internally not only has provided value to to the developers but brought real business values with the re-branding feature.
        - We have developed a custom graph system to meet the monitoring needs in ChaosCenter.
        `,
        techSpec: ["react", "javascript/typescript", "UI library", "rollup"],
        links: [
          {
            name: "website",
            url: "https://ui.litmuschaos.io/",
          },
          {
            name: "github",
            url: "https://github.com/litmuschaos/litmus-ui",
          },
        ],
      },
      {
        projectID: "web-litmuschaos",
        name: "LitmusChaos website",
        description:
          "Landing page for an CNCF sandbox open-source product called LitmusChaos.",
        tags: ["gatsby", "SEO", "react"],
        about: `
        Landing page for an CNCF sandbox open-source product called LitmusChaos.
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
    email: "contact@arkajyotimukherjee.com",
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
    downloadResume: "Download my resume in pdf format",
    resumes: [
      {
        format: "pdf",
        url: "https://github.com/arkajyotiMukherjee/portfolio-site/raw/main/content/resume/Arkajyoti's Resume.pdf",
      },
    ],
  },
};

export { constants };
