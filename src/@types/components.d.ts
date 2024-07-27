/* ----------------------- TYPE DEFINITIONS FOR NAVBAR ---------------------- */
type DropDowns = {
  href: string;
  text: string;
  external?: boolean;
  dropDowns?: DropDowns[];
}

type Page = {
  key: string;
  text: string;
  href: string;
  mobileIcon?: JSX.Element;
  dropDowns?: DropDowns[];
}

/* ----------------------- TYPE DEFINITIONS FOR TEAM INTRO ------------------- */
type TeamIntroContent = {
  title1: string;
  body1_1: string;
  body1_2: string;
  body2_1: string;
  body2_2: string;
  body2_3: string;
  body2_4: string;
  image?: any;
}


/* ----------------------- TYPE DEFINITIONS FOR FOOTER ---------------------- */
type SMButton = {
  key: string;
  icon: JSX.Element;
  href: string;
}

type SMLink = {
  text: string;
  href: string;
  external?: boolean;
}

type Column = {
  title: string;
  href: string;
  links: SMLink[];
}


/* ----------------- TYPE DEFINITIONS FOR ABOUT PAGE CONTENT ---------------- */
type CarouselContent = {
  title: string;
  description: string;
  image: any;
}

type ExecMemberContent = {
  title: string;
  name: string;
  description: string;
  image?: any;
}

type FAQContent = {
  question: any;
  answer: any;
}

type ProjectContent = {
	id: string;
	title: string;
	body: React.ReactNode;
	image: any;
	concepts: string;
	tech: string[];
	lead?: string;
	tags?: string[];
	competition_info?: string;
	github: string;
};

type WorkshopContent = {
  date: string;
  topic: string;
}

type ContactContent = {
  title: string;
  link: string;
  icon: JSX.Element;
  text: string;
}


/* ----------------------- TYPE DEFINITIONS FOR FORMS ----------------------- */
type UserFormData = {
	username: string;
	password: string;
	captchaToken: string;
};

type EventPostFormData = {
	id: string;
	creator: string;
	title: string;
	description: string;
	date?: Date;
	location?: string;
	imageUpload?: string;
	tags?: string[];
};


/* ----------------------- TYPE DEFINITIONS FOR CLUB INTRO ----------------------- */
type ClubIntroCardData = {
  title: string;
  image?: any;
  description1: string;
  description2?: string;
  icon?: any;
  button: string;
  color: string;
}
/* ----------------------- TYPE DEFINITIONS FOR UPCOMING EVENTS ----------------------- */
interface EventObject {
  title: string;
  description: string;
  image: string;
  date: Date;
  time: string;
  location: string;
}

interface UpcomingEventObject extends EventObject {
  important: boolean;
}

