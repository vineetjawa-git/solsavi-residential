interface SolsaviLogoProps {
  className?: string;
  showTagline?: boolean;
}

const SolsaviLogo = ({ className = "", showTagline = true }: SolsaviLogoProps) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <div className="flex items-baseline">
        <span 
          className="text-2xl md:text-3xl tracking-tight"
          style={{ 
            fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
            fontWeight: 400 
          }}
        >
          <span style={{ color: '#4A5568' }}>Sol</span>
          <span style={{ color: '#EA9134' }}>savi</span>
        </span>
      </div>
      {showTagline && (
        <span 
          className="text-[10px] tracking-wide"
          style={{ color: '#718096' }}
        >
          Your rooftop solar guide
        </span>
      )}
    </div>
  );
};

export default SolsaviLogo;