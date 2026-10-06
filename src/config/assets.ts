/**
 * ---------------------------------------------------------------------------
 * ASSET REGISTRY
 * ---------------------------------------------------------------------------
 * One place to swap placeholders for finals.
 *
 *   1. Drop the file into /public/assets/…
 *   2. Set the path below.
 *   3. Done. No component edits, no reflow.
 * ---------------------------------------------------------------------------
 */

export const assets = {
  /**
   * Hero face illustration living inside the word PORTFOLIO. No hand-drawn
   * illustration is shipped for this build, so this stays null and the O
   * simply reads as a letter — HeroTypography already handles that case.
   */
  heroFace: {
    flat: null as string | null,
    layers: null as { base: string; eyes: string; lids: string; mouth: string } | null,
  },

  /**
   * Section 02, left frame. The suit video supplied for this build is
   * 720x1280, the same portrait ratio the frame expects.
   *
   * The luminance key is left off (`key: null`) rather than guessed: this
   * clip's backdrop and shirt highlights overlap in brightness, so a wrong
   * band would key out part of the shirt. Re-measure with
   * `tools/extract-cutout.py`-style sampling and turn it back on if wanted.
   */
  frame: {
    video: '/assets/videos/frame-artwork.mp4' as string | null,
    poster: '/assets/videos/frame-artwork-poster.jpg' as string | null,
    image: null as string | null,
    fit: 'cover' as 'cover' | 'contain',
    position: '50% 32%',
    key: null as { low: number; high: number } | null,
  },

  /**
   * Cut-out bust for the black strip, standing in front of the moving type.
   * Generated from the supplied suit video's first frame via
   * `tools/extract-cutout.py` (background removal + alpha matte).
   */
  nameCutout: {
    src: '/assets/name-cutout.webp' as string | null,
    width: 438,
    height: 446,
    sticker: true,
  },

  /** Small round avatar inside the floating contact note. */
  avatar: '/assets/avatar.jpg' as string | null,

  /**
   * THE STU — repurposed as the project showcase. Two real screenshots
   * (Online Examination System, Stock Trend Prediction) plus one placeholder
   * slot for BookAura, which draws in the sheet's own crop-mark language
   * until a screenshot is dropped in.
   */
  studio: [
    '/assets/projects/studio-01.png',
    '/assets/projects/studio-02.png',
    '/assets/projects/studio-03.png',
  ] as (string | null)[],

  /**
   * Signature graphic for the footer. Until it arrives, the name is set in
   * the hand font with a red tick, so the page is already signed.
   */
  signature: null as string | null,

  /**
   * CERTIFICATIONS — same polaroid language as the studio. One scanned
   * certificate per card, in the same order as `site.certifications.items`.
   * Each entry pairs a photo (the JPEG shown on the card) with the original
   * document (the PDF the card links out to when clicked).
   */
  certifications: [
    {
      photo: '/assets/certifications/codetantra-python.jpg',
      document: '/assets/certifications/codetantra-python.pdf',
    },
    {
      photo: '/assets/certifications/brainovision-nsttp.jpg',
      document: '/assets/certifications/brainovision-nsttp.pdf',
    },
    {
      photo: '/assets/certifications/icraiice-2025-paper.jpg',
      document: '/assets/certifications/icraiice-2025-paper.pdf',
    },
  ] as { photo: string | null; document: string | null }[],

  /**
   * EXPERIENCE — supporting documents for an entry, keyed by array index in
   * `site.experience.items`. Not every role needs one; entries without a
   * matching index here render no icon.
   */
  experienceDocuments: [
    { certificate: '/assets/experience/tr-tech-internship-certificate.jpg' },
  ] as { certificate: string | null }[],
} as const
