<h1 align="center">
  <img src="./.github/logo.jpg" alt="GitLab Explorer" title="GitLab Explorer" />
</h1>

<p align="center">
  <a href="#trophy-lessons-learned">Lessons Learned</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-technologies--resources">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-setting-up-the-environment">Environment Setup</a>
</p>

<p align="center">
  <img src="https://img.shields.io/static/v1?labelColor=000000&color=2089dc&label=created%20at&message=Feb%202021" alt="Creation Date" />

  <img src="https://img.shields.io/github/last-commit/juliolmuller/gitlab-explorer-app?label=updated%20at&labelColor=000000&color=2089dc" alt="Update Date" />

  <img src="https://img.shields.io/github/v/tag/juliolmuller/gitlab-explorer-app?label=latest%20version&labelColor=000000&color=2089dc" alt="Latest Version" />

  <img src="https://img.shields.io/static/v1?labelColor=000000&color=2089dc&label=PRs&message=welcome" alt="Pull Requests Welcome" />

  <img src="https://img.shields.io/github/license/juliolmuller/gitlab-explorer-app?labelColor=000000&color=2089dc" alt="Project License" />
</p>

![Application snapshot](./.github/app-overview.jpg)

Application developed as an assignment to college, subject Development for Mobile Devices, at UFPR, in order to learn building **React Native** applications. The project seeks to apply knowledge in functional components, React Navigation, HTTP calls and Context API.

The proposal was to build a simple mobile app to consume GitLab API, implementing an authentication method to be able to navigate inside the app. The application should keep the access token with [AsyncStorage](https://react-native-async-storage.github.io/async-storage/), besides implementing a navigation drawer, using [React Navigation](https://reactnavigation.org/) extension. The usa og a third-party UI library was mandatory. A good-looking app may earn extra points 😍.

## :trophy: Lessons Learned

- Configuring React Context for authentication flow;
- Using React Native AsyncStorage package 😎;
- React Native Elements UI components 😠;
- Complex navigation with React Navigation (*drawer* and *bottom tabs*);
- Holding on splash screen while app is loading resources;
- COnfiguring status bar appearance (Android);
- Fetching data from GitLab API;

## :rocket: Technologies & Resources

**Frontend:**
- React Native
- Expo Framework
- Elements UI
- Axios (HTTP client)
- AsyncStorage

**Development:**
- Visual Studio Code
- NPM routines

## :hammer: Setting up the Environment

Before starting the development server, you need to set up the environment variables in a `.env` file, at the project root. For convenience, you can use `.env.example` as reference, so you'll know all variables available in the application. The most important one is **GITLAB_API_URL**, which points to the GitLab platform you want to fetch data from.

Make sure to have **Node.js 10+** installed in your machine and its **npm** available in the command line, then use the following routines:

```bash
$ npm install   # download all dependencies
$ npm start     # run development server
```
