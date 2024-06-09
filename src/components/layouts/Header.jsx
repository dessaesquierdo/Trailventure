import React from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const currentPath = location.pathname;

  console.log("Current Path:", currentPath);

  const showSearchLink = currentPath !== "/login" && currentPath !== "/signup";
  const showBuyNowLink = showSearchLink;

  console.log("Show Search Link:", showSearchLink);
  console.log("Show Buy Now Link:", showBuyNowLink);

  return (
    <header className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
      <div className="px-3 flex w-full flex-wrap items-center justify-between">
        <div className="ml-2">
          <Link to="/" className="text-2xl text-black dark:text-white">
            TrailVenture
          </Link>
        </div>

        <nav className="flex gap-5 items-center">
          {showSearchLink && (
            <Link to="/search" className="text-black dark:text-white">
              Search Icon
            </Link>
          )}

          <div className="inline-block w-0.5 self-stretch bg-neutral-100 dark:bg-white/10" />

          {showBuyNowLink && (
            <Link
              to="/login"
              className="px-3 py-1 border-radius rounded-md bg-blue-600 text-black dark:text-white"
            >
              BUY NOW!
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
