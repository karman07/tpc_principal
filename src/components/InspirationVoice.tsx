import { useState } from "react";

const InspirationVoice = () => {
  const [voices] = useState([
    {
      title: "Principal",
      name: "DR. ANKUSH KANSAL",
      description: "Principal, Thapar Polytechnic College, Patiala, Punjab",
      image: "/principal.png",
      link: "/principals-message",
    },
    {
      title: "Chairman",
      name: "SH. ANIL BHARGAVA",
      description:
        "Chairman, Managing Committee, Thapar Polytechnic College, Patiala",
      image: "/chairman.png",
      link: "/chairmans-message",
    },
    {
      title: "Vice Chairman",
      name: "DR. GURBINDER SINGH",
      description:
        "Vice Chairman, Managing Committee TPC, Registrar, TIET, Director LMTSM",
      image: "/vice_chairman.png",
      link: "/vice-chairmans-message",
    },
    {
      title: "Coordinator",
      name: "DR. DWARIKA NATH RATHA",
      description:
        "Professor, Civil Engineering, TIET, Coordinator, Thapar Polytechnic College",
      image: "/coordinator.png",
      link: "/coordinators-message",
    },
    {
      title: "Coordinator",
      name: "DR. DWARIKA NATH RATHA",
      description:
        "Professor, Civil Engineering, TIET, Coordinator, Thapar Polytechnic College",
      image: "/nair.png",
      link: "/coordinators-message",
    }, {
      title: "Coordinator",
      name: "DR. DWARIKA NATH RATHA",
      description:
        "Professor, Civil Engineering, TIET, Coordinator, Thapar Polytechnic College",
      image: "/batish.png",
      link: "/coordinators-message",
    }, {
      title: "Coordinator",
      name: "DR. DWARIKA NATH RATHA",
      description:
        "Professor, Civil Engineering, TIET, Coordinator, Thapar Polytechnic College",
      image: "/principal.png",
      link: "/coordinators-message",
    }, {
      title: "Coordinator",
      name: "DR. DWARIKA NATH RATHA",
      description:
        "Professor, Civil Engineering, TIET, Coordinator, Thapar Polytechnic College",
      image: "/coordinator.png",
      link: "/coordinators-message",
    },
  ]);

  return (
    <div className='py-16'
      style={{ background: "url(./dark-bg.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
    >
      <div className='mx-auto container max-w-7xl text-white md:px-10 px-5'>
        <p className='text-5xl'>
          <span className='playfair italic'>Voices of</span> <br /> INSPIRATION
        </p>

        <div className='mt-20 grid md:grid-cols-2 grid-cols-1 gap-x-6 gap-y-24'>
          {voices.map((voice, index) => (
            // <Link to={voice.link} className=''>
            <div
              key={index}
              className='grid grid-rows-reverse md:grid-cols-2 md:grid-rows-none items-end text-right gap-4'>
              <div>
                <img
                  src={voice.image}
                  alt={voice.name}
                  className='h-36 w-full object-contain'
                />
              </div>
              <div className='md:text-left'>
                <p className='playfair text-3xl'>
                  <span className='italic'>{voice.title}</span>
                </p>
                <p className='mt-3 text-lg font-semibold'>- {voice.name}</p>
                <p className='opacity-60 mt-3 font-light'>
                  {voice.description}
                </p>
              </div>
            </div>
            // </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InspirationVoice;
