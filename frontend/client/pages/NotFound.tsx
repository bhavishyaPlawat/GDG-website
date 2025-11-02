import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="container py-24">
      <div className="mx-auto max-w-md text-center">
        <div className="text-6xl font-extrabold tracking-tight">404</div>
        <p className="mt-2 text-muted-foreground">Oops! Page not found.</p>
        <Link to="/" className="mt-6 inline-flex items-center justify-center rounded-md bg-[hsl(var(--gdg-blue))] px-5 py-2.5 text-white shadow-sm hover:bg-[hsl(var(--gdg-blue))]/90">Return Home</Link>
      </div>
    </section>
  );
};

export default NotFound;
