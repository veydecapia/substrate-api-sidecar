## Summary

This is a helper library for Sidecar to run e2e tests against specific chains, at certain blocks. 

## Testing

The below instructions are specific to running the e2e-tests against one chain. 
If you are looking to run the e2e-tests against all chains (Polkadot, Kusama, Westend, Statemine, Karura) then run `yarn test:init-e2e-tests` in 
the root directory of sidecar.

### Testing on Polkadot 

To run the tests against a single chain, you may use the following below. For more examples, reference the `<ROOT>/package.json`

`yarn test:init-e2e-tests:polkadot`



## Limitations on Added Karura e2e Test
To run karura test

`yarn test:init-e2e-tests:karura`

Please note that there are some unsupported endpoints for Karura as of this writing so some tests are not included. Please see below.

### Vesting Info Test Limitation
Vesting info endpoint is not supported for Karura at the moment. An error response will be returned when trying to do so.

Tried to add `'AccountsVestingInfo'` in the Karura chains controller [config](https://github.com/paritytech/substrate-api-sidecar/blob/master/src/chains-config/karuraControllers.ts#L11) as a workaround. 

The below error is the response.

```
{
  "code": 500,
  "message": "historicApi.query.vesting.vesting is not a function",
  "stack": "TypeError: historicApi.query.vesting.vesting is not a function\n    at AccountsVestingInfoService.fetchAccountVestingInfo (/home/harvey/Documents/GitHub/substrate-api-sidecar/build/src/services/accounts/AccountsVestingInfoService.js:21:39)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at async AccountsVestingInfoController.getAccountVestingInfo (/home/harvey/Documents/GitHub/substrate-api-sidecar/build/src/controllers/accounts/AccountsVestingInfoController.js:41:62)\n    at async /home/harvey/Documents/GitHub/substrate-api-sidecar/build/src/controllers/AbstractController.js:168:9",
  "level": "error"
}
```


### Staking Info Test Limitation
Same with Vesting, staking info endpoint is also not supported for Karura.
Added `'AccountsStakingInfo'` in the Karura chains controller.

The below error is the response.

```
{
  "code": 500,
  "message": "Cannot read properties of undefined (reading 'bonded')",
  "stack": "TypeError: Cannot read properties of undefined (reading 'bonded')\n    at AccountsStakingInfoService.fetchAccountStakingInfo (/home/harvey/Documents/GitHub/substrate-api-sidecar/build/src/services/accounts/AccountsStakingInfoService.js:18:39)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at async AccountsStakingInfoController.getAccountStakingInfo (/home/harvey/Documents/GitHub/substrate-api-sidecar/build/src/controllers/accounts/AccountsStakingInfoController.js:61:62)\n    at async /home/harvey/Documents/GitHub/substrate-api-sidecar/build/src/controllers/AbstractController.js:168:9",
  "level": "error"
}
```


### Parachain Test Limitation
Parachain endpoint is also not supported yet for Karura.

```
{
  "code": 500,
  "message": "Parachains are not yet supported on this network.",
  "stack": "Error: Parachains are not yet supported on this network.\n    at ParasController.checkParasModule (/home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/@substrate/api-sidecar/build/src/controllers/paras/ParasController.js:46:23)\n    at ParasController.getAuctionsCurrent (/home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/@substrate/api-sidecar/build/src/controllers/paras/ParasController.js:40:18)\n    at /home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/@substrate/api-sidecar/build/src/controllers/AbstractController.js:168:15\n    at Layer.handle [as handle_request] (/home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/express/lib/router/layer.js:95:5)\n    at next (/home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/express/lib/router/route.js:137:13)\n    at Route.dispatch (/home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/express/lib/router/route.js:112:3)\n    at Layer.handle [as handle_request] (/home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/express/lib/router/layer.js:95:5)\n    at /home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/express/lib/router/index.js:281:22\n    at Function.process_params (/home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/express/lib/router/index.js:341:12)\n    at next (/home/harvey/.npm/_npx/8bf7ace223ab1c10/node_modules/express/lib/router/index.js:275:10)",
  "level": "error"
}
```


## Daily Test

### Github Workflow
As part of the challenge, I have added a github workflow to run the e2e tests daily 12am UTC, see [here](https://github.com/veydecapia/substrate-api-sidecar/blob/65cdebaaa12cd0992ba185947a8f593cfde1962e/.github/workflows/e2e-tests.yml#L8). The test will run all the available chain network test including the newly created test for the Karura network.

It will run the test in the below order:
1. Polkadot
2. Kusama
3. Westend
4. Statemine
5. Karura

Please note that there are some issues on the execution of the scheduled cron job. See issue [here](https://github.community/t/no-assurance-on-scheduled-jobs/133753)

For a sample test run click [here](https://github.com/veydecapia/substrate-api-sidecar/runs/4683357686?check_suite_focus=true)

### On Push to master
I have added a trigger on push to master branch on top of the daily tests. This is to trigger the e2e test upon pushing a change to master in order to have a faster feedback of the change made as part of the CI process and Regression Test process. See [here](https://github.com/veydecapia/substrate-api-sidecar/blob/65cdebaaa12cd0992ba185947a8f593cfde1962e/.github/workflows/e2e-tests.yml#L6)

It should answer the question. Does the new feature/new change (code change) break the previous functionality? Does the automated test needed to be updated?


## Suggestions & Feedback

Below are my suggestion points and feedback while creating end to end tests for Karura.


### Suggestion/Recommendation

1. For front end e2e test, suggest to add a test framework such as [Cypress](https://www.cypress.io/) to automate and run front end browser testing. We can use the power of both Test frameworks/tools (Jest & Cypress) to help us get good coverage of our code.
	- Jest for doing unit tests.
	- Cypress for running UI browser end to end tests.
2. Other option is to extend the use of Jest and add Selenium framework to automated browser interactions.
   - See differences of Selenium and Cypress - https://www.browserstack.com/guide/cypress-vs-selenium
   - https://blog.logrocket.com/cypress-io-the-selenium-killer/
3. Recommend to use [Got](https://www.npmjs.com/package/got) for calling API. Better abstraction but still gives lots of control. Also, has dedicated option for handling JSON. e.g. error logging, retries. For Better error logging and error messaging.


### Feedback
1. Good to use Jest for reliability, far quicker and less flakey tests and better control of the tests. Better than Postman/Newman.
2. However, Jest is not built for front end automated testing, browser testing, cross browser testing. 

### Other Public Automation Project
Please also view and check my Automated browser end to end UI test built using Protractor.
- TodoMVC https://github.com/veydecapia/todomvc-exercise




<!-- CONTACT -->
## Contact

Your Name - harveydecapia@gmail.com

Project Link: [https://github.com/veydecapia/substrate-api-sidecar](https://github.com/veydecapia/substrate-api-sidecar)
