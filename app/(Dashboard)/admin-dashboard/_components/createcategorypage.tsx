"use client";
import React, { useActionState, useEffect } from 'react'
import { createcategory, FormState } from '../_action/create_category';
import { useRouter } from 'next/navigation';



const initialState: FormState = {
    success: false,
    message: '',
}



const Createcategorypage = () => {
const router = useRouter()

    const [state, formAction, isPending] = useActionState(createcategory, initialState);

    useEffect(() => {
  if (state.success) {
    router.push("/admin-dashboard/all-category");
  }
}, [state.success, router]);
   
    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center ">
            <div className="w-full max-w-xl bg-white rounded-2xl shadow-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800">
                    Create Category
                </h1>

                <p className="text-gray-500 mt-2 mb-8">
                    Add a new property category.
                </p>

                <form action={formAction} className="space-y-6">
                    {/* Category Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Category Name
                        </label>

                        <input
                            type="text"
                            name="name"


                            placeholder="Enter category name"
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Description
                        </label>

                        <textarea
                            name="description"
                            rows={5}


                            placeholder="Write category description..."
                            className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                        />
                    </div>



                    {/* Submit */}
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-blue-600 text-white py-3 font-medium hover:bg-blue-700 transition"
                    >
                       {
                        isPending ? "submittint..." : "create category"
                       }
                    </button>
                    <p className='text-red-500'>
                        {state.message}
                    </p>
                </form>
            </div>
        </div>
    )
}

export default Createcategorypage
