
// import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Category",
  type: "document",
  // icon: TagIcon,

  fields: [
    defineField({
      name: "title",
      title: "Category Name",
      type: "string",
      validation: (Rule) => Rule.required().max(40),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 48,
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
      description: "A short description of this blog category.",
    }),
  ],

  preview: {
    select: {
      title: "title",
      subtitle: "description",
    },
  },
});
