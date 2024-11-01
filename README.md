## SEREDA.ai Front-end Developer

## React + TypeScript + Vite template

- [Libs](#libs)
- [File structure](#file-structure)
- [Run](#run)
- [Pages](#pages)

## Pages

[gh-pages](https://bohdanradchenko.github.io/sereda.ai/)

## libs

- [vite](https://vite.dev/guide/)
- [vite svgr](https://www.npmjs.com/package/vite-plugin-svgr)
- [TypeScript](https://www.typescriptlang.org/)
- [tsconfig path](https://www.npmjs.com/package/vite-tsconfig-paths)
- [simple import sort](https://github.com/lydell/eslint-plugin-simple-import-sort/)
- [mui v6](https://mui.com/material-ui/getting-started/)
- [fontsource](https://fontsource.org/fonts/lexend)
- [react-query](https://tanstack.com/query/latest/docs/framework/react/overview)
- [react router v6](https://reactrouter.com/en/main/start/overview)
- [react hook form](https://www.react-hook-form.com/get-started)
- [react context](https://react.dev/learn/scaling-up-with-reducer-and-context)

## File structure

    .
    ├── ...
    ├── src                   # Source files
    │   ├── api               # api services and mock db
    │   ├── assets            # assets | icons *.svg
    │   ├── components        # 
    │   ├── constants         # 
    │   ├── context           # 
    │   ├── helpers           # 
    │   ├── hooks             # 
    │   ├── icons             # icons react function components
    │   ├── interfaces        #  
    │   ├── modules           # business logic
    │   ├── pages             # router pages lazy components
    │   ├── providers         # 
    │   ├── router            # router enty points
    │   ├── theme             # theme mui config
    │   ├── main.ts           # js app entry point
    └── index.html            # html app entry point
    └── .. 

## Run

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:5100](http://localhost:5100) to view it in the browser.

### `yarn build`

### `yarn preview`

Runs the app in the prod mode.<br>
Open [http://localhost:4173](http://localhost:4173) to view it in the browser.