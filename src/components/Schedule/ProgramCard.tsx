type ProgramCardProps = {
  title: string;
  description: string;
  color: string;
  iconSrc: string;
  borderColor: string;
};

export default function ProgramCard({
  title,
  description,
  color,
  iconSrc,
  borderColor,
}: ProgramCardProps) {
  return (
    <div
      className="flex flex-col shadow-md mx-auto"
      style={{ 
        backgroundColor: color,
        width: '222px',
        borderRadius: '10px',
        padding: '30px 15px',
        gap: '10px',
        opacity: 1,
        border: `1px solid ${borderColor}`
      }}
    >
      <div style={{
        width: '42px',
        height: '42px',
        opacity: 1
      }}>
        <img
          src={iconSrc}
          alt={`${title} icon`}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain'
          }}
        />
      </div>
      
      <h4 style={{
        width: '100%',
        minHeight: '21px',
        opacity: 1,
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '140%',
        letterSpacing: '0%',
        color: '#1F2937'
      }}>
        {title}
      </h4>
      
      <p style={{
        width: '192px',
        opacity: 1,
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '140%',
        letterSpacing: '0%',
        color: '#374151',
      }}>
        {description}
      </p>
    </div>
  );
}