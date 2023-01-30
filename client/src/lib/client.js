import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "kignf5cq",
  dataset: "production",
  apiVersion: "2023-01-29", // use current UTC date - see "specifying API version"!
  useCdn: true, // `false` if you want to ensure fresh data
  ignoreBrowserTokenWarning: true,
});
