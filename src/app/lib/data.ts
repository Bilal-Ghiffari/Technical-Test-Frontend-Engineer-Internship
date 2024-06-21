"use server";

export async function getDataDetailCake(id: string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API}/cakes/${id}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    const data = res.json();
    return data;
  } catch (error) {
    return error;
  }
}
