# Adhyayan Library — SEO and Conversion Audit

Audit date: 27 September 2026  
Website: https://www.adhyayanlibrary.online  
Priority query: **best library in Gwalior**

> **Status note:** The search and PageSpeed findings below describe the public site as observed during the audit. The local codebase has since been remediated: real facility photos replaced stock images; enquiry forms now prepare a real WhatsApp message instead of showing a fake delivery confirmation; Call, WhatsApp, and Directions actions are available on mobile; analytics hooks are ready for a GA4 measurement ID; overlapping keyword pages are consolidated with permanent redirects; `/local-seo-actions` is noindexed and removed from the sitemap/navigation; sitemap timestamps and meta keywords were removed; structured-data imagery and identity URLs were cleaned up; and the reported accessibility/navigation issues were corrected. Google Business Profile hours, website linkage, reviews, duplicate listings, and the true qualified-lead rate still require owner access and real operating data.

## Implementation update — pricing, PageSpeed, and SEO idea workbook

The local site now shows one synchronized monthly price set in plan cards, forms, metadata, FAQs, comparison copy, and structured offers:

- ₹550 — half day (6 hours)
- ₹750 — full day, locker unreserved
- ₹850 — full day, locker reserved

The supplied PageSpeed mobile report was accessed directly. Its tested public-page snapshot scored **90 Performance, 90 Accessibility, 100 Best Practices, and 100 SEO**, with **FCP 1.7 s, LCP 3.2 s, TBT 0 ms, CLS 0, and Speed Index 4.2 s**. It reported no CrUX field data. The most material opportunities were roughly 71 KiB of unused JavaScript, 99 KiB of image-delivery savings, a 580 ms render-blocking estimate, and accessibility issues in the older deployed build. The local implementation replaces remote stock imagery with compressed first-party WebP photos, removes Framer Motion and Lenis, keeps the hero image prioritized, names controls, improves contrast, and uses semantic headings. A post-deployment PageSpeed rerun is required to measure the result.

The workbook's 29 recommendations were treated as hypotheses, not instructions. Implemented ideas include a fuller, readable `/best-library-in-gwalior` decision page, natural UPSC/MPPSC relevance, direct fee answers, stronger internal links, and consolidation of overlapping search intent. Rejected ideas include competitor-name insertion, unrelated backlinks, exact-keyword stuffing, and unverified `aggregateRating` markup. The workbook's “Priority” column is not search volume; real demand potential must be measured with Search Console impressions, Google Business Profile queries, and qualified lead outcomes.

## Executive verdict

The site is indexed, technically healthy, and already visible on page one for the priority query. In a live Google search from Gwalior, the dedicated page appeared at approximately the fifth conventional organic result. However, it was below the local three-pack, directories, Reddit, image results, and other SERP features. Adhyayan Library was not in the visible local three-pack for the generic query.

The main SEO constraint is therefore **local prominence and entity trust**, not a missing keyword. The main conversion constraint is more serious: both enquiry forms simulate a successful submission but do not send or store the lead. There is also no analytics or event tracking in the code, so the actual website conversion rate cannot currently be calculated.

### Scorecard

| Area | Current state | Verdict |
|---|---:|---|
| Indexing and crawlability | Homepage and multiple landing pages indexed | Good |
| Exact-query organic visibility | About fifth organic result in this test | Promising |
| Generic-query local pack | Not in visible top three | Weak |
| Branded local visibility | Correct Padav listing appears first | Good but ambiguous |
| On-page technical SEO | Lighthouse SEO 100; valid structured data | Good |
| Content quality and differentiation | Many near-duplicate keyword pages | High risk |
| Trust and proof | Stock images; no real testimonials or review proof | Weak |
| Lead capture | Forms do not transmit or save enquiries | Critical failure |
| Conversion measurement | No GA4, CRM, call, or WhatsApp event tracking | Not measurable |
| Mobile performance | Lighthouse 90; LCP 3.1 s | Good, improvable |

