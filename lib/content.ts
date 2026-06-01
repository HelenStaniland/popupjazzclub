export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join the Club" },
] as const;

export const galleryImages = [
  {
    src: "/gallery/Stage.jpg",
    alt: "Local musicians performing live on stage",
    caption: "Live music",
  },
  {
    src: "/gallery/WholeAudience.jpg",
    alt: "A full room of friends and neighbours enjoying the evening",
    caption: "Familiar faces",
  },
  {
    src: "/gallery/FromTheStage.jpg",
    alt: "Guests chatting at tables during the performance",
    caption: "Good company",
  },
  {
    src: "/gallery/CurtainCall.jpg",
    alt: "Singers and musicians together at curtain call",
    caption: "Local talent",
  },
  {
    src: "/gallery/Audience.jpg",
    alt: "Friends socialising between sets",
    caption: "Relaxed evenings",
  },
  {
    src: "/gallery/FromAbove.jpg",
    alt: "A warm, candlelit room full of people",
    caption: "The room",
  },
] as const;

export const galleryStory = [
  {
    id: "live-music",
    label: "Live Music",
    tagline: "Jazz standards, favourites, and the occasional surprise.",
    layout: "pair",
    images: [
      {
        src: "/gallery/Stage.jpg",
        alt: "Local musicians on stage with double bass, drums, and keyboard",
        caption: "On stage in Herne Hill.",
      },
      {
        src: "/gallery/CurtainCall.jpg",
        alt: "Singers and musicians arm in arm at curtain call",
        caption: "Local singers and musicians.",
      },
    ],
  },
  {
    id: "the-people",
    label: "The People",
    tagline: "Friends supporting friends — and plenty of room for new ones.",
    layout: "people",
    images: [
      {
        src: "/gallery/WholeAudience.jpg",
        alt: "A full room of guests enjoying live jazz together",
        caption: "Everyone together.",
      },
      {
        src: "/gallery/FromTheStage.jpg",
        alt: "Guests chatting and enjoying drinks at tables",
        caption: "Supporting someone you know.",
      },
    ],
  },
  {
    id: "herne-hill",
    label: "Herne Hill",
    tagline: "A local night, rooted in the neighbourhood.",
    layout: "single",
    images: [
      {
        src: "/gallery/Audience.jpg",
        alt: "Herne Hill friends and neighbours at a jazz evening",
        caption: "The local musical community.",
      },
    ],
  },
  {
    id: "the-room",
    label: "The Room",
    tagline: "Warm lighting, table seating, and a relaxed jazz club feel.",
    layout: "single",
    images: [
      {
        src: "/gallery/FromAbove.jpg",
        alt: "Candlelit tables in a warmly lit room",
        caption: "Pull up a chair.",
      },
    ],
  },
] as const;

export const features = [
  {
    title: "Live Music",
    description:
      "Local singers and musicians sharing jazz standards, favourites and occasional surprises.",
    icon: "♪",
  },
  {
    title: "The People",
    description:
      "Friends supporting friends, audiences discovering new performers, and a welcoming atmosphere for newcomers.",
    icon: "✦",
  },
  {
    title: "Herne Hill",
    description:
      "A local event rooted in the Herne Hill community and musical scene — choirs, musicians and music lovers from the area.",
    icon: "◉",
  },
  {
    title: "The Room",
    description:
      "Tables, candlelight and a jazz club feel for the evening. The setting supports the night — the people make it.",
    icon: "◈",
  },
] as const;
