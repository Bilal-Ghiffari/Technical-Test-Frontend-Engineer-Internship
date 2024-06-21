import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useDeleteCake = () => {
  return useMutation({
    mutationFn: async (id: string) => {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API}/cakes/${id}`,
        { method: "delete", headers: { "Content-Type": "application/json" } }
      );
      return res.data;
    },
  });
};
