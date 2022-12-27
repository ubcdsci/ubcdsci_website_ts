/* ----------------------- TYPE DEFINITIONS FOR NAVBAR ---------------------- */

export interface DropDowns {
  href: string;
  text: string;
  external?: boolean;
  dropDowns?: DropDowns[];
};

export interface Page {
  key: string;
  text: string;
  href: string;
  mobileIcon?: JSX.Element;
  dropDowns?: DropDowns[];
};

/* ----------------------- TYPE DEFINITIONS FOR FOOTER ---------------------- */

export interface SMButton {
  key: string;
  icon: JSX.Element;
  href: string;
};

export interface SMLink {
  text: string;
  href: string;
  external?: boolean;
};

export interface Column {
  title: string;
  href: string;
  links: SMLink[];
};

/* ----------------- TYPE DEFINITIONS FOR ABOUT PAGE CONTENT ---------------- */

export interface ExecMemberContent {
  title: string;
  name: string;
  description: string;
  image?: any;
};

export interface FAQContent {
  question: any;
  answer: any;
};

export interface ProjectContent {
  title: string;
  id: string;
  image: any;
  concepts: string;
  tech: string;
  lead?: string;
  body: any;
  tags: string[];
  competition_info?: string;
  github: string;
};

export interface WorkshopContent {
  date: string;
  topic: string;
};