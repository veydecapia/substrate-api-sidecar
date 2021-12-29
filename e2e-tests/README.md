## Summary

This is a helper library for Sidecar to run e2e tests against specific chains, at certain blocks. 

## Testing

The below instructions are specific to running the e2e-tests against one chain. 
If you are looking to run the e2e-tests against all chains (Polkadot, Kusama, Westend, Statemine, Karura) then run `yarn test:init-e2e-tests` in 
the root directory of sidecar.

### Polkadot 

To run the tests against a single chain, you may use the following below. For more examples, reference the `<ROOT>/package.json`

`yarn test:init-e2e-tests:polkadot`



## Suggestions & Feedback

Below are my suggestion points and feedback while creating end to end tests for Karura. I basically used the same boilerplate code being used by other network.

To run karura test

`yarn test:init-e2e-tests:karura`


### Suggestion/Recommendation

1. For front end e2e test, suggest to add a test framework such as [Cypress](https://www.cypress.io/) to automate and run front end browser testing. We can use the power of both Test frameworks/tools (Jest & Cypress) to help us get good coverage of our code.
	- Jest for doing unit tests.
	- Cypress for running UI browser end to end tests.
2. Other option is to extend the use of Jest and add Selenium framework to automated browser interactions.
   - See differences of Selenium and Cypress - https://www.browserstack.com/guide/cypress-vs-selenium
   - https://blog.logrocket.com/cypress-io-the-selenium-killer/
3. Recommend to use [Got](https://www.npmjs.com/package/got) for calling API. Better abstraction but still gives lots of control. Also, has dedicated option for handling JSON. e.g. error logging, retries. For Better error logging and error messaging.


### Feedback
1. Good to use Jest for reliability, far quicker and less flaky tests and better control of the tests. Better than Postman/Newman.
2. Use of expect function and reviewing tests is faster on Jest. As in Postman you will deal with lots of diffs of JSON files.
3. However, Jest is not built for front end automated testing, browser testing, cross browser testing. 

### Other Public Automation Project
Please also check my browser end to end UI test.
- TodoMVC https://github.com/veydecapia/todomvc-exercise




<!-- CONTACT -->
## Contact

Your Name - harveydecapia@gmail.com

Project Link: [https://github.com/veydecapia/substrate-api-sidecar](https://github.com/veydecapia/substrate-api-sidecar)
