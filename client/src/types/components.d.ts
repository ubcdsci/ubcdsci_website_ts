export {};

declare global {
/* ----------------------- TYPE DEFINITIONS FOR NAVBAR ---------------------- */
  interface DropDowns {
    href: string;
    text: string;
    external?: boolean;
    dropDowns?: DropDowns[];
  };

  interface Page {
    key: string;
    text: string;
    href: string;
    mobileIcon?: JSX.Element;
    dropDowns?: DropDowns[];
  };

/* ----------------------- TYPE DEFINITIONS FOR FOOTER ---------------------- */
  interface SMButton {
    key: string;
    icon: JSX.Element;
    href: string;
  };

  interface SMLink {
    text: string;
    href: string;
    external?: boolean;
  };

  interface Column {
    title: string;
    href: string;
    links: SMLink[];
  };

/* ----------------- TYPE DEFINITIONS FOR ABOUT PAGE CONTENT ---------------- */
  interface CarouselContent {
    title: string;
    description: string;
    image: any;
  };

  interface ExecMemberContent {
    title: string;
    name: string;
    description: string;
    image?: any;
  };

  interface FAQContent {
    question: any;
    answer: any;
  };

  interface ProjectContent {
    title: string;
    id: string;
    image: any;
    concepts: string;
    tech: string[];
    lead?: string;
    body: any;
    tags?: string[];
    competition_info?: string;
    github: string;
  };

  interface WorkshopContent {
    date: string;
    topic: string;
  };

  interface ContactContent {
    title: string;
    link: string;
    icon: JSX.Element;
    text: string;
  };
};
