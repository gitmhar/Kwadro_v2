// describe("Smoke Test", () => {
//   it("successfully loads the homepage", () => {
//     cy.visit("/");
//   });
// });

describe("Reservation System Flow", () => {
  beforeEach(() => {
    cy.visit("/book");
  });
  // it("should allow a user to choose a table", () => {
  //   cy.contains('.MuiCard-root', 'Table 01')
  //     .find('button')
  //     .click();
  // });
  it("should allow a user to choose date and fill the form", () => {
    cy.contains(".MuiCard-root", "Table 01").find("button").click();
    cy.get('[role="dialog"]').should("be.visible");
    cy.get(".react-calendar__tile--now").click();
    cy.get('input[type="time"]').type("19:00");
    cy.contains("button", "1 Hour").click();
    cy.get('input[type="email"]').type('j0hnmh4r23@gmail.com');
    cy.get('input[name="name"]').type('Cypress Tester');
    cy.get('input[name="contact"]').type('0912345678');
    cy.get('input[type="number"]').clear().type('5');

    cy.contains('button', 'Confirm Booking').click();
    });
});
