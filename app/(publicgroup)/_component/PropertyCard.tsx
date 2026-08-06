import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { MapPin, DollarSign } from "lucide-react";
import Link from "next/link";

export function PropertyCard({ data }: any) {
  return (
    <Card className="overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Image */}
      <div className="relative">
        <img
          src={data?.image || "https://avatar.vercel.sh/shadcn1"}
          alt={data?.title}
          className="h-56 w-full object-cover"
        />

        <Badge className="absolute left-3 top-3 bg-blue-600 text-white">
          Featured
        </Badge>
      </div>

      <CardContent className="space-y-4 p-5">
        {/* Title */}
        <h2 className="line-clamp-1 text-xl font-bold">
          {data?.title}
        </h2>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} className="text-red-500" />
          <span>{data?.location}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-2 text-lg font-semibold text-green-600">
          <DollarSign size={18} />
          ৳ {data?.price}
          <span className="text-sm font-normal text-gray-500">
            / month
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Link href={`/property/${data.id}`} className="w-full">
          <Button className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}