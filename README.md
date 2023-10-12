# SMA-005: Surplus Food Sharing Platform

## Problem Statement

**Problem**: Food waste is a significant global issue that affects both the environment and people in need. Many restaurants and grocery stores have surplus food that goes to waste, while people in the same communities often struggle with food insecurity.

**Solution**: To address this problem, we are developing a platform that connects restaurants, grocery stores, and consumers to share surplus food. This platform aims to reduce food waste and promote the sustainable use of resources by making it easy for businesses to donate surplus food and for individuals to access nutritious meals.

## Features

Our Surplus Food Sharing Platform will include the following key features:

**User Roles**: Different roles for restaurants, grocery stores, and consumers.<br>
**Food Listings**: Businesses can list surplus food, including details like quantity, expiration dates, and quality.<br>
**Real-time Updates**: Users can view and claim available surplus food in real-time.<br>
**Inventory Management**: Food providers can track their surplus food inventory.<br>
**Quality Assurance**: Standards to ensure the quality and safety of shared food.<br>
**Location Services**: Geolocation features to find nearby surplus food providers.<br>
**User Feedback**: A system for ratings and feedback to maintain quality.<br>
**Analytics**: Data collection for measuring the impact on food waste reduction and sustainability.<br>

## WorkFlow
![Alt text](https://drive.google.com/file/d/1-jetVj-_TDbzDfceFnQEhW8bmejr8SSz/view?usp=drive_link)

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
