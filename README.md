
# Home Work for Vinteo

Тестовое задание для вакансии "Инженер по автоматизации тестирования"

## Структура проекта

- `.git` — данные системы контроля версий Git.
- `.gitignore` — список файлов и папок, игнорируемых Git.
- `cypress.config.ts` — конфигурационный файл Cypress.
- `cypress` — папка с тестами Cypress.
- `node_modules` — зависимости, установленные через npm или Yarn.
- `package.json` — информация о проекте и его зависимостях.
- `package-lock.json` — файл блокировки зависимостей для npm.
- `yarn.lock` — файл блокировки зависимостей для Yarn.

## Установка

Для установки всех необходимых зависимостей выполните:

```bash
npm install
```
или
```bash
yarn install
```

## Запуск тестов

Для запуска тестов Cypress используйте команду:

```bash
npx cypress open
```
или
```bash
npx cypress run
```
#### В проекте установлен  MailSlurp
###### Данные для авторизации:
###### testqaautimation@tutamail.com
###### TestQaGitHubAuth
## Задание №2 
### Перформанс тестирование веб-интерфейса GitFlic.
Инструменты для нагрузки Jemeter
Очень хотелось бы продемонстрировать полноценную работу с api, 
Но представленный в задаче сайт очень плохо поддаётся работе с api,
```bash
https://qna.habr.com/q/1369216 - Экзаменатор! обрати внимание! 
```
### В папке perfomance_tests:
- `Big.jmx` — Это идеальный сценарий для полного покрытия перфоманс тестирования, такой какой я его видел, Увы сил бороться с API больше нет. Тест признаю не рабочим, требуется много времени на его доработки.
- `shorttest.jmx` — Попытка сильно упростить количество api, тоже забраковал, опять же много нужно страданий, что бы победить их.
- `simple.jmx` — Самый простой сценарий направленный на демонстрацию, того что тест рабочий, 
рекомендую для проверки выбрать именного его! он Работает! полностью!
- `Postman_latest` — Файл с коллекцией постмана которая отражает, что документация на офф сайте ведёт в никуда. +Тест который удалось запустить создав в ручную токен. 


## Запуск теста

Для запуска теста, нужно просто перейти в директорию:

```bash
perfomance_test\apache-jmeter-5.6.3\bin\jemeter.bat (для win64)
```
После запуска программы, File\Open и выбираем simple.jmx,
Можете для ознакомления запустить другие сценарии они классные, но не работают ))
