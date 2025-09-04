# ecss-project

Angular frontend skeleton for eCSS project.

## Setup
1. "Cài nodejs 20 và npm 10"
2. npm install
3. ng serve

## Structure
- src/app/core: ApiService, interceptors
- src/app/repos: plain TS repositories (not registered to DI)
- src/app/services: Injectable services (use repos internally)
- src/app/modules: cart / orders modules (lazy loaded)

## Git
git remote add origin https://github.com/dung2004/ecss-project.git
git push -u origin main
