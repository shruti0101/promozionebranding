import { createClient } from "@sanity/client"
import imageUrlBuilder from "@sanity/image-url"

export const client = createClient({
  projectId: "nnn9w8nx",
  dataset: "production",
  apiVersion: "2023-01-01", // ✅ use a real past date
  useCdn: false,            // ✅ show drafts too
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
