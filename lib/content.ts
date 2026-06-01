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
    alt: "Local musician playing saxophone on stage",
    caption: "Live music",
  },
  {
    src: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&q=80",
    alt: "Friends gathered around candlelit tables",
    caption: "Good company",
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
    alt: "Local singer performing with musicians",
    caption: "Local talent",
  },
  {
    src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=800&q=80",
    alt: "Audience chatting and enjoying the music together",
    caption: "Shared nights out",
  },
  {
    src: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80",
    alt: "Pianist playing during a relaxed jazz evening",
    caption: "Relaxed vibes",
  },
  {
    src: "https://images.unsplash.com/photo-1507838153414-b4b7137a6581?w=800&q=80",
    alt: "Community hall dressed with tables, lighting and decoration",
    caption: "Transformed spaces",
  },
] as const;

export const features = [
  {
    title: "Live Music",
    description:
      "Local singers and musicians take to the stage — standards, swing, and songs you know and love, played by people from your community.",
    icon: "♪",
  },
  {
    title: "Good Company",
    description:
      "Come to hear a friend perform, meet other music lovers, or just enjoy a relaxed night out. Everyone's welcome — no jazz knowledge required.",
    icon: "✦",
  },
  {
    title: "Transformed Spaces",
    description:
      "We dress a hall or room with tables, lighting and decoration to create a jazz club feel — but the real magic is the people in the room.",
    icon: "◈",
  },
] as const;
