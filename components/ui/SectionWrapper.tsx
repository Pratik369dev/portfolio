interface SectionWrapperProps {
  title?: string;
  subtitle?: string;
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SectionWrapper({
  title,
  subtitle,
  id,
  children,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {title}
            </h2>
            {subtitle && (
              <p className="mt-3 text-lg text-[var(--muted-foreground)]">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
