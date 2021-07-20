import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "zp6t7zn3",
  dataset: "production",
  apiVersion: 'v2021-07-20',
  useCdn: true,
})

