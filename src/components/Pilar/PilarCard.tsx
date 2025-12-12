type PilarCardProps = {
  title: string;
  description: string;
  color: string;
  iconSrc: string;
  iconSize?: string;
};

export default function PilarCard({
  title,
  description,
  color,
  iconSrc,
}: PilarCardProps) {
  return (
    <div
      className="flex flex-col items-center text-center shadow-sm"
      style={{ 
        backgroundColor: color,
        width: '242px',
        height: '263px',
        borderRadius: '10px',
        padding: '30px 10px',
        opacity: 1,
        gap: '10px'
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

      <h3 style={{
        width: '100%',
        minHeight: '21px',
        opacity: 1,
        fontWeight: 600,
        fontSize: '14px',
        lineHeight: '140%',
        letterSpacing: '0%',
        textAlign: 'center',
        color: '#1F2937',
        padding: '0 5px'
      }}>
        {title}
      </h3>

      <p style={{
        width: '222px',
        height: '84px',
        opacity: 1,
        fontWeight: 500,
        fontSize: '14px',
        lineHeight: '140%',
        letterSpacing: '0%',
        textAlign: 'center',
        verticalAlign: 'middle',
        color: '#374151',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {description}
      </p>
    </div>
  );
}