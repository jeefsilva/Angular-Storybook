import { configure } from '@storybook/angular';
import { setOptions } from "@storybook/addon-options";

setOptions({
  name: 'SobTic Storybook',
  hierarchySeparator: /\./,
  hierarchyRootSeparator: /\|/,
  sortStoriesByKind: true
});

function loadStories() {
  require('../src/stories/index.ts');
}

configure(loadStories, module);
