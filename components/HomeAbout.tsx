import { SectionIntro } from "@/components/SectionParts";

export default function HomeAbout() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro
          label="About Pop Up Jazz Club"
          title="A community jazz night in Herne Hill"
        >
          <p>
            Pop Up Jazz Club started as a way for local singers, musicians,
            friends and music lovers to share an evening together. Many of the
            performers come from choirs and musical groups in the area.
          </p>
          <p>
            People come along to support friends who are singing, hear local
            musicians, meet neighbours, and enjoy a relaxed night out. Everyone
            is welcome — performers and audience are part of the same
            community.
          </p>
        </SectionIntro>
      </div>
    </section>
  );
}
