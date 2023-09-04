import { apiSlice } from "@/app/apiSlice";
import { logOut, setCredentials } from "./authSlice";


/**
 * Auth API slice.
 */
export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// Login.
		login: builder.mutation({
			query: (credentials) => ({
				url: "/auth",
				method: "POST",
				body: { ...credentials },
			}),
		}),

		// Login 2FA.
		twoFactor: builder.mutation({
			query: (credentials) => ({
				url: "/auth/step2",
				method: "POST",
				body: { ...credentials },
			}),
		}),

		// Logout.
		sendLogout: builder.mutation({
			query: (id) => ({
				url: `/auth/logout/${id}`,
				method: "POST",
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					dispatch(logOut(""));
					setTimeout(() => {
						dispatch(apiSlice.util.resetApiState());
					}, 1000);
				} catch (err) {
					// console.log(err);
				}
			},
		}),

		// Refresh.
		refresh: builder.mutation({
			query: () => ({
				url: "/auth/refresh",
				method: "GET",
			}),
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled;
					const { accessToken } = data;
					dispatch(setCredentials({ accessToken }));
				} catch (err) {
					// console.log(err);
				}
			},
		}),
		
	}),
});

export const {
  useLoginMutation,
	useTwoFactorMutation,
  useSendLogoutMutation,
  useRefreshMutation,
} = authApiSlice;
