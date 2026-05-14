interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export default function Badge({ children, className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-block rounded-full glass-subtle px-3 py-1 text-xs font-medium text-[var(--muted-foreground)] ${className}`}
    >
      {children}
    </span>
  );
}
