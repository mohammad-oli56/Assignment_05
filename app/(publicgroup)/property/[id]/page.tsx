import Image from "next/image";
import { GetSingleProperty } from "../../_action/getSingleProperty";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const SinglePropertyPage = async ({ params }: PageProps) => {
  const { id } = await params;

  const property = await GetSingleProperty(id);

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side - Image */}
        <div>
            {/* <Image
              src={property.images[0]}
              alt={property.title}
              width={700}
              height={500}
              className="w-full h-[500px] object-cover rounded-xl"
            /> */}

          {property.images.length > 1 && (
            <div className="grid grid-cols-3 gap-3 mt-4">
              {/* {property.images.map((img: string, index: number) => (
                // <Image
                //   key={index}
                //   src={img}
                //   alt={`Image ${index + 1}`}
                //   width={200}
                //   height={150}
                //   className="w-full h-28 object-cover rounded-lg"
                // />
              ))} */}
            </div>
          )}
        </div>

        {/* Right Side - Details */}
        <div className="space-y-5">
          <div>
            <h1 className="text-4xl font-bold">{property.title}</h1>
            <p className="text-gray-500 mt-2">{property.description}</p>
          </div>

          <h2 className="text-3xl font-bold text-green-600">
            ৳ {property.price.toLocaleString()}/month
          </h2>

          <div className="space-y-3 border rounded-xl p-5">
            <div className="flex justify-between">
              <span className="font-medium">Location</span>
              <span>{property.location}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Address</span>
              <span>{property.address}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Bedrooms</span>
              <span>{property.bedrooms}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Bathrooms</span>
              <span>{property.bathrooms}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Area</span>
              <span>{property.area} sq.ft</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Category</span>
              <span>{property.category.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Landlord</span>
              <span>{property.landlord.name}</span>
            </div>

            <div className="flex justify-between">
              <span className="font-medium">Status</span>
              <span
                className={`font-semibold ${
                  property.isAvailable
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {property.isAvailable ? "Available" : "Not Available"}
              </span>
            </div>
          </div>

          {/* Amenities */}
          <div>
            <h3 className="text-xl font-semibold mb-3">Amenities</h3>

            <div className="flex flex-wrap gap-3">
              {property.amenities.map(
                (item: string, index: number) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 rounded-full text-sm"
                  >
                    {item}
                  </span>
                )
              )}
            </div>
          </div>

          <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
            Contact Landlord
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePropertyPage;