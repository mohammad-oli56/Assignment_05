import Link from "next/link";

const menuItems = [
  { title: "Home", href: "/landlord-dashboard" },
  { title: "Create Property", href: "/landlord-dashboard/create-property" },
  { title: "My property", href: "/landlord-dashboard/my-property" },
  { title: "Request", href: "/landlord-dashboard/request" },
];

const SideNavbar = () => {
  return (
    <aside className="w-64 min-h-screen border-r bg-white">
      <div className="border-b p-5">
        <h2 className="text-xl font-bold">Dashboard</h2>
      </div>

      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="block rounded-md px-4 py-2 text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default SideNavbar;