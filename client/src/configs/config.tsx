// Library imports.
import {
  BsDiscord, BsInstagram, BsFacebook,
  BsPeopleFill, BsCalendar3, BsJournalText, BsHeadset, BsFillPersonBadgeFill, BsPeople
} from "react-icons/bs";

// Media imports.
import bomberland from "../images/bomberland.gif";
import fishnet from "../images/Fishnet.jpg";
import HPE2 from "../images/HPE2.png";
import deepfake from "../images/Deepfake.jpeg";
import spaces from "../images/spaces.webp";

import bryan_profile from "../images/exec/bryan.png";
import james_profile from "../images/exec/james.png";
import marcus_profile from "../images/exec/marcus.png";
import aditya_profile from "../images/exec/aditya.jpeg";
import jaskeerat_profile from "../images/exec/jaskeerat.jpg";
import FAQImage from "../images/3.gif";

/* -------------------------------------------------------------------------- */
/*                           COMMON COMPONENTS DATA                           */
/* -------------------------------------------------------------------------- */

/* ------------------------------- NAVBAR DATA ------------------------------ */
// Interface definition for dropdowns.
export interface DropDowns {
  href: string;
  text: string;
  external?: boolean;
  dropDowns?: DropDowns[];
}

// Interface definition for pages.
export interface Page {
  key: string;
  text: string;
  href: string;
  mobileIcon?: JSX.Element;
  dropDowns?: DropDowns[];
}

// Data for loading the navigation bar.
export const navbarData: Page[] = [
  {
    key: "About Us",
    text: "About Us",
    href: "/about-us",
    mobileIcon: <BsPeopleFill />,
    dropDowns: [
      { text: "Club Description", href: "#clubDescription" },
      { text: "Mission Statement", href: "#missionStatement" },
      {
        text: "Executive Team",
        href: "#executiveTeam",
        // dropDowns: [
        //   { text: "President", href: "#president" },
        //   { text: "Vice President", href: "#vicePresident" },
        //   { text: "Secretary", href: "#secretary" },
        //   { text: "Treasurer", href: "#treasurer" },
        //   { text: "Webmaster", href: "#webmaster" },
        // ],
      },
      { text: "FAQ", href: "#faq" },
    ],
  },
  {
    key: "Events",
    text: "Events",
    href: "/events",
    mobileIcon: <BsCalendar3 />,
    dropDowns: [
      { text: "Ongoing Events", href: "#ongoingEvents" },
      { text: "Upcoming Events", href: "#upcomingEvents" },
      { text: "Past Events", href: "#pastEvents" },
    ],
  },
  {
    key: "Projects",
    text: "Projects",
    href: "/projects",
    mobileIcon: <BsJournalText />,
    dropDowns: [
      { text: "Bomberland", href: "#bomberland" },
      { text: "Deepfake Detection", href: "#deepfake-detection" },
      { text: "Fishnet", href: "#fishnet" },
      { text: "HPE", href: "#human-pose-estimation" },
      { text: "Spaces", href: "#spaces" },
    ],
  },
  // {
  //   key: "Membership",
  //   text: "Membership",
  //   href: "/membership",
  //   mobileIcon: <BsFillPersonBadgeFill />,
  //   dropDowns: [
  //     { text: "Information", href: "#information" },
  //     { text: "Benefits", href: "#benefits" },
  //   ],
  // },
  // {
  //   key: "Partners",
  //   text: "Partners",
  //   href: "/partners",
  //   mobileIcon: <BsPeople />,
  //   dropDowns: [
  //     { text: "Affiliates", href: "#affiliates" },
  //     { text: "Sponsors", href: "#sponsors" },
  //   ],
  // },
  {
    key: "Contact Us",
    text: "Contact Us",
    href: "/contact-us",
    mobileIcon: <BsHeadset />,
    // dropDowns: [],
  },
];

/* ------------------------------ FOOTER DATA ------------------------------- */
// Interface defintions for social media buttons.
export interface SMButton {
  key: string;
  icon: JSX.Element;
  href: string;
}

// Data for loading the social media links.
export interface SMLink {
  text: string;
  href: string;
  external?: boolean;
}

// Interface definitions for columns.
export interface Column {
  title: string;
  href: string;
  links: SMLink[];
}

