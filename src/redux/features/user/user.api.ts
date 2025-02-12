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
      transformResponse: (response: TResponseRedux<GTUser>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),
    changePassword: builder.mutation({
      query: (data) => ({
        url: '/auth/change-password',
        method: 'POST',
        body: data,
      }),
    }),
  }),
});

export const { useChangePasswordMutation, useGetAllUserQuery } =
  userManagementApi;
