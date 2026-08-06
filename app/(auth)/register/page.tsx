"use client";

import React, { useActionState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRouter } from "next/navigation";
import { FormState, resinsteAction } from "../_action/register";

const initialState: FormState = {
  success: false,
  message: "",
};

const Registerpage = () => {
  const router = useRouter();

  const [state, formAction, isPending] = useActionState(
    resinsteAction,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      setTimeout(() => {
        router.push("/login");
      }, 1200);
    }
  }, [state.success, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader>
          <CardTitle>Create an Account</CardTitle>

          <CardDescription>
            Enter your information below to register.
          </CardDescription>

          <CardAction>
            <Button
              variant="outline"
              onClick={() => router.push("/login")}
            >
              Login
            </Button>
          </CardAction>
        </CardHeader>

        <form action={formAction}>
          <CardContent>
            <div className="flex flex-col gap-5">
              <div className="grid gap-2">
                <Label htmlFor="name">Name</Label>

                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>

                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="phoneNumber">
                  Phone Number
                </Label>

                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="01XXXXXXXXX"
                  required
                />
              </div>

              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>

                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="********"
                  required
                />
              </div>

              {state.message && (
                <div
                  className={`rounded-lg p-3 text-sm ${
                    state.success
                      ? "bg-green-100 text-green-700"
                      : "bg-red-100 text-red-700"
                  }`}
                >
                  {state.message}
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter className="flex flex-col gap-3">
            <Button
              type="submit"
              disabled={isPending}
              className="w-full"
            >
              {isPending ? "Registering..." : "Register"}
            </Button>
          </CardFooter>
        </form>
      </Card>
    </div>
  );
};

export default Registerpage;