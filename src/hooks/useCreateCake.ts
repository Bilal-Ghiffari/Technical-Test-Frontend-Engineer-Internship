import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export const useCreateCake = () => {
  return useMutation({
    mutationFn: async (body: any) => {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_API}/cakes`,
        body,
        { method: "post", headers: { "Content-Type": "application/json" } }
      );
      return res.data;
    },
  });
};
