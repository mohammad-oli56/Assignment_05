import Image from "next/image";
import { GetSingleProperty } from "../../_action/getSingleProperty";
import { getMe } from "@/service/getMe";
import SingleCard from "../../_component/SingleCard";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const SinglePropertyPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const property = await GetSingleProperty(id);

  const user = await getMe()

 

  const role = user?.data?.profile?.role ?? null;

  return (
    <SingleCard property={property} role={role} />
  );
};

export default SinglePropertyPage;