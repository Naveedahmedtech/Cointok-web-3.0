import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_URL }),
  tagTypes: [
    "Category",
    "Platforms",
    "CoinStore",
    "getTodayBest",
    "getAllTimeBest",
    "PromotedCoins",
    "Advertise",
    "NewListing",
    "getPresaleListing",
    "getTopTrending",
    "getCoinDetails",
    "getChains",
  ],
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
      invalidateTags: [
        "CoinStore",
        "PromotedCoins",
        "getTodayBest",
        "getAllTimeBest",
      ],
    }),
    addVote: builder.mutation({
      query: ({ id }) => {
        return {
          url: `coins/${id}/add-vote`,
          method: "POST",
          headers: {
            Accept: "application/json",
          },
        };
      },
      invalidateTags: [
        "addVote",
        "PromotedCoins",
        "getTodayBest",
        "getAllTimeBest",
        "getCoinDetails",
      ],
    }),
    getAdvertiseDesktop: builder.query({
      query: () => "advertise/desktop",
      providesTags: ["Advertise"],
    }),
    getAdvertiseMobile: builder.query({
      query: () => "advertise/mobile",
      providesTags: ["Advertise"],
    }),
    getNewListing: builder.query({
      query: () => "coin/new-listing",
      providesTags: ["NewListing"],
    }),
    getPresaleListing: builder.query({
      query: () => "coin/presale-listing",
      providesTags: ["getPresaleListing"],
    }),
    getTopTrending: builder.query({
      query: () => "coin/top-trending",
      providesTags: ["getTopTrending"],
    }),
    getPromotedCoins: builder.query({
      query: () => "promoted-coins",
      providesTags: ["PromotedCoins"],
    }),
    getCoinDetails: builder.query({
      query: ({ id }) => `coin/get-coin-by-Id/${id}`,
      providesTags: ["getCoinDetails"],
    }),
    getTodayBest: builder.query({
      query: () => `coin/todays-best`,
      providesTags: ["getTodayBest"],
    }),
    getAllTimeBest: builder.query({
      query: () => `coin/all-time-best`,
      providesTags: ["getAllTimeBest"],
    }),
    getChains: builder.query({
      query: () => `chains`,
      providesTags: ["getChains"],
    }),
    getPresalePlatforms: builder.query({
      query: () => `presaleplatforms`,
      providesTags: ["getPresalePlatforms"],
    }),
    searchCoin: builder.query({
      query: (query) => `coin/search?query=${query}`,
      providesTags: ["searchCoin"],
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetPlatformsQuery,
  useAddCoinMutation,
  useGetNewListingQuery,
  useGetPromotedCoinsQuery,
  useGetPresaleListingQuery,
  useGetCoinDetailsQuery,
  useGetTodayBestQuery,
  useGetAllTimeBestQuery,
  useGetTopTrendingQuery,
  useAddVoteMutation,
  useGetChainsQuery,
  useGetPresalePlatformsQuery,
  useGetAdvertiseDesktopQuery,
  useGetAdvertiseMobileQuery,
  useSearchCoinQuery
} = apiSlice;
