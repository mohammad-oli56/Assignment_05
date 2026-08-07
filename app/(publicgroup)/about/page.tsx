import { Building2, ShieldCheck, Users, Home } from "lucide-react";
import Link from "next/link";

const page = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-24 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">About RentalHub</h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-blue-100">
            RentalHub is a modern house rental management platform
            designed to connect tenants and landlords through a secure,
            transparent, and user-friendly experience.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
              Who We Are
            </span>

            <h2 className="mt-4 text-4xl font-bold text-gray-900">
              Simplifying House Rentals
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              RentalHub makes finding and managing rental properties
              simple. Tenants can browse verified properties, submit
              rental requests, and make secure online payments.
              Landlords can easily manage listings, review requests,
              and track rental activity from one dashboard.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Our goal is to eliminate unnecessary paperwork and make
              the rental process fast, transparent, and reliable for
              everyone.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-10 shadow-xl">
            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <Home className="mx-auto h-10 w-10 text-blue-600" />
                <h3 className="mt-4 text-3xl font-bold">500+</h3>
                <p className="text-gray-600">Properties</p>
              </div>

              <div className="rounded-2xl bg-green-50 p-6 text-center">
                <Users className="mx-auto h-10 w-10 text-green-600" />
                <h3 className="mt-4 text-3xl font-bold">2,500+</h3>
                <p className="text-gray-600">Happy Tenants</p>
              </div>

              <div className="rounded-2xl bg-yellow-50 p-6 text-center">
                <Building2 className="mx-auto h-10 w-10 text-yellow-600" />
                <h3 className="mt-4 text-3xl font-bold">300+</h3>
                <p className="text-gray-600">Landlords</p>
              </div>

              <div className="rounded-2xl bg-purple-50 p-6 text-center">
                <ShieldCheck className="mx-auto h-10 w-10 text-purple-600" />
                <h3 className="mt-4 text-3xl font-bold">99%</h3>
                <p className="text-gray-600">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2">
          <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">
              Our Mission
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              To provide a trusted and efficient platform where tenants
              can easily find their ideal homes and landlords can
              manage rental properties with confidence.
            </p>
          </div>

          <div className="rounded-3xl border bg-gray-50 p-8 shadow-sm">
            <h3 className="text-3xl font-bold text-indigo-600">
              Our Vision
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              To become the most reliable digital rental platform by
              offering secure transactions, verified listings, and an
              outstanding user experience.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-4xl font-bold">
              Why Choose RentalHub?
            </h2>

            <p className="mt-4 text-gray-600">
              We make renting easier with trusted services and modern
              technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Verified Properties",
              "Trusted Landlords",
              "Secure Online Payment",
              "24/7 Customer Support",
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 text-center shadow-md transition hover:-translate-y-2 hover:shadow-xl"
              >
                <ShieldCheck className="mx-auto h-10 w-10 text-blue-600" />

                <h3 className="mt-5 text-xl font-semibold">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center text-white">
          <h2 className="text-4xl font-bold">
            Ready to Find Your Next Home?
          </h2>

          <p className="mt-5 text-lg text-blue-100">
            Browse verified rental properties and start your rental
            journey today.
          </p>

          <Link
            href="/property"
            className="mt-8 inline-block rounded-xl bg-white px-8 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Browse Properties
          </Link>
        </div>
      </section>
    </main>
  );
};

export default page;