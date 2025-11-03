const ScrollingMarquee = () => {
  return (
    <div className="bg-card border-y border-border overflow-hidden py-3">
      <div className="flex animate-scroll whitespace-nowrap">
        {[...Array(20)].map((_, i) => (
          <span key={i} className="inline-flex items-center px-8 text-sm font-bold tracking-wider">
            FAMILY RESTAURANT
            <span className="mx-4 text-primary">+</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default ScrollingMarquee;
