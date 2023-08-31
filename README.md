<h3 align="center"><b>Metflix</b></h3>


<p align="center">This is a single-page app where users can search a movie, like and open details about each movie and leave comments. Built with JavaScript.</p>


<a name="readme-top"></a> 

# 📗 Table of Contents

- [📖 About the Project](#about-project)
  - [🛠 Built With](#built-with)
    - [Tech Stack](#tech-stack)
    - [Key Features](#key-features)
  - [🚀 Live Demo](#live-demo)
- [💻 Getting Started](#getting-started)
  - [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Usage](#usage)
  - [Run tests](#run-tests)
  - [Deployment](#triangular_flag_on_post-deployment)
- [👥 Authors](#authors)
- [🔭 Future Features](#future-features)
- [🤝 Contributing](#contributing)
- [⭐️ Show your support](#support)
- [🙏 Acknowledgements](#acknowledgements)
- [❓ FAQ (OPTIONAL)](#faq)
- [📝 License](#license)


# 📖 "Metflix" <a name="about-project"></a>

**"Metflix"** project is a single page app.

The app displays a list of movies and allows a user to search a movie by keywords. The data about movies is retrieved using externa TVmaze API.

A user can open movie details, like or leave a comment. User interactions (likes, comments) are enabled using external Involvement API.

The project repo consists of the following main files:

- style.css, index.html, index.js files are located in ./src directory;
- assets are located in ./src/assets;
- modules for index.js are located in ./src/modules
- distribution files main.js, index.html are generated by Webpack and served by Webpack dev server from /dist folder.

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/HTML">HTML</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/CSS">CSS</a></li>
    <li><a href="https://developer.mozilla.org/ru/docs/Web/JavaScript">JavaScript</a></li>
  </ul>
  <summary>Server</summary>
  <ul>
    <li><a href="https://webpack.js.org/">Webpack</a></li>
  </ul>
</details>


### Key Features <a name="key-features"></a>

- **possibility to search movies by keywords**
- **pop-up window showing details of the selected movie**
- **user interactions (likes, comments)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Live Demo <a name="live-demo"></a>

- use this link to visit and try the [Metflix app](https://arnoldnekemiah.github.io/Metflix/);

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run and modify this project you need:

- gitHub account;
- git installed on your OS;
- VSCode (or another code editor);
- modern browser (supporting HTML5 and CSS3) is highly recommended;

### Setup

Login to your GitHub account. Clone this repository to your desired folder:

> cd my-folder
> git clone git@github.com:arnoldnekemiah/Metflix.git

### Install

You need to have [Node.js and npm](https://nodejs.org/) installed to successfully run and modify this project using packages.

To install all dependencies run the following command:
> npm install

To run dev-server and use this website run the following command:
> npm start

---

**If you want to install dependencies manually follow these guidelines:**

You need to have [Webpack](https://nodejs.org/) installed to successfully run, modify and bundle the code in the `./dist` directory. In the root directory of the repo run the following command:
> npm install webpack webpack-cli --save-dev

To be able to use live reloading you need to install webpack-dev-server. In the root directory of the repo run the following command:
> npm install --save-dev webpack-dev-server

To make Webpack generate its own index.html file run the following command:
> npm install --save-dev html-webpack-plugin

Install the loaders in order to import a CSS file from within a JavaScript module by running:
> npm install --save-dev style-loader css-loader

To be able to deploy the project you need to install 'gh-pages':
> npm install gh-pages --save-dev

To install Jest run the following:
> npm install --save-dev jest
> npm install --save-dev jest-environment-jsdom

You might want to have linters installed in your local env to successfully run and modify this project:

- Webhint installation. Run the following command:
> npm install --save-dev hint@7.x

- Stylelint installation. Run the following command:
> npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x

- Eslint installation. Run the following command:
> npm install --save-dev eslint@7.x eslint-config-airbnb-base@14.x eslint-plugin-import@2.x babel-eslint@10.x

### Usage

You can use this project to search movies by keywords and interact with displayed movies:

1. Open the Demo link of this project (or run `npm start` in CLI if you cloned the project and installed all dependencies). This will open a new browser tab.
2. You should be able to see the Metflix displaying random movies with the search bar in header. Type your keywords and perform the search. The data about movies is retrieved using external TVmaze API.
3. Click on heart icon to like any movie on homepage.
4. Click on any displayed movie's Comment button to see the details and comments. You can add your comment for any movie. 
5. Refresh or close and open the page. Interaction data (likes, comments) is preserved using Involvement API service.

### Run tests

To run tests (Jest) execute the following:
> npm test

You can also check linter errors by running this commands:
> npx hint .<br />
> npx stylelint "**/*.{css,scss}" <br />
> npx eslint . <br />
> lighthouse url options

### Deployment

This porject uses `gh-pages` branch for deployment.
To deploy modified version of this repo run the following command:
> npm run deploy

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 👥 Authors <a name="authors"></a>

👤 Zilola Nazarova

- GitHub: [@Zilola-Nazarova](https://github.com/Zilola-Nazarova)
- Twitter: [@NazarovaZi](https://twitter.com/NazarovaZi)
- LinkedIn: [in/NazarovaZi](https://www.linkedin.com/in/NazarovaZi)

👤 Ikonde (Arnold) Nekemiah

- GitHub: [@arnoldnekemiah](https://github.com/arnoldnekemiah)
- Twitter: [@arnoldikonde](https://twitter.com/arnoldikonde)
- LinkedIn: [Ikonde (Arnold) Nekemiah](https://www.linkedin.com/in/arnoldnekemiah/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🔭 Future Features <a name="future-features"></a>

- [ ] design improvements (mobile-first approach);
- [ ] reservation functionality;
- [ ] additional navlinks (e.g. contacts, about us);
- [ ] interactivity (transitions and animations);

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcomed!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

If you like this project just star it!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>

We would like to thank Microverse program for the knowledge and skills we have acquired in Modules 1 and 2.

We are grateful for all our previous project reviewers for their advice. Thanks to them we could build this app.


<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>

- **Why the app doesn't display all possible movies when I click on a genre in navigation bar?**

  - This is becuase of the way API works. The search performed in TVmaze API shows only first 10 results of the search. In order to see more movies we would have to use another API or upgrade our TVmaze account that was not required in this capstone project.

- **The layout of the pop-up would look better if the movie details were displayed to the right of the movie poster. Why didn't you use this approach?**

  - In this capstone project we are supposed to follow the medium-fidelity wireframes. According to these wireframes the details should be positioned below the image.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 📝 License <a name="license"></a>

This project is [MIT](./MIT.md) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>