// Data for loading the footer bar.
export const footerData: {smButtons: SMButton[], columns: Column[]} = {
  smButtons: [
    {
      key: "Discord",
      icon: <BsDiscord />,
      href: "https://discord.gg/4AycB34acK",
    },
    {
      key: "Instagram",
      icon: <BsInstagram />,
      href: "https://www.instagram.com/ubcdatascienceclub/?hl=en",
    },
    {
      key: "Facebook",
      icon: <BsFacebook />,
      href: "https://www.facebook.com/ubcdatascience",
    },
  ],
  columns: [
    {
      title: "Home",
      href: "/home",
      links: [],
    },
    {
      title: "About Us",
      href: "/about-us",
      links: [
        { text: "Club Description", href: "/about-us#clubDescription" },
        { text: "Mission Statement", href: "/about-us#missionStatement" },
        { text: "Executive Team", href: "/about-us#executiveTeam" },
        { text: "FAQ", href: "/about-us#faq" },
      ],
    },
    {
      title: "Events",
      href: "/events",
      links: [
        { text: "Ongoing Events", href: "/events#ongoingEvents" },
        { text: "Past Events", href: "/events#pastEvents" },
        { text: "Upcoming Events", href: "/events#upcomingEvents" },
      ],
    },
    {
      title: "Projects",
      href: "/projects",
      links: [
        { text: "Bomberland", href: "/projects#bomberland" },
        { text: "Deepfake Detection", href: "/projects#deepfake-detection" },
        { text: "Fishnet", href: "/projects#fishnet" },
        { text: "HPE", href: "/projects#human-pose-estimation" },
        { text: "Spaces", href: "/projects#spaces" },
      ],
    },
    // {
    //   title: "Membership",
    //   href: "/membership",
    //   links: [
    //     { text: "Information", href: "/membership#information" },
    //     { text: "Benefits", href: "/membership#benefits" },
    //   ],
    // },
    // {
    //   title: "Partners",
    //   href: "/partners",
    //   links: [
    //     { text: "Affiliates", href: "/partners#affiliates" },
    //     { text: "Sponsors", href: "/partners#sponsors" },
    //   ],
    // },
    {
      title: "Contact Us",
      href: "/contact-us",
      links: [],
    },
  ],
};

/* -------------------------------------------------------------------------- */
/*                               COMPONENTS DATA                              */
/* -------------------------------------------------------------------------- */
// Data for the executive team section.
/*
  {
    title: "",
    name: "",
    description: `

    `,
    image: "",
  },
*/
export const execMembersData = [
  {
    title: "President",
    name: "James Ross",
    description: `
    I’m a third year student in computer science leading the club in order to share my interest in data science with other students!

    `,
    image: james_profile,
  },
  {
    title: "Treasurer",
    name: "Linda Liu",
    description: `
    Hi, I’m Linda and I study CS at UBC. I’m excited to learn more about data science and help create opportunities for others to learn too.
    `,
    image: FAQImage,
  },
  {
    title: "Marketing",
    name: "Bryan Chang",
    description: `
    My name is Bryan and I’m a second year student in science. I joined because applied math is cool and I think the club logo is pretty dope.

    `,
    image: bryan_profile,
  },
  {
    title: "Outreach",
    name: "Aditya Varma",
    description: `
    My name is Aditya Varma and I’m a 2nd year Chemical and Biological Engineer. I am a Big Data and AI-ML enthusiast who loves to work and build new projects.

    `,
    image: aditya_profile,
  },
  {
    title: "Event Planning",
    name: "Jaskeerat Sarin Singh",
    description: `
    I'm a 2nd year student in Computer Science. I am passionate about math and machine learning. My research interests are trustworthiness and reliability of ML, and computer vision. Feel free to reach out anytime! 

    `,
    image: jaskeerat_profile,
  },
  {
    title: "Webmaster",
    name: "Marcus Lai",
    description: `
      I'm a second year student in CS and Math. I'm interested in data and optimization, lmk if you want to collaborate on something!
    `,
    image: marcus_profile,
  },
];

