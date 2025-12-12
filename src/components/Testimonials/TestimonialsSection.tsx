import { useEffect, useRef } from "react";
import TestimonialCard from "./TestimonialCard";
import avatar2 from "../../assets/avatars/avatar2.jpg";

interface TestimonialsSectionProps {
    id: string;
}

export default function TestimonialsSection({ id }: TestimonialsSectionProps) {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const testimonialsRow1 = [
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
  ];

  const testimonialsRow2 = [
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
    {
      name: "Budi Santoso",
      role: "Mahasiswa Sistem Informasi",
      avatar: avatar2,
      testimonial:
        "Kolaborasi antar disiplin ilmu di sini luar biasa. Saya belajar banyak hal dari teman-teman dari jurusan lain",
    },
  ];

  const duplicatedRow1 = [...testimonialsRow1, ...testimonialsRow1];
  const duplicatedRow2 = [...testimonialsRow2, ...testimonialsRow2];

  useEffect(() => {
    const scrollContainer1 = scrollRef1.current;
    const scrollContainer2 = scrollRef2.current;
    if (!scrollContainer1 || !scrollContainer2) return;

    let animationFrameId1: number;
    let animationFrameId2: number;
    let scrollPosition1 = 0;
    let scrollPosition2 = 0;
    const scrollSpeed = 0.5;

    const scroll1 = () => {
      scrollPosition1 += scrollSpeed;
      const maxScroll = scrollContainer1.scrollWidth / 2;
      if (scrollPosition1 >= maxScroll) {
        scrollPosition1 = 0;
      }
      scrollContainer1.scrollLeft = scrollPosition1;
      animationFrameId1 = requestAnimationFrame(scroll1);
    };

    const scroll2 = () => {
      scrollPosition2 -= scrollSpeed;
      const maxScroll = scrollContainer2.scrollWidth / 2;
      if (scrollPosition2 <= 0) {
        scrollPosition2 = maxScroll;
      }
      scrollContainer2.scrollLeft = scrollPosition2;
      animationFrameId2 = requestAnimationFrame(scroll2);
    };

    scrollPosition2 = scrollContainer2.scrollWidth / 2;
    scrollContainer2.scrollLeft = scrollPosition2;

    animationFrameId1 = requestAnimationFrame(scroll1);
    animationFrameId2 = requestAnimationFrame(scroll2);

    const handleMouseEnter1 = () => cancelAnimationFrame(animationFrameId1);
    const handleMouseLeave1 = () => {
      animationFrameId1 = requestAnimationFrame(scroll1);
    };

    const handleMouseEnter2 = () => cancelAnimationFrame(animationFrameId2);
    const handleMouseLeave2 = () => {
      animationFrameId2 = requestAnimationFrame(scroll2);
    };

    scrollContainer1.addEventListener("mouseenter", handleMouseEnter1);
    scrollContainer1.addEventListener("mouseleave", handleMouseLeave1);
    scrollContainer2.addEventListener("mouseenter", handleMouseEnter2);
    scrollContainer2.addEventListener("mouseleave", handleMouseLeave2);

    return () => {
      cancelAnimationFrame(animationFrameId1);
      cancelAnimationFrame(animationFrameId2);
      scrollContainer1.removeEventListener("mouseenter", handleMouseEnter1);
      scrollContainer1.removeEventListener("mouseleave", handleMouseLeave1);
      scrollContainer2.removeEventListener("mouseenter", handleMouseEnter2);
      scrollContainer2.removeEventListener("mouseleave", handleMouseLeave2);
    };
  }, []);

  return (
    <section 
      id={id} 
      className="w-full" 
      style={{ 
        paddingTop: '80px', 
        paddingBottom: '80px'
      }}
    >
      <div>
        <div style={{ 
          paddingTop: '20px', 
          paddingBottom: '20px', 
          marginBottom: '20px'
        }}>
          <div
            ref={scrollRef1}
            className="flex gap-8"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              overflowX: "hidden",
              overflowY: "visible"
            }}
          >
            {duplicatedRow1.map((testimonial, index) => (
              <TestimonialCard
                key={`row1-${index}`}
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>

        <div style={{ 
          paddingTop: '20px', 
          paddingBottom: '20px'
        }}>
          <div
            ref={scrollRef2}
            className="flex gap-10"
            style={{ 
              scrollbarWidth: "none", 
              msOverflowStyle: "none",
              overflowX: "hidden",
              overflowY: "visible"
            }}
          >
            {duplicatedRow2.map((testimonial, index) => (
              <TestimonialCard
                key={`row2-${index}`}
                name={testimonial.name}
                role={testimonial.role}
                avatar={testimonial.avatar}
                testimonial={testimonial.testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}