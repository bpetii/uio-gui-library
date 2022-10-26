import React from 'react';
import { Page, TopBar, SideBar } from '../index';

const MOCK_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vestibulum velit vitae dolor eleifend, quis cursus tortor tempor. Etiam laoreet tempor turpis ut tristique. In hac habitasse platea dictumst. Ut viverra vestibulum facilisis. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Curabitur commodo egestas magna, at molestie quam euismod ut. Aliquam suscipit at velit vel venenatis. Morbi rhoncus odio neque, volutpat finibus risus hendrerit quis. Sed vitae justo at elit dictum semper. Suspendisse non luctus nulla. Suspendisse condimentum tellus ac elit ornare porttitor. In dignissim libero erat, eget varius nisl tincidunt sed. Duis vel viverra dolor. Mauris nisl lorem, consectetur sed ullamcorper consequat, dictum eu diam. Fusce pretium velit vitae urna tempor, id luctus velit lacinia. Suspendisse lacinia, ante eget egestas mollis, magna magna imperdiet lacus, vitae molestie purus urna et ipsum. Nulla facilisi. Nam augue sapien, dapibus id nunc a, iaculis vulputate urna. Nullam sit amet rutrum tortor. Fusce vel augue vel orci porttitor auctor. Vivamus pulvinar urna quam, non posuere lorem mollis fringilla. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Quisque porta odio quis urna pulvinar hendrerit. Nam eros sapien, cursus at maximus id, suscipit et erat. Praesent semper consectetur lacus eu suscipit. In mi ex, feugiat sagittis facilisis ut, fermentum quis mi. Nunc egestas tempor pharetra. Nulla condimentum massa non facilisis bibendum. Sed at justo eget massa lobortis ultricies sit amet eu ex. Nullam auctor ex ac elit laoreet, vitae convallis sem egestas. Maecenas gravida eros sit amet orci dapibus, rutrum gravida nisl finibus. Pellentesque vitae lorem vulputate, accumsan ligula quis, rhoncus urna. Vestibulum velit ex, venenatis ut sagittis id, malesuada vel diam. Suspendisse et turpis eu metus luctus fermentum at consectetur est. Suspendisse sit amet tincidunt dolor. Curabitur imperdiet congue urna in fringilla. Donec nec accumsan purus. Cras et blandit turpis. Curabitur sed libero nibh. Morbi scelerisque, metus vel cursus dapibus, quam lorem placerat odio, at rhoncus diam diam eget nisi. Nulla sagittis posuere ex, vel scelerisque justo egestas vel. Duis aliquam mollis est id tristique. Ut eros libero, faucibus sed ante sit amet, euismod condimentum dolor. Aenean feugiat augue tortor, id egestas tellus porta eu. Maecenas sed dui vitae erat fringilla lacinia. Etiam nisi felis, rhoncus nec vestibulum vel, mattis eget ligula. Cras sed quam sed nisi mollis eleifend. Nulla commodo, dolor nec bibendum finibus, lorem quam tincidunt lectus, sed volutpat lorem ligula vitae leo. Aliquam efficitur eu felis at dignissim. Fusce auctor eleifend justo, ut varius sapien ullamcorper mattis. Curabitur suscipit pellentesque augue sed bibendum.';


export default {
  title: 'Layout/Page',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    docs: {
      inlineStories: false,
      iframeHeight: 500,
    },
  },
  argTypes: {
    top: { control: 'text' },
    left: { control: 'text' },
    padding: { control: { type: 'boolean' } },
  },
};

export const Default = () => (
  <>
    <TopBar />
    <SideBar options={{ title: '', sections: [] }} />
    <Page>
      {MOCK_TEXT}
    </Page>
  </>
);

export const NoPadding = () => (
  <>
    <TopBar />
    <SideBar options={{ title: '', sections: [] }} />
    <Page padding={false}>
      {MOCK_TEXT}
    </Page>
  </>
);

export const NoScroll = () => (
  <>
    <TopBar />
    <SideBar options={{ title: '', sections: [] }} />
    <Page scroll={false}>
      {MOCK_TEXT}
    </Page>
  </>
);

export const NoTopBar = () => (
  <>
    <SideBar options={{ title: '', sections: [] }} />
    <Page top={0}>
      {MOCK_TEXT}
    </Page>
  </>
);

export const NoSideBar = () => (
  <>
    <TopBar />
    <Page left={0}>
      {MOCK_TEXT} 
    </Page>
  </>
);

