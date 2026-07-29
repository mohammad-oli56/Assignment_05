import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";

export default function Banner() {
    return (
        <section className="relative bg-gradient-to-br from-green-50 to-white">

            <div className="mx-auto max-w-7xl px-6 py-8">

                {/* Top Right Search */}
                <div className="flex justify-end mb-10">

                    <div className="flex w-full max-w-xl items-center gap-3 rounded-full bg-white p-2 shadow-lg border">

                        <div className="relative flex-1">
                            <MapPin 
                                className="absolute left-3 top-3 text-gray-400"
                                size={18}
                            />

                            <Input
                                placeholder="Location"
                                className="rounded-full pl-10 border-0 bg-gray-50"
                            />
                        </div>


                        <Input
                            placeholder="Property Type"
                            className="rounded-full border-0 bg-gray-50"
                        />


                        <Button
                            className="rounded-full bg-green-600 px-6 hover:bg-green-700"
                        >
                            <Search size={18}/>
                        </Button>

                    </div>

                </div>


                {/* Hero */}
                <div className="grid items-center gap-12 lg:grid-cols-2">


                    {/* Left */}
                    <div>

                        <span className="rounded-full bg-green-100 px-4 py-2 text-sm text-green-700">
                            🏠 Trusted Rental Marketplace
                        </span>


                        <h1 className="mt-6 text-5xl font-bold leading-tight text-gray-900">

                            Find Your

                            <span className="block text-green-600">
                                Perfect Rental Home
                            </span>

                        </h1>


                        <p className="mt-6 text-lg text-gray-600">
                            Browse verified rental properties across Bangladesh.
                            Find apartments, houses and family homes easily.
                        </p>


                    </div>



                    {/* Right Image */}
                    <div className="relative overflow-hidden rounded-3xl shadow-xl">

                        <Image
                            src="/images/banner.jpg"
                            alt="House"
                            width={700}
                            height={600}
                            className="h-[500px] w-full object-cover"
                        />

                    </div>


                </div>

            </div>

        </section>
    );
}