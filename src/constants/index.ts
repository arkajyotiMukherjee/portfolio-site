interface Job {
  id: string;
  designation: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
}

interface TreeNode {
  name: string;
  isExpanded?: boolean;
  children?: TreeNode[];
}

const constants = {
  texts: {
    maxCharacterLimit: 350,
    ellipses: "...",
    readMore: "read more",
    readLess: "read less",
  },
  nav: {
    logoAlt: "logo",
    about: "about",
    projects: "projects",
    contact: "contact",
    blogs: "blogs",
  },
  head: {
    intro: "hi, I'm",
    name: "arko",
  },
  about: {
    heading: "About",
    name: "Arkajyoti Mukherjee",
    designation: "Software Developer",
    tabs: {
      tab1: {
        heading: "me",
        aboutMe:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        hobbies: {
          heading: "hobbies:",
          guitar: {
            src: "./assets/guitar.svg",
            name: "guitar",
          },
        },
      },
      tab2: {
        heading: "skills",
        skills: {
          name: "skills",
          children: [
            {
              name: "frontend",
              children: [
                { name: "HTML/CSS" },
                { name: "JS/TS" },
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
                { name: "k8s" },
                { name: "CI/CD" },
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
};

export { constants };
