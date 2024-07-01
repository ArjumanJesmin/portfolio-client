"use client";
import { ProjectData } from "@/app/(withCommonLayout)/project/components/interface";
import { Button, Card, CardFooter } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Project = () => {
  const [data, setData] = useState<ProjectData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://portfolio-server-inky-six.vercel.app/api/v1/project"
        );
        if (response.ok) {
          const projects = await response.json();
          setData(projects);
        } else {
          console.error("Failed to fetch projects:", response.statusText);
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  const handleDetailsClick = (id: string) => {
    router.push(`/project/${id}`);
  };

  return (
    <div className="grid grid-cols-3 gap-5 p-20 min-h-screen bg-secondary">
      {data?.data?.map((project: ProjectData) => (
        <Card
          key={project.id}
          isFooterBlurred
          radius="lg"
          className="border-none"
        >
          <Image
            alt="Project Image"
            className="object-cover"
            height={200}
            src={project?.photo}
            width={200}
          />
          <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <p className="text-tiny text-white/80">{project?.title}</p>
            <Button
              className="text-tiny text-white bg-black/20"
              variant="flat"
              color="default"
              radius="lg"
              size="sm"
              onClick={() => handleDetailsClick(project.id)}
            >
              Details
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Project;
