import { baseApi } from '@/redux/api/baseApi';
// import { TResponseRedux } from '@/types';
// import { GTUser } from '@/types/userManagement.typs';

const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    addCar: builder.mutation({
      query: (carData) => ({
        url: `/cars`,
        method: 'POST',
        body: carData,
      }),
      // invalidatesTags: ['cars'],
    }),
    getAllCars: builder.query({
      query: () => ({
        url: `/cars`,
        method: 'POST',
      }),
      // invalidatesTags: ['cars'],
    }),
  }),
});

export const { useAddCarMutation, getAllCars } = productManagementApi;
