// // cypress/support/commands.ts


// Тут я пытался подружить MailSlurp сервис такой с фреймворком,
// на js вроде как получилось, а вот на typeScript не получилось.
// Очень обидно... >_<'




// const { MailSlurp } = require('mailslurp-client');
// const mailslurp = new MailSlurp({ apiKey: "2fe79a109de695a4e3c5d3125142deeb11e709c414da1c6f967922a45ead8814" });
//
// // создание почтового ящика
// Cypress.Commands.add('createInbox', () => {
//     return mailslurp.createInbox();
// });
//
// // ожидание последнего письма
// Cypress.Commands.add('waitForLatestEmail', (inboxId, timeout = 30000) => {
//     return mailslurp.waitForLatestEmail(inboxId, timeout);
// });
//
// declare namespace Cypress {
//     interface Chainable {
//         createInbox(): Chainable<{ id: string; emailAddress: string }>;
//         waitForLatestEmail(inboxId: string, timeout?: number): Chainable<{ body: string }>;
//     }
// }
