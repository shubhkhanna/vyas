import { Route, Routes } from "react-router-dom";
import Auth from "./components/Auth";
import Navbar from "./components/common/Navbar";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import SigninPage from "./pages/SigninPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        {/* Protected Routes */}
        <Route element={<Auth />}>
          <Route path="/" element={<HomePage />} />
        </Route>

        {/* Public Routes */}
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
