import { Outlet } from "react-router-dom";

import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ScrollToTop from "../components/common/ScrollToTop";

function MainLayout() {
  return (
    <div className="min-h-screen bg-white">

      <ScrollToTop />

      <Header />

      <main>
          <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;