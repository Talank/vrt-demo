const { Then } = require('cucumber');
const { client } = require('nightwatch-api');
const path = require('path');

const toDoFormSelector = "#to-do-form"

const assertScreenShot = async function(imgName) {
    await client.waitForElementVisible(toDoFormSelector)
    await client.assert.screenshotIdenticalToBaseline(
        toDoFormSelector,
        imgName,
        `Matched the ${imgName} of toDo page`
    )
}

Then(/^the todo form should match the default baseline$/, function () {
    return assertScreenShot("todo-form")
});
