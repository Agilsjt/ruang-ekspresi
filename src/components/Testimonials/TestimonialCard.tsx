type TestimonialCardProps = {
  name: string;
  role: string;
  avatar: string;
  testimonial: string;
};

export default function TestimonialCard({
  name,
  role,
  avatar,
  testimonial,
}: TestimonialCardProps) {
  return (
    <div 
      className="flex-shrink-0"
      style={{
        width: '638px',
        height: '245px',
        borderRadius: '20px',
        padding: '30px',
        gap: '12px',
        opacity: 1,
        backgroundColor: '#FFFFFF',
        boxShadow: `
          0px 3px 6px 0px #0000001A,
          0px 11px 11px 0px #00000017,
          0px 24px 14px 0px #0000000D,
          0px 43px 17px 0px #00000003,
          0px 67px 19px 0px #00000000
        `,
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div className="flex items-center gap-6 mb-6">
        <img
          src={avatar}
          alt={name}
          className="rounded-full object-cover flex-shrink-0"
          style={{
            width: '93px',
            height: '93px',
            opacity: 1
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          <h4 
            style={{
              width: '211px',
              height: '48px',
              opacity: 1,
              fontWeight: 500,
              fontSize: '32px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#111827'
            }}
          >
            {name}
          </h4>
          <p 
            style={{
              width: '232px',
              height: '24px',
              opacity: 1,
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '100%',
              letterSpacing: '0%',
              color: '#1864AB'
            }}
          >
            {role}
          </p>
        </div>
      </div>
      <p 
        style={{
          width: '558px',
          height: '60px',
          opacity: 1,
          fontFamily: 'Poppins',
          fontWeight: 300,
          fontSize: '20px',
          lineHeight: '100%',
          letterSpacing: '0%',
          color: '#333333'
        }}
      >
        {testimonial}
      </p>
    </div>
  );
}