Rankings vary by exact location, device, search history, and time. Search Console should be treated as the source of truth for trends; this live search is a verified snapshot, not a universal rank guarantee.

## What the live search results show

### “best library in Gwalior”

The local three-pack in the audited search showed:

1. Parth Library
2. Swadhyaya Library
3. Shri Ram Library Naya Bazar Kampoo

Adhyayan Library's `/best-library-in-gwalior` page appeared later on page one at roughly the fifth normal organic result. This is a useful foothold, but its actual visual position is low because the local pack and rich-result blocks consume most of the first screen.

The query is dominated by local listings, Justdial, Reddit/community answers, Instagram/images, and established directory pages. This indicates that Google is rewarding a blend of proximity, reviews, external corroboration, and real-world prominence—not just optimized website copy.

### Branded query

For `"Adhyayan Library" Gwalior`, the correct listing at 55, Padav appeared first in the local results. Two other Gwalior businesses with the same name also appeared. This creates entity ambiguity.

The correct listing displayed **Open 24 hours**, while the website says **5:30 AM–10:50 PM, with night shift available**. The result also showed only a Directions action, not a Website action. By contrast, a competing listing in the generic query displayed a Website action.

Immediate implications:

- The correct Google Business Profile should be claimed and verified if it is not already.
- Its website field should point to the official domain, preferably with a measurement tag such as `?utm_source=google&utm_medium=organic&utm_campaign=gbp`.
- Hours must match the real operating model on the website, Google profile, directories, and signage.
- The business name should match real-world signage exactly. Do not add keywords to the Google profile name unless they are genuinely part of the displayed business name.
- The site's existing Google Maps CID is correct for the Padav listing; the decimal CID maps to the same place ID shown in the live result.

