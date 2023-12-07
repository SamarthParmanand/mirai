/* eslint-disable @next/next/no-img-element */
import { client } from "../../../../sanity/lib/client";
import { groq } from "next-sanity";
import { urlForImage } from "../../../../sanity/lib/image";
import Link from "next/link";
import { Dialog, DialogContent, DialogClose } from "@radix-ui/react-dialog";

async function page({ params }) {
  const slug = params["project-slug"];

  const data = await client.fetch(
    groq`*[_type == 'project' && slug.current == "${slug}"]`
  );
  const { name, description, images } = data[0];

    const toggleModal = (url) => {
      // console.log(url)
      console.log('her')
    }

  return (
    <div className="flex flex-col justify-start items-center text-white my-10 overflow-x-hidden">
      <h1 className="text-3xl m-2">{name}</h1>
      <h2 className="text-2xl text-gray-400">{description}</h2>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-12 p-[5%]">
        {images.map((img) => (
          <>
            <img
              key={img._key}
              src={urlForImage(img).url()}
              alt={`${name} Image`}
              className="w-full h-full object-cover cursor-pointer"
              onClick={toggleModal(img)}
            />
          </>
        ))}
      </div>
      <button className="h-8 w-24 lg:h-16 lg:w-40 text-black bg-gray-300 rounded-md m-2 lg:m-5 text-sm lg:text-xl">
        <Link href={"/projects"}>Go back</Link>
      </button>
    </div>
  );
}

export default page;
