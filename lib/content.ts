export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/join", label: "Join the Club" },
] as const;

type SingerPhoto = {
  src: string;
  alt: string;
  objectPosition?: string;
};

export const singerPhotos: SingerPhoto[] = [
  {
    src: "/gallery/Singer1.jpg",
    alt: "Local singer performing with the house band",
  },
  {
    src: "/gallery/Singer2.jpg",
    alt: "Local singer performing on stage",
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
    src: "/gallery/Singer7.png",
    alt: "Local singer performing with the house band",
    objectPosition: "top",
  },
  {
    src: "/gallery/Duet.jpg",
    alt: "Two local singers performing a duet on stage",
    objectPosition: "top",
  },
  {
    src: "/gallery/Singer9.png",
    alt: "Local singer performing on stage",
  },
];

export const communityPhotos = [
  {
    src: "/gallery/AfterParty.jpg",
    alt: "Friends chatting and enjoying the evening together",
  },
  {
    src: "/gallery/WholeAudience.jpg",
    alt: "A full room of friends, neighbours and music lovers",
  },
  {
    src: "/gallery/FromTheStage.jpg",
    alt: "Audience members talking and laughing during the performance",
  },
  {
    src: "/gallery/Audience.jpg",
    alt: "Friends and neighbours socialising between sets",
  },
] as const;

export const galleryImages = [
  { src: "/gallery/SingerWithBand.png", alt: "Local singer with the house band", caption: "Live music" },
  { src: "/gallery/Duet.jpg", alt: "Two local singers performing a duet", caption: "Duet" },
  { src: "/gallery/AfterParty.jpg", alt: "Friends chatting after the performance", caption: "Good company" },
  { src: "/gallery/WholeAudience.jpg", alt: "Everyone together in the room", caption: "Everyone together" },
] as const;

export const galleryStory = [
  {
    id: "the-music",
    label: "The Music",
    tagline: "Local singers, supported by a live band.",
    layout: "singers",
    images: singerPhotos.map(({ src, alt, objectPosition }) => ({
      src,
      alt,
      caption: "Local voices.",
      ...(objectPosition ? { objectPosition } : {}),
    })),
    wideImages: [
      {
        src: "/gallery/SingerWithBand.png",
        alt: "Local singer performing with the full house band",
        caption: "With the house band.",
      },
      {
        src: "/gallery/SingerDrummer.png",
        alt: "Local singer performing with the drummer",
        caption: "Live on stage.",
        objectPosition: "center 26%",
      },
      {
        src: "/gallery/SingerBandInteraction.png",
        alt: "Singer and house band together on stage",
        caption: "Singers and musicians.",
      },
    ],
  },
  {
    id: "the-house-band",
    label: "The House Band",
    body: [
      "Pop Up Jazz Club started with three friends who wanted an excuse to make music together. What began as a small gathering of singers and musicians has grown into a welcoming evening where local people can perform with the support of a live band.",
      "Helen Staniland (double bass and vocals), Paul Southern (keyboards) and Vincent Burke (drums) accompany every singer throughout the evening, helping create a relaxed and supportive atmosphere on stage.",
    ],
    layout: "house-band",
    images: [
      {
        src: "/gallery/HouseBand.png",
        alt: "The house band performing with a singer",
        caption: "Piano, double bass and drums.",
      },
      {
        src: "/gallery/KeyboardHands.png",
        alt: "The house band in performance",
        caption: "Supporting local voices.",
      },
      {
        src: "/gallery/Keyboards.jpg",
        alt: "Pianist with the house band",
        caption: "Piano.",
        credit: "Keyboards - Paul Southern",
      },
      {
        src: "/gallery/Drummer.png",
        alt: "Drummer with the house band",
        caption: "Drums.",
        credit: "Drums - Vincent Burke",
      },
      {
        src: "/gallery/Bass.jpg",
        alt: "Double bass player with the house band",
        caption: "Double bass.",
        credit: "Double Bass - Helen Staniland",
      },
    ],
  },
  {
    id: "the-community",
    label: "The Community",
    tagline: "Friends, supporters, and fellow music lovers.",
    layout: "community",
    images: communityPhotos.map(({ src, alt }) => ({
      src,
      alt,
      caption: "Good company.",
    })),
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
      {
        src: "/gallery/Stage.jpg",
        alt: "The stage during a performance",
        caption: "The stage.",
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
