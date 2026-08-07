import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Hasan Mahmud",
    role: "Tenant",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "I found my dream apartment within a few days. The platform is simple to use, and the payment process was smooth and secure.",
  },
  {
    name: "Nusrat Jahan",
    role: "Landlord",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Managing my rental properties has never been easier. I can approve requests and receive payments without any hassle.",
  },
  {
    name: "Rahim Uddin",
    role: "Tenant",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "The verified properties gave me confidence while searching for a home. Highly recommended for anyone looking to rent.",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
            Testimonials
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900">
            What Our Users Say
          </h2>

          <p className="mt-4 text-gray-600">
            Thousands of tenants and landlords trust our platform to
            make renting easier, faster, and more secure.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="relative rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="absolute right-6 top-6">
                <Quote className="h-10 w-10 text-blue-100" />
              </div>

              {/* Rating */}
              <div className="mb-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    className="fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Review */}
              <p className="leading-7 text-gray-600">
                "{item.review}"
              </p>

              {/* User */}
              <div className="mt-8 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-14 w-14 rounded-full border-2 border-blue-100 object-cover"
                />

                <div>
                  <h3 className="font-semibold text-gray-900">
                    {item.name}
                  </h3>

                  <p className="text-sm text-blue-600">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;