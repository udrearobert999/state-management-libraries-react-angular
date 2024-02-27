import { ItemModel } from '@/models/item.model';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const shopItemsEndpoint = 'shop-items.json';

const shopApi = createApi({
  reducerPath: 'shopApi',
  baseQuery: fetchBaseQuery({
    baseUrl:
      'https://reactlearn-bcf4e-default-rtdb.europe-west1.firebasedatabase.app',
  }),
  endpoints: (builder) => ({
    // Note the use of an object here
    getAllItems: builder.query<ItemModel[], void>({
      query: () => shopItemsEndpoint,
    }),
  }),
});

export const { useGetAllItemsQuery } = shopApi;
export default shopApi;