/* -------------------------------------------------------------------------- */
/*                                 PAGES DATA                                 */
/* -------------------------------------------------------------------------- */
// Data for the projects page.
/*
  {
    title: "",
    src: null,
    concepts: "",
    tech: "",
    lead: "",
    body: `
      
    `,
    competition_info: "",
    github: "https://github.com/ubcdsci/"
  }
*/
export const projectsListData = [
  {
    title: "Bomberland",
    id: "bomberland",
    src: bomberland,
    concepts: "Teaching a computer to play games better than a human",
    tech: "Python, PyTorch, more TBD",
    body: `
      Reinforcement learning is a hot topic within the field of data science, as it explores a more "natural" way of teaching an agent to act within a specified environment.
      With applications to robotics, healthcare, and even the stock market, bomberland hopes to look at the fundamentals of reinforcement learning and gain a better understanding of this promising area of research.
      To do so, the bomberland project involves teaching a model to compete in a 2D grid world against multiple other agents.
    `,
    competition_info: "https://www.gocoder.one/bomberland",
    github: "https://github.com/ubcdsci/bomberland",
  },
  {
    title: "Deepfake Detection",
    id: "deepfake-detection",
    src: deepfake,
    concepts: "Differentiating between real and fake humans",
    tech: "Python, pytorch, opencv",
    body: `Despite the advancement of editing software, videos of people have been notoriously difficult to fake. That is, until now. Modern machine learning algorithms have made it simple for anyone to create deepfakes, or hyper-realistic videos where a human has been altered to look like somebody entirely different. This technology has been for anything from creating advertisements containing celebrities to fake political campaigns (https://www.technologyreview.com/2020/12/24/1015380/best-ai-deepfakes-of-2020/). How can we differentiate between the real and the fake? This project aims to answer that question by designing computer vision techniques to counteract this technology.


    `,
    github: "https://github.com/ubcdsci/deepfake-detection",
  },
  {
    title: "Fishnet",
    id: "fishnet",
    src: fishnet,
    concepts: "Applying computer vision to the fishing industry",
    tech: "Python, PyTorch, OpenCV",
    body: `
      Our first project collaboration, and an impactful one at that, Fishnet aims to tackle a variety of problems present within the fishing industry.
      By applying computer vision techniques to on-board cameras on fishing boats, members of the fishnet project will help design methods to locate and identify fish within video feeds.
      Longer-term, more lofty goals for this project include tracking fish through time and identifying bycatch, especially endangered species.
    `,
    github: "https://github.com/ubcdsci/nethack-rl",
  },
  {
    title: "Human Pose Estimation",
    id: "human-pose-estimation",
    src: HPE2,
    concepts: "Computer Vision, Human-Computer Interaction",
    tech: "Python, PyTorch, OpenCV",
    body: `
      From augmented reality headsets to autonomous vehicles, the demand for computer vision systems requiring complex human-machine interaction is ever increasing.
      Human pose estimation is the data science club project that investigates this interaction, implementing state of the art human pose estimation algorithms to extract pose information from image and video feeds.
      In the longer term, we will be exploring ways to apply these algorithms to augmented reality and similar problems.
    `,
    github: "https://github.com/ubcdsci/pose",
  },
  {
    title: "Spaces",
    id: "spaces",
    src: spaces,
    concepts: "Understanding and predicting the usage of public spaces",
    tech: "Python, spaCy, tweepy, more TBD",
    body: `Twitter stores a lot of data. As of 2017, the amount of data stored across all of their clusters totalled over 500 PB. With millions of tweets being added to this total each day, the spaces project aims to gain real time insights into public spaces worldwide by leveraging this data. Members who are part of the spaces project implement state of the art natural language processing methods and apply them to the content of tweets in order to build real time heatmaps of activity across regions. Future goals include building activity profiles of regions and predicting activity into the future.

      
    `,
    github: "https://github.com/ubcdsci/",
  },
];

// Data for the events page.
/*
  {
    date: "",
    topic: ""
  },
*/
export const workshopData = [
  {
    date: "Sept 4. 2022",
    topic: "Transformers and their Application: Attention is All you Need",
  },
  {
    date: "Aug 21. 2022",
    topic: "Graphs: Graphs, Terminology, Pagerank, Node Embeddings",
  },
  {
    date: "Aug 7. 2022",
    topic:
      "Introduction to NLP: NLP terminology, Sentiment Analysis, NER, Deep Learning and NLP",
  },
  {
    date: "July 24. 2022",
    topic: "Scaling Up: Distributed data, pyspark",
  },
  {
    date: "July 10. 2022",
    topic:
      "Deep Learning Techniques: Designing your own NN, Regularization, CNNs",
  },
  {
    date: "June 26. 2022",
    topic: "Deep Learning: Neural Networks, Gradient Descent, SGD",
  },
  {
    date: "June 12. 2022",
    topic: "Data Visualization",
  },
  {
    date: "May 29. 2022 ",
    topic:
      "Statisical Methods and Algorithm Design 2: Decision Trees, Logistic Regression, Clustering, Kmeans, Cross-validation",
  },
  {
    date: "March 6. 2022",
    topic:
      "Statisical Methods and Algorithm Design 1: Classification, parametric vs. non-parametric models, KNN, Linear regression, Overfitting / Underfitting",
  },
  {
    date: "Feb 20. 2022",
    topic: "Data Collection: Webscraping, finding good data sources",
  },
  {
    date: "Feb 6. 2022",
    topic:
      "Working With Data in Python: CSV files, pandas, numpy, Matplotlib, plotly",
  },
  {
    date: "Jan 23. 2022",
    topic:
      "Python Basics and Setting up your Environment: Python, Virtual Environments, Anaconda",
  },
];
