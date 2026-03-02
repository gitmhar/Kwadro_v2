describe("Smoke Test", () => {
  it("successfully loads the homepage", () => {
    cy.visit("/");
    cy.contains("hello").should("be.visible");
  });
});

Cypress.on("uncaught:exception", (err, runnable) => {
  // returning false here prevents Cypress from failing the test
  if (err.message.includes("backdrop")) {
    return false;
  }
});

describe("Reservation System", () => {
  beforeEach(() => {
    cy.visit("/book");
  });

  it("should allow a user to book a table", () => {
    // Click the table button (this triggers React state to open the modal)
    cy.contains(".card", "Table 1")
      .contains("button", /Book Now|View\/Book Later/i)
      .click();

    cy.get("#tableModal").should("exist").and("be.visible");
    cy.get(".react-calendar__tile--now").click();
    cy.get('#startTime').type("19:00");

    cy.get("#name").type("Cypress Tester");
    cy.get("#email").type("cypress@example.com");
    cy.get("#contact").type("09123456789");
    cy.get("#duration").select("1 Hours");

    cy.get('button[type="submit"]').click()
  });
});


