import { PropertyCard } from "@/app/(publicgroup)/_component/PropertyCard";
import Link from "next/link";


type Props = {
  data: any[];
};

const HomeProperty = ({ data }: Props) => {
  const latestProperties = data?.slice(0, 6);

  return (
    <section className="py-20 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
              Latest Listings
            </span>

            <h2 className="mt-3 text-4xl font-bold text-gray-900">
              New Properties
            </h2>

            <p className="mt-3 max-w-2xl text-gray-600">
              Explore our latest verified rental properties. Find the
              perfect home that matches your lifestyle and budget.
            </p>
          </div>

          <Link
            href="/property"
            className="rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            View All Properties
          </Link>
        </div>

        {/* Property Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestProperties.map((property: any) => (
            <PropertyCard
              key={property.id}
              data={property}
            />
          ))}
        </div>

        {latestProperties.length === 0 && (
          <div className="rounded-2xl border border-dashed bg-white py-16 text-center">
            <h3 className="text-2xl font-semibold text-gray-700">
              No Properties Available
            </h3>

            <p className="mt-2 text-gray-500">
              New properties will appear here soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default HomeProperty;