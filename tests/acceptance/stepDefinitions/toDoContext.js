const { util } = require('util')
const { Given, When, Then } = require('cucumber');
const { client } = require('nightwatch-api');

const toDoFormSelector = "#to-do-form"
const taskInputField = "#to-do-form > input[type=text]"
const taskAddButton = "#to-do-form > button"
const taskListsSelector = "div.list > p > input[value='%s']"

Given(/^user has opened the home page$/, async function () {
    await client.url(client.launch_url)
    await client.waitForElementVisible(toDoFormSelector)
});

When(/^user add a task "([^"]*)"$/, async function (taskDesc) {
    await client.setValue(taskInputField,taskDesc)
    await client.click(taskAddButton)
});

Then(/^the task "([^"]*)" should appear in the toDo list$/, function (taskDesc) {
    const taskDescSelector = taskListsSelector.replace('%s',taskDesc)
    return client.waitForElementVisible(taskDescSelector)
});
