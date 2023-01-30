import { Route, Routes } from "react-router-dom";
import { useGetPostsQuery } from "./store/Slices/api/apiSlice";

// Component Imports //
import Layout from "./pages/Layout";
import SingleBlogLayout from "./pages/SingleBlogLayout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PortfolioPage from "./pages/PortfolioPage";
import ContactMePage from "./pages/ContactMePage";
import BlogArchivePage from "./pages/BlogArchivePage";
import BlogSingle from "./pages/BlogSingle";
import SingleProjectPage from "./pages/SingleProjectPage";
// import AdminLayout from "./pages/AdminLayout";
// import EditorPage from "./pages/EditorPage";
// import AdminDashboardPage from "./pages/AdminDashboardPage";
// import AdminBlogArchivePage from "./pages/AdminBlogArchivePage";
// import AdminUsersArchivePage from "./pages/AdminUsersArchivePage";
// import AdminAddPostPage from "./pages/AdminAddPostPage";
// import AdminMediaUpload from "./pages/AdminMediaUpload";
import "./App.css";

function App() {
  // const { data, isLoading, error } = useGetPostsQuery();
  return (
    <div className="font-black">
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/contact-me" element={<ContactMePage />} />

          <Route path="/blog" element={<BlogArchivePage />} />
        </Route>
        <Route element={<SingleBlogLayout />}>
          <Route path="/blog/:slug" element={<BlogSingle />} />
          <Route path="/projects/:slug" element={<SingleProjectPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
