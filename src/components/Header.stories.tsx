import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Header from './Header';

export default {
  title: 'Components/Header',
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const MobileMenuOpen = Template.bind({});
MobileMenuOpen.args = {
  isMenuOpen: true,
};

export const DarkMode = Template.bind({});
DarkMode.args = {
  isDarkMode: true,
};

export const Authenticated = Template.bind({});
Authenticated.args = {
  session: { user: { name: 'John Doe' } },
};
