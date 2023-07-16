import { useEffect } from "react";


// /**
//  * Sets the title for the browser tab.
//  * @param {string} title The title to set.
//  * @param {string} description The description to set.
//  */
// const TabTitle = (props: {title : string, description? : string}) => {
//   return (
//     <Helmet>
//       <title>{props.title} – UBC Data Science Club</title>
//         <meta
//           name="description"
//           content={ props.description ? props.description : "AMS UBC Data Science Club"}
//         />
//     </Helmet>
//   );
// };

/**
 * Hook to set the title of the page.
 */
const useTitle = (title: string) => {
	useEffect((): any => {
		const prevTitle = document.title;
		document.title = title;

		return () => (document.title = prevTitle);
	}, [title]);
};

export default useTitle;
