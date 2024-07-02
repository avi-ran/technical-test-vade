# Vade technical test

## Table of content

- [Vade technical test](#vade-technical-test)
  - [Table of content](#table-of-content)
  - [Get started](#get-started)
  - [Docker image](#docker-image)
  - [Technical test recap](#technical-test-recap)

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
- [x] Bug reports are made in the issue section (I added an automated test case that reveal one of thee issue)

4. Docker image

- [x] Document how to build and run the resulting Docker image
