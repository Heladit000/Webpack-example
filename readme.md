# 📦️ Webpack-example

Webpack fundamentals example with test build project
https://webpack-build.netlify.app/

![deploy](https://media.giphy.com/media/bUGmkCQMC8jHRQzHA0/giphy.gif)

## Features

- html/css/js/sass minimizers
- old javascript support with babel
- custom compile

## Installation

requires [Node.js](https://nodejs.org/) v10+ to run.

clone the repository

```sh
git clone https://github.com/Heladit000/Webpack-example.git
```

Install all dependencies

```sh
npm install
```

create .env file with public API values

```
PROFILE_API=https://randomuser.me/api
IMAGE_API=https://picsum.photos
```
## Build and development 
### production mode
Run in production mode 
> you can open the build in `dist/index.html`

```sh
npm run build
```
Run in production mode with remote env keys

```sh
npm run build:remote-env
```

### developing mode
Run in developing mode 
> automatic changes and live server

```sh
npm run dev
```

## License

MIT
