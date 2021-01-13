# Simple project to demonstrate interaction between react and graphQL
## Environment variable 
The easiest way to set variables is to modify the `.env.local` file.

### `PORT`

By default PORT=8081, used by react-sript to set host port

### `REACT_APP_GITHUB_AUTH_TOKEN`
To run this example you will need to generate a [personal Github Token](https://github.com/settings/tokens) and 
add it to local `.env.local` file.

## Available Scripts

In the project directory:

### `npm start`

Runs the app in the development mode.
The page will reload if you make edits.
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Docker

The current project can be run in a docker container. Just run the following commands: 

### `docker build -t sample:dev .`
### `docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 8081:8081 -e CHOKIDAR_USEPOLLING=true sample:dev`