"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { DollarSign, MapPin } from "lucide-react";
import Link from "next/link";

interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  images: string[];
}

interface Props {
  data: Property;
}

export function PropertyCard({ data }: Props) {
  const rawImage = data.images?.[0];

  let imageUrl = "https://avatar.vercel.sh/property";

  if (rawImage) {
    if (rawImage.startsWith("http")) {
      imageUrl = rawImage;
    } else {
      const markdownMatch = rawImage.match(/\((.*?)\)/);
      if (markdownMatch?.[1]) {
        imageUrl = markdownMatch[1];
      }
    }
  }

  return (
    <Card className="overflow-hidden rounded-2xl shadow-md transition hover:shadow-xl">
      <div className="relative">
        <img
          src={imageUrl}
          alt={data.title}
          className="h-56 w-full object-cover"
          onError={(e) => {
            e.currentTarget.src =
              "https://avatar.vercel.sh/property";
          }}
        />

        <Badge className="absolute left-3 top-3">
          Featured
        </Badge>
      </div>

      <CardContent className="space-y-3 p-5">
        <h2 className="text-xl font-bold line-clamp-1">
          {data.title}
        </h2>

        <div className="flex items-center gap-2 text-gray-600">
          <MapPin size={18} />
          {data.location}
        </div>

        <div className="flex items-center gap-2 text-green-600 font-semibold">
          <DollarSign size={18} />
          ৳ {data.price}
          <span className="text-sm text-gray-500">
            / month
          </span>
        </div>
      </CardContent>

      <CardFooter>
        <Link
          href={`/property/${data.id}`}
          className="w-full"
        >
          <Button className="w-full">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}