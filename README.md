# Watson UI Component Library

Welcome to the git repo for the Watson UI Component Library.
This SASS library is a development resource to help developers quickly and consistently develop quality ui.

The Main Website: https://pages.github.ibm.com/watson/ui-component-library/

The Main Contact: [James Zhang](http://faces.tap.ibm.com/bluepages/)

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

To publish to the [main site](https://pages.github.ibm.com/watson/ui-component-library/), use the `git subtree push --prefix build origin gh-pages` and update the `gh-pages` branch.


## Build the public Bower Component

1. Use gulp command

  ```bash
  $ gulp bower
  ```
  
## Credits

This project could not have been made possible without the hard work from the team that worked on the previous [Watson Design Guide](https://github.com/IBM-Watson/design-guide).  Many concepts and Sass techniques were borrowed from their project, while others were modified.
