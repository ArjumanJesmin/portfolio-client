"use client";
import React from "react";
import { useForm, FormProvider } from "react-hook-form";
import QuillTextEditor from "./QuillTextEditor";
import ActionSubmitButton from "@/app/components/submitButton/ActionSubmitButton";
import { toast } from "sonner";

type FormValues = {
  title: string;
  subtitle: string;
  editorContent: string;
};

const PHTextForm = () => {
  const methods = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    const payload = {
      title: data.title,
      subtitle: data.subtitle,
      content: stripHtmlTags(data.editorContent),
    };

    try {
      const response = await fetch(
        ` https://portfolio-server-inky-six.vercel.app/api/v1/blog`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        toast.success("Blog created successfully");
        methods.reset();
      } else {
        const errorData = await response.json();
        console.error("Error:", errorData);
        toast.error(
          `Failed to create blog: ${errorData.message || response.statusText}`
        );
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to create blog");
    }
  };

  // Function to strip HTML tags from a string
  const stripHtmlTags = (htmlString: string) => {
    return htmlString.replace(/<[^>]*>?/gm, "");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col">
          <label htmlFor="title" className="text-lg mb-2">
            Title
          </label>
          <input
            id="title"
            type="text"
            {...methods.register("title", { required: true })}
            className="p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
          {methods.formState.errors.title && (
            <span className="text-red-600">Title is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="subtitle" className="text-lg mb-2">
            Subtitle
          </label>
          <input
            id="subtitle"
            type="text"
            {...methods.register("subtitle", { required: true })}
            className="p-2 border border-gray-300 rounded-md dark:bg-gray-800 dark:border-gray-700"
          />
          {methods.formState.errors.subtitle && (
            <span className="text-red-600">Subtitle is required</span>
          )}
        </div>
        <div className="flex flex-col">
          <label htmlFor="editorContent" className="text-lg mb-2">
            Content
          </label>
          <QuillTextEditor name="editorContent" />
          {methods.formState.errors.editorContent && (
            <span className="text-red-600">Content is required</span>
          )}
        </div>
        <ActionSubmitButton>Post Blog</ActionSubmitButton>
      </form>
    </FormProvider>
  );
};

export default PHTextForm;
