import { baseApi } from '@/redux/api/baseApi';
import { TQueryParams, TResponseRedux } from '@/types/global';

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: TQueryParams) => {
            params.append(item.name, item.value as string);
          });
        }
        return {
          url: '/cars/',
          method: 'GET',
          params: params,
        };
      },
      transformResponse: (response: TResponseRedux<any[]>) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
    getSingleCar: builder.query({
      query: (id) => ({
        url: `/cars/${id}`,
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<any>) => ({
        data: response.data,
        meta: response.meta,
      }),
    }),
  }),
});

export const { useGetAllCarQuery, useGetSingleCarQuery } = carManagementApi;
