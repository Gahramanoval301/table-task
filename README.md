
# Hydra Api Structure

Hydra API Structure is a responsive React + TypeScript application that displays notices from JSON files with advanced table features such as filtering, sorting, and pagination. It uses react-table for table handling, framer-motion for animations, axios for API fetching, and SCSS for styling.


## Acknowledgements

- Built with [React](https://reactjs.org/) and TypeScript for a robust frontend experience.
- Table functionality powered by [react-table](https://react-table.tanstack.com/).
- Smooth animations implemented using [framer-motion](https://www.framer.com/motion/).
- API requests handled with [axios](https://axios-http.com/).
- Styling done with [Sass (SCSS)](https://sass-lang.com/) for modular and maintainable styles.
- Vite
 
## Authors

- [@Gahramanova Leman](https://www.github.com/Gahramanoval301)


## Folder Structure
```bash
public
|       notices.json
|       notices_page2.json
|       notices_page3.json
|       vite.svg
|
|---src
    |   App.tsx
    |   main.tsx
    |   vite-env.d.ts
    |
    |---api
    |       axiosInstance.ts
    |       notices.ts
    |
    |---assets
    |       react.svg
    |
    |---components
    |   |---NoticeTable
    |           index.tsx
    |
    |---pages
    |   |---About
    |   |       About.module.scss
    |   |       index.tsx
    |   |
    |   |---Home
    |   |       Home.module.scss
    |   |       index.tsx
    |   |
    |   |---NotFound
    |   |       index.tsx
    |   |       NotFound.module.scss
    |   |
    |   |---Notices
    |           index.tsx
    |           Notices.module.scss
    |
    |---routing
    |       route.tsx
    |
    |---shared
    |   |---animations
    |   |       index.ts
    |   |
    |   |---components
    |       AnimatedButton
    |       |       index.tsx
    |       |
    |       |---ColumnFilter
    |       |       ColumnFilter.module.scss
    |       |       index.tsx
    |       |
    |       |---GenericTable
    |       |       GenericTable.module.scss
    |       |       index.tsx
    |       |
    |       |---GlobalFilter
    |       |       GlobalFilter.module.scss
    |       |       index.tsx
    |       |
    |       |---Loader
    |       |       index.tsx
    |       |
    |       |---Pagination
    |               index.tsx
    |               Pagination.module.scss
    |
    |---styles
    |       colors.scss
    |       global.scss
    |       mixins.scss
    |       reset.scss
    |
    |---utils
        |---constants
        |       index.ts
        |
        |---hooks
        |       useNotices.tsx
        |
        |---types
                index.ts
```


## Features


- Responsive data table with sorting, filtering, and pagination

- Global and column-specific filters

- Smooth UI animations using framer-motion

- Fetches notices data from local JSON files via Axios

- Modular and reusable React components with TypeScript

- SASS/SCSS based styling with global and component-specific styles


## CSS Files

- `mixins.scss` — Contains reusable CSS mixins to keep styles DRY.
- `global.scss` — Includes global styles such as fonts, body styling, scrollbars, and loaders.
- `colors.scss` — Defines color variables for both dark and light themes.

