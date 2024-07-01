/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('example to-do app', () => {
  beforeEach(() => {
    // Cypress starts out with a blank slate for each test
    // so we must tell it to visit our website with the `cy.visit()` command.
    // Since we want to visit the same URL at the start of all our tests,
    // we include it in our beforeEach function so that it runs before each test
    cy.visit('http://localhost:8080/todo')
  })

  it('can add new todo items', () => {
    // We'll store our item text in a variable so we can reuse it
    const newItem = 'Feed the cat'

    // Let's get the input element and use the `type` command to
    // input our new list item. After typing the content of our item,
    // we need to type the enter key as well in order to submit the input.
    // This input has a data-test attribute so we'll use that to select the
    // element in accordance with best practices:
    // https://on.cypress.io/selecting-elements
    cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)

    // Now that we've typed our new item, let's check that it actually was added to the list.
    // Since it's the newest item, it should exist as the last element in the list.
    // In addition, with the two default items, we should have a total of 3 elements in the list.
    // Since assertions yield the element that was asserted on,
    // we can chain both of these assertions together into a single statement.
    cy.get('.todo-list li')
      .should('have.length', 3)
      .last()
      .should('have.text', newItem)
  })

  it('can update a task', () => {
    const item = 'Please accept me'

    // Create a task
    cy.get('[data-test=new-todo]').type(`${item}{enter}`)

    // Make sure it has been added and update it
    const newContent = 'I said accept me pleaaaaaaase (I updated this :3)'
    cy.contains(item)
      .should('be.visible')
      .dblclick()
    cy.get('.edit').clear()
    cy.get('.edit').type(`${newContent}{enter}`)

    // We make sure the last  element has been updated
    cy.get('.todo-list li').last()
      .should('contain.text', newContent)
  })

  it('can delete a task', () => {
    const item = 'Get a job'

    // Create a task
    cy.get('[data-test=new-todo]').type(`${item}{enter}`)

    // Make sure it has been added
    cy.contains(item).should('be.visible')

    // We simulate the hovering of a checked element and click on the cross
    cy.get('.todo-list li')
      .get('.destroy').last().click({force: true})

    // We make sure the element has been deleted
    cy.contains(item)
      .should('not.exist')
  })
})
