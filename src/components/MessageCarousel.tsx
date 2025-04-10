import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Define types for the message data
interface Message {
  image: string;
  title: string;
  name: string;
  message: string;
  link: string;
  designation: string;
  location: string;
}

const messages: Message[] = [
  {
    image: "./principal_rounded.png",
    title: "PRINCIPAL'S MESSAGE",
    name: "Dr. Ankush Kansal",
    message: `Education stands at a transformative juncture where traditional
      methods must evolve to meet the ever-changing demands of the
      modern world. As educators, we have the collective responsibility
      to equip students with skills that go beyond academics, preparing
      them for real-world challenges. This requires a shift towards
      innovative learning approaches that align with industry
      expectations and foster holistic development.`,
    link: "/principals-message",
    designation: "Principal, Thapar Polytechnic College",
    location: "Patiala, Punjab",
  },
  {
    image: "./chairman_rounded.png",
    title: "CHAIRMAN'S MESSAGE",
    name: "Sh. Anil Bhargava",
    message: `Education and industry are two sides of the same coin—one shapes minds, the other refines them. As an industry professional, I have witnessed firsthand how the gap between academic learning and workplace expectations continues to challenge both employers and graduates. The Principals' Conclave 2025 is a crucial step toward bridging this divide, fostering a future-ready education system that aligns with industry needs.`,
    link: "/chairmans-message",
    designation: "Chairman, Managing Committee",
    location: "Thapar Polytechnic College, Patiala",
  },
  {
    image: "./vice_chairman_rounded.png",
    title: "VICE CHAIRMAN'S MESSAGE",
    name: "Dr. Gurbinder Singh",
    message: `Education today is not just about imparting knowledge; it is about equipping students with the skills and mindset to thrive in a rapidly evolving world. The Principals' Conclave 2025 serves as a platform to reimagine our approach to learning, ensuring it remains relevant, future-focused, and impactful. Traditional teaching methods must evolve to meet the changing demands of industry and society.`,
    link: "/vice-chairmans-message",
    designation: "Vice Chairman, Managing Committee TPC",
    location: "Registrar, TIET, Director LMTSM",
  },
  {
    image: "./coordinator_rounded.png",
    title: "COORDINATOR'S MESSAGE",
    name: "Dr. Dwarika Nath Ratha",
    message: `Education is the cornerstone of progress, and as leaders in academia, we must constantly adapt to ensure our students are prepared for the challenges ahead. The Principals' Conclave 2025 is a unique opportunity to explore innovative approaches that will redefine the way we teach, learn, and build future-ready professionals. As an educator and engineer, I have always believed that knowledge without application is incomplete.`,
    link: "/coordinators-message",
    designation: "Professor, Civil Engineering, TIET",
    location: "Coordinator, Thapar Polytechnic College",
  },
];

// Define types for the component state
interface CarouselProps { }

const MessageCard: React.FC<{ data: Message }> = ({ data }) => (
  <div className="p-5 w-full md:w-1/2">
    <div className='flex flex-col items-start gap-7 bg-white shadow rounded-2xl p-6 h-full'>
      <img
        src={data.image}
        className='w-full max-h-[300px] object-contain mx-auto'
        alt={`${data.title}'s Image`}
      />
      <div className='w-full'>
        <p className='playfair font-semibold text-3xl mt-4'>{data.title}</p>
        <p className='mt-4 font-light text-slate-600 text-justify'>{data.message}</p>
        <Link to={data.link} className='inline-block mt-2 text-red-600'>
          Read More...
        </Link>
        <p className='mt-8'>
          <span className='text-slate-600 font-light'>Warm regards,</span><br />
          <span className='text-2xl font-semibold text-red-600'>{data.name}</span><br />
          <span className='font-light mt-2'>
            {data.designation}<br />
            {data.location}
          </span>
        </p>
      </div>
    </div>
  </div>
);

const Carousel: React.FC<CarouselProps> = () => {
  const [index, setIndex] = useState<number>(0);
  const [isLarge, setIsLarge] = useState<boolean>(window.innerWidth >= 1024);
  const step = isLarge ? 2 : 1;

  const updateIndex = (delta: number) => {
    setIndex((prev) => (prev + delta * step + messages.length) % messages.length);
  };

  useEffect(() => {
    const handleResize = () => setIsLarge(window.innerWidth >= 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => updateIndex(1), 4000);
    return () => clearInterval(interval);
  }, [step]);

  const visibleMessages = messages.slice(index, index + step).concat(
    index + step > messages.length ? messages.slice(0, (index + step) % messages.length) : []
  );

  const totalSlides = Math.ceil(messages.length / step);
  const getCurrentSlide = () => Math.floor(index / step);
  const goToSlide = (slideIndex: number) => setIndex(slideIndex * step);

  return (
    <div className='px- md:px- py-14'
      style={{ background: "url(./red_bg.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <div className="container mx-auto max-w-7xl">

        <div className='flex justify-end gap-4 mb-4'>
          <button onClick={() => updateIndex(-1)} className='cursor-pointer p-2 rounded-full bg-white text-black' aria-label="Previous Slide">
            <ChevronLeft size={35} />
          </button>
          <button onClick={() => updateIndex(1)} className='cursor-pointer p-2 rounded-full bg-white text-black' aria-label="Next Slide">
            <ChevronRight size={35} />
          </button>
        </div>

        <div className='flex flex-wrap justify-center'>
          {visibleMessages.map((msg, i) => (
            <MessageCard key={i} data={msg} />
          ))}
        </div>

        <div className='flex justify-center items-center mt-6 gap-2'>
          {[...Array(totalSlides)].map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`p-[6px] rounded-full transition-colors cursor-pointer ${getCurrentSlide() === i ? 'bg-white p-[7px]' : 'bg-gray-300'}`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
