import {setOptions} from "@storybook/addon-options";
import {configure} from "@storybook/react";

const req = require.context('../src', true, /((?!(abc|def)).)*stories\.js$/);

function loadStories() {
    req.keys().forEach((filename) => req(filename))
}

setOptions({
    hierarchySeparator: '\\.'
});

configure(loadStories, module);