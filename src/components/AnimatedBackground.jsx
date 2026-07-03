const AnimatedBackground = ({ variant = 'grid' }) => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {variant === 'grid' && (
        <div className="absolute inset-0 bg-grid-pattern bg-[size:56px_56px] opacity-[0.35] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      )}
      <div className="absolute -left-24 top-10 h-72 w-72 animate-blob rounded-full bg-accent/25 blur-[100px]" />
      <div className="absolute -right-20 top-1/3 h-80 w-80 animate-blob rounded-full bg-accent2/20 blur-[110px] [animation-delay:-4s]" />
      <div className="absolute bottom-0 left-1/3 h-64 w-64 animate-blob rounded-full bg-accent/15 blur-[100px] [animation-delay:-8s]" />
    </div>
  );
};

export default AnimatedBackground;
