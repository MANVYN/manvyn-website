// // import {UserIcon} from '@sanity/icons/User'
// // import {defineArrayMember, defineField, defineType} from 'sanity'

// // export const authorType = defineType({
// //   name: 'author',
// //   title: 'Author',
// //   type: 'document',
// //   icon: UserIcon,
// //   fields: [
// //     defineField({
// //       name: 'name',
// //       type: 'string',
// //     }),
// //     defineField({
// //       name: 'slug',
// //       type: 'slug',
// //       options: {
// //         source: 'name',
// //       },
// //     }),
// //     defineField({
// //       name: 'image',
// //       type: 'image',
// //       options: {
// //         hotspot: true,
// //       },
// //     }),
// //     defineField({
// //       name: 'bio',
// //       type: 'array',
// //       of: [
// //         defineArrayMember({
// //           type: 'block',
// //           styles: [{title: 'Normal', value: 'normal'}],
// //           lists: [],
// //         }),
// //       ],
// //     }),
// //   ],
// //   preview: {
// //     select: {
// //       title: 'name',
// //       media: 'image',
// //     },
// //   },
// // })




// // import { UserIcon } from "@sanity/icons";
// import {UserIcon} from '@sanity/icons/User'
// import { defineArrayMember, defineField, defineType } from "sanity";

// export const authorType = defineType({
//   name: "author",
//   title: "Author",
//   type: "document",
//   icon: UserIcon,

//   fields: [
//     defineField({
//       name: "name",
//       title: "Author Name",
//       type: "string",
//       validation: (Rule) => Rule.required().max(80),
//     }),

//     defineField({
//       name: "slug",
//       title: "URL Slug",
//       type: "slug",
//       options: {
//         source: "name",
//         maxLength: 48,
//       },
//       validation: (Rule) => Rule.required(),
//     }),

//     defineField({
//       name: "image",
//       title: "Profile Image",
//       type: "image",
//       options: {
//         hotspot: true,
//       },
//       fields: [
//         defineField({
//           name: "alt",
//           title: "Alternative Text",
//           type: "string",
//           description: "Describe the author image for accessibility.",
//         }),
//       ],
//     }),

//     defineField({
//       name: "bio",
//       title: "Biography",
//       type: "array",
//       of: [
//         defineArrayMember({
//           type: "block",
//           styles: [{ title: "Normal", value: "normal" }],
//           lists: [],
//         }),
//       ],
//       description: "A short biography displayed on the article page.",
//     }),
//   ],

//   preview: {
//     select: {
//       title: "name",
//       media: "image",
//     },
//   },
// });




import {UserIcon} from '@sanity/icons/User'
import { defineArrayMember, defineField, defineType } from "sanity";

export const authorType = defineType({
  name: "author",
  title: "Author",
  type: "document",
  icon: UserIcon,

  fields: [
    defineField({
      name: "name",
      title: "Author Name",
      type: "string",
      validation: (Rule) =>
        Rule.required().max(80).warning("Author name is recommended"),
    }),

    defineField({
      name: "slug",
      title: "URL Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 48,
      },
      validation: (Rule) =>
        Rule.required().warning("Add a slug for a clean URL"),
    }),

    defineField({
      name: "image",
      title: "Profile Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative Text",
          type: "string",
          description: "Describe the author image for accessibility.",
        }),
      ],
    }),

    defineField({
      name: "bio",
      title: "Biography",
      type: "array",
      of: [
        defineArrayMember({
          type: "block",
          styles: [{ title: "Normal", value: "normal" }],
          lists: [],
        }),
      ],
      description: "A short biography displayed on the article page.",
    }),
  ],

  preview: {
    select: {
      title: "name",
      media: "image",
    },
  },
});
