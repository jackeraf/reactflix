import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { useApp } from "../hooks/useApp";

export default function Layout() {
  const { wishlist } = useApp();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`app-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-content">
          <Link to="/" className="logo">
            ReactFlix
          </Link>
          <nav className="nav-links">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/wishlist" className="nav-link">
              Wishlist
              {wishlist.length > 0 && (
                <span className="badge">{wishlist.length}</span>
              )}
            </Link>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

