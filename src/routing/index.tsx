import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "../features/NotFound";
import SpinnerLoader from "../shared/ui/SpinnerLoader";

const ListPosts = lazy(() => import("../features/Posts/List"));
const PostDetails = lazy(() => import("../features/Posts/Details"));

const FallBackComponent = () => <SpinnerLoader loading={true} />;

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<FallBackComponent />}>
        <ListPosts />
      </Suspense>
    ),
  },
  {
    path: "/posts/:postId",
    element: (
      <Suspense fallback={<FallBackComponent />}>
        <PostDetails />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export const CustomRouting = () => {
  return <RouterProvider router={router} />;
};
