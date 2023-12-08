import { client } from "../../../sanity/lib/client";
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";

import { groq } from "next-sanity";

const page = async () => {
  const projects = await client.fetch(
    groq`*[_type == 'project'] | order(_createdAt desc) { _id, name, description, slug}`,
    { cache: "no-store" }
  );

  return (
    <section className="mx-3">
      <div className="flex flex-wrap justify-center items-center my-10">
        {projects.map((project) => (
          <>
          <div className="w-full md:w-1/3 lg:w-1/4 h-[100%] lg:h-60 m-3 bg-gradient-to-br from-zinc-50 to-gray-50 scale-90 card-holder shadow-2xl shadow-white">
          <Card
            className="h-[100%] text-black lg:h-60 flex flex-col mx-5 p-2 backdrop-blur-2xl bg-blur scale-110 lg:scale-110 border-0" 
            key={project._id}
          >
            <CardTitle className="text-center my-4">{project.name}</CardTitle>
            <CardContent className="flex-grow">
              {project.description}
            </CardContent>
            <CardFooter className="flex self-center items-end p-2 rounded-md border-2 border-black">
              <Link href={`/projects/${project.slug.current}`} className="px-6">
                View
              </Link>
            </CardFooter>
          </Card>
          </div>
          </>
        ))}
      </div>
    </section>
  );
};

export default page;
