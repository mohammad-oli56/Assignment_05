import React from 'react'
import Link from "next/link";
const menuItems = [
  { title: "Home", href: "/tenant-dashboard" },
  { title: "Rental create", href: "/tenant-dashboard/rental-create" },
  { title: "My Request", href: "/tenant-dashboard/my-requests" },
  { title: "Payment Create", href: "/tenant-dashboard/payment-create" },
  { title: "Payment History", href: "/tenant-dashboard/payment-history" },
  { title: "Review", href: "/tenant-dashboard/review" },
];
const Sidenavbar = () => {
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
}

export default Sidenavbar
