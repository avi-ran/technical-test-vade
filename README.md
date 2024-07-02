# Vade technical test

## Table of content

- [Vade technical test](#vade-technical-test)
  - [Table of content](#table-of-content)
  - [Get started](#get-started)
  - [Docker image](#docker-image)
  - [Technical test recap](#technical-test-recap)
  - [Test result sample](#test-result-sample)

## Get started

clone the repo, then:

```bash
npm install
```

headless mode:

```bash
npm run test
```

UI mode:

```bash
npm run cy:open
```

## Docker image

- Build the image

> Note: This command will build an image containing Cypress, its dependencies + the tested app

```bash
docker build . -t tech-test:latest
```

- Run the container and get result of test execution

```bash
docker run tech-test:latest
```

## Technical test recap

1. Setup

- [x] Repo installation

2. Test automation

- [x] (TC) Create a task
- [x] (TC) Update a task
- [x] (TC) Delete a task
- [x] **Added test case to show a bug:** (TC) Count the number of un-done items left

3. Deliverables

- [x] Tests scripts are embedded in the project under `cypress/e2e/todo.cy.js`
- [x] Bug reports are made in the issue section (I added an automated test case that reveal one of the issue)

4. Docker image

- [x] Document how to build and run the resulting Docker image

## Test result sample

```bash
❯ npm run test

> Vade technical test@0.0.0-development test
> npm start & cypress run


> Vade technical test@0.0.0-development start
> node ./scripts/start.js

Running "serve --listen 8080 --no-request-logging"...

   ┌──────────────────────────────────────────────────┐
   │                                                  │
   │   Serving!                                       │
   │                                                  │
   │   - Local:    http://localhost:46433             │
   │   - Network:  http://10.20.114.29:46433          │
   │                                                  │
   │   This port was picked because 8080 is in use.   │
   │                                                  │
   │   Copied local address to clipboard!             │
   │                                                  │
   └──────────────────────────────────────────────────┘


DevTools listening on ws://127.0.0.1:37557/devtools/browser/840d37ec-8217-4e41-bb18-b31345df1828
MESA-INTEL: warning: Performance support disabled, consider sysctl dev.i915.perf_stream_paranoid=0


====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:        13.12.0                                                                        │
  │ Browser:        Electron 118 (headless)                                                        │
  │ Node Version:   v20.15.0 (/home/atetia/.nvm/versions/node/v20.15.0/bin/node)                   │
  │ Specs:          1 found (todo.cy.js)                                                           │
  │ Searched:       cypress/e2e/**/*.cy.{js,jsx,ts,tsx}                                            │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  todo.cy.js                                                                      (1 of 1)


  example to-do app
    ✓ can add new todo items (453ms)
    ✓ can update a task (1302ms)
    ✓ can delete a task (392ms)
    1) count the number of un-done items left


  3 passing (8s)
  1 failing

  1) example to-do app
       count the number of un-done items left:

      Timed out retrying after 4000ms
      + expected - actual

      -'1 item left'
      +'0 items left'
      
      at Context.eval (http://localhost:8080/__cypress/tests?p=cypress/e2e/todo.cy.js:98:29)




  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        4                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      1                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  1                                                                                │
  │ Video:        false                                                                            │
  │ Duration:     7 seconds                                                                        │
  │ Spec Ran:     todo.cy.js                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Screenshots)

  -  /home/atetia/technical-test-vade/cypress/screenshots/todo.cy.js/example to-do ap     (1280x720)
     p -- count the number of un-done items left (failed).png                                       


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✖  todo.cy.js                               00:07        4        3        1        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✖  1 of 1 failed (100%)                     00:07        4        3        1        -        -  
```
