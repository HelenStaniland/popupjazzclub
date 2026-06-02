export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join the Club" },
] as const;

export const singerPhotos = [
  {
    src: "/gallery/Singer1.jpg",
    alt: "Local singer performing with the house band",
  },
  {
    src: "/gallery/Singer2.jpg",
    alt: "Local singer performing on stage",
  },
  {
    src: "/gallery/Singer3.jpg",
    alt: "Local singer at the microphone",
  },
  {
    src: "/gallery/Singer4.jpg",
    alt: "Local singer performing a jazz standard",
  },
  {
    src: "/gallery/Singer5.jpg",
    alt: "Local singer at the microphone",
  },
  {
    src: "/gallery/Singer6.jpg",
    alt: "Local singer performing on stage",
  },
  {
    src: "/gallery/Singer7.jpg",
    alt: "Local singer performing with the house band",
  },
] as const;

export const galleryImages = [
  { src: "/gallery/Duet.jpg", alt: "Two local singers performing a duet", caption: "Duet" },
  { src: "/gallery/Singer1.jpg", alt: "Local singer performing on stage", caption: "Local voices" },
  { src: "/gallery/Singer3.jpg", alt: "Local singer at the microphone", caption: "Live music" },
  { src: "/gallery/AfterParty.jpg", alt: "Friends chatting after the performance", caption: "Good company" },
  { src: "/gallery/FromTheStage.jpg", alt: "Audience enjoying the evening together", caption: "The community" },
  { src: "/gallery/Keyboards.jpg", alt: "Pianist playing with the house band", caption: "House band" },
  { src: "/gallery/Bass.jpg", alt: "Double bass player on stage", caption: "Double bass" },
  { src: "/gallery/FromAbove.jpg", alt: "Candlelit tables in a warmly lit room", caption: "The room" },
] as const;

export const galleryStory = [
  {
    id: "the-music",
    label: "The Music",
    tagline: "Local singers, supported by a live band.",
    layout: "singers",
    images: [
      {
        src: "/gallery/Duet.jpg",
        alt: "Two local singers performing a duet on stage",
        caption: "Duets and collaborations.",
      },
      ...singerPhotos.map(({ src, alt }) => ({
        src,
        alt,
        caption: "Local voices.",
      })),
    ],
  },
  {
    id: "the-community",
    label: "The Community",
    tagline: "Friends, supporters, and fellow music lovers.",
    layout: "pair",
    images: [
      {
        src: "/gallery/AfterParty.jpg",
        alt: "Friends chatting and enjoying the evening together",
        caption: "After the music — conversation and laughter.",
      },
      {
        src: "/gallery/Audience.jpg",
        alt: "Audience members socialising at tables between sets",
        caption: "Supporting someone you know.",
      },
    ],
  },
  {
    id: "herne-hill",
    label: "Herne Hill",
    tagline: "Born in Herne Hill and open to everyone.",
    layout: "text",
    images: [],
  },
  {
    id: "the-room",
    label: "The Room",
    tagline: "Candles, tablecloths, and a jazz club feel for the evening.",
    layout: "single",
    images: [
      {
        src: "/gallery/FromAbove.jpg",
        alt: "Candlelit tables in a warmly lit room",
        caption: "The setting for the night.",
      },
    ],
  },
] as const;

export const houseBand = [
  {
    name: "Piano",
    src: "/gallery/Keyboards.jpg",
    alt: "Pianist playing with the house band",
    description: "Standards, accompaniment, and the occasional solo.",
  },
  {
    name: "Double bass",
    src: "/gallery/Bass.jpg",
    alt: "Double bass player on stage",
    description: "The foundation of every set.",
  },
  {
    name: "Drums",
    src: "/gallery/Drummer.png",
    alt: "Drummer with the house band on stage",
    description: "Swing, groove, and keeping the room moving.",
  },
] as const;
