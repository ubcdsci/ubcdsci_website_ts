import { Timestamp } from "firebase/firestore";

// Data type for an Event Article.
export interface IEventArticle {
	id: string;
	title: string;
	description: string;
	date: Timestamp;
	location: string;
	imageURLs: string[];
	tags: string[];
	createdAt: Timestamp;
}
