"use client";

import * as React from "react";
import {
  Alert as AlertWrap,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { useToastContext } from "@/app/context/context-toast";

interface IAlertProps {}

const Alert: React.FunctionComponent<IAlertProps> = (props) => {
  const { state, setToast } = useToastContext();

  React.useEffect(() => {
    if (state.title) {
      const timer = setTimeout(() => {
        setToast({ description: "", title: "" });
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [state.title, setToast]);

  if (state.title === "") {
    return <></>;
  }
  return (
    <div className="flex items-center justify-start w-1/3 ">
      <AlertWrap className="text-center bg-green-600/25">
        <AlertTitle>{state.title}</AlertTitle>
        <AlertDescription>{state.description}</AlertDescription>
      </AlertWrap>
    </div>
  );
};

export default Alert;
