// "use client";

import Link from "next/link";
import { columns } from "./components/columns";
import { CakeDataTable } from "./components/data-table";
import { getListOfCakes } from "../lib/actions";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import Alert from "./components/ui/alert";

export default async function CakePage() {
  const data = await getListOfCakes();
  return (
    <div className="container py-10 mx-auto">
      <Alert />
      <div className="flex item-center justify-end mb-10">
        <Button asChild>
          <Link href={"/cake/create"}>
            <Plus className="mr-2 h-4 w-4" />
            Tambah Data
          </Link>
        </Button>
      </div>
      <CakeDataTable columns={columns} data={data?.data.items} />
    </div>
  );
}
