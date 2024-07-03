"use client";
import { useState } from "react";
import { Input, Select, SelectItem } from "@nextui-org/react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";
import axios from "axios";
import { technologies, features } from "./projectData";
import ActionSubmitButton from "@/app/components/submitButton/ActionSubmitButton";

const AddProjectForm = () => {
  const { register, handleSubmit, control } = useForm();
  const [image, setImage] = useState<string | null>(null);
  // const [isLoading, seIsLoading] = useState(true);

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

        if (response.data && response.data.data && response.data.data.url) {
          setImage(response.data.data.url);
          // seIsLoading(false);
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
    const projectData = {
      ...data,
      features: [data.features],
      technologies: [data.technologies],
      photo: image,
    };

    try {
      const response = await axios.post(
        "https://portfolio-server-inky-six.vercel.app/api/v1/project",
        projectData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        toast.success(response.data.message);
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
          type="text"
          label="Live Link"
          variant="bordered"
        />
        <Input
          {...register("githubLink", { required: true })}
          type="text"
          label="GitHub Link"
          variant="bordered"
        />
        <Input
          {...register("githubServerLink", { required: true })}
          type="text"
          label="GitHub Server Link"
          variant="bordered"
        />

        <Controller
          name="features"
          control={control}
          defaultValue={[]}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              multiple
              variant="bordered"
              label="Select Features"
              onChange={(value) => field.onChange(value)}
            >
              {features.map((feature) => (
                <SelectItem key={feature.value} value={feature.value}>
                  {feature.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <Controller
          name="technologies"
          control={control}
          defaultValue={[]}
          rules={{ required: true }}
          render={({ field }) => (
            <Select
              {...field}
              multiple
              variant="bordered"
              label="Select Technologies"
              onChange={(value) => field.onChange(value)}
            >
              {technologies.map((technology) => (
                <SelectItem key={technology.value} value={technology.value}>
                  {technology.label}
                </SelectItem>
              ))}
            </Select>
          )}
        />

        <div className="flex justify-end">
          <ActionSubmitButton>Add Project</ActionSubmitButton>
        </div>
      </form>
    </div>
  );
};

export default AddProjectForm;
