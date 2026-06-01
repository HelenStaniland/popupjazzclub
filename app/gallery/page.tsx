import type { Metadata } from "next";
import GalleryStory from "@/components/GalleryStory";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "A social jazz night — live music, good people, and a warm invitation to come along.",
};

export default function GalleryPage() {
  return <GalleryStory />;
}
