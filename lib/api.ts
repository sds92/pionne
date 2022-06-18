// const API_URL = process.env.WP_API_URL;

// async function fetchAPI(query: any, { variables }: any = {}) {
//   // Set up some headers to tell the fetch call
//   // that this is an application/json type
//   const headers = { 'Content-Type': 'application/json' };

//   // build out the fetch() call using the API_URL
//   // environment variable pulled in at the start
//   // Note the merging of the query and variables
//   const res = await fetch(API_URL, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify({ query, variables }),
//   });

//   // error handling work
//   const json = await res.json();
//   if (json.errors) {
//     console.log(json.errors);
//     console.log('error details', query, variables);
//     throw new Error('Failed to fetch API');
//   }
//   return json.data;
// }

// export async function getAllPosts(preview: any) {
//   const data = await fetchAPI(
//     `
//     query AllPosts {
//         posts {
//             edges {
//                 node {
//                     date
//                     title
//                     slug
//                     id
//                     authorId
//                 }
//             }
//         }
//     }
//     `
//   );

//   return data?.posts;
// }

// export async function getAllPostsWithSlug() {
//   const data = await fetchAPI(
//     `
//       {
//         posts {
//           edges {
//             node {
//               slug
//             }
//           }
//         }
//       }
//     `
//   );
//   return data?.posts;
// }

// export async function getPost(slug: string) {
//   const data = await fetchAPI(
//     `
//       fragment PostFields on Post {
//         title
//         slug
//         date
//       }
//       query PostBySlug($id: ID!, $idType: PostIdType!) {
//         post(id: $id, idType: $idType) {
//           ...PostFields
//           content
//         }
//       }
//     `,
//     {
//       variables: {
//         id: slug,
//         idType: 'SLUG',
//       },
//     }
//   );

//   return data;
// }
