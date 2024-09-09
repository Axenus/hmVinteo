/// <reference types="cypress" />

// Определяем класс PagePersonalData
export class PagePersonalData {
    // Метод для прохождения авторизации.
    openPersonalData(): void {
        cy.get('#email').type('testqaautimation@tutamail.com'); // Ввод email
        cy.get('#passwordBasic').type('TestQaGitHubAuth'); // Ввод пароля
        cy.get('.btn.btn-sm.btn-success.btn-user.btn-block').click(); // Нажатие на кнопку входа
    }
    wrongEmail(): void {
        cy.get('#email').type('wrongEmail@tutamail.com'); // Ввод email
        cy.get('#passwordBasic').type('TestQaGitHubAuth'); // Ввод пароля
        cy.get('.btn.btn-sm.btn-success.btn-user.btn-block').click(); // Нажатие на кнопку входа
    }
    wrongPassword(): void {
        cy.get('#email').type('testqaautimation@tutamail.com'); // Ввод email
        cy.get('#passwordBasic').type('wrongPassword'); // Ввод пароля
        cy.get('.btn.btn-sm.btn-success.btn-user.btn-block').click(); // Нажатие на кнопку входа
    }
    chekAuthError(): void {
        cy.get('.small.d-flex.text-danger.mt-1.ml-1').contains('Неверный логин или пароль').should('be.visible');
    }
}

// Экспортируем экземпляр класса, чтобы его можно было использовать в тестах
export const pagePersonalData = new PagePersonalData();
