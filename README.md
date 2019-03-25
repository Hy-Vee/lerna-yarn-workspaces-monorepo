# Creating a Monorepo with Lerna & Yarn Workspaces

> A Monorepo with multiple packages and a shared build, test, and release process.

-   🐉 [Lerna](https://medium.com/r/?url=https%3A%2F%2Flernajs.io%2F)  - The Monorepo manager
-   🧶 [Yarn Workspaces](https://medium.com/r/?url=https%3A%2F%2Fyarnpkg.com%2Flang%2Fen%2Fdocs%2Fworkspaces%2F)  -  Sane multi-package management
-   🚀 [React](https://medium.com/r/?url=https%3A%2F%2Freactjs.org%2F)  -  JavaScript library for user interfaces
-   💅 [styled-components](https://medium.com/r/?url=https%3A%2F%2Fwww.styled-components.com%2F)  -  CSS in JS elegance
-   🛠 [Babel](https://medium.com/r/?url=https%3A%2F%2Fbabeljs.io%2F)  -  Compiles next-gen JavaScript
-   📖 [Storybook](https://medium.com/r/?url=https%3A%2F%2Fstorybook.js.org%2F) - UI Component Environment
-   🃏 [Jest](https://medium.com/r/?url=https%3A%2F%2Fjestjs.io%2F)  -  Unit/Snapshot Testing

## Usage

-   `yarn dev` - This starts Storybook for viewing all the components locally.
-   `yarn bootstrap` - This installs all of the packages and links dependent packages together.
-   `yarn build` - This babelfies all of the packages and creates `/lib` folders for each one.
-   `yarn test` - Run all linting and unit tests before committing.
-   `yarn test -o` - Run only the tests that have changed.
-   `yarn test -u` - Update all of the snapshot tests.

## Lerna

-   `lerna changed` - Show which packages have changed.
-   `lerna diff` - Show specifically what files have cause the packages to change.

## Contributing

All formatting and linting should be taken care of for you using [stylelint](https://github.com/stylelint/stylelint), [ESLint](https://eslint.org/), and [Prettier](https://prettier.io/). You should also consider installing an extension for CSS syntax highlighting.

-   [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
-   [webstorm-styled-components](https://github.com/styled-components/webstorm-styled-components)
-   [Other IDEs](https://www.styled-components.com/docs/tooling#syntax-highlighting)
