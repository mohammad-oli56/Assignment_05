
import { getMe } from "@/service/getMe";
import Sidenavbar from "./_component/Sidenavbar";



export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  

  return (
    <div className="flex min-h-screen">
      <Sidenavbar/>

      <main className="flex-1 p-6">
        {children}
      </main>
    </div>
  );
}