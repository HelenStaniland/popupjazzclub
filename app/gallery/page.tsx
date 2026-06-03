import type { Metadata } from "next";
import GalleryStory from "@/components/GalleryStory";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Moments from Pop Up Jazz Club — live jazz, local voices and good company in Herne Hill.",
};

export default function GalleryPage() {
  return <GalleryStory />;
}
