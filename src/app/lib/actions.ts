"use server";

import axios, { AxiosError } from "axios";
import { schemaCakeForm } from "./validation";
import { ActionResult } from "../types";
import { redirect } from "next/navigation";

export async function getListOfCakes() {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cakes?page=2`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
}

export async function saveCake(
  prevState: any,
  formData: FormData
): Promise<ActionResult> {
  const validateForm = schemaCakeForm.safeParse({
    title: formData.get("title"),
    rating: formData.get("rating"),
    description: formData.get("description"),
    image: formData.get("image"),
  });

  if (!validateForm.success) {
    return {
      title: "Error Validation",
      description: validateForm.error.issues.map((issues) => issues.message),
    };
  }

  try {
    const dataCake = {
      ...validateForm.data,
      rating: parseInt(validateForm.data.rating),
    };
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cakes`, {
      method: "POST",
      body: JSON.stringify(dataCake),
      headers: { "Content-Type": "application/json" },
    }).then(async (res) => await res.json());
  } catch (error) {
    const errorAxios = error as AxiosError;
    return {
      title: "Error fetch data",
      description: errorAxios && [errorAxios.message],
    };
  }

  return redirect("/cake");
}
