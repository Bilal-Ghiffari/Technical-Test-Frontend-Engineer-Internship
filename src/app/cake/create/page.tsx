import * as React from "react";
import FormCake from "../components/fragments/form-cake";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { SlashIcon } from "lucide-react";

interface ICreateCakeProps {}

const CreateCake: React.FunctionComponent<ICreateCakeProps> = (props) => {
  return (
    <div className="container py-10 mx-auto">
      <div className="flex justify-start mb-10">
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
                Create Cake
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      {/* <div className="flex flex-row items-center justify-between">
      </div> */}
      <div className="my-5 text-2xl font-bold">Create Cake</div>
      <FormCake />
    </div>
  );
};

export default CreateCake;
