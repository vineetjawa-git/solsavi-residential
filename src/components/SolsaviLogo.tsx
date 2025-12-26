import solsaviLogo from "@/assets/solsavi-logo.png";

interface SolsaviLogoProps {
  className?: string;
  showTagline?: boolean;
}

const SolsaviLogo = ({ className = "", showTagline = true }: SolsaviLogoProps) => {
  return (
    <img 
      src={solsaviLogo} 
      alt="Solsavi - Your rooftop solar guide" 
      className={`h-10 md:h-12 w-auto ${className}`}
    />
  );
};

export default SolsaviLogo;