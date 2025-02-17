# Car Store Frontend

A responsive and user-friendly car shop application with secure authentication, seamless product management, and smooth navigation.

## Project Overview & Objective

Create a **Car Shop application** with user-friendly features, secure authentication, and smooth product management. Ensure the platform is **responsive, error-free, and visually appealing**.

## Prerequisites

Ensure you have the following installed before setting up the project:

- **Node.js** (v16 or higher)
- **npm** or **Yarn**
- **A modern web browser**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/sheabali/car-store-frontend.git
   cd car-store-frontend
   ```
2. Install dependencies:

   ```bash
   yarn install
   ```

3. Start the development server:

   ```bash
   yarn dev
   ```

## Main Functionalities (45 marks)

### 1. User Registration & Authentication (Role-Based)

- **Secure Registration & Login**:
  - Users can register with **name, email, and password**.
  - Default role: **user** (admin role must be manually assigned).
  - Passwords are securely **hashed** before storing.
  - Users can log in using their **email and password**.
- **JWT Authentication**:
  - Generate a **JWT token** upon login.
  - Store the token in **local storage** to maintain user sessions.
- **Logout**:
  - Clears the token from local storage upon logout.
  - Redirects the user to the login page.

### 2. Public Routes

- **Home Page**:
  - **Navbar**: Includes logo, favicon, navigation items, and buttons for login/signup.
  - **Banner**: Highlights platform or special offers (supports carousel).
  - **Featured Products**: Displays up to **6 products** with a "View All" button.
  - **Extra Section**: Testimonials, blogs, or other relevant content.
  - **Footer**: Essential links, social media icons, and contact details.
- **All Products Page**:
  - **Search Functionality**: Search by **brand, car name, or category**.
  - **Filters**: Price range, model, brand, category, availability.
  - **Dynamic Results**: Updates based on search terms and filters.
  - **Product Cards**: Display **name, brand, model, price, and category**.
  - **View Details** button for each product.
- **Product Details Page**:
  - Displays **product image and detailed information**.
  - "Buy Now" button redirects to the checkout page.
- **About Page**:
  - Information about the shop and its mission.

### 3. Private Routes

- **Checkout Page**:
  - Users can **place orders** for products.
  - Ensures ordered quantity **does not exceed stock**.
  - **Order Form**: Includes product details, user details, total price calculation, and payment method.
  - **Payment Integration**: SurjoPay as the payment gateway.
  - "Order Now" button confirms the purchase.
- **Dashboard (Role-Based Access)**:
  - **Admin Dashboard**:
    - Manage **users** (e.g., deactivate accounts).
    - Manage **products** (CRUD operations).
    - Manage **orders** (CRUD operations).
  - **User Dashboard**:
    - View **order history**.
    - Update **profile settings**.
    - **Change password** (requires current password for security).

## Technologies Used

- **React.js** - Frontend framework.
- **Tailwind CSS** - Modern styling framework.
- **React Router** - Handles client-side routing.
- **Axios** - API requests and data fetching.
- **Redux Toolkit** - State management.
- **SurjoPay** - Integrated payment gateway.

## Run the Project

To start the development server, run:
using Yarn:

```bash
yarn dev
```
