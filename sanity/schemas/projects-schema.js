import { defineType } from "sanity";

export const project = defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      description: 'Name of the Project.',
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      description: 'Slug is the part of the url which uniquely identifies the project, you just need to click the generate button.',
      options: {
        source: "name",
        slugify: (input) => input.toLowerCase().replace(/\s+/g, "-"),
      },
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      description: "A brief description of the project (200 words limit)",
      validation: (Rule) =>
        Rule.max(200).warning(
          "Try to keep the description under 200 words for better readability."
        ),
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      description: 'Select multiple images, drag and drop into the square to upload all.',
      of: [
        {
          type: "image",
        },
      ],
    },
  ],
});
