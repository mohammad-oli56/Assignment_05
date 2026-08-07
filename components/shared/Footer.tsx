import Link from "next/link";
import {
  
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-slate-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              RentalHub
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-400">
              RentalHub is a modern house rental platform that
              helps tenants find their ideal home and enables
              landlords to manage properties with ease.
            </p>

            {/* <div className="mt-6 flex items-center gap-4">
              <Link
                href="#"
                className="rounded-full bg-slate-800 p-2 transition hover:bg-blue-600"
              >
                <Facebook size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-2 transition hover:bg-sky-500"
              >
                <Linkedin size={18} />
              </Link>

              <Link
                href="#"
                className="rounded-full bg-slate-800 p-2 transition hover:bg-gray-700"
              >
                <Github size={18} />
              </Link>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-blue-400"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/property"
                  className="transition hover:text-blue-400"
                >
                  Properties
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="transition hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-blue-400"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Services
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>Find Rental Houses</li>
              <li>Property Management</li>
              <li>Online Payments</li>
              <li>Rental Requests</li>
              <li>Secure Transactions</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white">
              Contact
            </h3>

            <div className="mt-5 space-y-4 text-sm">
              <div className="flex items-center gap-3">
                <MapPin
                  size={18}
                  className="text-blue-400"
                />
                <span>Dhaka, Bangladesh</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone
                  size={18}
                  className="text-blue-400"
                />
                <span>+880 1700-000000</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail
                  size={18}
                  className="text-blue-400"
                />
                <span>support@rentalhub.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 md:flex-row">
            <p>
              © {new Date().getFullYear()} RentalHub. All rights
              reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="hover:text-white"
              >
                Privacy Policy
              </Link>

              <Link
                href="/terms"
                className="hover:text-white"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;