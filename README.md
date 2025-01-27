# AngularReactProject

This repo covers the integration process while utilizing your NX monorepo

# Starting a fresh project

**Clone repo**
git clone the nx-repo

**Navigate into repo**
cd into nx-repo

**Install your NX dependencies**
npm install -g nx

**Create your workspace environment or just pull**
npx create-nx-workspace@latest

**Generate your react "plugin"**
nx generate @nrwl/react:application react-app

**Generate your Angular "Plugin"**
nx generate @nrwl/angular:application angular-app

**Create the central shared library**
nx generate @nrwl/workspace:library shared-lib

**Run your applications**
_nx serve react-app_
_nx serve angular-app_

## Project owner

**Tolulope Dosu-Idowu**
