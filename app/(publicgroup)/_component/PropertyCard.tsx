import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export function PropertyCard({ data }:any) {
  // console.log(data);

  return (
    <Card className="relative mx-auto w-full max-w-sm pt-0">
      <div className="absolute inset-0 z-30 aspect-video bg-black/35" />

      <img
        src={data?.image || "https://avatar.vercel.sh/shadcn1"}
        alt={data?.title}
        className="relative z-20 aspect-video w-full object-cover"
      />

      <CardHeader>
        <CardAction>
          <Badge variant="secondary">Featured</Badge>
        </CardAction>

        <CardTitle>{data?.title}</CardTitle>

        <CardDescription>
          {data?.description}
        </CardDescription>
      </CardHeader>

      <CardFooter>
        <Link href={`/property/${data.id}`}>click</Link>
      </CardFooter>
    </Card>
  );
}