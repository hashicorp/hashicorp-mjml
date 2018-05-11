# HashiCorp MJML Email Templates

This repo contains Hashicorp Emails and a set of custom components for hashicorp Emails

## Setup

after cloning this repo, `cd` to the base and run `npm i`

## Running the suite

Create a new `.mjml` file in the `./src` directory. For example

`src/2018_05_11_hashibits_june.mjml`

Note the naming structure of `YY_MM_DD_Subject.mjml`. Organizing source files this way will make them easy to find in the future.

Run `TARGET=./src/2018_05_11_hashibits_june.mjml npm run start`

This will create a watcher that compiles a new `.html` from MJML in the `dist` directory.

You may open this file in your browser and refresh to see changes as long as the watcher is running. When you are happy with the output, run

`TARGET=./src/2018_05_11_hashibits_june.mjml npm run build`

## About the MJML framework

MJML is a framework for build Email. More info available here:
[https://mjml.io/documentation/](https://mjml.io/documentation/)

### MJML Components

The best reference for built-in components and their options are available on [github](https://github.com/mjmlio/mjml/tree/master/packages)

### Custom components

An extensive Demo and a list of custom hashicorp components and their options can be found in `src/_components.mjml`
