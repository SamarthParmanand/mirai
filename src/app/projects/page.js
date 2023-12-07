import { client } from "../../../sanity/lib/client";
import { Card, CardContent, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";

import { groq } from "next-sanity";

const page = async () => {
  const projects = await client.fetch(
    groq`*[_type == 'project']{ _id, name, description, slug}`
  );

  return (
    <section className="mx-3">
      <div className="flex flex-wrap justify-center items-center my-10">
        {projects.map((project) => (
          <Card
            className="w-full md:w-1/3 lg:w-1/3 h-[100%] lg:h-60 m-3 flex flex-col p-2 bg-gray-200"
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
        ))}
      </div>
    </section>
  );
};

export default page;
