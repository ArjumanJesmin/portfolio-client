"use client";
import React, { useState, useEffect } from "react";
import {
  Avatar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
} from "@nextui-org/react";
import Link from "next/link";
import ActionSubmitButton from "../submitButton/ActionSubmitButton";
import axios from "axios";

interface BlogData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
}

const RecentBlogs = () => {
  const [blogs, setBlogs] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get(
          "https://portfolio-server-inky-six.vercel.app/api/v1/blog"
        );
        console.log(response.data);
        if (response.status === 200) {
          setBlogs(response.data.data); // Access the 'data' array from response
        } else {
          throw new Error("Failed to fetch blogs");
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="container mx-auto py-8">
      <h2 className="text-center text-primary font-semibold text-3xl my-4">
        Recent Blogs
      </h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {blogs.length > 0 ? (
          blogs.slice(0, 3).map((blog) => (
            <Card key={blog.id} className="max-w-[340px]">
              <CardHeader className="justify-between">
                <div className="flex gap-5">
                  <Avatar
                    isBordered
                    radius="full"
                    size="md"
                    src="https://nextui.org/avatars/avatar-1.png"
                  />
                  <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-semibold leading-none text-default-600">
                      {blog.title}
                    </h4>
                    <h5 className="text-small tracking-tight text-default-400">
                      {blog.subtitle}
                    </h5>
                  </div>
                </div>
              </CardHeader>
              <CardBody className="px-3 py-0 text-small text-default-400">
                <p>{blog.content}</p>
              </CardBody>
            </Card>
          ))
        ) : (
          <p className="text-center">No blogs available</p>
        )}
      </div>
      <div className="flex justify-center mt-8">
        <Link href="/blog">
          <ActionSubmitButton>Write a Blog</ActionSubmitButton>
        </Link>
      </div>
    </div>
  );
};

export default RecentBlogs;
