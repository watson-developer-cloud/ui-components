# Watson Developer Cloud Component Library [![Build Status](https://travis-ci.org/watson-developer-cloud/ui-components.svg?branch=master)](https://travis-ci.org/watson-developer-cloud/ui-components)

The Watson Platform Component Library is a Sass library that translates Watson design language into UI components to help develop web UI.

Demo: https://watson-developer-cloud.github.io/ui-components/

## Install
  ```bash
  $ npm install watson-ui-components
  ```

## Usage

All needed CSS, images, and javascript are found in `/dist`.


In Sass, you just need to import the sass file:
```css
@import 'watson-ui-components/dist/_watson-ui-components.scss';
```

Make sure `node_modules` is a loaded path so that sass can find the route above.

## How to Contribute

### Install Dependencies

```bash
npm install
gulp
```

### CSS Primarily Written in BEM format
* [Side Effects in CSS](http://philipwalton.com/articles/side-effects-in-css/)
* [BEM 101](https://css-tricks.com/bem-101/)
* [A New Front-End Methodology: BEM](http://www.smashingmagazine.com/2012/04/16/a-new-front-end-methodology-bem/)
* [BEM: Technology for creating web applications](https://en.bem.info/)

You will need to make sure the icon-fonts are referenced properly.
The path of the icon-fonts must be relative to the path of the compiled css file.

You will also need to make sure to load the paths of your `node_modules` directory into your Sass configurations, so that the library can reference its npm dependencies properly.

## Directory Structure

```none
.
└─ dist
 ├── _watson-ui-components.scss   // Compiled Sass
 ├── watson-ui-components.css     // Compiled css
 └── watson-ui-components.min.css
```

## Credits

This project could not have been made possible without the hard work from the team that worked on the previous [Watson Design Guide](https://github.com/IBM-Watson/design-guide). Many concepts and Sass techniques were borrowed from their project, while others were modified.
