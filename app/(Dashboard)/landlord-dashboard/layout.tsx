
import { getMe } from "@/service/getMe";
import SideNavbar from "./_component/SideNavbar";


export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getMe();

  return (
    <div className="flex min-h-screen">
      <SideNavbar/>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}