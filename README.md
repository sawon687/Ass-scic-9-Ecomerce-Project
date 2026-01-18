

---

# 🍓 Fruits Web Application

## 📖 Project Description

Fruits Web Application is a modern, responsive web app built with **Next.js** and **Tailwind CSS**.
It allows users to browse fruits, see detailed information, and experience a clean UI.
The app includes **mock authentication** and optional **toast notifications** on successful product creation.

---

## ⚙️ Setup & Installation

1. **Clone the repository**

```bash
git clone <your-repository-link>
cd fruits-web-app
```

2. **Install dependencies**

```bash
npm install
```

3. **Run the development server**

```bash
npm run dev
```

4. **Open in browser**

```
http://localhost:3000
```

---

## 🛣️ Route Summary

| Route         | Description                           |
| ------------- | ------------------------------------- |
| `/`           | Home page with multiple sections      |
| `/login`      | Login page (mock authentication)      |
| `/register`   | User registration page (UI only)      |
| `/items`      | Fruits listing page (protected route) |
| `/items/[id]` | Single fruit details page             |

---

## ✅ Implemented Features

* Responsive Home Page with multiple sections
* Modern Login & Register UI
* Mock Authentication with email & password
* Protected Routes using cookies
* Fruits Listing Page
* Single Fruit Details Page
* Organic Product Badge (**100% Organic**)
* **Toast notification** on successful product creation (optional)
* Clean UI using Tailwind CSS

---

## 🔍 Brief Explanation of Features

### 🔐 Authentication

* Mock login system using hardcoded credentials
* Redirects unauthenticated users to `/login`
* Simulates a logged-in session using cookies

### 🍓 Fruits Listing & Details

* Displays fruits with image, price, rating, stock
* Clicking a fruit shows detailed information
* Organic fruits are marked with a badge for easy identification

### 🔔 Toast Notification

* Appears after successful product creation
* Provides instant feedback to the user

### 🎨 UI & Design

* Clean, modern, responsive layout
* Tailwind CSS for fast styling
* Card-based and grid layouts for products

---

## 📌 Notes

This project is for learning and assignment purposes.
Future improvements can include real authentication, database integration, admin dashboard, and search/filter functionality.

---

