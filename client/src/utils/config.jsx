// Library imports.
import { BsDiscord, BsInstagram, BsFacebook } from "react-icons/bs";

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
// Data for banner particles.
export const particlesData = {
  autoPlay: true,
  fullScreen: {
    enable: true,
    zIndex: 1,
  },
  detectRetina: true,
  duration: 0,
  fpsLimit: 120,
  interactivity: {
    detectsOn: "canvas",
    events: {
      onClick: {
        enable: false,
        mode: "push",
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: true,
        mode: "grab",
        parallax: {
          enable: false,
          force: 10,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        easing: "ease-out-quad",
        factor: 1,
        maxSpeed: 50,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 400,
        duration: 2,
        mix: false,
        opacity: 0.8,
        size: 40,
        divs: {
          distance: 200,
          duration: 0.4,
          mix: false,
          selectors: [],
        },
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.5,
        },
        radius: 60,
      },
      grab: {
        distance: 400,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
      push: {
        default: true,
        groups: [],
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        factor: 100,
        speed: 1,
        maxSpeed: 50,
        easing: "ease-out-quad",
        divs: {
          distance: 200,
          duration: 0.4,
          factor: 100,
          speed: 1,
          maxSpeed: 50,
          easing: "ease-out-quad",
          selectors: [],
        },
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 1,
        pauseOnStop: false,
        quantity: 1,
      },
    },
  },
  manualParticles: [],
  motion: {
    disable: false,
    reduce: {
      factor: 10,
      value: true,
    },
  },
  particles: {
    bounce: {
      horizontal: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
      vertical: {
        random: {
          enable: false,
          minimumValue: 0.1,
        },
        value: 1,
      },
    },
    collisions: {
      bounce: {
        horizontal: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
        vertical: {
          random: {
            enable: false,
            minimumValue: 0.1,
          },
          value: 1,
        },
      },
      enable: true,
      mode: "bounce",
      overlap: {
        enable: true,
        retries: 0,
      },
    },
    color: {
      value: "#88ffdd",
      animation: {
        h: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        s: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
        l: {
          count: 0,
          enable: false,
          offset: 0,
          speed: 1,
          sync: true,
        },
      },
    },
    destroy: {
      mode: "none",
      split: {
        count: 1,
        factor: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 3,
        },
        rate: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: {
            min: 4,
            max: 9,
          },
        },
        sizeOffset: true,
      },
    },
    gradient: [],
    groups: {},
    life: {
      count: 0,
      delay: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 0,
        sync: false,
      },
      duration: {
        random: {
          enable: false,
          minimumValue: 0.0001,
        },
        value: 0,
        sync: false,
      },
    },
    links: {
      blink: true,
      color: {
        value: "#88ffff",
      },
      consent: false,
      distance: 150,
      enable: true,
      frequency: 1,
      opacity: 1,
      shadow: {
        blur: 5,
        color: {
          value: "#000",
        },
        enable: false,
      },
      triangles: {
        enable: false,
        frequency: 1,
      },
      width: 1,
      warp: true,
    },
    move: {
      angle: {
        offset: 0,
        value: 90,
      },
      attract: {
        distance: 200,
        enable: false,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      center: {
        x: 50,
        y: 50,
        radius: 0,
      },
      decay: 0,
      distance: {},
      direction: "none",
      drift: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        inverse: false,
        maxSpeed: 50,
      },
      path: {
        clamp: true,
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
        options: {},
      },
      outModes: {
        default: "out",
        bottom: "out",
        left: "out",
        right: "out",
        top: "out",
      },
      random: false,
      size: false,
      speed: 6,
      spin: {
        acceleration: 0,
        enable: false,
      },
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#000000",
        },
      },
      vibrate: false,
      warp: true,
    },
    number: {
      density: {
        enable: true,
        area: 500,
        factor: 1000,
      },
      limit: 0,
      value: 80,
    },
    opacity: {
      random: {
        enable: false,
        minimumValue: 0.1,
      },
      value: 0.5,
      animation: {
        count: 0,
        enable: false,
        speed: 3,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1,
      },
    },
    orbit: {
      animation: {
        count: 0,
        enable: false,
        speed: 1,
        sync: false,
      },
      enable: false,
      opacity: 1,
      rotation: {
        random: {
          enable: false,
          minimumValue: 0,
        },
        value: 45,
      },
      width: 1,
    },
    reduceDuplicates: false,
    repulse: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      enabled: false,
      distance: 1,
      duration: 1,
      factor: 1,
      speed: 1,
    },
    roll: {
      darken: {
        enable: false,
        value: 0,
      },
      enable: false,
      enlighten: {
        enable: false,
        value: 0,
      },
      mode: "vertical",
      speed: 25,
    },
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#000",
      },
      enable: false,
      offset: {
        x: 0,
        y: 0,
      },
    },
    shape: {
      options: {},
      type: "circle",
    },
    size: {
      random: {
        enable: true,
        minimumValue: 1,
      },
      value: {
        min: 1,
        max: 5,
      },
      animation: {
        count: 0,
        enable: false,
        speed: 20,
        sync: false,
        destroy: "none",
        startValue: "random",
        minimumValue: 0.1,
      },
    },
    stroke: {
      width: 0,
    },
    tilt: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      enable: false,
    },
    twinkle: {
      lines: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
      particles: {
        enable: false,
        frequency: 0.05,
        opacity: 1,
      },
    },
    wobble: {
      distance: 5,
      enable: false,
      speed: 50,
    },
    zIndex: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      opacityRate: 1,
      sizeRate: 1,
      velocityRate: 1,
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: true,
  responsive: [],
  style: {},
  themes: [],
  zLayers: 100,
};

// Data for loading the navigation bar.
export const navbarData = [
  {
    key: "AboutUs",
    text: "About Us",
    href: "/about-us",
    dropDowns: [
      { text: "Club Description", href: "#clubDescription" },
      { text: "Mission Statement", href: "#missionStatement" },
      {
        text: "Executive Team",
        href: "#executiveTeam",
        dropDowns: [
          // { text: "President", href: "#president" },
          // { text: "Vice President", href: "#vicePresident" },
          // { text: "Secretary", href: "#secretary" },
          // { text: "Treasurer", href: "#treasurer" },
          // { text: "Webmaster", href: "#webmaster" },
        ],
      },
      { text: "FAQ", href: "#faq" },
    ],
  },
  {
    key: "Events",
    text: "Events",
    href: "/events",
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
  //   dropDowns: [
  //     { text: "Information", href: "#information" },
  //     { text: "Benefits", href: "#benefits" },
  //   ],
  // },
  // {
  //   key: "Partners",
  //   text: "Partners",
  //   href: "/partners",
  //   dropDowns: [
  //     { text: "Affiliates", href: "#affiliates" },
  //     { text: "Sponsors", href: "#sponsors" },
  //   ],
  // },
  {
    key: "ContactUs",
    text: "Contact Us",
    href: "/contact-us",
    dropDowns: [],
  },
];

// Data for loading the footer bar.
export const footerData = {
  smLinks: [
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
    // }
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
