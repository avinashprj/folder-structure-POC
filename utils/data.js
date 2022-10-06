// export const data = [
//   {
//     name: "main",
//     description: "NA",
//     product: "NA",
//     baseDataLevel: "Personal Account",
//     children: [
//       {
//         name: "sub",
//         description: "news data",
//         product: "NA",
//         baseDataLevel: "Personal Account",
//         children: [
//           {
//             name: "Child",
//             description: "Child Data",
//             product: "NA",
//             baseDataLevel: "Personal Account",
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: "B",
//     description: "NA",
//     product: "NA",
//     baseDataLevel: "Personal Account",
//     children: [
//       {
//         name: "sub",
//         description: "news data",
//         product: "NA",
//         baseDataLevel: "Personal Account",
//         children: [
//           {
//             name: "Child",
//             description: "Child Data",
//             product: "NA",
//             baseDataLevel: "Personal Account",
//           },
//         ],
//       },
//     ],
//   },
// ];

export const data = [
  { id: 1, hierarchy: ["Documents"], type: "folder" },
  { id: 2, hierarchy: ["Documents", "txt"], type: "folder" },
  {
    id: 3,
    hierarchy: ["Documents", "txt", "notes.txt"],
    type: "file",
    dateModified: "May 21 2017 01:50:00 PM",
    size: 14.7,
  },
  { id: 4, hierarchy: ["Documents", "pdf"], type: "folder" },
  {
    id: 5,
    hierarchy: ["Documents", "pdf", "book.pdf"],
    type: "file",
    dateModified: "May 20 2017 01:50:00 PM",
    size: 2.1,
  },
  {
    id: 6,
    hierarchy: ["Documents", "pdf", "cv.pdf"],
    type: "file",
    dateModified: "May 20 2016 11:50:00 PM",
    size: 2.4,
  },
  { id: 11, hierarchy: ["Music"], type: "folder" },
  { id: 12, hierarchy: ["Music", "mp3"], type: "folder" },
  {
    id: 13,
    hierarchy: ["Music", "mp3", "theme.mp3"],
    type: "file",
    dateModified: "Sep 11 2016 08:03:00 PM",
    size: 14.3,
  },
  { id: 14, hierarchy: ["Misc"], type: "folder" },
  {
    id: 15,
    hierarchy: ["Misc", "temp.txt"],
    type: "file",
    dateModified: "Aug 12 2016 10:50:00 PM",
    size: 101,
  },
];
