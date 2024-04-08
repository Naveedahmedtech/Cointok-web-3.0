import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: ["Category", "Platforms", "CoinStore"],
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => "categories",
      providesTags: ["Category"],
    }),
    getPlatforms: builder.query({
      query: () => "platforms",
      providesTags: ["Platforms"],
    }),
    addCoin: builder.mutation({
      query: (coinData) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(coinData)) {
          formData.append(key, value);
        }
        return {
          url: "coin/store",
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json",
          },
        };
      },
      invalidateTags: ["CoinStore"],
    }),
    getAdvertise: builder.query({
      query: () => "advertise",
      providesTags: ["Advertise"],
    }),
    getNewListing: builder.query({
      query: () => "coin/new-listing",
      providesTags: ["NewListing"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetPlatformsQuery,
  useAddCoinMutation,
  useGetAdvertiseQuery,
  useGetNewListingQuery,
} = apiSlice;
