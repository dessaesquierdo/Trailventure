import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="relative flex w-full flex-wrap items-center justify-between bg-zinc-50 py-2 shadow-dark-mild dark:bg-neutral-700 lg:py-4">
      <div className="px-3 flex w-full flex-wrap items-center justify-between">
        <div className="ml-2">
          <Link to="/" className="text-2xl text-black dark:text-white">
            TrailVenture
          </Link>
        </div>

        <nav className="flex gap-5 items-center">
          <div className="flex gap-5 items-center">
            <Link to="/" className="text-black dark:text-white">
              Home
            </Link>
          </div>

          <div className="inline-block w-0.5 self-stretch bg-neutral-100 dark:bg-white/10" />

          <div className="flex gap-5 items-center">
            <Link to="/login" className="text-black dark:text-white">
              Login
            </Link>

            <Link
              to="/signup"
              className="px-3 py-1 border-radius rounded-md bg-blue-600 text-black dark:text-white"
            >
              Sign up
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
