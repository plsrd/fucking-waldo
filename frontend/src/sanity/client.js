import sanityClient from "@sanity/client"

export default sanityClient({
  projectId: "zp6t7zn3",
  dataset: "production",
  apiVersion: 'v2021-07-20',
  token: process.env.REACT_APP_WRITE_TOKEN,
  useCdn: true,
})

