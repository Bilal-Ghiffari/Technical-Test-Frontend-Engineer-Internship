"use client";

import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown, Eye } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { CakeColumnType } from "../../types";
import DeleteCake from "./fragments/deleted-cake";

export const columns: ColumnDef<CakeColumnType>[] = [
  {
    accessorKey: "id",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Id
          <ArrowUpDown className="w-4 h-4 ml-2" />
        </Button>
      );
    },
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "rating",
    header: "Rating",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => {
      const original = row.original;
      return (
        <img
          src={
            original.image === ""
              ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
              : original.image
          }
          width={100}
          height={100}
          alt=""
        />
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Created",
    cell: ({ row }) => {
      const created_at = row.getValue("created_at");
      const formatted = new Date(created_at as string).toLocaleDateString();
      return <div className="font-medium">{formatted}</div>;
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const original = row.original;
      const convertIdIntoString = original.id.toString();
      return (
        <div className="flex flex-row gap-3">
          <Button variant="secondary" size="sm" asChild>
            <Link href={`/cake/${original.id}`}>
              <Eye className="mr-2 h-4 w-4" />
            </Link>
            {/* Show Detail */}
          </Button>
          <DeleteCake id={convertIdIntoString} />
        </div>
      );
    },
  },
];
