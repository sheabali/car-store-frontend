import { baseApi } from '@/redux/api/baseApi';

const carManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllCar: builder.query({
      query: () => {
        return {
          url: '/cars',
          method: 'GET',
        };
      },
      // transformResponse: (response: TResponseRedux<any[]>) => {
      //   return {
      //     data: response.data,
      //     meta: response.meta,
      //   };
      // },
    }),
  }),
});

export const { useGetAllCarQuery } = carManagementApi;
