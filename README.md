# spatie-scss

[![Latest Version on NPM](https://img.shields.io/npm/v/spatie-scss.svg?style=flat-square)](https://npmjs.com/package/spatie-scss)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

SCSS boilerplate with common functions, mixins, helpers and patterns to kickstart CSS authoring.

The packages sets some sensible defaults for HTML elements eg.:

```scss
// base/*.scss

* {
    box-sizing: border-box;
    position: relative;

    &:after,
    &:before {
        box-sizing: border-box;
    }
}
```

Generic helper classes are included for common layout issues:

```scss
// helpers/margin.scss

.h-margin {
    ...
}

.h-margin-none {
    ...
}

.h-margin-small {
    ...
}

...

```

Default settings are stored in Sass maps...

```scss
// settings/typography.scss

$font-weights: (
    default: (
            ...
            ),
    secondary: (
        normal: 400,
        bold: 700,
    ),
    fixed: (
       ...
    ),
) !default;


// settings/colors.scss

$blue: (
    lightest: #e6f5ff,
    lighter: #8bcdff,
    ...
) !default;
```

...and can be used with mixins or functions afterwards:

```scss
// Your app.scss

@import 'spatie-scss/spatie'

h1 {
    @include font-secondary-bold;
    color: blue(darkest);
}

```

Full documentation in progress.

## Postcardware

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

You're free to use this package (it's [MIT-licensed](LICENSE.md)), but if it makes it to your production environment we'd appreciate if you send us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Spatie, Samberstraat 69D, 2060 Antwerp, Belgium.

The best postcards will get published on the open source page on our website.

## Install

You can install the package via yarn:

```bash
yarn add spatie-scss
```

## Usage

### Import

Import the main file in your SCSS files.

```scss
@import 'spatie-scss/spatie'
```

### Overwriting defaults

All default settings are stored in `src/settings`. Copy 1 or more of these Sass maps to your own project and import them before you import the main file.

Eg. to set your own gutters in `px` instead of `rem`, you would construct or import your own `$gutters` variable.
Be sure to remove the `!default` flag for this variable.

```scss
// app.scss
$gutters: (
    xs: 5px,
    s: 10px,
    default: 20px,
    ...
);

@import 'spatie-scss/spatie';
```

### Autoprefixing

CSS properties are not vendor-prefixed. Running autoprefixer in your own build process is recommended.


## Documentation

This package implements the ideas from our [css-styleguide](https://github.com/spatie/css-styleguide).

*Work in progress*

### Code Style
- Install cscomb globally via `npm i csscomb -g` 
- Put a `.csscomb.json` in root dir of your project
- Run `csscomb src`

## Change log

Please see [CHANGELOG](CHANGELOG.md) for more information what has changed recently.


## Contributing

Please see [CONTRIBUTING](CONTRIBUTING.md) for details.

## Credits

- [Willem Van Bockstal](https://github.com/willemvb)
- [All Contributors](../../contributors)

## About Spatie

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

## License

The MIT License (MIT). Please see [License File](LICENSE.md) for more information.
