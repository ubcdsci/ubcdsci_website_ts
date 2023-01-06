// Library imports.
import {
  BsDiscord, BsInstagram, BsFacebook, BsFillEnvelopeFill, 
  BsPeopleFill, BsCalendar3, BsJournalText, BsHeadset, BsFillPersonBadgeFill, BsPeople
} from "react-icons/bs";
import { FaGraduationCap } from "react-icons/fa";

// Media imports.
import Bomberland from "../images/bomberland.gif";
import Fishnet from "../images/Fishnet.jpg";
import HPE2 from "../images/HPE2.png";
import Deepfake from "../images/Deepfake.jpeg";
import Spaces from "../images/spaces.webp";

// import Placeholder from "../images/execs/_placeholder.png";
import President from "../images/execs/president.png";
import Treasurer from "../images/execs/treasurer.png";
import Marketing from "../images/execs/marketing.png";
import Outreach from "../images/execs/outreach.png";
import EventPlanning from "../images/execs/event-planning.png";
import Webmaster from "../images/execs/webmaster.png";


/* -------------------------------------------------------------------------- */
/*                           COMMON COMPONENTS DATA                           */
/* -------------------------------------------------------------------------- */

/* ------------------------------- NAVBAR DATA ------------------------------ */

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
      { text: "Executive Team", href: "#executiveTeam" },
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

