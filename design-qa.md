# Design QA — light SaaS reference-led home page

## Comparison target

- Source visual truth: `/Users/alfredtackie-quaye/Library/CloudStorage/OneDrive-eSolutionsConsultingGhana/Desktop/Screenshot 2026-10-29 at 4.57.13 PM.png`
- Source evidence: user-provided screenshot inspected on 29 October 2026.
- Implementation route: `/`
- Intended viewport: desktop, 1440px-wide editorial landing page.
- Intended state: initial page load.

## Evidence status

The reference was available as a web capture. A browser-rendered implementation screenshot could not be captured in this session because the available browser-access host was unavailable. The production build and unit tests passed, but they are not visual-comparison evidence.

## Required fidelity surfaces

- **Fonts and typography:** intentional approximation using a bold system UI sans-serif to match the screenshot’s strong product-launch hierarchy.
- **Spacing and layout rhythm:** implemented as an airy centered text/image hero with a compact navigation and embedded product-preview panel.
- **Colors and visual tokens:** adapted from the screenshot's white, pale-lilac, periwinkle, and cobalt palette while retaining Alfred's own content.
- **Image quality and asset fidelity:** an original AI-generated ambient image is used at `public/images/portfolio-saas-ambient.png`. It is not copied from the reference and contains no logo or text.
- **Copy and content:** all real-estate claims, metrics, names, and calls to action from the reference were excluded. Alfred's portfolio copy and pending-credential framing are preserved.

## Findings

- [P1] Browser visual comparison unavailable.
  Location: desktop hero and responsive layouts.
  Evidence: no browser-rendered implementation screenshot is available in this session.
  Impact: exact composition, crop, and responsive typography cannot be visually compared against the Dribbble reference.
  Fix: open the local page in an available browser at 1440px and 390px widths, capture both, then compare with the source shot before claiming visual parity.

- [P2] Display type is an intentional system-font approximation.
  Location: `app/reference-style.css`.
  Evidence: the original reference's precise font file/license is not provided.
  Impact: letterforms will differ even where hierarchy and scale are matched.
  Fix: add a licensed, self-hosted editorial display font with `next/font/local` if a brand font is chosen.

## Implementation checklist

1. Capture desktop and mobile browser screenshots when browser access is available.
2. Verify image crop and headline wrapping at both widths.
3. Replace system-serif with a licensed brand font if one is supplied.

## Follow-up polish

- Add approved real case studies and project imagery when supplied.
- Set `NEXT_PUBLIC_SITE_URL` before production deployment.

final result: blocked
