import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import Link from "next/link";
import ImageWithDialog from "@/components/ImageWithDialog";


async function page({ params }) {
  const slug = params["project-slug"];

  const data = await client.fetch(
    groq`*[_type == 'project' && slug.current == "${slug}"]`
  );
  const { name, description, images } = data[0];

  return (
      <div className="flex flex-col justify-start items-center text-white my-3 lg:my-10 overflow-x-hidden">
        <h1 className="text-xl lg:text-3xl m-2">{name}</h1>
        <h2 className="lg:text-2xl px-5 text-gray-400 text-center">
          {description}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-12 p-[5%]">
          {images.map((img, index) => (
            <ImageWithDialog
              key={img._key}
              img={img}
              index={index}
              name={name}
            />
          ))}
        </div>
        <button className="h-8 w-24 lg:h-16 lg:w-40 text-black bg-gray-300 rounded-md m-2 lg:m-5 text-sm lg:text-xl fixed top-[94%] lg:top-[90%]">
          <Link href={"/projects"}>Go back</Link>
        </button>
      </div>
  );
}

export default page;
