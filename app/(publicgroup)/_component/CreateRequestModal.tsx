"use client";

import React, { useActionState, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { createrentalrequest } from "@/app/(Dashboard)/tenant-dashboard/_action/createrentalrequest";
import { useRouter } from "next/navigation";

const initialState = {
  success: false,
  message: "",
};

type Props = {
  id: string;
};

const CreateRequestModal = ({ id }: Props) => {

    const routet = useRouter()
    
      const [open, setOpen] = useState(false);

  const [state, formAction, pending] = useActionState(
    createrentalrequest,
    initialState
  );

   useEffect(() => {
      if (state.success) {
        routet.push("/tenant-dashboard/my-requests")
        setOpen(false);
      }
    }, [state]);

  return (
    <Dialog>
      <DialogTrigger className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold hover:bg-blue-700">
        Create Request
      </DialogTrigger>

      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Create Rental Request</DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-5">
          <input
            type="hidden"
            name="propertyId"
            value={id}
          />

          <div>
            <label className="block mb-2">
              Preferred Move-in Date
            </label>

            <input
              type="date"
              name="moveDate"
              required
              className="w-full border rounded-md p-2"
            />
          </div>

          <div>
            <label className="block mb-2">
              Message
            </label>

            <textarea
              name="message"
              rows={4}
              required
              placeholder="Write your message..."
              className="w-full border rounded-md p-2"
            />
          </div>

          {state.message && (
            <p
              className={`text-sm ${
                state.success
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {state.message}
            </p>
          )}

          <button
            type="submit"
            disabled={pending}
            className="w-full rounded-md bg-blue-600 py-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
          >
            {pending ? "Submitting..." : "Submit Request"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateRequestModal;