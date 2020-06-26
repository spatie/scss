# scss

[![Latest Version on NPM](https://img.shields.io/npm/v/scss.svg?style=flat-square)](https://npmjs.com/package/scss)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

SCSS boilerplate with common functions, mixins, helpers and patterns to kickstart CSS authoring.

The package sets some sensible defaults for HTML elements eg.:

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

$font-weight: (
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

... and can be used with mixins or functions afterwards:

```scss
// my-app.scss

@import '@spatie/scss/settings';
@import 'my-custom-settings';
@import '@spatie/scss/styles';

h1 {
    @include font-secondary-bold;
    color: blue(darkest);
}

```

*Full documentation in progress*

## Support us

Learn how to create a package like this one, by watching our premium video course:

[![Laravel Package training](https://spatie.be/github/package-training.jpg)](https://laravelpackage.training)

We invest a lot of resources into creating [best in class open source packages](https://spatie.be/open-source). You can support us by [buying one of our paid products](https://spatie.be/open-source/support-us).

We highly appreciate you sending us a postcard from your hometown, mentioning which of our package(s) you are using. You'll find our address on [our contact page](https://spatie.be/about-us). We publish all received postcards on [our virtual postcard wall](https://spatie.be/open-source/postcards).

## Postcardware

Spatie is a webdesign agency based in Antwerp, Belgium. You'll find an overview of all our open source projects [on our website](https://spatie.be/opensource).

You're free to use this package (it's [MIT-licensed](LICENSE.md)), but if it makes it to your production environment we'd appreciate if you send us a postcard from your hometown, mentioning which of our package(s) you are using.

Our address is: Spatie, Kruikstraat 22, 2018 Antwerp, Belgium.

The best postcards will get published on the open source page on our website.

## Install

You can install the package via yarn:

```bash
yarn add @spatie/scss
```

## Usage

### Import

Import the base & styles file in your SCSS files.

```scss
@import '@spatie/scss/settings';
@import '@spatie/scss/styles';
```

### Overwriting defaults

All default settings are stored in `src/settings`. Copy 1 or more of these Sass maps to your own project and import them before you import the main file.

Eg. to set your own gutters in `px` instead of `rem`, you would construct or import your own `$gutters` variable.
Be sure to remove the `!default` flag for this variable.

```scss
// your-app.scss
@import '@spatie/scss/settings';

// overwrite default settings
$gutter: (
    xs: 5px,
    s: 10px,
    default: 20px,
    ...
);

@import '@spatie/scss/styles';
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
