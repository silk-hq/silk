# Changelog — Library

## v0.10.2

**Release date**: 2026-11-12

- Fix the `displayName` of `<Scroll.Trigger>`, which React DevTools showed as `Sheet.Trigger`.
- Fix `scrollTimelineName` and `scrollPadding` on a `<Scroll.View>` with `pageScroll` when native page scroll isn't replaced: they had no effect on the page's scroll.
- Fix a page that overflows sideways jumping horizontally while a sheet is open.
- Fix `onTravel` receiving a `range` without `start` and `end` when the entering or stepping animation is skipped (`skip: true`).

## v0.10.1

**Release date**: 2026-02-10

- Improve the safety of internal styles by protecting them from global style overrides.

## v0.10.0 (breaking change)

**Release date**: 2025-10-21

- Fix a bug that may occur with small `<Sheet.Content>` or small detents.
- Change the behavior of the `exitingAnimationSettings` prop’s `contentMove` option behavior, when `false` the `<Sheet.Content>` now remains on its current detent till the animation is finished. (breaking change)
- Make `theme-color` HTML meta tag manipulations safer in contexts where it cannot be defined. [#18](https://github.com/silk-hq/silk/issues/18)

## v0.9.12

**Release date**: 2025-09-12

- Change the behavior of the `onClickOutside` event handler on `<Sheet.View>` so it runs even if propagation is stopped on `click` events fired on `<Sheet.View>`. [#100](https://github.com/silk-hq/silk/issues/100)
- Expand the `componentRef` prop type on `<Scroll.Root>` so it accepts `null`.

## v0.9.11

**Release date**: 2025-07-10

- Fix potential error by adding a safeguard. [#74](https://github.com/silk-hq/silk/issues/74)
- Remove some logging. [#74](https://github.com/silk-hq/silk/issues/74)

## v0.9.10

**Release date**: 2025-07-06

- Add an `updateThemeColor` function that lets you update the `theme-color` in a safe way while a Sheet using the `themeColorDimming` prop is presented, or when the `useThemeColorDimmingOverlay` hook is used.
- The `themeColorDimming` prop on `<Sheet.Backdrop>` now fetches the `theme-color` meta-tag each time a Sheet gets presented, thus taking into account potential changes. [#73](https://github.com/silk-hq/silk/issues/73)

## v0.9.9

**Release date**: 2025-07-02

- Fix Sheet programmatic dismissal not working with `swipeDismissal={false}` after a swipe attempt. [#71](https://github.com/silk-hq/silk/issues/71)
- Fix `swipeOvershoot={false}` not working with `tracks` using two values and `swipeDismissal={false}`.

## v0.9.8

**Release date**: 2025-06-30

- Add JSDoc comments to all components, sub-components and props to provide rich in-editor hints.

## v0.9.7

**Release date**: 2025-06-18

- Update the website’s domain name in all files.

## v0.9.6

**Release date**: 2025-06-05

- Fix `<Sheet.Handle>` not correctly rendering its potential children.
- Remove focus outline from internal the Scroll component underlying scroll container.
- Expand `<Sheet.Portal>` container prop types to let it accept `null`
- Expand `animate` first argument’s types to let it accept `null`
- Expand `useThemeColorDimmingOverlay`'s `elementRef`’s type to let it accept `undefined`.

## v0.9.5

**Release date**: 2025-06-02

- Update README

## v0.9.3

**Release date**: 2025-05-05

- The `themeColorDimming` prop on `<Sheet.Backdrop>` now supports color values in hexadecimal format for the `theme-color` meta tag.
- The `themeColorDimming` prop on `<Sheet.Backdrop>` now uses the `<body>` HTML element CSS `background-color` value when the `theme-color` meta tag is not set.
- The `themeColorDimming` prop on `<Sheet.Backdrop>` now logs a warning when the `theme-color` meta tag uses a non-supported color format.

## v0.9.2

**Release date**: 2025-05-02

- Fix `onClickOutside` event being triggered when a click occurred on an element inside of `<Sheet.View>` whose ancestor DOM node was removed from the DOM at the same time. [#51](https://github.com/silk-hq/silk/issues/51)

## v0.9.1

- Fix “scroll-by” being interpreted as “scroll-to” in `<Scroll.Trigger>` `action` prop.
- Fix descendant element animation starting during the `entering` phase and ongoing during the `idleInside` phase preventing interaction with the sheet. [#33](https://github.com/silk-hq/silk/issues/33)
- Fix `touchstart` and `touchend` events not propagating to third-party HTML elements. [#50](https://github.com/silk-hq/silk/issues/50)

## v0.9.0 (breaking change)

- Change the way Silk low-level CSS styles are imported. Follow the [migration guide](https://silkhq.com/docs/from-v0-8-x-to-v0-9-x) on how to import them.
- Add a warning in the console when Silk CSS styles are not detected.
- Fix `onClickOutside` event being triggered when a click occurred on an element inside of `<Sheet.View>` that was removed from the DOM at the same time.
- Fix `onClickOutside` event being triggered when a click occurred on an element inside of a third-party overlay component.
- Fix error when the user presses the `escape` key when an `<ExternalOverlay>` is in use.
- Remove useLayoutEffect warnings in some environments.

## v0.8.15

- Fix travel and stacking animations when a sheet is used in a controlled manner (i.e. using the `presented` and `onPresentedChange` props). [#28](https://github.com/silk-hq/silk/issues/28)

## v0.8.14

- Throw a proper error when the `theme-color` meta-tag is not set when the `themeColorDimming` prop on Sheet.Backdrop is used. [#13](https://github.com/silk-hq/silk/issues/13)
- Throw a proper error when the `theme-color` meta-tag is not using the `rgb()` format for its content when using the `themeColorDimming` prop on Sheet.Backdrop is used. [#18](https://github.com/silk-hq/silk/issues/18)
- Fix the types not being applied to the `<Sheet.Root>` component. [#17](https://github.com/silk-hq/silk/issues/17)
- Remove unnecessary peerDepencies. [#27](https://github.com/silk-hq/silk/issues/27)
- Fix invalid CSS. [#12](https://github.com/silk-hq/silk/issues/12)
