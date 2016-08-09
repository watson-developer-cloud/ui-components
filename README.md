# Watson Developer Cloud Component Library [![Build Status](https://travis-ci.org/watson-developer-cloud/ui-components.svg?branch=master)](https://travis-ci.org/watson-developer-cloud/ui-components)

Welcome to the git repo for the Watson Developer Cloud Component Library.
This SASS library is a development resource to help developers quickly and consistently develop quality ui.

The Main Website: https://watson-developer-cloud.github.io/ui-components/

# Getting Started

## Prerequisites

1. [NodeJS](https://nodejs.org/en/) - make sure your node version matches the version specified in `package.json`.

## Running the project

1. Make sure to have all prerequisites before continuing further.

1. Install [Bower](https://bower.io/) globally if you have not already.

  ```bash
  $ npm install -g bower
  ```

1. Install [Gulp](http://gulpjs.com/) globally if you have not already.

  ```bash
  $ npm install -g gulp
  ```

1. Install node modules.

  ```bash
  $ npm install
  ```

1. Install bower modules.

  ```bash
  $ bower install
  ```

1. Run the app

  ```bash
  $ gulp
  ```

## Publishing a Github Page

To publish to the [main site](https://watson-developer-cloud.github.io/ui-components/), use the `npm deploy` top update to `gh-pages` branch.


## Build the public Bower Component

1. Use gulp command

  ```bash
  $ gulp bower
  ```

## Versioning Bower Component

To bump the version of the bower component, update the version property in `bower.json`, and then match the version with git tags.

Example of git tags:

```bash
$ git tag -a v0.0.5 -m "Release version 0.0.5"
$ git push origin master --tags
```

## Installation and Dependencies

You will need to make sure the icon-fonts are referenced properly.
The path of the icon-fonts must be relative to the path of the compiled css file.

You will also need to make sure to load the paths of your `bower_components` directory into your Sass configurations, so that the library can reference its bower_components dependencies properly.

The javascript of this library relies on `JQuery 2.*.*` and above.  Make sure it is
included before this library.

## Credits

This project could not have been made possible without the hard work from the team that worked on the previous [Watson Design Guide](https://github.com/IBM-Watson/design-guide).  Many concepts and Sass techniques were borrowed from their project, while others were modified.
