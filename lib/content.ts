export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join the Club" },
] as const;

export const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1415201364774-f6f0f135b25b?w=800&q=80",
    alt: "Saxophone player in warm stage lighting",
    caption: "Live performance",
  },
  {
    src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    alt: "Intimate jazz club atmosphere with candlelight",
    caption: "Club atmosphere",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    alt: "Vocalist performing with a jazz ensemble",
    caption: "Vocal jazz",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    alt: "Audience enjoying live music in an intimate venue",
    caption: "Great company",
  },
  {
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    alt: "Piano keys in soft golden light",
    caption: "Piano trio",
  },
  {
    src: "https://images.unsplash.com/photo-1507838153414-b4b7137a6581?w=800&q=80",
    alt: "Transformed space set up for an evening of jazz",
    caption: "Unexpected spaces",
  },
] as const;

export const features = [
  {
    title: "Live Music",
    description:
      "Acoustic jazz performed up close — standards, swing, and soul delivered by talented musicians who play for the room, not the rafters.",
    icon: "♪",
  },
  {
    title: "Club Atmosphere",
    description:
      "Candlelit tables, low lights, and the hum of conversation. Dress up or come as you are — every night feels like your own private club.",
    icon: "✦",
  },
  {
    title: "Unexpected Spaces",
    description:
      "From village halls to drawing rooms, we transform ordinary places into intimate jazz clubs for one unforgettable evening.",
    icon: "◈",
  },
] as const;
