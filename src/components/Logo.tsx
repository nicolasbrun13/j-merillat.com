export function Logo({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const logoSrc =
    variant === "dark"
      ? "https://res.cloudinary.com/df9tcmyq5/image/upload/v1768216052/LOGO_d2a6tx.webp"
      : "https://res.cloudinary.com/df9tcmyq5/image/upload/v1768216052/LOGO-beige_favu97.webp";

  return (
    <img
      src={logoSrc}
      alt="MÉRILLAT Consulting"
      className={className}
      style={variant === "dark" ? { height: '50px', width: 'auto' } : undefined} // <-- style uniquement pour dark
    />
  );
}
