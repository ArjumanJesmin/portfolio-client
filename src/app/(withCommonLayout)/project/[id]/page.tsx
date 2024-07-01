"use client";
import { ProjectData } from "@/app/(withCommonLayout)/project/components/interface";
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@nextui-org/react";

const ProjectDetails = () => {
  const params = useParams();
  const router = useRouter();
  const { id } = params;
  const [project, setProject] = useState<ProjectData | null>(null);

  useEffect(() => {
    if (id) {
      const fetchProject = async () => {
        try {
          const response = await fetch(
            `https://portfolio-server-inky-six.vercel.app/api/v1/project/${id}`
          );
          console.log(response);
          if (response.ok) {
            const projectData = await response.json();
            setProject(projectData);
          } else {
            console.error("Failed to fetch project:", response.statusText);
          }
        } catch (error) {
          console.error("Error fetching project:", error);
        }
      };

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
    <div className="container mx-auto  p-20 m-24 border border-lime-100 shadow-xl">
      <h1>{title}</h1>
      <p>{description}</p>
      <Image
        alt="Project Image"
        className="object-cover"
        height={200}
        src={photo}
        width={200}
      />
      <p>
        Live Link:{" "}
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          {liveLink}
        </a>
      </p>
      <p>
        GitHub Link:{" "}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          {githubLink}
        </a>
      </p>
      <p>
        GitHub Server Link:{" "}
        <a href={githubServerLink} target="_blank" rel="noopener noreferrer">
          {githubServerLink}
        </a>
      </p>
      <p>Features: {features?.join(", ") || "No features listed"}</p>
      <p>
        Technologies: {technologies?.join(", ") || "No technologies listed"}
      </p>
      <Button onClick={() => router.back()}>Back</Button>
    </div>
  );
};

export default ProjectDetails;
