import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseURL = "http://localhost:7070";

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: baseURL }),
  endpoints: (builder) => ({
    //get Categories
    getCategories: builder.query({
      // Get categories
      query: () => "/api/categories",
      providesTags : ['categories']
    }),
    //get labels
    getLabels: builder.query({
      query: () => "/api/labels",
      providesTags : ['transaction']

    }),
    //get transaction
    addTransaction: builder.mutation({
      query: (initialTransaction) => ({
        url: "/api/transaction",
        method: "POST",
        body: initialTransaction,
      }),
      invalidatesTags : ['transaction']
    }),
    //delete record
    deleteTransaction: builder.mutation({
      query: (recordId) => ({
        url: "api/transaction",
        method: "DELETE",
        body: recordId,
      }),
      invalidatesTags : ['transaction']
    }),
  }),
});

// Export the auto-generated hook for the `getCategories` query endpoint
export const { useGetCategoriesQuery } = apiSlice;

export default apiSlice;
