import { baseApi } from '@/redux/api/baseApi';
import { TResponseRedux } from '@/types';
import { GTUser } from '@/types/userManagement.typs';

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUser: builder.query({
      query: () => ({
        url: '/users',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<GTUser[]>) => {
        return { data: response.data, meta: response.meta };
      },
      providesTags: ['users'],
    }),
    blockUser: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['users'],
    }),
    addCar: builder.mutation({
      query: (userId) => ({
        url: `/users/${userId}`,
        method: 'PATCH',
      }),
      invalidatesTags: ['users'],
    }),
  }),
});

export const { useGetAllUserQuery, useBlockUserMutation } = userManagementApi;
