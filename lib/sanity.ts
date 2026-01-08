import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "hppwja2l",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false, // Turn off CDN for fresh data during dev, or on for prod
});
