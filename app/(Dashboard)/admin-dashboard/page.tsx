import React from "react";
import { getAllUser } from "./_action/get_all_user";
import { getAllrentalrequest } from "./_action/get_all_rental_request";
import { getallcategory } from "./_action/get_all_Category";
import { getAllproperty } from "@/app/(publicgroup)/_action/getAllProperty";
import AdminHome from "./_components/AdminHome";

const Page = async () => {
  const [users, requests, categories, properties] = await Promise.all([
    getAllUser(),
    getAllrentalrequest(),
    getallcategory(),
    getAllproperty(),
  ]);

  return (
    <AdminHome
      totalUsers={users?.length || 0}
      totalRequests={requests?.length || 0}
      totalCategories={categories?.length || 0}
      totalProperties={properties?.length || 0}
    />
  );
};

export default Page;