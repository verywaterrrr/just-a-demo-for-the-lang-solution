# Relay showcase

A disposable concept demo for the LANG1406 airline–service-provider communication proposal.

## Live website

- [Interactive demo](https://verywaterrrr.github.io/just-a-demo-for-the-lang-solution/)
- [Six solution slides](https://verywaterrrr.github.io/just-a-demo-for-the-lang-solution/slides/)

This public repository deploys automatically to GitHub Pages after each push to `main`. The deployment workflow builds self-contained HTML pages, so the project URL needs no external services or routing configuration.

## Open and share

Open the live website above, or generate **Relay.html** and **Relay-Slides.html** with the build commands below and open them in Chrome, Edge or Safari. Both generated files are self-contained: scripts, styles, fonts and the illustrative photo are embedded. No installation, internet connection or server is required to view these files.

On the slides page, click **Present**. Use the left/right arrow keys, navigation dots or on-screen arrows. Escape returns to the scrolling webpage. You can switch between the slides and demo using their navigation links.

Share the live website link or either generated HTML file. Browser previews inside messaging apps may block JavaScript; download the file and open it in a browser.

## Demonstration sequence

1. Start guided case → show the prepared AI report.
2. Optionally choose the Cantonese input sample; the report uses Traditional Chinese.
3. Review the original, draft and recipient. Confirm the check and approve sending.
4. As airline manager, review and approve the three-team task package.
5. Show the overdue alert. Switch to the origin provider and acknowledge the task.
6. Show the confirmed origin location. Review and approve the onward transport plan.
7. Confirm actual dispatch, destination receipt and passenger return separately.
8. Review the handover summary or open the activity log.
9. Reset for another demonstration. The gate-change preview illustrates instruction versions.

On smaller screens the walkthrough sidebar is hidden. Use the **Demo perspective** switch: origin provider accepts and locates the bag; airline manager approves transport; origin provider records dispatch; HKIA provider records receipt and return.

## What is simulated

All airline/provider names, staff, flights, baggage identifiers, timestamps, locations and evidence are fictional. Text drafts, translation, task routing and updates are predefined. Nothing is sent to another person or system. No AI model, voice recording, tracking feed, authentication or operational integration is connected. State lasts until refresh/reset; this is an interface demonstration.

The demo shows the proposed safeguards: original reports, approval before distribution, critical identifiers, distinct acknowledgement and completion, agreed escalation and separate dispatch/receipt/return records. It does not establish operating effectiveness, compliance or error rates.

## Source and editing

Source: `src/main.jsx` and `src/styles.css`. Edit the interface or slide wording there.

```sh
npm install
npm run dev -- --port 4173
```

For a new portable build:

```sh
npm run build
node scripts/package.mjs
```

To build exactly what GitHub Pages publishes:

```sh
npm run build:pages
```

The publishable website is generated in `_site/`. Build outputs, dependencies and private local environment files are excluded from Git.

Local browser walkthrough checks are in `checks/walkthrough.js`; screenshots are retained in `checks/`.

## Design and asset credit

App: apple-design skill. Slide webpage: gpt-taste skill. Typeface: Outfit, bundled locally from Fontsource under its font licence. Icons: Lucide. Motion: Motion and GSAP.

The illustrative airport photo is by **insung yoon**, [Unsplash](https://unsplash.com/ja/写真/飛行機の窓から見た飛行機の翼-0HNu3aM0CZM). It is an aviation illustration, not a photograph of HKIA or the fictional incident. No airline or airport affiliation is claimed.
