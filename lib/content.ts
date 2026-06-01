export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join the Club" },
] as const;

export const galleryImages = [
  {
    src: "/gallery/WholeAudience.jpg",
    alt: "A full community hall with red tablecloths, candlelit tables, and a live jazz band on stage",
    caption: "Everyone together",
  },
  {
    src: "/gallery/FromTheStage.jpg",
    alt: "View from the stage of guests chatting and enjoying drinks at candlelit tables",
    caption: "Good company",
  },
  {
    src: "/gallery/Stage.jpg",
    alt: "Local musicians on stage with double bass, drums, and keyboard under warm lighting",
    caption: "Live music",
  },
  {
    src: "/gallery/Audience.jpg",
    alt: "Guests socialising at red-clothed tables while a double bass waits on stage",
    caption: "Relaxed nights out",
  },
  {
    src: "/gallery/FromAbove.jpg",
    alt: "Overhead view of friends mingling around red tables with a piano-keyboard floor runner",
    caption: "Community gathering",
  },
  {
    src: "/gallery/CurtainCall.jpg",
    alt: "Singers and musicians arm in arm on stage at the end of the night",
    caption: "Local talent",
  },
] as const;

export const galleryStory = [
  {
    id: "the-music",
    label: "The Music",
    tagline: "Local singers and musicians, live on stage.",
    layout: "pair",
    images: [
      {
        src: "/gallery/Stage.jpg",
        alt: "Local musicians on stage with double bass, drums, and keyboard",
        caption: "Live on stage.",
      },
      {
        src: "/gallery/CurtainCall.jpg",
        alt: "Singers and musicians arm in arm at curtain call",
        caption: "Friends on stage together.",
      },
    ],
  },
  {
    id: "the-people",
    label: "The People",
    tagline: "Come to hear someone you know — or meet people who love the same thing.",
    layout: "people",
    images: [
      {
        src: "/gallery/WholeAudience.jpg",
        alt: "A full room of guests enjoying live jazz together",
        caption: "Everyone together.",
      },
      {
        src: "/gallery/FromTheStage.jpg",
        alt: "Guests chatting and enjoying drinks at candlelit tables",
        caption: "Laughter and conversation.",
      },
      {
        src: "/gallery/Audience.jpg",
        alt: "Friends socialising at tables during the evening",
        caption: "Catching up over a glass.",
      },
    ],
  },
  {
    id: "the-room",
    label: "The Room",
    tagline: "Relaxed, welcoming, and ready for a great night out.",
    layout: "single",
    images: [
      {
        src: "/gallery/FromAbove.jpg",
        alt: "Guests mingling around candlelit tables in a warm, lively room",
        caption: "Pull up a chair.",
      },
    ],
  },
] as const;

export const features = [
  {
    title: "Live Music",
    description:
      "Local singers and musicians take to the stage — vocals, double bass, piano and drums, playing the standards and songs a room full of friends wants to hear.",
    icon: "♪",
  },
  {
    title: "Good Company",
    description:
      "Red-clothed tables, candles, and a BYOB policy mean everyone settles in for a proper social night. Come to support someone you know, or just come along.",
    icon: "✦",
  },
  {
    title: "Transformed Spaces",
    description:
      "A community hall becomes a jazz club for the evening — table seating, warm lighting, curtains and decoration. Same room, completely different feel.",
    icon: "◈",
  },
] as const;
