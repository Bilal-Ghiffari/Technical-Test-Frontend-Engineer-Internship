import { getDataDetailCake } from "@/app/lib/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon, Star } from "lucide-react";

import * as React from "react";

type IDParams = {
  id: string;
};

interface IDetailCakePageProps {
  params: IDParams;
}

const DetailCakePage: React.FunctionComponent<IDetailCakePageProps> = async ({
  params,
}) => {
  const { data } = await getDataDetailCake(params.id);
  return (
    <div className="container mx-auto py-10 flex flex-col gap-10">
      <div className="flex items-center justify-start">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/cake" className="text-[16px]">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage className="text-[16px]">
                {data?.title ?? "No Title Available"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex justify-center">
        <div className="flex flex-col gap-6">
          <img
            src={
              !data
                ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                : data?.image === ""
                ? "https://upload.wikimedia.org/wikipedia/commons/d/d1/Image_not_available.png"
                : data?.image
            }
            alt="No Image Cake Not Found"
            className="object-cover object-center w-full h-[350px]"
          />
          <div className="flex flex-row justify-between gap-3">
            <span className="text-xl font-semibold">
              {data?.title ?? "No Title Available"}
            </span>
            <div className="border border-gray-400 px-2 py-1 rounded-lg">
              <div className="flex flex-row gap-2">
                <div className="flex items-center">
                  {data?.rating && <Star className="w-5 h-5 text-yellow-600" />}
                </div>
                <span className="text-sm">
                  {data?.rating ? `Toko ${data.rating}` : "No Rating Available"}
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <span className="text-xl font-bold">Deskripsi Cake</span>
            <p className="text-sm">
              {data?.description ?? "No Description Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailCakePage;
