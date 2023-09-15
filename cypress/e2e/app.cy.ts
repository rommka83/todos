describe('страница TODOs', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/todos');

    cy.get('[data-cy="input"]').type('Тестовое дело №1');
    cy.contains('Добавить').click();

    cy.get('[data-cy="input"]').type('Тестовое дело №2');
    cy.contains('Добавить').click();

    cy.get('[data-cy="input"]').type('Тестовое дело №3');
    cy.contains('Добавить').click();

    cy.get('[data-cy="input"]').type('Тестовое дело №4');
    cy.contains('Добавить').click();

    cy.get('[data-cy="todoItem"]').should('have.length', 4);
  });

  it('проверка добавления дел', () => {
    cy.get('[data-cy="input"]').type('Тестовое дело №5');
    cy.contains('Добавить').click();

    cy.get('[data-cy="input"]').type('Тестовое дело №6');
    cy.contains('Добавить').click();

    cy.get('[data-cy="todoItem"]').should('have.length', 6);
  });

  it('проверка удаления завершённого дела из списка незавершённых дел', () => {
    cy.contains('Активные').click();
    cy.get('[data-cy="todoItem"]').should('have.length', 4);

    cy.contains('Все').click();
    cy.get('[data-cy="todoItem"]').contains('Тестовое дело №1').click();

    cy.contains('Активные').click();
    cy.get('[data-cy="todoItem"]').should('have.length', 3);
  });

  it('проверка добавления завершённого дела в список завершённых дел', () => {
    cy.get('[data-cy="todoItem"]').contains('Тестовое дело №1').click();

    cy.contains('Завершённые').click();
    cy.get('[data-cy="todoItem"]').should('have.length', 1);
  });

  it('проверка удаления всех завершённых дел', () => {
    cy.get('[data-cy="todoItem"]').contains('Тестовое дело №1').click();
    cy.get('[data-cy="todoItem"]').contains('Тестовое дело №2').click();
    cy.get('[data-cy="todoItem"]').contains('Тестовое дело №3').click();
    cy.get('[data-cy="todoItem"]').contains('Тестовое дело №4').click();

    cy.contains('Удалить завершённые').click();
    cy.get('[data-cy="todoItem"]').should('have.length', 0);

    cy.contains('Активные').click();
    cy.get('[data-cy="todoItem"]').should('have.length', 0);

    cy.contains('Завершённые').click();
    cy.get('[data-cy="todoItem"]').should('have.length', 0);
  });
});
