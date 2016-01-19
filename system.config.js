System.config({
  baseURL: "./",
  defaultJSExtensions: true,
  transpiler: "babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ],
    "retainLines": true
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  map: {
    "angular": "npm:angular@1.4.8",
    "angular-route": "npm:angular-route@1.4.8",
    "angular-sanitize": "npm:angular-sanitize@1.4.8",
    "babel": "npm:babel-core@5.8.34",
    "babel-runtime": "npm:babel-runtime@5.8.34",
    "bootstrap-sass-official": "github:twbs/bootstrap-sass@3.3.6",
    "core-js": "npm:core-js@1.2.6",
    "font-awesome": "npm:font-awesome@4.4.0",
    "laxar": "github:LaxarJS/laxar@2.0.0-pre.246",
    "laxar-jasmine-runner": "github:LaxarJS/laxar-jasmine-runner@0.1.1",
    "moment": "npm:moment@2.11.1",
    "github:LaxarJS/laxar-jasmine-runner@0.1.1": {
      "css": "github:systemjs/plugin-css@0.1.20",
      "image": "github:systemjs/plugin-image@0.1.0",
      "jasmine-core": "npm:jasmine-core@2.4.1"
    },
    "github:LaxarJS/laxar@2.0.0-pre.246": {
      "angular": "npm:angular@1.4.8",
      "angular-route": "npm:angular-route@1.4.8",
      "angular-sanitize": "npm:angular-sanitize@1.4.8",
      "jjv": "npm:jjv@1.0.2",
      "jjve": "npm:jjve@0.5.1"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:angular@1.4.8": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.34": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:core-js@1.2.6": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:font-awesome@4.4.0": {
      "css": "github:systemjs/plugin-css@0.1.20"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jasmine-core@2.4.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:jjv@1.0.2": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:moment@2.11.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});