// Data for loading the footer bar.
export const footerData: { smButtons: SMButton[], columns: Column[] } = {
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
/*                                 PAGES DATA                                 */
/* -------------------------------------------------------------------------- */

// Data for the home page carousel.
/*
  {
    title: "",
    description: `

    `,
    image: <></>,
  },
*/
export const carouselData: CarouselContent[] = [
  {
    title: "Join a Project Group Today!",
    description: `
      Find out more about our club projects and sign up to be in a project
      group through our Discord server!
    `,
    image: Bomberland,
  },
  // {
  //   title: "Second Slide Label",
  //   description: `
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  //   `,
  //   image: bomberland,
  // },
  // {
  //   title: "Third Slide Label",
  //   description: `
  //     Praesent commodo cursus magna, vel scelerisque nisl consectetur.
  //   `,
  //   image: bomberland,
  // },
];


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
export const execMembersData : ExecMemberContent[] = [
  {
    title: "President",
    name: "James Ross",
    description: `
      I'm a third year student in computer science leading the club in order to share
      my interest in data science with other students!
    `,
    image: President,
  },
  {
    title: "Treasurer",
    name: "Linda Liu",
    description: `
      Hi, I'm Linda and I study CS at UBC.
      I'm excited to learn more about data science and help create opportunities for others to learn too.
    `,
    image: Treasurer,
  },
  {
    title: "Marketing",
    name: "Bryan Chang",
    description: `
      My name is Bryan and I'm a second year student in science.
      I joined because applied math is cool and I think the club logo is pretty dope.
    `,
    image: Marketing,
  },
  {
    title: "Outreach",
    name: "Aditya Varma",
    description: `
      My name is Aditya Varma and I'm a 2nd year Chemical and Biological Engineer.
      I am a Big Data and AI-ML enthusiast who loves to work and build new projects.
    `,
    image: Outreach,
  },
  {
    title: "Event Planning",
    name: "Jaskeerat Sarin Singh",
    description: `
      I'm a 2nd year student in Computer Science.
      I am passionate about math and machine learning.
      My research interests are trustworthiness and reliability of ML, and computer vision.
      Feel free to reach out anytime!
    `,
    image: EventPlanning,
  },
  {
    title: "Webmaster",
    name: "Marcus Lai",
    description: `
      I'm a second year student in CS and Math.
      I'm interested in data and optimization, lmk if you want to collaborate on something!
    `,
    image: Webmaster,
  },
];

// Data for the FAQ section.
/*
  {
    question: "",
    answer:
      <blockquote>
      </blockquote>
  },
*/
export const faqData : FAQContent[] = [
  {
    question: "Why join the UBC Data Science Club?",
    answer:
      <blockquote>
        The UBC Data Science Club is a great place to learn about data science and meet other students who are interested in the field.
        We host a variety of events, including <code>workshops, guest speakers, and datathons</code>.
        We also have a number of projects that you can get involved with, and we are always looking for new members to join! 📈

        <br/><br/>

        By joining the club, you will have the opportunity to:
        <ol style={{listStyle: "decimal", marginLeft: "2rem", marginTop: "0.25rem"}}>
          <li>Learn data science through <code>team-based projects</code> and <code>competitions</code></li>
          <li>Build <code>something great</code>, regardless of your level of experience</li>
          <li>Gain <code>useful</code> and <code>employable</code> skills in data science</li>
          <li>Learn about <code>cutting-edge techniques</code> in data science and their <code>applications</code></li>
          <li>Develop your <code>teamwork</code> & <code>communication</code> skills</li>
        </ol>
      </blockquote>
  },
  {
    question: "How do I register to become a member?",
    answer:
      <blockquote>
        You can register to become a member by filling out the&nbsp;
        <a
          href='https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC'
          target='_blank'
          rel='noopener noreferrer'
        >
         membership form
        </a>.

        <br /><br />

        Be ready to pay a <code>$8 membership fee</code> (membership is good for <code>one school year</code>). 💵
      </blockquote>
  },
  {
    question: "I have no experience in data science. Can I still participate?",
    answer:
      <blockquote>
        Yes, you absolutely can! There's nothing from stopping you! 😄
        
        <br /><br />

        We welcome students of <code>all skill levels and backgrounds</code> into our club.
        We believe that data science can be best learned by applying it through hands-on experience.
        So go on and join a project group today and start learning!
      </blockquote>
  },
  {
    question: "How can I join a project?",
    answer:
      <blockquote>
        To join a project group, first sign up through our&nbsp;
        <a
          href='https://ubc.ca1.qualtrics.com/jfe/form/SV_1FdLWUY6hb2KIwC'
          target='_blank'
          rel='noopener noreferrer'
        >
          registration link
        </a>,
        then fill out the pinned form found in the <code>#announcement</code> channel on our&nbsp;
        <a
          href='https://discord.gg/4AycB34acK'
          target='_blank'
          rel='noopener noreferrer'
        >
          Discord Server
        </a>. ✏️
        
        <br /><br />

        Learn more about our ongoing projects&nbsp;
        <a
          href='/projects'
          target='_blank'
          rel='noopener noreferrer'
        >
          here
        </a>.
      </blockquote>
  },
  {
    question: "What does a project lead do and how do I become one?",
    answer:
      <blockquote>
        Project leads are responsible for two main things:
        <ol style={{listStyle: "decimal", marginLeft: "2rem", marginTop: "0.25rem", marginBottom: "0.25rem"}}>
          <li><code>Advancing the progress of a project</code> / competition by managing or co-managing a team of members on the project, and</li>
          <li><code>Interfacing with the executive team</code> to ensure that the goals are in line with the broader mission of the team.</li>
        </ol>
        After participating as an active member of a project for at least <code>one semester</code>,
        members can become a lead for their own project, provided a recommendation by their project lead. ⚙️

        <br /><br />

        If you are interested in becoming a project lead and starting a project of your own,
        please fill out the project creation form, which can be accessed in the <code>#projects-general</code> channel on our&nbsp;
        <a
          href='https://discord.gg/4AycB34acK'
          target='_blank'
          rel='noopener noreferrer'
        >
          Discord Server
        </a>.
      </blockquote>
  },
  {
    question: "Are the club projects open source?",
    answer:
      <blockquote>
        For the time being, all project source code will remain <code>closed</code>.
        
        <br /><br />

        In the future we may allow some of our completed projects to become open source,
        but due to having collaborations with other organizations on projects, it will be on a <code>per-project basis</code>.
        
        <br /><br />
        
        For an up-to-date view of our public works, check out our&nbsp;
        <a
          href='https://github.com/ubcdsci'
          target='_blank'
          rel='noopener noreferrer'
        >
          GitHub page
        </a>. 📑
      </blockquote>
  }
];

// Data for the projects page.
/*
  {
    title: "",
    id: "",
    image: null,
    concepts: "",
    tech: [],
    lead: "",
    body: `
      
    `,
    tags: [],
    competition_info: "",
    github: "https://github.com/ubcdsci/"
  }
*/
export const projectsListData : ProjectContent[] = [
  {
    title: "Bomberland",
    id: "bomberland",
    image: Bomberland,
    concepts: "Teaching a computer to play games better than a human",
    tech: ["Python", "PyTorch"],
    body:
      <blockquote>
        <code>Reinforcement learning</code> is a topic that has been <i>booming</i> within the field of data science,
        as it explores a more "natural" way of teaching an agent to act within a specified environment. 💣
      </blockquote>,
    tags: [],
    competition_info: "https://www.gocoder.one/bomberland",
    github: "https://github.com/ubcdsci/bomberland",
  },
  {
    title: "Deepfake Detection",
    id: "deepfake-detection",
    image: Deepfake,
    concepts: "Differentiating between the real and fake",
    tech: ["Python", "PyTorch", "OpenCV"],
    body:
      <blockquote>
        Despite the advancements in media editing software, videos of people have been notoriously difficult to fake. That is, until now. 🎥
        
        <br /><br />

        Modern <code>machine learning algorithms</code> have made it simple for anyone to create <code>deepfakes</code>,
        or hyper-realistic videos where a human has been altered to look like somebody entirely different.
        
        <br /><br />
        
        This technology has been capable of creating many things over the recent years, from making advertisements containing celebrities to&nbsp;
        <a
          href='https://www.technologyreview.com/2020/12/24/1015380/best-ai-deepfakes-of-2020/'
          target='_blank'
          rel='noopener noreferrer'
        >
         fake political campaigns
        </a>. ⭐
        
        <br /><br />
        
        How can we differentiate between the real and the fake?
        This project aims to answer that question by designing <code>computer vision</code> techniques to counteract this technology. 📸
      </blockquote>,
    tags: [],
    github: "https://github.com/ubcdsci/deepfake-detection",
  },
  {
    title: "Fishnet",
    id: "fishnet",
    image: Fishnet,
    concepts: "Applying computer vision to the fishing industry",
    tech: ["Python", "PyTorch", "OpenCV"],
    body:
      <blockquote>
        Our <code>first collaboration</code> on a project, and one that makes an impact too!
        Fishnet aims to tackle a variety of problems present within the fishing industry. 🐟

        <br /><br />

        By applying <code>computer vision</code> techniques to on-board cameras on fishing boats,
        members of the fishnet project will help design methods to locate and identify fish within video feeds. 🛶
        
        <br /><br />
        
        Longer-term, more lofty goals for this project include <code>tracking</code> fish
        through time and <code>identifying</code> by catch, especially endangered species. 🎣
      </blockquote>,
    tags: [],
    github: "https://github.com/ubcdsci/nethack-rl",
  },
  {
    title: "Human Pose Estimation",
    id: "human-pose-estimation",
    image: HPE2,
    concepts: "Computer vision and human-computer interactions",
    tech: ["Python", "PyTorch", "OpenCV"],
    body:
      <blockquote>
        From <code>augmented reality</code> headsets to <code>autonomous</code> vehicles,
        the demand for <code>computer vision</code> systems requiring complex <code>human-machine interaction</code> is ever increasing. 🤖

        <br /><br />

        Human pose estimation is a data science club project that investigates this interaction,
        implementing state of the art human-pose <code>estimation algorithms</code> to extract pose information from image and video feeds. 🧘

        <br /><br />

        In the longer term, we will be exploring ways to apply these <code>algorithms</code> to <code>augmented reality</code> and similar problems. 📱
      </blockquote>,
    tags: [],
    github: "https://github.com/ubcdsci/pose",
  },
  {
    title: "Spaces",
    id: "spaces",
    image: Spaces,
    concepts: "Understanding and predicting the usage of public spaces",
    tech: ["Python", "spaCy", "tweepy"],
    body:
      <blockquote>
        Twitter stores <code>a lot of data</code>. As of 2017, the amount of data stored across all of their clusters totalled over <code>500 Petabytes</code>.
        With millions of tweets being added to this total each day, the spaces project aims to gain <code>real-time insights</code> into public spaces worldwide by leveraging this data.
        
        <br /><br />

        Members who are part of the spaces project implement state-of-the-art <code>natural language processing</code> methods and apply
        them to the content of tweets in order to build <code>real-time heatmaps</code> of activity across regions. 🗺️
        
        <br /><br />

        Future goals include building activity profiles of regions and predicting activity into the future. 📈
      </blockquote>,
    tags: [],
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
export const workshopData : WorkshopContent[] = [
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

// Data for the contact us page.
/*
  {
    title: "",
    link: "",
    icon: <></>,
    text: "",
  }
*/
export const contactData : ContactContent[] = [
  {
    title: "Email",
    link: "mailto:datascienceclububc@gmail.com",
    icon: <BsFillEnvelopeFill />,
    text: "datascienceclububc@gmail.com",
  },
  {
    title: "Discord",
    link: "https://discord.com/invite/4AycB34acK",
    icon: <BsDiscord />,
    text: "UBC Data Science Club",
  },
  {
    title: "Instagram",
    link: "https://www.instagram.com/ubcdatascienceclub/",
    icon: <BsInstagram />,
    text: "@ubcdatascienceclub",
  },
  {
    title: "Facebook",
    link: "https://www.facebook.com/ubcdatascience",
    icon: <BsFacebook />,
    text: "@ubcdatascience",
  },
  {
    title: "Campusbase",
    link: "https://amscampusbase.ubc.ca/feeds?type=club&type_id=58911",
    icon: <FaGraduationCap />,
    text: "AMS Data Science Club @ UBC",
  }
];
