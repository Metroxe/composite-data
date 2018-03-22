# How to Contribute

## Development Environment
The development environment is full fledged out and we suggest you follow the guideline below to successfully contribute to this project.

### Always Use Yarn
This project has be developed from the bottom up using yarn, and many of the watch have only be configured with [yarn](https://yarnpkg.com/en/). Hence we suggest that when contributing, it's safe to only use yarn and do not use npm directly. The download instructions for yarn can be found [here](https://yarnpkg.com/en/docs/install)

### Running the BrowserSync Tool
This project has a built in testing suite, that can be viewed and ran alongside the typescript compiler. please use the command
`yarn run watch` after a yarn install. This will use [BrowserSync](https://browsersync.io/) and [Concurrently](https://github.com/kimmobrunfeldt/concurrently) to display a testing suite, while simultaneously running the typescript compiler. Once running, you can view the suite at `localhost:3000`

### Passing the Coverage Tests
You'll see in your terminal after running `yarn run watch` that there are coverage tests, that will crash the suite if not met. This is intentional and upon compiling again will rerun the tests. These coverage tests, must pass before committing is allowed. Travis will not accept any merge requests on branches that have failing coverage tests. You can view the breakdown of what is not being covered in the browser via the testing suite.

### Travis
Travis is set up with the project. It tests every merge and commit and will be required for merge commits. The link for our current Travis project is [here](https://travis-ci.org/Metroxe/composite-data).

### Writing Tests
Tests should be created for each new data type that is added, please do not commit, unless there is a test for that specific data type.

## Revert Policy
By running the test suite alongside development, the needs for reverts, should be minimal. Please read the development environment section to learn how to constantly run your tests.