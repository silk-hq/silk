# Changelog — Library

## v0.9.7

**Release date**: 2025-06-18

- Update the website’s domain name in all files.

## v0.9.6

**Release date**: 2025-06-05

- Fix `<Sheet.Handle>` not correctly rendering its potential children.
- Remove focus outline from internal the Scroll component underlying scroll container.
- Expand `<Sheet.Portal>` container prop types to let it accept `null`
- Expand `animate` first argument’s types to let it accept `null`
- Expand `useThemeColorDimmingOverlay`'s `elementRef`'s type to let it accept `undefined`

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

- Fix `onClickOutside` event being triggered when a click occurred on an element inside of `<Sheet.View>` whose ancestor DOM node was removed from the DOM at the same time. https://github.com/silk-hq/community/issues/51

## v0.9.1

- Fix “scroll-by” being interpreted as “scroll-to” in `<Scroll.Trigger>` `action` prop.
- Fix descendant element animation starting during the `entering` phase and ongoing during the `idleInside` phase preventing interaction with the sheet. https://github.com/silk-hq/community/issues/33
- Fix `touchstart` and `touchend` events not propagating to thrid-party HTML elements. https://github.com/silk-hq/community/issues/50

## v0.9.0 (breaking change)

- Change the way Silk low-level CSS styles are imported. Follow the [migration guide](https://www.notion.so/Silk-Migrating-from-v0-8-x-to-v0-9-x-1dc894277f3a806e8b6ad22837c9bcf3?pvs=21) on how to import them.
- Add a warning in the console when Silk CSS styles are not detected.
- Fix `onClickOutside` event being triggered when a click occurred on an element inside of `<Sheet.View>` that was removed from the DOM at the same time.
- Fix `onClickOutside` event being triggered when a click occurred on an element inside of a third-party overlay component.
- Fix error when the user presses the `escape` key when an `<ExternalOverlay />` is in use.
- Remove useLayoutEffect warnings in some environments.

## v0.8.15

- Fix travel and stacking animations when a sheet is used in a controlled manner (i.e. using the `presented` and `onPresentedChange` props). [#28](https://github.com/silk-hq/community/issues/28)

## v0.8.14

- Throw a proper error when the `theme-color` meta-tag is not set when the `themeColorDimming` prop on Sheet.Backdrop is used. [#13](https://github.com/silk-hq/community/issues/13)
- Throw a proper error when the `theme-color` meta-tag is not using the `rgb()` format for its content when using the `themeColorDimming` prop on Sheet.Backdrop is used. [#18](https://github.com/silk-hq/community/issues/18)
- Fix the types not being applied to the `<Sheet.Root />` component. [#17](https://github.com/silk-hq/community/issues/17)
- Remove unnecessary peerDepencies. [#27](https://github.com/silk-hq/community/issues/27)
- Fix invalid CSS. [#12](https://github.com/silk-hq/community/issues/12)
