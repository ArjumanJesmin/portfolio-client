"use client";
import { useState, createRef, useEffect } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { technologies, features } from "./projectData";
import ActionSubmitButton from "@/app/components/submitButton/ActionSubmitButton";

const AddProjectForm = ({ onClose }: any) => {
  const { register, handleSubmit, reset } = useForm();
  const [image, setImage] = useState<string | null>(null);

  const img_hosting_token = "1b855a210951a3b9355ee01e3703dbbc";
  const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const handleImageUpload = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      try {
        const response = await axios.post(image_hosting_url, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        console.log(response);

        if (response.data && response.data.data && response.data.data.url) {
          setImage(response.data.data.url);
        } else {
          toast.error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("Failed to upload image");
      }
    }
  };

  const onSubmit = async (data: any) => {
    if (!image) {
      toast.error("Please upload an image");
      return;
    }

    const formData = new FormData();
    formData.append("photo", image);

    // Add other form fields to formData
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("liveLink", data.liveLink);
    formData.append("githubLink", data.githubLink);
    formData.append("githubServerLink", data.githubServerLink);
    formData.append("features", data.features);
    formData.append("technologies", data.technologies);

    try {
      const response = await axios.post(
        "https://portfolio-server-inky-six.vercel.app/api/v1/project",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200) {
        toast.success("Project created successfully");
        reset();
        onClose();
      } else {
        toast.error("Failed to create project");
      }
    } catch (error) {
      console.error("Error creating project:", error);
      toast.error("Failed to create project");
    }
  };

  return (
    <div className="m-3">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...register("title", { required: true })}
          type="text"
          label="Title"
          variant="bordered"
        />
        <Input
          {...register("description", { required: true })}
          type="text"
          label="Description"
          variant="bordered"
        />
        <Input type="file" variant="bordered" onChange={handleImageUpload} />
        <Input
          {...register("liveLink", { required: true })}
          type="url"
          label="Live Link"
          variant="bordered"
        />
        <Input
          {...register("githubLink", { required: true })}
          type="url"
          label="GitHub Link"
          variant="bordered"
        />
        <Input
          {...register("githubServerLink", { required: true })}
          type="url"
          label="GitHub Server Link"
          variant="bordered"
        />

        <Select
          {...register("features", { required: true })}
          variant="bordered"
          label="Select Features"
        >
          {features.map((feature) => (
            <SelectItem key={feature.value} value={feature.value}>
              {feature.label}
            </SelectItem>
          ))}
        </Select>
        <Select
          {...register("technologies", { required: true })}
          variant="bordered"
          label="Select Technologies"
        >
          {technologies.map((technology) => (
            <SelectItem key={technology.value} value={technology.value}>
              {technology.label}
            </SelectItem>
          ))}
        </Select>

        <div className="flex justify-end">
          <ActionSubmitButton>Add Project</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