Google states that local rankings are mainly based on relevance, distance, and prominence, with complete profile data, links, reviews, and positive ratings contributing to visibility: [Google Business Profile local ranking guidance](https://support.google.com/business/answer/7091?hl=en-GB).

## Conversion-rate audit

### Public-site baseline at audit time

**Successful website form-lead delivery in the audited public build: effectively 0%.**

Both the homepage contact form and `/join` reservation form use a timer to show a success state. Neither form calls an API, sends an email, writes to a database, opens WhatsApp, or posts to a CRM. The success copy says the request was forwarded even though no forwarding occurs.

This is both a revenue leak and a trust problem. Every user who submits believes the business received the enquiry, while the business receives nothing.

The local remediation now opens a pre-filled WhatsApp conversation and does not claim that a message was sent automatically. This repairs the false-success path, but it is still a contact-intent event rather than a confirmed qualified lead.

### What still cannot be measured

The overall conversion rate is unknown because the site has no analytics, conversion events, session data, call attribution, WhatsApp tracking, or lead database. Phone calls may still generate business, but there is no evidence that connects those calls to site sessions.

Use this definition after instrumentation:

```text
Website qualified-lead rate =
(unique successful forms + qualified phone calls + qualified WhatsApp conversations)
÷ eligible website sessions × 100
```

Track the funnel separately:

1. Search impression → website click
2. Website session → contact action
3. Contact action → qualified lead
4. Qualified lead → library visit
5. Visit → paid membership

Do not combine raw button clicks with paid memberships; a click is a micro-conversion, not revenue.

### Benchmark and realistic target

Unbounce's 2024 benchmark, based on 464 million visits and 57 million conversion actions, reports a 6.6% median across landing pages and 8.4% for education pages; primary education and tutoring pages were 4.9%. A local study-library enquiry is not identical to those categories, so these are directional, not a promise: [education conversion benchmark](https://unbounce.com/conversion-benchmark-report/education-conversion-rate/) and [overall benchmark](https://unbounce.com/average-conversion-rates-landing-pages/).

After fixing lead delivery and collecting at least 300 relevant sessions or 30 days of data, a sensible initial target is **5–8% qualified contact rate** from high-intent organic/local traffic. Establish the real baseline before claiming an uplift.

## Highest-priority conversion problems

### P0 — Fake-success forms (remediated locally)

Fix both forms so that success appears only after a server confirms receipt. The minimum production flow is:

- Validate and normalize phone numbers server-side.
- Store each enquiry with timestamp, source, landing page, selected plan, and consent state.
- Send an owner notification by email or WhatsApp.
- Give the visitor a real reference or confirmation.
- Handle failures honestly and retain entered data for retry.
- Add spam protection and rate limiting.

### P0 — No measurement (analytics hooks added; configuration still required)

Add privacy-appropriate analytics and record at least:

- `phone_click`
- `whatsapp_click`
- `directions_click`
- `form_start`
- `generate_lead` only after confirmed receipt
- `qualify_lead`
- `close_convert_lead` when a membership is paid

Google Analytics recommends `generate_lead` for a submitted request and provides later-stage lead events for the offline funnel: [GA4 recommended lead events](https://developers.google.com/analytics/devguides/collection/ga4/reference/events).

### P1 — Trust mismatch

All major images are Unsplash stock photos. The hero shows graduates outdoors, not the Adhyayan facility, while the gallery labels generic stock images as Adhyayan Library. The LocalBusiness structured data also uses the stock hero image.

Replace them with original photos of:

- Exterior, entrance, and visible signage
- A wide shot of the real cabin layout
- Individual desk, charging point, and light
- AC hall, lockers, RO water, newspapers, and washrooms
- Day and night-shift environments
- Route landmark and parking/arrival view

Use the same truthful photo set on the website and Google Business Profile. Google explicitly recommends representative, well-lit, minimally altered photos and notes that an exterior photo helps visitors recognize the business: [Business Profile photo guidance](https://support.google.com/business/answer/6103862?hl=en).

### P1 — Too many steps for high-intent mobile users

The primary hero CTA scrolls to three plan cards. A visitor then chooses a plan, lands on a second page, and sees a multi-field form. There is no first-screen Call or WhatsApp option.

Recommended mobile action bar:

- **Check seat availability on WhatsApp**
- **Call now**
- **Get directions**

Use a pre-filled WhatsApp message that includes the selected plan and preferred shift. Keep the lead form to name, phone, and preferred shift; ask for email and a long message later if needed.

### P1 — Misleading CTA

“Take a Virtual Tour” links to the About section, not a tour. Either provide a real photo/video tour or rename it to “See facilities.”

### P2 — Weak proof near the decision point

The section named `Testimonials` contains facility facts, not student testimonials. Put real, permissioned reviews near pricing and the form, including reviewer first name/initial, exam type, membership duration, and source. Never invent testimonials.

Also show:

- Current seat availability or last-updated date
- Trial-visit policy
- Exact shift options
- Refund/cancellation rules if applicable
- What the member must bring
- Parking/transport information

## Technical and on-page SEO audit

### What is working

- HTTPS live site is crawlable.
- Robots rules allow crawling and reference the XML sitemap.
- Pages have titles, descriptions, canonicals, Open Graph data, and crawlable contact details.
- The exact-priority page is indexed and ranking.
- Lighthouse scored SEO 100 on mobile and desktop.
- Lighthouse reported the structured data as valid.
- Address, phone, hours, latitude, longitude, services, amenities, and offers are present in LocalBusiness markup.
- The production code passes ESLint.

### P0 — Near-duplicate landing-page cluster

The site publishes many pages for slight variations of the same intent:

- `/gwalior-library`
- `/library-in-gwalior`
- `/reading-libraries-in-gwalior`
- `/reading-room-in-gwalior`
- `/study-centres-in-gwalior`
- `/gwalior-self-study-centre`
- `/self-study-centre-in-gwalior`
- `/adhyayan-library`
- `/adhyayan-library-gwalior`
- `/best-library-in-gwalior`

They use the same template, facilities, checklist, service cards, CTA, and related-page links. This risks query cannibalization and resembles doorway/scaled content when pages exist mainly to rank for closely related phrases and funnel users to the same place.

Google explicitly defines doorway abuse as substantially similar pages created for similar queries and scaled content abuse as many low-value pages created mainly to manipulate rankings: [Google spam policies](https://developers.google.com/search/docs/essentials/spam-policies).

Do not mass-delete blindly. First export 90 days of Search Console data and see which page earns impressions, clicks, and links for each query. Then:

- Keep `/best-library-in-gwalior` for the exact priority query.
- Keep the homepage for brand plus the main local service.
- Keep one genuinely useful guide such as `/how-to-choose-self-study-centre-gwalior`, but enrich it with original research and photos.
- Merge overlapping synonyms into the strongest matching page.
- Apply permanent redirects from retired URLs.
- Remove retired URLs from navigation and the sitemap.

Google recommends consolidating duplicate signals into a preferred URL: [canonicalization guidance](https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls).

### P0 — Public internal SEO page

`/local-seo-actions` is indexable, included in the XML sitemap, and linked in the footer. It is an internal marketing checklist rather than customer-facing content. Remove it from public navigation and the sitemap, and either delete it or mark it `noindex`.

### P1 — Keyword-heavy site architecture

The homepage and footer link to every near-synonym under “Gwalior Searches.” This looks engineered for crawlers and adds little user value. Replace it with a small navigation set organized around real tasks: Facilities, Fees, Visit, Reviews, Contact, and Directions.

### P1 — Sitemap dates are unreliable

Every deployment sets `lastModified` to the current build time for every URL. Google says `lastmod` should reflect the last significant page update and only uses it when it is consistently accurate. It ignores sitemap `priority` and `changefreq`: [Google sitemap guidance](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap).

Use stored content-update dates or omit `lastModified` until accurate.

### P1 — Entity markup cleanup

- Use a real business photo and real logo in structured data.
- Keep only URLs that identify the same official entity in `sameAs`. The generic Google Maps search URL is not an identity URL and should be removed.
- Add the claimed official social and directory profiles only after their name, address, phone, and website match.
- Verify that `legalName` is genuinely the legal name; otherwise omit it.
- Keep prices and availability in schema synchronized with the real offer.

### P2 — Small technical issues

- Footer “About Us” links to `#aboutus`, while the section ID is `#about`.
- Lighthouse found an unnamed button on mobile, insufficient contrast, and non-sequential heading levels.
- Meta keywords provide no ranking advantage and can be removed.
- FAQ schema is not a shortcut to richer rankings; retain FAQs only when they help users.

## Performance audit

Google PageSpeed Insights returned no Chrome UX Report field data, so there is not yet enough real-user data for a field Core Web Vitals verdict. The following are lab results from 27 September 2026.

| Metric | Mobile | Desktop | Assessment |
|---|---:|---:|---|
| Performance score | 90 | 100 | Strong |
| First Contentful Paint | 1.7 s | 0.3 s | Good |
| Largest Contentful Paint | 3.1 s | 0.5 s | Mobile needs improvement |
| Total Blocking Time | 40 ms | 20 ms | Good |
| Cumulative Layout Shift | 0 | 0 | Excellent |
| Speed Index | 4.4 s | 0.8 s | Mobile improvable |
| Accessibility | 90 | 95 | Fix listed issues |
| SEO | 100 | 100 | Basic technical checks pass |

Mobile opportunities reported by PageSpeed:

- Render-blocking requests: estimated 570 ms savings
- Image delivery: estimated 99 KiB savings
- Unused JavaScript: estimated 71 KiB savings
- Legacy JavaScript: estimated 14 KiB savings
- One long main-thread task

Likely implementation priorities:

1. Replace remote stock imagery with properly sized local AVIF/WebP assets.
2. Reduce client-only animation code; the homepage imports Framer Motion in many sections.
3. Remove Lenis or other smooth-scroll code unless it materially improves the experience.
4. Keep the hero image discoverable immediately and avoid animation that delays its visible render.
5. Re-test the homepage and the priority landing page separately.

Google's current good thresholds are LCP ≤2.5 s, INP ≤200 ms, and CLS ≤0.1: [Core Web Vitals guidance](https://developers.google.com/search/docs/appearance/core-web-vitals).

## Local SEO plan to reach the three-pack

### 1. Repair and complete the Google Business Profile

- Verify ownership of the exact 55, Padav listing.
- Add the official website URL with a UTM tag.
- Reconcile hours and night-shift wording everywhere.
- Select the most accurate primary category and a small number of truthful secondary categories.
- Add Wi-Fi, accessibility, payment, parking, and other supported attributes that are factually true.
- Add services such as reading-room access, reserved cabin desk, monthly membership, locker facility, and night shift, with accurate prices/descriptions where supported.
- Add real exterior, interior, amenity, and team photos.

Google notes that services can be highlighted when local customers search for an offering: [Business Profile services guidance](https://support.google.com/business/answer/9455399?hl=en).

### 2. Build a compliant review engine

Create the official Google review link and QR code. Place it at the exit desk, on receipts, and in the post-visit WhatsApp follow-up. Ask every real member neutrally—not only happy customers—and do not tell them what words or rating to use.

Suggested timing:

- After a member's seventh day
- At the first renewal
- After staff resolves a genuine support issue

Reply individually and briefly to every review. Never buy, incentivize, gate, or script reviews. Google permits neutral review requests and QR codes but prohibits incentives and selective solicitation: [review guidance](https://support.google.com/business/answer/3474122?hl=en-IN) and [Maps fake-engagement policy](https://support.google.com/contributionpolicy/answer/7400114?hl=en).

### 3. Resolve entity ambiguity

Because three Gwalior listings share the Adhyayan name, make every official signal converge on the correct entity:

- Same exact real-world name, address, phone, hours, and website
- Clear exterior signage visible in photos
- Website footer and contact page matching the profile
- Claimed Justdial and relevant local-directory listings for the Padav location
- One official Instagram/social profile linked both ways
- Consistent profile description emphasizing Padav and the actual service category

Do not report legitimate unrelated businesses as duplicates. The goal is disambiguation, not removal of real competitors.

### 4. Earn local corroboration

Prioritize links and mentions that a Gwalior student could realistically use:

- Nearby coaching centres and hostels
- Student societies and exam-preparation communities
- Local education directories
- A genuine student study event, mock-test day, or scholarship initiative
- Local press coverage of a real event or community contribution

Avoid paid backlink packages, mass directory blasts, private blog networks, and fake community posts.

### 5. Make the priority page uniquely useful

Turn `/best-library-in-gwalior` into evidence, not a repeated sales page. Add:

- A transparent “how to choose” comparison table
- Real photos tied to each claimed feature
- Exact shifts, trial visit, pricing, and seat-availability information
- Route details from Gwalior Junction, Phool Bagh, and nearby landmarks
- Parking and safety information
- Who the library is and is not ideal for
- A clear last-verified date for changeable facts

This gives users a reason to choose and cite the page. Google emphasizes original, first-hand, people-first content rather than search-engine-first pages: [helpful content guidance](https://developers.google.com/search/docs/fundamentals/creating-helpful-content).

## Lesser-known, defensible techniques

These methods are not secret loopholes. They work because they improve entity confidence, user utility, or measurement.

### Entity disambiguation page

Keep one strong official brand/location page with the exact Padav entity, entrance photo, map pin, phones, hours, and links to official profiles. This is valuable here because multiple Gwalior businesses share the same name.

### Hyperlocal arrival content

Create one genuine “Plan your visit” page rather than many location doorway pages. Include real walking/auto landmarks, parking, nearest transit points, opening times, and entrance photos. It can satisfy “near me,” station, Padav, and Phool Bagh intent without manufacturing thin area pages.

### Seat-availability micro-conversion

“Check today's seat availability” is a lower-friction and more credible CTA than “Join now.” Use it in the hero, Google profile link, and WhatsApp. Record the plan/shift automatically so staff can respond quickly.

### Review operations, not review hacking

Use a neutral QR request at natural experience milestones. Measure request-to-review rate internally. Do not request keywords, five stars, or only positive reviews.

### First-party evidence loop

Ask prospects what prevented them from joining and tag the reason: distance, price, shift, parking, seat type, cleanliness, or uncertainty. Turn recurring questions into useful page sections and Business Profile updates. This creates content from real demand instead of keyword tools alone.

### Search Console cannibalization map

Filter Search Console by each priority query, then inspect the Pages tab. If multiple near-identical URLs receive impressions for the same query, consolidate them and track whether clicks and average position improve. Google recommends examining the Pages view for a selected query and focusing on click/impression trends, not rank alone: [Search Console performance guidance](https://support.google.com/webmasters/answer/17010961?hl=en).

## Methods to avoid

- Buying or swapping Google reviews
- Offering discounts for reviews
- Asking reviewers to include target keywords
- Adding “best library in Gwalior” to the Business Profile name unless it is real signage and the registered public name
- Creating dozens of area/keyword pages that all lead to the same offer
- Hidden text, cloaking, or AI-generated city pages
- Bulk low-quality directory submissions
- Paid backlink packages
- Changing page dates without substantial updates
- Treating stock photos or fabricated testimonials as proof

These tactics create suspension, manual-action, ranking, and reputation risk. There is no safe shortcut around actual local prominence.

## 90-day implementation sequence

### First 48 hours

1. Replace simulated form success with real lead delivery and error handling.
2. Add Call, WhatsApp, and Directions actions above the fold on mobile.
3. Add analytics events and a lead log.
4. Fix the Google profile website field and hours.
5. Remove or noindex `/local-seo-actions` and remove it from the sitemap/footer.
6. Fix the broken About footer link and unnamed mobile button.

### Days 3–14

1. Photograph the real facility and replace all stock imagery.
2. Add real review proof and a neutral Google review QR workflow.
3. Export Search Console data and map query-to-page overlap.
4. Consolidate the weakest duplicate SEO pages with permanent redirects.
5. Enrich `/best-library-in-gwalior` with first-hand comparison and visit information.
6. Complete Google profile categories, services, attributes, and photos.

### Days 15–45

1. Claim and reconcile the correct Justdial/local citations.
2. Publish one useful Plan Your Visit page.
3. Build local partnerships and earn genuine Gwalior mentions.
4. Test “Check seat availability” against “Reserve a cabin desk.”
5. Test a two-field form against the existing long form.

### Days 46–90

1. Review exact-query Search Console clicks, CTR, and page overlap.
2. Review Business Profile searches, calls, website clicks, and directions.
3. Measure website qualified-lead rate and paid-membership rate.
4. Keep only experiments with a clear improvement and enough sample size.
5. Repeat real-photo and review operations consistently.

Google Business Profile exposes searches, views, directions, calls, and website-click metrics for verified profiles: [Business Profile performance metrics](https://support.google.com/business/answer/9918094?hl=en).

## Weekly dashboard

Track these numbers every Monday:

| Funnel stage | Metric |
|---|---|
| Search visibility | Impressions and clicks for exact priority queries |
| Search appeal | Organic CTR by query/page |
| Local visibility | Business Profile search terms and views |
| Local actions | Calls, directions, website clicks, WhatsApp starts |
| Website intent | CTA click rate and form-start rate |
| Lead delivery | Confirmed `generate_lead` count |
| Lead quality | Qualified leads / confirmed leads |
| Business outcome | Paid memberships / qualified leads |
| Reputation | New reviews, average rating, response rate |
| Experience | Mobile LCP, INP, and CLS once field data appears |

The correct strategic priority is: **fix lead capture first, strengthen the exact Google entity second, replace stock claims with real proof third, then consolidate the keyword-page cluster.** More keyword pages are unlikely to be the highest-return move.
