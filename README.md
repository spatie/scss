# spatie-scss

[![Latest Version on NPM](https://img.shields.io/npm/v/spatie-scss.svg?style=flat-square)](https://npmjs.com/package/spatie-scss)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE.md)

SCSS boilerplate with common functions, mixins, helpers and patterns to kickstart a web project.

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

Work in progress

### base

### helpers

### patterns

### settings

### utility


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
