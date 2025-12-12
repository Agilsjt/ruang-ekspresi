import { MapPin, Mail, Phone } from "lucide-react";
import logo from "../../assets/footer-logo.png";

interface FooterProps {
    id: string;
}

export default function Footer({ id }: FooterProps) {
  const quickLinks = [
    { name: "Home", href: "#home" }, 
    { name: "About", href: "#pilar" },
    { name: "Program", href: "#schedule" },
    { name: "Projects", href: "#project" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  const programs = [
    { name: "Career Talks", href: "#career-talks" },
    { name: "Extra Classes", href: "#extra-classes" },
    { name: "Project Work", "href": "#project-work" },
    { name: "Mentoring", href: "#mentoring" },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      content: (
        <>
          Jl. Ringroad Selatan, Kragilan, Tamanan, Kec.
          <br />
          Banguntapan, Bantul, Daerah Istimewa Yogyakarta
          <br />
          55191
        </>
      ),
      href: null,
    },
    {
      icon: Mail,
      content: "ruang_ekspresi@webmail.uad.ac.id",
      href: "mailto:ruang_ekspresi@webmail.uad.ac.id",
    },
    {
      icon: Phone,
      content: "(0274) 511830",
      href: "tel:0274511830",
    },
  ];

  return (
    <footer id={id} className="w-full bg-[#1864AB] text-white"> 
      <div 
        className="mx-auto pb-10" 
        style={{
          width: '1421px',
          maxWidth: '100%',
          minHeight: '303px',
          paddingTop: '40px',
          opacity: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: '26px'
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-[393px_144px_144px] gap-12 justify-center px-8">
          <div 
            style={{
              width: '393px',
              height: '263px',
              opacity: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '8px'
            }}
          >
            <div className="flex items-center gap-3">
              <img src={logo} alt="Ruang Ekspresi Logo" className="h-12 w-11" />
              <div className="leading-tight">
                <h3 className="text-[16px] font-light">ruang</h3>
                <h3 className="text-[16px] font-light">ekspresi</h3>
              </div>
            </div>
            
            <p className="mt-6 ml-4"
              style={{
                width: '383px',
                height: '54px',
                opacity: 1,
                fontWeight: 400, 
                fontSize: '12px',
                lineHeight: '170%',
                letterSpacing: '0%',
                verticalAlign: 'middle',
                display: 'flex',
                alignItems: 'center'
              }}
            >
              Wadah kreatif dan kompetitif untuk mahasiswa yang ingin
              mengembangkan potensi melalui ideation, creation, collaboration,
              dan guidance.
            </p>

            <div 
              className="mt-6 text-[12px] ml-4"
              style={{
                width: '393px',
                height: '66px',
                gap: '10px',
                opacity: 1,
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className={`flex gap-3 ${
                      item.icon === MapPin ? "items-start" : "items-center"
                    }`}
                  >
                    <Icon
                      size={18}
                      className={`flex-shrink-0 ${
                        item.icon === MapPin ? "mt-0.5" : ""
                      }`}
                    />
                    {item.href ? (
                      <a 
                        href={item.href} 
                        className="hover:underline transition-all"
                        style={{ fontSize: '12px', lineHeight: '1.5' }}
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p style={{ fontSize: '12px', lineHeight: '1.5' }}>
                        {item.content}
                      </p>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            style={{
              width: '144px',
              height: '200px',
              opacity: 1,
              marginTop: '20px',
              fontSize: '16px'
            }}
          >
            <h4 className="text-base mb-2">Quick Links</h4> 
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="hover:underline transition-all"
                    style={{ fontSize: '12px' }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-4"
            style={{
              width: '144px',
              height: '179px',
              opacity: 1,
              marginTop: '30px'
            }}
            
          >
            <h4 className="text-base mb-2">Programs</h4>
            <ul className="space-y-2">
              {programs.map((program) => (
                <li key={program.name}>
                  <a 
                    href={program.href} 
                    className="hover:underline transition-all"
                    style={{ fontSize: '12px' }}
                  >
                    {program.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="border-t-3 border-white pt-3 pb-4 w-full bg-[#1864AB] px-8"> 
        <div className="mx-auto" style={{ maxWidth: '1421px' }}>
          <p className="text-center text-white" style={{ fontSize: '12px' }}>
            © 2025 Ruang Ekspresi | All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}