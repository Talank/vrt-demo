const { Then } = require('cucumber');
const { client } = require('nightwatch-api');

const toDoFormSelector = "#to-do-form"
const rippleLoadingSelect = ".lds-ripple"

const assertScreenShot = async function(elementName, imgName) {
    await client.waitForElementVisible(elementName)
    await client.assert.screenshotIdenticalToBaseline(
        elementName,
        imgName,
        `Matched the ${imgName} of toDo page`
    )
}

Then(/^the todo form should match the default baseline$/, function () {
    return assertScreenShot(toDoFormSelector,"todo-form")
});

Then(/^the ripple loading should match the default baseline$/, function () {
    return assertScreenShot(rippleLoadingSelect,"ripple-loading")
});
