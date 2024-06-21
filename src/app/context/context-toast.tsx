"use client";

import * as React from "react";

type ToastMessageState = {
  title: string;
  description: string;
};

type ToastMessageContextType = {
  state: ToastMessageState;
  setToast: (message: ToastMessageState) => void;
};

const ToastMessageContext = React.createContext<ToastMessageContextType | null>(
  null
);

export const ToastMessageProvider: React.FunctionComponent<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [state, setState] = React.useState<ToastMessageState>({
    description: "",
    title: "",
  });
  return (
    <ToastMessageContext.Provider value={{ state, setToast: setState }}>
      {children}
    </ToastMessageContext.Provider>
  );
};

export const useToastContext = () => {
  const context = React.useContext(ToastMessageContext);
  if (!context) {
    throw new Error(
      "useToastContext must be used inside the ToastMessageProvider"
    );
  }
  return context;
};
