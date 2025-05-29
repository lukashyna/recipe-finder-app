# 🍽️ Recipe App

A simple recipe search app built with **Next.js**, **React 19**, and **Tailwind CSS**.  
It uses the [Spoonacular API](https://spoonacular.com/food-api) to fetch and display recipes based on search criteria.

---

## ✨ Features

- Browse recipes by category, cuisine, and cooking time

- View detailed recipe information including ingredients and - instructions

- Responsive design for all device sizes

- Server-side rendering for improved performance

- TypeScript support for type safety

---

## 🔐 API Key

To use the Spoonacular API, you need to create a `.env.local` file in the root of the project with your API key:

```env
SPOONACULAR_API_KEY=your_api_key_here
```

You can get an API key from: https://spoonacular.com/food-api

## 🚀 Getting Started

### 1. Clone the repository

```
git clone https://github.com/lukashyna/recipe-app.git
cd recipe-app
```

### 2. Install dependencies

```
npm install
```

### 3. Add your Spoonacular API key

Create a .env.local file and add this line:

```
SPOONACULAR_API_KEY=your_api_key_here
```

### 4.Start the development server

```
npm run dev
```

Open http://localhost:3000 in your browser.

## 🏗️ Build for production

```
npm run build
npm start
```

## 🧹 Lint the code

```
npm run lint
```

## 🛠️ Tech Stack

    •	Next.js 15
    •	React 19
    •	Tailwind CSS
    •	TypeScript
    •	Spoonacular API
