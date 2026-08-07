import Image from "next/image";
import { GetSingleProperty } from "../../_action/getSingleProperty";
import { getMe } from "@/service/getMe";
import SingleCard from "../../_component/SingleCard";
import { cookies } from "next/headers";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const SinglePropertyPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const property = await GetSingleProperty(id);

  const user = await getMe()

const cookieStore = await cookies();
const accessToken = cookieStore.get("accessToken")?.value;

  const role = user?.data?.profile?.role ?? null;

  return (
     <SingleCard
    property={property}
    role={role}
    isLoggedIn={!!accessToken}
  />
  );
};

export default SinglePropertyPage;