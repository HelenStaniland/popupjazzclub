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
  {
    src: "/gallery/Singer8.png",
    alt: "Local singer performing on stage with the house band",
  },
  {
    src: "/gallery/Singer9.png",
    alt: "Local singer performing on stage",
  },
] as const;

export const communityPhotos = [
  {
    src: "/gallery/AudienceBanner.jpg",
    alt: "Guests enjoying an evening at Pop Up Jazz Club",
  },
  {
    src: "/gallery/AfterParty.jpg",
    alt: "Friends chatting and enjoying the evening together",
  },
  {
    src: "/gallery/WholeAudience.jpg",
    alt: "A full room of friends, neighbours and music lovers",
  },
  {
    src: "/gallery/AudienceGold.jpeg",
    alt: "Guests enjoying the warm atmosphere of the evening",
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
  { src: "/gallery/Singer8.png", alt: "Local singer performing on stage", caption: "Local voices" },
  { src: "/gallery/Duet.jpg", alt: "Two local singers performing a duet", caption: "Duet" },
  { src: "/gallery/SmilingBand.png", alt: "The house band together on stage", caption: "House band" },
  { src: "/gallery/AfterParty.jpg", alt: "Friends chatting after the performance", caption: "Good company" },
  { src: "/gallery/AudienceGold.jpeg", alt: "Guests enjoying the evening", caption: "The community" },
  { src: "/gallery/WholeAudience.jpg", alt: "Everyone together in the room", caption: "Everyone together" },
  { src: "/gallery/CurtainCall.jpg", alt: "Singers and musicians at curtain call", caption: "Curtain call" },
] as const;

export const galleryStory = [
  {
    id: "the-music",
    label: "The Music",
    tagline: "Local singers, supported by a live band.",
    layout: "singers",
    images: [
      {
        src: "/gallery/SingerWithBand.png",
        alt: "Local singer performing with the full house band",
        caption: "Live on stage.",
      },
      ...singerPhotos.map(({ src, alt }) => ({
        src,
        alt,
        caption: "Local voices.",
      })),
    ],
    wideImages: [
      {
        src: "/gallery/SingerKeyboard.png",
        alt: "Local singer performing with the pianist",
        caption: "With the house band.",
      },
      {
        src: "/gallery/SmilingSingerBassist.png",
        alt: "Local singer performing with the double bass player",
        caption: "Local voices.",
      },
      {
        src: "/gallery/Duet.jpg",
        alt: "Two local singers performing a duet on stage",
        caption: "Duets and collaborations.",
      },
      {
        src: "/gallery/SingerBandInteraction.png",
        alt: "Singer and house band together on stage",
        caption: "Singers and musicians.",
      },
      {
        src: "/gallery/SingerDrummer.png",
        alt: "Local singer performing with the drummer",
        caption: "With the house band.",
      },
      {
        src: "/gallery/CurtainCall.jpg",
        alt: "Singers and musicians taking a curtain call",
        caption: "End of the night.",
      },
    ],
  },
  {
    id: "the-house-band",
    label: "The House Band",
    tagline: "The same musicians backing every singer through the evening.",
    layout: "house-band",
    images: [
      {
        src: "/gallery/SmilingBand.png",
        alt: "The house band smiling together on stage",
        caption: "Piano, double bass and drums.",
      },
      {
        src: "/gallery/KeyboardHands.png",
        alt: "The house band in performance",
        caption: "Supporting local voices.",
      },
      {
        src: "/gallery/HouseBand.png",
        alt: "The house band performing with a singer",
        caption: "Backing every singer.",
      },
      {
        src: "/gallery/SingerDrummer.png",
        alt: "Singer performing with the drummer",
        caption: "Piano, bass and drums.",
      },
      {
        src: "/gallery/Keyboards.jpg",
        alt: "Pianist with the house band",
        caption: "Piano.",
      },
      {
        src: "/gallery/Bass.jpg",
        alt: "Double bass player with the house band",
        caption: "Double bass.",
      },
      {
        src: "/gallery/Drummer.png",
        alt: "Drummer with the house band",
        caption: "Drums.",
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
