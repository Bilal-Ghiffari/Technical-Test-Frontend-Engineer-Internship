"use client";

import * as React from "react";

import { AxiosError } from "axios";
import { Trash } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

import { useDeleteCake } from "@/hooks/useDeleteCake";

type Props = {
  id: string;
};

export default function DeleteCake({ id }: Props) {
  const { toast } = useToast();
  const { mutate: deleteCakeWithId, isPending } = useDeleteCake();

  const handleDelete = (Cakeid: string) => {
    deleteCakeWithId(Cakeid, {
      onSuccess: (response) => {
        toast({
          title: response.message,
          description: `Cake with ID ${Cakeid} was successfully deleted.`,
        });
      },
      onError: (error: Error) => {
        const axiosError = error as AxiosError;
        toast({
          title: "Error",
          variant: "destructive",
          description: `Cake with ID ${Cakeid} ${axiosError?.response?.statusText}`,
        });
      },
    });
  };
  return (
    <Button
      disabled={isPending}
      size="sm"
      type="button"
      variant="destructive"
      onClick={() => handleDelete(id)}
    >
      <Trash className="mr-2 w-4 h-4" />
      {isPending ? "Process..." : "Delete"}
    </Button>
  );
}
