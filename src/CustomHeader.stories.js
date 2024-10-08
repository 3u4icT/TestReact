// src/CustomHeader.stories.js
import React from 'react';
import CustomHeader from './CustomHeader';
import { action } from '@storybook/addon-actions';

export default {
  title: 'CustomHeader',
  component: CustomHeader,
};

// Default story
export const Default = () => (
  <CustomHeader title="Default Header" onLogin={action('Login clicked')} showLogin={true} />
);

// Header without login button
export const WithoutLoginButton = () => (
  <CustomHeader title="Header Without Login" onLogin={action('Login clicked')} showLogin={false} />
);

// Header with different title
export const WithDifferentTitle = () => (
  <CustomHeader title="Welcome to My App" onLogin={action('Login clicked')} showLogin={true} />
);

// Header with a different action for login
export const WithCustomLoginAction = () => (
  <CustomHeader title="My Custom Header" onLogin={action('Custom login action clicked')} showLogin={true} />
);