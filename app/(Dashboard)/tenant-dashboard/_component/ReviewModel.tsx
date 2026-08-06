"use client";

import React, { useActionState, useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FormState, reviewgive } from "../_action/reviewgive";

const initialState: FormState = {
  success: false,
  message: "",
};

const ReviewModel = ({ id }: { id: string }) => {
  const [open, setOpen] = useState(false);

  const [state, formAction, isPending] = useActionState(
    reviewgive,
    initialState
  );

  useEffect(() => {
    if (state.success) {
      setTimeout(() => {
        setOpen(false);
      }, 800);
    }
  }, [state]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700">
        Review Here❤️
      </DialogTrigger>

      <DialogContent className="sm:max-w-md rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Write a Review
          </DialogTitle>
        </DialogHeader>

        <form action={formAction} className="space-y-5">
          <input type="hidden" name="id" value={id} />

          {/* Rating */}
          <div>
            <label className="mb-3 block font-medium">
              Rating
            </label>

            <div className="flex justify-between rounded-lg border p-3">
              {[1, 2, 3, 4, 5].map((rating) => (
                <label
                  key={rating}
                  className="flex cursor-pointer items-center gap-1"
                >
                  <input
                    type="radio"
                    name="rating"
                    value={rating}
                  />
                  <span>{rating} ⭐</span>
                </label>
              ))}
            </div>
          </div>

          {/* Comment */}

          <div>
            <label className="mb-2 block font-medium">
              Comment
            </label>

            <textarea
              name="comment"
              rows={4}
              placeholder="Share your experience..."
              className="w-full rounded-lg border p-3 outline-none focus:border-blue-500"
            />
          </div>

          {/* Message */}

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

          <button
            type="submit"
            disabled={isPending}
            className="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {isPending ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ReviewModel;