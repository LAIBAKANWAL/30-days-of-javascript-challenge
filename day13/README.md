# Day 13: Modules


This document provides a detailed overview of JavaScript modules, including how to create and export modules, the difference between named and default exports, how to import entire modules, how to use third-party modules, and how to bundle modules using Webpack.

## Creating and Exporting Modules
Modules are reusable pieces of code that can be imported and used in other parts of your application. JavaScript modules help organize code by splitting it into smaller, manageable files.

## Named and Default Exports
There are two types of exports in JavaScript: named exports and default exports.

### Named Exports
Named exports allow you to export multiple values from a module. You can import these values by using the same names.

### Default Exports
Default exports allow you to export a single value from a module. You can import it using any name you choose.

## Importing Entire Modules
You can import an entire module as an object, giving you access to all its exports.

## Using Third-Party Modules
Third-party modules can be installed using npm or yarn and imported into your project.

## Module Bundling Using Webpack
Webpack is a module bundler that bundles JavaScript files for usage in a browser.

### Steps to Bundle Modules Using Webpack

* nstall Webpack:
npm install webpack webpack-cli 

* Create Webpack Configuration:
Create a file named webpack.config.js:

* Create Source Files:
src/
└── index.js
dist/
└── index.html


* Build the Project:

Add a build script to your package.json:
{
  "scripts": {
    "build": "webpack"
  }
}

* Run the build script:
npm run build




