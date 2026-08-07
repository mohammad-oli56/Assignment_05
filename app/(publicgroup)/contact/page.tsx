import {
  Mail,
  Phone,
  MapPin,
  Clock,
} from "lucide-react";

const page = () => {
  return (
    <main className="bg-gray-50">
      {/* Hero */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h1 className="text-5xl font-bold">Contact Us</h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-blue-100">
            We'd love to hear from you. Whether you have questions,
            feedback, or need support, our team is here to help.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-2">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <span className="rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-600">
                Get in Touch
              </span>

              <h2 className="mt-4 text-4xl font-bold text-gray-900">
                Let's Talk
              </h2>

              <p className="mt-4 leading-8 text-gray-600">
                Have a question about renting a property or managing
                your listings? Reach out to us anytime.
              </p>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow">
                <div className="rounded-xl bg-blue-100 p-3">
                  <MapPin className="text-blue-600" />
                </div>

                <div>
                  <h3 className="font-semibold">Address</h3>
                  <p className="text-gray-600">
                    Dhaka, Bangladesh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow">
                <div className="rounded-xl bg-green-100 p-3">
                  <Phone className="text-green-600" />
                </div>

                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-gray-600">
                    +880 1700-000000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow">
                <div className="rounded-xl bg-red-100 p-3">
                  <Mail className="text-red-600" />
                </div>

                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-gray-600">
                    support@rentalhub.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl bg-white p-5 shadow">
                <div className="rounded-xl bg-yellow-100 p-3">
                  <Clock className="text-yellow-600" />
                </div>

                <div>
                  <h3 className="font-semibold">
                    Working Hours
                  </h3>
                  <p className="text-gray-600">
                    Sunday - Thursday
                  </p>
                  <p className="text-gray-600">
                    9:00 AM - 6:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h2 className="mb-6 text-3xl font-bold">
              Send a Message
            </h2>

            <form className="space-y-5">
              <div>
                <label className="mb-2 block font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Subject
                </label>

                <input
                  type="text"
                  placeholder="Enter subject"
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block font-medium">
                  Message
                </label>

                <textarea
                  rows={5}
                  placeholder="Write your message..."
                  className="w-full rounded-xl border px-4 py-3 outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="overflow-hidden rounded-3xl shadow-xl">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Dhaka,Bangladesh&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="h-[450px] w-full border-0"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;