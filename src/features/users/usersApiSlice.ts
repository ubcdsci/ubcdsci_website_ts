import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";

import { apiSlice } from "@/app/apiSlice";
import { RootState } from "@reduxjs/toolkit/dist/query/core/apiState";
import { EndpointBuilder } from "@reduxjs/toolkit/dist/query/endpointDefinitions";


const usersAdapter = createEntityAdapter({});
const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder: EndpointBuilder<any, any, any>) => ({
    // Get all users.
		getUsers: builder.query({
			query: () => ({
				url: "/users",
				validateStatus: (response: Response, result: any) => {
					return response.status === 200 && !result.isError;
				},
			}),
			transformResponse: (responseData) => {
				const loadedUsers = responseData.map((user: any) => {
					user.id = user._id;
					return user;
				});
				return usersAdapter.setAll(initialState, loadedUsers);
			},
			providesTags: (result, error, arg) => {
				if (result?.ids) {
					return [
						{ type: tagTypes.User, id: "LIST" },
						...result.ids.map((id) => ({ type: tagTypes.User, id })),
					];
				} else return [{ type: tagTypes.User, id: "LIST" }];
			},
		}),

    // Get user by id.
    getUserById: builder.query({
      query: (id) => ({
        url: `/users/${id}`,
        validateStatus: (response: Response, result: any) => {
          return response.status === 200 && !result.isError;
        },
      }),
      transformResponse: (responseData) => {
        const loadedUser = responseData;
        loadedUser.id = loadedUser._id;
        return usersAdapter.setOne(initialState, loadedUser);
      },
      providesTags: (result, error, arg) => {
        return [{ type: tagTypes.User, id: arg }]
      },
    }),

    // Add new user.
		addNewUser: builder.mutation({
			query: (initialUserData) => ({
				url: "/users",
				method: "POST",
				body: {
					...initialUserData,
				},
			}),
			invalidatesTags: [{ type: tagTypes.User, id: "LIST" }],
		}),

    // Update user.
		updateUser: builder.mutation({
			query: (initialUserData) => ({
				url: "/users",
				method: "PATCH",
				body: {
					...initialUserData,
				},
			}),
			invalidatesTags: (result, error, arg) => {
        return [{ type: tagTypes.User, id: arg.id }]
      },
		}),

    // Delete user.
		deleteUser: builder.mutation({
			query: ({ id }) => ({
				url: `/users`,
				method: "DELETE",
				body: { id },
			}),
			invalidatesTags: (result, error, arg) => {
        return [{ type: tagTypes.User, id: arg.id }]
      },
		}),
	}),
});


export const {
	useGetUsersQuery,
	useAddNewUserMutation,
	useUpdateUserMutation,
	useDeleteUserMutation,
} = usersApiSlice;

export const selectUsersResult = (arg?: any) => usersApiSlice.endpoints.getUsers.select(arg);

// Create memoized selector.
const selectUsersData = createSelector(
	selectUsersResult,
	(usersResult: any) => usersResult.data
);

export const {
	selectAll: selectAllUsers,
	selectById: selectUserById,
	selectIds: selectUserIds,
} = usersAdapter.getSelectors(
	(state: RootState<any, any, any>) => selectUsersData(state) ?? initialState
);
