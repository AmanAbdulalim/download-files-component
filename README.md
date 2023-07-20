## How to run
1. Install npm packages with `npm install`.
2. `npm run`. Once finished compiling, the terminal will show an address to access the application locally. Usually `http://localhost:3000` is shown.

## Run tests
1. `npm install` if packages haven't been installed yet.
2. `npm test`.

## About this project

### Technology decisions
This repo contains a Create React App project in Typescript. For the sake of emphasizing HTML, CSS, and Javascript ability, no additional UI, styling, or utility libraries outside of those bundled with Create React App were used to build this project. At the time of submission, no errors or warnings are observed in terminal or the browser console.

### Project Structure
This project was structured as if the scope could increase beyond this assignment. Inside the `src` folder, a `features` folder exists to separate components, utilities, and more by concern. Components that can be shared across concerns are to be located in the `src` folder, but is not observed in this project since all work is related specifically to the download files feature.

Tests and CSS Modules are located in the same location as their cooresponding component. This does clutter the folder structure, but for a smaller project it makes tests and styles easer to browse and locate.

### Styling
CSS Modules were used for all styling. In the event of a larger scoped project, tools like SASS or Tailwind would be preferred. Also UI component libraries can be taken into consideration depending on the needs of the project. The provided screenshot was used as a baseline for the styling found in this project.

### Testing
A combination of unit and integration tests were written for this project. Integration tests are marked with an `@integration` tag. Many of the required functionality for this project has coverage, but because if time limitations, full coverage was not pursued.

### Accessibility
Chrome Lighthouse was used for a high level accessibility check, scoring 100 at the time of submission. In addition, WCAG guidelines were cross referenced. Given more time, a WCAG level compliance would be pursued.