# Recipe Finder App

A full-featured recipe discovery app built with React — search thousands of real recipes, view detailed instructions, and save your favorites.

🔗 **Live Demo:** [maaz-afzal.github.io/recipe-finder-app](https://maaz-afzal.github.io/recipe-finder-app/)

---

## ✨ Features

- **Search Recipes** — Search by name using TheMealDB API
- **Recipe Detail Page** — Ingredients, step-by-step instructions, and YouTube video link
- **Favorites** — Save recipes with localStorage persistence (survives page refresh)
- **Custom Hooks** — `useFetch` for data fetching, `useFavorites` for favorites logic
- **React Router** — Multi-page navigation with dynamic routes

---

## 🛠️ Tech Stack

| Technology | Usage |
|---|---|
| React + Vite | Frontend framework |
| Tailwind CSS | Styling |
| React Router v6 | Client-side routing |
| Context API | Global favorites state |
| TheMealDB API | Recipe data |
| localStorage | Favorites persistence |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── SearchBar.jsx
│   ├── RecipeCard.jsx
│   └── RecipeGrid.jsx
├── pages/
│   ├── Home.jsx
│   ├── RecipeDetail.jsx
│   └── Favorites.jsx
├── hooks/
│   ├── useFetch.js
│   └── useFavorites.js
├── services/
│   └── api.js
├── context/
│   └── FavoritesContext.jsx
└── App.jsx
```

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/maaz-afzal/recipe-finder-app.git

# Install dependencies
cd recipe-finder-app
npm install

# Run locally
npm run dev
```

---

## 🧠 React Concepts Used

- `useState` + `useEffect` — state and side effects
- `useCallback` — memoized fetch functions to prevent infinite loops
- `useContext` — global favorites state without prop drilling
- `useParams` + `useNavigate` — React Router hooks
- Custom Hooks — reusable logic separation

---

## 👨‍💻 Author

**Maaz Afzal** — [GitHub](https://github.com/maaz-afzal) · [LinkedIn](https://linkedin.com/in/maazafzalkhan)