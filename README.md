# Warning: ALFA status, Not stable at all, everything can change.

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

## tests

Write your tests in files, you can all the postman's API.

If postmoon lacks of some postman's API characteristic you would like to use, please open an issue at [issues](https://github.com/hacknlove/postmoon/issues)

You cannot use the filenames `global.js`, `environment.js` and `requests.js`

## environment variables

You can set your `global` and `environment` variables in the files `global.json` and `environment.json`

Each each scenario starts with a fresh and clean copy of the variables.

```
{
  "variableName": "variableValue",
  "and": "so on"
}
```

## requests

If you want to use `pm.sendRequest()` you can set request globaly by the file `requests.js`

```
var requests = [
  {
    url: /regexp/,
    code: 200
    response: {
      ok: true
    }
  },
  {
    url: /regexp/,
    handler (request) {
      return {
        code: 200
        response: {
          ok: true
        }
      }
    }
  }
]
```


## scenarios

Write the scenarios that are going to be used to each test your tests in a `.json` file with the same name as the test `.js` file

```
{
  "global": {
  },
  "environment": {
  },
  pass: 3,
  fail: 0,
  requests: [

  ],
  "scenarios": {
    "scenarioName": {
      "global": {
      },
      "environment": {
      },
      pass: 3,
      fail: 0,
      requests: [

      ],
      response: {

      }
    }
  }
}
```
