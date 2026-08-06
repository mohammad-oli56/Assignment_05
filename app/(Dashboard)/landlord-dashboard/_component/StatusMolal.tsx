"use client";

import React, { useTransition } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { handelstatusfromaction } from "../_action/handelstatus";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";

interface ModalProps {
  id: string;
}

const StatusModal = ({ id }: ModalProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleStatus = async (status: "APPROVED" | "REJECTED") => {
    try {
      const result = await handelstatusfromaction(id, status);

      if (result.success) {
        toast.success(result.message);

        startTransition(() => {
          router.refresh();
        });
      } else {
        toast.error(result.message);
      }
    } catch {
      toast.error("Something went wrong");
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Change Status</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Update Rental Request</DialogTitle>

          <DialogDescription>
            Choose whether you want to approve or reject this rental
            request. This action will immediately update the request
            status.
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 mt-6">
          <Button
            disabled={isPending}
            onClick={() => handleStatus("APPROVED")}
            className="bg-green-600 hover:bg-green-700"
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <CheckCircle2 className="w-4 h-4 mr-2" />
            )}
            Approve
          </Button>

          <Button
            disabled={isPending}
            variant="destructive"
            onClick={() => handleStatus("REJECTED")}
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
            ) : (
              <XCircle className="w-4 h-4 mr-2" />
            )}
            Reject
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default StatusModal;