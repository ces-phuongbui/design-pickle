import { strapi } from "@strapi/client";

const client = strapi({
  baseURL: process.env.STRAPI_URL || "http://localhost:1337/api",
  auth: process.env.STRAPI_TOKEN,
});
export default client;
