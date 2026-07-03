import Button from '../components/Button';

const NotFound = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="font-mono text-sm text-accent">404.jsx</p>
      <h1 className="font-display text-4xl font-bold sm:text-5xl">Page not found</h1>
      <p className="max-w-md text-muted">
        This route doesn't resolve to a component. Let's get you back to something that does.
      </p>
      <Button href="/" className="mt-4">
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
