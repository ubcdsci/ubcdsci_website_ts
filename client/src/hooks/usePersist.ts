import { useState, useEffect } from "react";


/**
 * Hook to persist data in local storage.
 */
const usePersist = (): [boolean, React.Dispatch<React.SetStateAction<boolean>>] => {
	const [persist, setPersist] = useState<boolean>(
    localStorage.getItem("persist") as unknown as boolean
	);

	useEffect(() => {
		localStorage.setItem("persist", JSON.stringify(persist));
	}, [persist]);

	return [persist, setPersist];
};

export default usePersist;
