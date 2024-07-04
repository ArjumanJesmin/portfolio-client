"use client";
import { ProjectData } from "@/app/(withCommonLayout)/project/components/interface";
import { Button, Card, CardFooter } from "@nextui-org/react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Project = () => {
  const [data, setData] = useState<ProjectData[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-server-inky-six.vercel.app/api/v1/project"
        );

        if (response.status === 200) {
          const projects = response.data.data;
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
    <div className="p-20 min-h-screen bg-secondary">
      <h2 className="text-center text-primary font-semibold text-3xl my-8 ">
        My Projects
      </h2>
      <div className="grid grid-cols-3  gap-5">
        {data.slice(0, 6).map((project: ProjectData) => (
          <Card
            key={project.id}
            isFooterBlurred
            radius="lg"
            className="border-none relative"
          >
            <Image
              alt="Project Image"
              className="object-cover"
              height={200}
              src={project?.photo}
              width={400}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny">{project?.title}</p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="primary"
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
    </div>
  );
};

export default Project;
