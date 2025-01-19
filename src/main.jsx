import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About.jsx";
import Contact from "./components/Contact/Contact.jsx";
import Users from "./components/Users/Users.jsx";
import UserDetails from "./components/UserDetails/UserDetails.jsx";
import Posts from "./components/Posts/Posts.jsx";
import PostDetails from "./components/PostDetails/PostDetails.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      {
        path: "users",
        element: <Users />,
        loader: async () => {
          const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
          );
          if (!response.ok) {
            throw new Error("Failed to fetch users");
          }
          return response.json();
        },
      },
      {
        path: "/user/:userId",
        element: <UserDetails></UserDetails>,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${params.userId}`
          );
          // console.log(params);

          if (!response.ok) {
            throw new Error("Failed to fetch user");
          }
          return response.json();
        },
      },
      {
        path: "/posts",
        loader: async () => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch posts");
          }
          return response.json();
        },
        element: <Posts></Posts>,
      },
      {
        path: "/post/:postId",
        element: <PostDetails></PostDetails>,
        loader: async ({ params }) => {
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts/${params.postId}`
          );

          if (!response.ok) {
            throw new Error("Failed to fetch user");
          }
          return response.json();
        },
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
