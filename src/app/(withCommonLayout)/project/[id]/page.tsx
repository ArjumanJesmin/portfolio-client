"use client";
import { ProjectData } from "@/app/(withCommonLayout)/project/components/interface";
import { Button, Card, CardBody, Slider } from "@nextui-org/react";
import axios from "axios";
import { Link } from "lucide-react";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(
          `https://portfolio-server-inky-six.vercel.app/api/v1/project/${id}`
        );
        console.log(response.data.data);
        if (response.status === 200) {
          setProject(response.data.data);
        } else {
          console.error("Failed to fetch project:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching project:", error);
      }
    };

    if (id) {
      fetchProject();
    }
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  const {
    title,
    description,
    photo,
    liveLink,
    githubLink,
    githubServerLink,
    features,
    technologies,
  } = project;

  return (
    <div className="min-h-screen m-6 flex justify-center items-center">
      <Card
        isBlurred
        className="border-none bg-background/60 dark:bg-default-100/50 w-2/3 items-center justify-center mx-auto shadow-lg"
      >
        <CardBody>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center justify-center">
            <div className="relative col-span-12 md:col-span-4">
              <Image
                alt="Project Image"
                className="object-cover shadow-md"
                height={300}
                src={photo}
                width={300}
              />
            </div>

            <div className="flex flex-col col-span-12 md:col-span-8">
              <div className="flex flex-col gap-2">
                <h3 className="font-semibold text-foreground/90 text-2xl">
                  {title}
                </h3>
                <p className="text-medium text-foreground/80">{description}</p>
              </div>

              <div className="flex flex-col mt-3 gap-2">
                <div>
                  <p className="text-medium">Live Link:</p>
                  <a
                    className="text-blue-500"
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {liveLink}
                  </a>
                </div>
                <div>
                  <p className="text-medium">GitHub Link:</p>
                  <a
                    className="text-blue-500"
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {githubLink}
                  </a>
                </div>
                <div>
                  <p className="text-medium">GitHub Server Link:</p>
                  <a
                    className="text-blue-500"
                    href={githubServerLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {githubServerLink}
                  </a>
                </div>
                <div className="mt-4">
                  <p className="text-medium">Features:</p>
                  <p className="text-foreground/70">
                    {features?.join(", ") || "No features listed"}
                  </p>
                </div>
                <div className="mt-4">
                  <p className="text-medium">Technologies:</p>
                  <p className="text-foreground/70">
                    {technologies?.join(", ") || "No technologies listed"}
                  </p>
                </div>
              </div>
              <Button
                onClick={() => router.back()}
                className="mt-6 w-1/3 mx-auto bg-blue-500 text-white"
              >
                Back
              </Button>
            </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default ProjectDetails;
