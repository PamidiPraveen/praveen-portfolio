import Hero from '@/components/hero/Hero'
import IntroSection from '@/components/intro/IntroSection'
import NameStrip from '@/components/name/NameStrip'
import PolaroidSection from '@/components/studio/PolaroidSection'
import ConnectCard from '@/components/ui/ConnectCard'
import SiteFooter from '@/components/footer/SiteFooter'
import PaperRun from '@/components/paper/PaperRun'
import { site } from '@/config/site'
import { assets } from '@/config/assets'

/**
 * PAGE 01 — the cover
 * PAGE 02 — HELLO / education / skills / experience
 * PAGE 03 — the black sheet underneath
 * PAGE 04 — THE STU (projects)
 * PAGE 04b — CERTIFICATIONS, same polaroid language, no photos to hunt for
 * PAGE 05 — the last page: LET'S CONNECT, and the paper tears away
 *
 * Sections are siblings sitting on one shared sheet. Adding another section
 * is a matter of dropping it into this list — nothing above it needs to
 * change, and it inherits the paper.
 */
export default function Page() {
  const studioItems = site.studio.items.map((item, i) => ({
    ...item,
    src: assets.studio[i] ?? null,
  }))
  const certItems = site.certifications.items.map((item, i) => ({
    ...item,
    src: assets.certifications[i]?.photo ?? null,
    href: assets.certifications[i]?.document ?? null,
  }))

  return (
    <>
      <main>
        {/* One sheet of paper runs the height of the document. Sections are
            laid on it; the black page in NameStrip is a second sheet laid on
            top of that. */}
        <PaperRun>
          <Hero />
          <IntroSection />
          <NameStrip />
          <PolaroidSection id="studio" heading={site.studio.heading} items={studioItems} />
          <PolaroidSection id="certifications" heading={site.certifications.heading} items={certItems} />
          <SiteFooter />
        </PaperRun>
      </main>
      <ConnectCard />
    </>
  )
}
