/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { client } from "../../../sanity/lib/client";
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";

import { groq } from "next-sanity";
import { useState, useEffect } from "react";

const Page = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    const fetchprojects = async () => {
      let data = await client.fetch(
        groq`*[_type == 'project'] | order(_createdAt desc) { _id, name, description, slug}`,
        { cache: "no-store" }
      );
      setProjects(data);
    };
    fetchprojects();
  }, []);

  return (
    <section className="mx-3">
      <div className="flex flex-wrap justify-center items-center my-2 lg:my-10">
        {projects.map((project) => (
            <div
              key={project._id}
              className="w-full md:w-1/3 lg:w-1/4 h-[100%] lg:h-60 m-1.5 lg:m-3 bg-gradient-to-br from-zinc-50 to-gray-50 scale-85 card-holder shadow-2xl shadow-white"
            >
              <Card
                className="h-[100%] w-[90vw] -translate-x-1 lg:w-full text-black lg:h-60 flex flex-col mx-3 p-2 backdrop-blur-2xl bg-blur scale-110 lg:scale-110 border-0"
              >
                <CardTitle className="text-center my-4">
                  {project.name}
                </CardTitle>
                <CardContent className="flex-grow">
                  {project.description}
                </CardContent>
                <CardFooter className="flex self-center items-end p-2 rounded-md border-2 border-black">
                  <Link
                    href={`/projects/${project.slug.current}`}
                    className="px-6"
                  >
                    View
                  </Link>
                </CardFooter>
              </Card>
            </div>
        ))}
      </div>
    </section>
  );
};

export default Page;
