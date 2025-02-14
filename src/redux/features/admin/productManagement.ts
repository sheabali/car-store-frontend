import { baseApi } from '@/redux/api/baseApi';
import { TResponseRedux } from '@/types';
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
        url: '/cars',
        method: 'GET',
      }),
      transformResponse: (response: TResponseRedux<any>) => {
        return { data: response.data, meta: response.meta };
      },

      providesTags: ['cars'],
    }),
    deleteCar: builder.mutation({
      query: (carId) => ({
        url: `/cars/${carId}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['cars'],
    }),
  }),
});

export const { useAddCarMutation, useGetAllCarsQuery, useDeleteCarMutation } =
  productManagementApi;
