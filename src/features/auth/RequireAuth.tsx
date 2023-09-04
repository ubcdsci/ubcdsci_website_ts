import { useLocation, Navigate, Outlet, Location } from "react-router-dom";

import useAuth from "@/hooks/useAuth";


/**
 * Authenticated routes
 */
const RequireAuth = ({ allowedRoles }: { allowedRoles: string[] }) => {
	const location: Location = useLocation();
	const { roles } = useAuth();

	const content = roles.some((role: string) => allowedRoles.includes(role)) ? (
		<Outlet />
	) : (
		<Navigate to="/login" state={{ from: location }} replace />
	);

	return content;
};

export default RequireAuth;
