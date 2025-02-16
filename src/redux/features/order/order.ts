import { TResponseRedux } from '@/types';
import { baseApi } from '../../api/baseApi';

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (userInfo) => ({
        url: '/orders',
        method: 'POST',
        body: userInfo,
      }),
    }),
    getOrders: builder.query({
      query: () => ({
        url: '/orders',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ['orders'],
    }),
    deleteOrders: builder.mutation({
      query: (id) => ({
        url: `/orders/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['orders'],
    }),
    verifyOrder: builder.query({
      query: (order_id) => ({
        url: '/orders/verify',
        params: { order_id },
        method: 'GET',
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useDeleteOrdersMutation,
  useVerifyOrderQuery,
} = orderApi;
