import { Link } from "react-router-dom";
// import Navbar from "@/components/error-page/Navbar";
import { GhostIcon } from "@global/Icons";

const notFoundPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      {/* <Navbar /> */}
      <main className="relative flex flex-1 flex-col items-center justify-center px-6 py-6 text-center">
        <GhostIcon />
        <h1 className="mb-6 text-4xl font-bold">Page not found</h1>
        <p className="text-md mb-2">
          We&apos;re sorry. The page you requested could not be found.
        </p>
        <p className="text-md mb-8">Please go back to the home page.</p>
        <Link
          to="/"
          className="bg-primary hover:bg-primary/90 mt-4 rounded-lg px-6 py-3 text-white transition-colors"
        >
          Go home
        </Link>
      </main>
      <div className="relative h-36 w-full">
        <div className="absolute right-0 bottom-0">
          <img
            loading="lazy"
            src="/assets/plugged.png"
            alt="Unplugged cable illustration"
            className="w-[700px] h-[200px]"
          />
        </div>
      </div>
    </div>
  );
};

export default notFoundPage;
