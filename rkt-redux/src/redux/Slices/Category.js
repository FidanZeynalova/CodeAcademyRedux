import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const CategoryApi = createApi({
    reducerPath: 'categoryApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://northwind.vercel.app/api/' }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query: () => `categories`,
        }),
        addCategories: builder.mutation({
            query: (newData) => ({
                url: "categories",
                method: 'POST',
                body: newData,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
        }),
        deleteCategory: builder.mutation({
            query:(id)=>({
                url:`categories/${id}`,
                method:"DELETE"
            })
        })
    }),
})

export const { useGetCategoriesQuery, useAddCategoriesMutation,useDeleteCategoryMutation } = CategoryApi