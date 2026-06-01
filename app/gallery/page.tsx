import type { Metadata } from "next";
import GalleryStory from "@/components/GalleryStory";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Pop Up Jazz Club — live music, local community, and good evenings in Herne Hill.",
};

export default function GalleryPage() {
  return <GalleryStory />;
}
