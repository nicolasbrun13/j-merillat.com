import logoDark from "figma:asset/6eff2914b2bc29b8a0a69b5bd2c646b52b77c5b7.png";
import logoLight from "figma:asset/16f927c50597ecc7e67b3c4d0ae2ee9948f7fb02.png";

export function Logo({ className = "", variant = "dark" }: { className?: string; variant?: "dark" | "light" }) {
  const logoSrc = variant === "dark" ? logoDark : logoLight;
  
  return (
    <img 
      src={logoSrc} 
      alt="MÉRILLAT Consulting" 
      className={className}
      style={{ height: '50px', width: 'auto' }}
    />
  );
}