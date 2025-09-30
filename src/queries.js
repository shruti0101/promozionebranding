import { client } from "./sanityClient"

export const getAllPosts = async () => {
  return client.fetch(`*[_type == "post"] | order(_createdAt desc){
    _id,
    title,
      slug,
      excerpt,
    metaTitle,
    metaDescription,
    body,
     mainImage, 
    _createdAt
  }`)
}

export const getSinglePost = async (slug ) => {
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      title,
        slug,
       metaTitle,
      metaDescription,
      body,
       mainImage,
      _createdAt
    }`,
    { slug  }
  )
}
