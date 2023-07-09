import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";

import { selectCurrentToken } from "@/features/auth/authSlice";


enum Roles {
	Admin = "admin",
	Executive = "executive",
	User = "user",
}

/**
 * Authorization roles.
 */
const useAuth = () => {
	const token = useSelector(selectCurrentToken);
	let isExecutive, isAdmin = false;
	let status = Roles.User;

	if (token) {
		const decoded: any = jwtDecode(token);
		const { id, username, roles } = decoded.UserInfo;

		isExecutive = roles.includes(Roles.Executive);
		if (isExecutive)
      status = Roles.Executive;

		isAdmin = roles.includes(Roles.Admin);
		if (isAdmin)
      status = Roles.Admin;

		return { id, username, roles, status, isExecutive, isAdmin };
	}

	return { id: null, username: "", roles: [], isExecutive, isAdmin, status };
};

export default useAuth;
