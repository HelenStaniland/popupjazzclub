import { FeatureImage, SectionIntro } from "@/components/SectionParts";

export default function HomeCommunity() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          label="The Community"
          title="Friends supporting friends"
        >
          <p>
            The audience are not passive spectators. They are friends, family,
            supporters, and fellow music lovers — many of whom know the
            performers personally.
          </p>
          <p>
            Between sets there is conversation, laughter, and the easy warmth
            of a gathering where newcomers are welcomed and familiar faces
            abound.
          </p>
        </SectionIntro>

        <div className="mt-12 space-y-6 lg:mt-16">
          <FeatureImage
            src="/gallery/AfterParty.jpg"
            alt="Friends chatting and enjoying the evening together after the performance"
            caption="Conversation and laughter."
            aspect="wide"
          />
          <div className="grid gap-6 sm:grid-cols-2">
            <FeatureImage
              src="/gallery/FromTheStage.jpg"
              alt="Friends chatting at candlelit tables during the performance"
              caption="A full room of familiar faces."
              aspect="wide"
            />
            <FeatureImage
              src="/gallery/Audience.jpg"
              alt="Audience members socialising and enjoying the evening together"
              caption="A relaxed, social atmosphere."
              aspect="wide"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
