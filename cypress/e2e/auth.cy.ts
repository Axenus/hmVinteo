/// <reference types="cypress" />
import { pagePersonalData } from '../support/page/PagePersonalData';

// let inboxId: string; // Идентификатор почтового ящика
// let emailAddress: string; // Электронный адрес
// let emailBody: string; // Содержимое письма
// let otpCode: string | number; // OTP код, может быть числом или строкой

describe('Авторизация GitHub, ой, уже нет, теперь это Gitflic ^_^', () => {
    beforeEach(() => {
         cy.visit('/'); // baseUrl установлен в cypress.config.ts
    });

    it('Тест успешной авторизации', () => {
        pagePersonalData.openPersonalData(); // email и пароль спрятаны в page/pagePersonalData.ts импорт вверху.
        cy.get('h1').contains('Мои проекты').should('be.visible');
        cy.get('.d-none.d-md-block').contains('Новый проект').should('be.visible');
        cy.get('.text-dark.profile-page__profile-name').contains('testqacucumber').should('be.visible');
        cy.get('.text-muted.profile-page__profile-alias').contains('@testqacucumber').should('be.visible');
    });

    it('Тест Неверный логин', () => {
        pagePersonalData.wrongEmail();
        pagePersonalData.chekAuthError();
    });

    it('Тест Неверный пароль', () => {
        pagePersonalData.wrongPassword();
        pagePersonalData.chekAuthError();
    });
    // Хотел я сделать классную проверку с перехватом email, но в конец запутался с типизацией в TypeScript.
    // оставлю тут это просто потому что я ну хотя бы пытался..... >_<
    // it.only('Тестирование функционала Забыли пароль?', () => {
    //     cy.visit('https://gitflic.ru/restore-password');
    //     cy.get('h1').should('contain', 'Восстановить доступ');
    //     cy.get('#email').type('testqaautimation@tutamail.com');
    //     cy.get('button[type="submit"]').click(); // Нажимаем кнопку "Отправить запрос"
    //
    //     cy.createInbox().then((inbox) => {
    //         inboxId = inbox.id;
    //         emailAddress = inbox.emailAddress;
    //
    //         cy.waitForLatestEmail(inboxId, 30000).then((email) => {
    //             emailBody = email.body;
    //             const resetLinkRegex = /https:\/\/gitflic\.ru\/restore-password\S*/;
    //             const resetLink = resetLinkRegex.exec(emailBody)?.[0];
    //
    //             if (resetLink) {
    //                 cy.log(`Переход по ссылке для сброса пароля: ${resetLink}`);
    //                 cy.visit(resetLink);
    //                 cy.get('h1').should('contain', 'Сброс пароля');
    //             } else {
    //                 throw new Error('Ссылка для сброса пароля не найдена в тексте письма');
    //             }
    it('Тестирование функционала Забыли пароль?', () => {
        cy.intercept('POST', 'https://gitflic.ru/restore-password').as('forgotPassword');
        cy.visit('https://gitflic.ru/restore-password');
        cy.get('h1').should('contain', 'Восстановить доступ');
        cy.get('#email').type('testqaautimation@tutamail.com');
        cy.get('button[type="submit"]').click();
        cy.get('.gf-notification__title').contains('Письмо отправлено!').should('be.visible');
        cy.wait('@forgotPassword').its('response.statusCode').should('eq', 200);
    });

    it('Тестирование функционала Забыли пароль?', () => {
        cy.intercept('POST', 'https://gitflic.ru/auth/login').as('loginUser');
        cy.intercept('GET', 'https://gitflic.ru/project').as('getProjects');
        pagePersonalData.openPersonalData()
        cy.wait('@loginUser').its('response.statusCode').should('eq', 302); // проверка перенаправления
        cy.wait('@getProjects').its('response.statusCode').should('eq', 200); // проверка успешной авторизации
        cy.get('meta[name="_csrf"]').should('have.attr', 'content').and('not.be.empty'); // проверяет что есть CSRF токен в атрибуте content в ответе.
        cy.url().should('not.include', 'token');
        cy.url().should('not.include', '_csrf');
        cy.location('protocol').should('eq', 'https:');

    });
    it('Тестирование функционала Забыли пароль?', () => {
        cy.get('a[href="/auth/signup"]').click();
        cy.url().should('include', '/auth/signup');
        cy.get('a[href="/terms"]').click();
        cy.get('h1').should('contain', 'Пользовательское соглашение');
        cy.go('back');
        cy.get('a[href="/privacy"]').click();
        cy.get('h2').should('contain', 'Политика в отношении обработки персональных данных');
        cy.go('back');
        cy.get('.btn.btn-sm.text-dark.btn-block.btn-yandex').should('be.visible');
        cy.get('.btn.btn-sm.text-dark.btn-block.btn-vk').should('be.visible');
        cy.get('a[href="/auth/login"]').click();
        cy.get('h5').should('contain', 'Войти в кабинет');
    });

});
