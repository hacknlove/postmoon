# postmoon

## Startup

### As glitch project

1. Go to [https://glitch.com/](https://glitch.com/)
2. Click on "New project"
3. Click on "Clone from git Repo"
4. Enter `https://github.com/hacknlove/postmoon-glitch`

### As node project
1. execute:
```
mkdir postoom-example
cd postmoon-example
npm init -y
npm i @hacknlove/postmoon
```
2. Edit your `package.json` and set
```
  "scripts": {
    "start": "nodemon -e js,json --exec 'npm run postmoon'",
    "postmoon": "postmoon"
  },
```
3. Execute `npm start`

### As bare folder
1. execute:
```
mkdir postoom-example
cd postmoon-example
`npx nodemon -e js,json --exec 'npx postmoon'`
```

## Write tests

Create your test's files in the root folder of your project.

* `foo.js` contains the test source for the test named `foo`
* `foo.json` contains the mocked response for the `default` scenario of the test `foo`
* `foo.bar.json` contains the mocked response for the `bar` scenario of the test `foo`

## `global` and `environment` variables

You can set your `global` and `environment` variables in the files `global.json` and `environment.json`

Each scenario starts with a fresh and clean copy of the variables.
