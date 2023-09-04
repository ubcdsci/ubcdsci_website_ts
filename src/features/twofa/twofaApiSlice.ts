import { apiSlice } from "@/app/apiSlice";


/**
 * 2FA API slice.
 */
export const twofaApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		// Generate 2FA secret.
		generate: builder.mutation({
			query: (credentials) => ({
				url: "/twofa/generate",
				method: "POST",
				body: { ...credentials },
			}),
		}),

		// Verify 2FA token.
		verify: builder.mutation({
			query: (credentials) => ({
				url: "/twofa/verify",
				method: "POST",
				body: { ...credentials },
			}),
		}),
		
	}),
});

export const {
  useGenerateMutation,
	useVerifyMutation,
} = twofaApiSlice;
