import Studio from "@/components/Studio";



export { metadata, viewport } from "next-sanity/studio";

export function generateStaticParams() {
    return [{ index: [] }];
}

export default function StudioPage() {
    return <Studio />;
}
