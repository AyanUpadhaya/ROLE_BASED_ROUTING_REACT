import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { AuthProvider } from "./context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router}></RouterProvider>
      </AuthProvider>
    </>
  );
}

export default App;
