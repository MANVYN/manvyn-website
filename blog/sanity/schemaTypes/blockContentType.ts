
import { defineType, defineField, defineArrayMember } from "sanity";
// import { ImageIcon } from "@sanity/icons";
import {ImageIcon} from '@sanity/icons/Image'


const columnContent = [
  defineArrayMember({
    type: "block",
    styles: [
      { title: "Normal", value: "normal" },
      { title: "H2", value: "h2" },
      { title: "H3", value: "h3" },
      { title: "H4", value: "h4" },
      { title: "Quote", value: "blockquote" },
    ],
    lists: [
      { title: "Bullet", value: "bullet" },
      { title: "Numbered", value: "number" },
    ],
    marks: {
      decorators: [
        { title: "Strong", value: "strong" },
        { title: "Emphasis", value: "em" },
      ],
      annotations: [
        {
          title: "External Link",
          name: "link",
          type: "object",
          fields: [
            defineField({
              title: "URL",
              name: "href",
              type: "url",
              validation: (Rule) =>
                Rule.required().uri({
                  scheme: ["http", "https", "mailto"],
                }),
            }),
          ],
        },
      ],
    },
  }),
  defineArrayMember({
    type: "image",
    title: "Image",
    icon: ImageIcon,
    options: { hotspot: true },
    fields: [
      defineField({
        name: "alt",
        title: "Alternative Text",
        type: "string",
        validation: (Rule) => Rule.required(),
      }),
      defineField({
        name: "height",
        title: "Display Height",
        type: "number",
        description: "Optional image height in pixels.",
        validation: (Rule) => Rule.min(80).max(1200),
      }),
      defineField({
        name: "fit",
        title: "Image Fit",
        type: "string",
        initialValue: "cover",
        options: {
          list: [
            { title: "Cover", value: "cover" },
            { title: "Contain", value: "contain" },
          ],
          layout: "radio",
        },
      }),
    ],
  }),
];

export const blockContentType = defineType({
  name: "blockContent",
  title: "Article Content",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      title: "Text",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Quote", value: "blockquote" },
      ],
      lists: [
        { title: "Bullet", value: "bullet" },
        { title: "Numbered", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Strong", value: "strong" },
          { title: "Emphasis", value: "em" },
        ],
        annotations: [
          {
            title: "External Link",
            name: "link",
            type: "object",
            fields: [
              defineField({
                name: "href",
                title: "URL",
                type: "url",
                validation: (Rule) =>
                  Rule.required().uri({
                    scheme: ["http", "https", "mailto"],
                  }),
              }),
            ],
          },
        ],
      },
    }),

    defineArrayMember({
      type: "image",
      title: "Full-width Image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: "height",
          title: "Display Height",
          type: "number",
          description: "Optional height in pixels.",
          validation: (Rule) => Rule.min(80).max(1200),
        }),
        defineField({
          name: "fit",
          title: "Image Fit",
          type: "string",
          initialValue: "cover",
          options: {
            list: [
              { title: "Cover", value: "cover" },
              { title: "Contain", value: "contain" },
            ],
            layout: "radio",
          },
        }),
      ],
    }),

    defineArrayMember({
      name: "columnLayout",
      title: "Columns Layout",
      type: "object",
      fields: [
        defineField({
          name: "columns",
          title: "Columns",
          type: "array",
          description:
            "Add two, three, or four columns. Set their widths as percentages.",
          of: [
            defineArrayMember({
              name: "column",
              title: "Column",
              type: "object",
              fields: [
                defineField({
                  name: "widthPercent",
                  title: "Width (%)",
                  type: "number",
                  initialValue: 50,
                  validation: (Rule) =>
                    Rule.required().min(10).max(90),
                }),
                defineField({
                  name: "content",
                  title: "Column Content",
                  type: "array",
                  of: columnContent,
                }),
              ],
              preview: {
                select: {
                  width: "widthPercent",
                  content: "content",
                },
                prepare({ width, content }) {
                  return {
                    title: `Column — ${width ?? 50}%`,
                    subtitle: `${content?.length ?? 0} content items`,
                  };
                },
              },
            }),
          ],
          validation: (Rule) =>
            Rule.required()
              .min(2)
              .max(4)
              .custom((columns) => {
                if (!Array.isArray(columns) || columns.length < 2) return true;

                const total = columns.reduce<number>((sum, item) => {
                  const column = item as { widthPercent?: number };
                  return sum + (column.widthPercent ?? 0);
                }, 0);

                return total === 100
                  ? true
                  : `Column widths must total 100%. Current total: ${total}%.`;
              })
        }),
        defineField({
          name: "gap",
          title: "Column Gap",
          type: "string",
          initialValue: "medium",
          options: {
            list: [
              { title: "Small", value: "small" },
              { title: "Medium", value: "medium" },
              { title: "Large", value: "large" },
            ],
            layout: "radio",
          },
        }),
      ],
      preview: {
        select: {
          columns: "columns",
        },
        prepare({ columns }) {
          return {
            title: "Columns Layout",
            subtitle: `${columns?.length ?? 0} columns`,
          };
        },
      },
    }),
  ],
});
