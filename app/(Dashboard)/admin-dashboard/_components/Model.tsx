"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { changeuserstatus } from "../_action/update_user_status";
import { useRouter } from "next/navigation";

interface ModalProps {
  id: string;
  status: "ACTIVE" | "BLOCKED";
}

export function Modal({ id, status }: ModalProps) {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const changeStatus = async () => {
    try {
      const newStatus =
        status === "ACTIVE" ? "BLOCKED" : "ACTIVE";

      await changeuserstatus({
        id,
        value: newStatus,
      });

      setOpen(false);      // ✅ Close the modal
      router.refresh();    // ✅ Refresh the page (optional)
    } catch (error) {
      console.error("Failed to change status:", error);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-indigo-600 hover:bg-indigo-700">
          Change Status
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Change User Status</DialogTitle>
        </DialogHeader>

        <div className="space-y-4">
          <p>
            <strong>User ID:</strong> {id}
          </p>

          <p>
            <strong>Current Status:</strong> {status}
          </p>

          <Button onClick={changeStatus}>
            {status === "ACTIVE" ? "Block User" : "Activate User"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}