<h1 align="center">Silk</h1>
<h3 align="center">Native-like swipeable sheets for React</h3>

<p align="center">
  <a href="https://silkhq.com">Website</a> ·
  <a href="https://silkhq.com/docs">Documentation</a> ·
  <a href="https://silkhq.com/examples">Live examples</a> ·
  <a href="https://silkhq.com/access">Pricing</a> ·
  <a href="https://www.npmjs.com/package/@silk-hq/components">npm</a>
</p>

Silk is a React library to build **bottom sheets, sidebars, dialogs, toasts, lightboxes and pages** that swipe and snap like native ones. One `Sheet` component covers them all, with swipe gestures, detents (snap points), stacking and on-screen keyboard handling built in. Unstyled, accessible, zero dependencies.

It's also fast where most sheet libraries aren't. The swipe is the browser's own scrolling, and the spring animations run off the main thread too, so both keep your screen's full refresh rate (up to 120 fps, iOS Safari included) and stay smooth while your app is busy.

Used in production by OpenAI, Lovable, Mysten Labs, Owner.com, Tjek, BookRetreats and many others.

This repository holds Silk's public examples, its issue tracker and its discussions. The library itself is distributed on npm as [`@silk-hq/components`](https://www.npmjs.com/package/@silk-hq/components).

## Quick start

```bash
npm install @silk-hq/components
```

Import the styles once:

```css
@import "@silk-hq/components/unlayered-styles.css";
```

Then build a bottom sheet:

```tsx
import { Sheet } from "@silk-hq/components";

export function BottomSheet() {
  return (
    <Sheet.Root license="commercial">
      <Sheet.Trigger>Open</Sheet.Trigger>
      <Sheet.Portal>
        <Sheet.View detents="60lvh" nativeEdgeSwipePrevention={true}>
          <Sheet.Backdrop themeColorDimming="auto" />
          <Sheet.Content>
            <Sheet.BleedingBackground />
            <Sheet.Title>Title</Sheet.Title>
            <Sheet.Description>Description</Sheet.Description>
          </Sheet.Content>
        </Sheet.View>
      </Sheet.Portal>
    </Sheet.Root>
  );
}
```

See [Getting started](https://silkhq.com/docs/getting-started) for the full setup, including Tailwind CSS v4.

## Features

- **Swipes that feel native**: the swipe is built on CSS Scroll Snap, so the sheet has the device's real momentum and overscroll.
- **Spring animations at full frame rate**: opening, stepping between detents and dismissing use spring physics (presets like `"snappy"` and `"bouncy"`, or your own), run off the main thread.
- **Swipe gestures everywhere**: touch, trackpad and mouse wheel, on mobile, tablet and desktop.
- **Detents (snap points)**: rest a sheet at one or more heights and step between them.
- **Any placement**: bottom, top, left, right or centered.
- **Scrollable content**: a `Scroll` component made to work inside sheets.
- **On-screen keyboard handling**: inputs stay visible, the page doesn't jump.
- **Stacked and nested sheets**, with animations driven by the gesture.
- **Modal or non-modal**: focus trapping, outside-interaction blocking and scroll locking, each configurable.
- **Accessible**: WAI-ARIA roles, labels, focus management, Escape, reduced motion.
- **Gesture-driven effects**: animate any CSS property of any element from the sheet's position, like scaling the page behind it or fading a backdrop.
- **Unstyled**: works with CSS, CSS Modules, Tailwind CSS or CSS-in-JS.
- **TypeScript**, with all types exported.
- **No dependencies** other than React. Works with React 17, 18 and 19.

## Examples

The [`examples/css`](examples/css) directory is a Next.js app with 12 complete examples, ready to copy:

| Example | What it shows |
| --- | --- |
| BottomSheet | A modal bottom sheet |
| SheetWithDetent | A sheet with a detent (snap point) and a scrollable list |
| SheetWithKeyboard | A form that works with the on-screen keyboard |
| SheetWithStacking | Sheets opened from sheets, with a stacking animation |
| Sidebar | A sidebar from the left edge |
| Toast | A non-modal, swipeable notification |
| TopSheet | A sheet from the top edge |
| DetachedSheet | A floating sheet, detached from the screen's edges |
| Card | A centered card |
| LongSheet | A sheet taller than the screen |
| Page | A full-screen page that slides in from the right and swipes back |
| PageFromBottom | A full-screen page that slides up from the bottom |

Try them in [CodeSandbox](https://codesandbox.io/p/sandbox/github/silk-hq/silk/tree/main/examples/css), see them [live on silkhq.com](https://silkhq.com/examples), or copy the directory:

```bash
npx degit silk-hq/silk/examples/css silk-examples-css
```

4 advanced examples (Sheet with Depth, Persistent Sheet with Detent, Lightbox, Parallax Page) come with the commercial license.

## Documentation

- [Getting started](https://silkhq.com/docs/getting-started)
- [Sheet](https://silkhq.com/docs/sheet) and [Scroll](https://silkhq.com/docs/scroll) API reference
- [Changelog](CHANGELOG-LIBRARY.md)
- For AI tools: [llms.txt](https://silkhq.com/docs/llms.txt) and [the full docs as Markdown](https://silkhq.com/docs-full.md)

## License

Silk is free for non-commercial use. Commercial use requires a [commercial license](https://silkhq.com/access): a one-time payment, starting at €299, priced by your organization's size at purchase ([buy a license](https://silkhq.lemonsqueezy.com/buy/045a679b-6f54-4e63-ad33-44be9cb05333)), for unlimited projects within your organization, with free updates.

Silk is proprietary software: its source is not in this repository. See the [terms](https://silkhq.com/terms).

## Issues and discussions

- Found a bug, or missing a feature? [Open an issue](https://github.com/silk-hq/silk/issues).
- Have a question, or want to show what you built? [Start a discussion](https://github.com/silk-hq/silk/discussions).
