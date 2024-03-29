# volto-slate-dataentity

[![Releases](https://img.shields.io/github/v/release/eea/volto-slate-dataentity)](https://github.com/eea/volto-slate-dataentity/releases)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-slate-dataentity%2Fmaster&subject=master)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-slate-dataentity/job/master/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-dataentity-master&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-dataentity-master)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-dataentity-master&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-dataentity-master)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-dataentity-master&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-dataentity-master)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-dataentity-master&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-dataentity-master)

[![Pipeline](https://ci.eionet.europa.eu/buildStatus/icon?job=volto-addons%2Fvolto-slate-dataentity%2Fdevelop&subject=develop)](https://ci.eionet.europa.eu/view/Github/job/volto-addons/job/volto-slate-dataentity/job/develop/display/redirect)
[![Lines of Code](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-dataentity-develop&metric=ncloc)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-dataentity-develop)
[![Coverage](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-dataentity-develop&metric=coverage)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-dataentity-develop)
[![Bugs](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-dataentity-develop&metric=bugs)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-dataentity-develop)
[![Duplicated Lines (%)](https://sonarqube.eea.europa.eu/api/project_badges/measure?project=volto-slate-dataentity-develop&metric=duplicated_lines_density)](https://sonarqube.eea.europa.eu/dashboard?id=volto-slate-dataentity-develop)

[Volto](https://github.com/plone/volto) add-on

## Features

[Slate dataentity](https://raw.githubusercontent.com/eea/volto-slate-dataentity/master/docs/volto-slate-dataentity.gif)

## Getting started

### Try volto-slate-dataentity with Docker

1. Get the latest Docker images

   ```
   docker pull plone
   docker pull plone/volto
   ```

1. Start Plone backend

   ```
   docker run -d --name plone -p 8080:8080 -e SITE=Plone -e PROFILES="profile-plone.restapi:blocks" plone
   ```

1. Start Volto frontend

   ```
   docker run -it --rm -p 3000:3000 --link plone -e ADDONS="@eeacms/volto-slate-dataentity" plone/volto
   ```

1. Go to http://localhost:3000

### Add volto-slate-dataentity to your Volto project

1. Make sure you have a [Plone backend](https://plone.org/download) up-and-running at http://localhost:8080/Plone

   ```Bash
   docker compose up backend
   ```

1. Start Volto frontend

- If you already have a volto project, just update `package.json`:

  ```JSON
  "addons": [
      "@eeacms/volto-slate-dataentity"
  ],

  "dependencies": {
      "@eeacms/volto-slate-dataentity": "^1.0.0"
  }
  ```

- If not, create one:

  ```
  npm install -g yo @plone/generator-volto
  yo @plone/volto my-volto-project --addon @eeacms/volto-slate-dataentity
  cd my-volto-project
  ```

1. Install new add-ons and restart Volto:

   ```
   yarn
   yarn start
   ```

1. Go to http://localhost:3000

1. Happy editing!

## Release

See [RELEASE.md](https://github.com/eea/volto-slate-dataentity/blob/master/RELEASE.md).

## How to contribute

See [DEVELOP.md](https://github.com/eea/volto-slate-dataentity/blob/master/DEVELOP.md).

## Copyright and license

The Initial Owner of the Original Code is European Environment Agency (EEA).
All Rights Reserved.

See [LICENSE.md](https://github.com/eea/volto-slate-dataentity/blob/master/LICENSE.md) for details.

## Funding

[European Environment Agency (EU)](http://eea.europa.eu)
