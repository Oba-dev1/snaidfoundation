import { createClient } from "next-sanity";

export const client = createClient({
    projectId: "hppwja2l",
    dataset: "production",
    apiVersion: "2024-01-01",
    useCdn: false,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN, // Needed for write operations (create volunteer)
});
