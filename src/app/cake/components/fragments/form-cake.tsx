"use client";

import * as React from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

import { useToastContext } from "@/app/context/context-toast";
import { schemaCakeForm } from "@/app/lib/validation";
import { useCreateCake } from "@/hooks/useCreateCake";
import { Textarea } from "@/components/ui/textarea";

interface IFormCakeProps {}

const FormCake: React.FunctionComponent<IFormCakeProps> = (props) => {
  const { toast } = useToast();
  const { setToast } = useToastContext();
  const router = useRouter();
  const form = useForm<z.infer<typeof schemaCakeForm>>({
    resolver: zodResolver(schemaCakeForm),
  });
  const { mutate: createCake, isPending } = useCreateCake();
  const handleSubmit = (val: z.infer<typeof schemaCakeForm>) => {
    const body = {
      ...val,
      rating: parseInt(val.rating),
    };
    createCake(body, {
      onSuccess: (res) => {
        console.log(res);
        setToast({
          description: `${res.status} Created Cake.`,
          title: res.message,
        });
        router.push("/cake");
      },
      onError: (res: Error) => {
        const error = res as AxiosError;
        toast({
          title: error.name,
          variant: "destructive",
          description: error?.response?.data as string,
        });
      },
    });
    form.reset({ description: "", image: "", rating: "", title: "" });
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="w-[70%] space-y-5"
      >
        <div className="grid grid-cols-3  gap-4">
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Title...."
                      className="ring-2 ring-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>

          <div className="space-y-2">
            <FormField
              control={form.control}
              name="rating"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Rating</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Rating...."
                      className=" ring-2 ring-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
          <div className="space-y-2">
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="Image...."
                      className=" ring-2 ring-gray-300"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
        </div>
        <div className="w-full">
          <div className="">
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Description...."
                      className="resize-none ring-2 ring-gray-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            ></FormField>
          </div>
        </div>
        <Button type="submit" disabled={isPending}>
          Submit
        </Button>
      </form>
    </Form>
  );
};

export default FormCake;
