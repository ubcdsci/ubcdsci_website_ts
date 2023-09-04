import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "@/features/auth/authSlice";
import { BaseQueryApi, BaseQueryArg, BaseQueryExtraOptions, BaseQueryResult } from "@reduxjs/toolkit/dist/query/baseQueryTypes";
import { ComponentState } from "react";


enum tagTypes {
	User = "User",
}

/**
 * Base query with credentials and authorization header.
 */
const baseQuery = fetchBaseQuery({
	baseUrl: "http://127.0.0.1:3001/api",
	credentials: "include",
	prepareHeaders: (headers, { getState }: ComponentState) => {
		const token = getState().auth.token;

		// Add authorization header if token is present.
		if (token) headers.set("authorization", `Bearer ${token}`);

		return headers;
	},
});


/**
 * Base query with automatic refresh token.
 */
const baseQueryWithReauth = async (
  args: BaseQueryArg<any>, api: BaseQueryApi, extraOptions: BaseQueryExtraOptions<any>) => {

	let result = await baseQuery(args, api, extraOptions as any);

	if (result?.error?.status === 403) {
		console.log("sending refresh token");

    // Send refresh token to server.
		const refreshResult: BaseQueryResult<any> = await baseQuery("/auth/refresh", api, extraOptions as any);
		if (refreshResult?.data) {
			api.dispatch(setCredentials({ ...refreshResult.data }));
			result = await baseQuery(args, api, extraOptions as any);
		} else {
			if (refreshResult?.error?.status === 403)
				refreshResult.error.data.message = "Your login has expired.";
			return refreshResult;
		}
	}

	return result;
};

export const apiSlice = createApi({
	baseQuery: baseQueryWithReauth,
	tagTypes: [tagTypes.User],
	endpoints: (builder) => ({}),
});
