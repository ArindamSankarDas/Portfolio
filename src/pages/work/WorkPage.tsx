import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import projectCards from "@utils/project-data.json";

const WorkPage = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);

  const categories = ["All", "Web Development", "Frontend Challenges", "Bots"];

  useEffect(() => {
    const checkCarouselScroll = () => {
      if (carouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;

        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
      }
    };

    checkCarouselScroll();

    const carouselElement = carouselRef.current;

    window.addEventListener("resize", checkCarouselScroll);
    if (carouselElement) {
      carouselElement.addEventListener("scroll", checkCarouselScroll);
    }

    return () => {
      window.removeEventListener("resize", checkCarouselScroll);
      if (carouselElement) {
        carouselElement.removeEventListener("scroll", checkCarouselScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      console.log(carouselRef.current.scrollLeft);

      const scrollAmount = direction === "left" ? -200 : 200;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <h1 className='w-fit relative font-Poppins font-semibold text-2xl lg:text-3xl title-line'>
        Projects
      </h1>
      <div id='carousel-container' className='relative mt-4'>
        {showLeftArrow && (
          <button
            onClick={() => scroll("left")}
            className='absolute -left-[1.9%] top-1/2 -translate-y-1/2 p-2 shadow-arrowShadow bg-white  rounded-full'
          >
            <ChevronLeft size={18} />
          </button>
        )}

        <div
          ref={carouselRef}
          id='sub-header'
          className='flex text-nowrap overflow-x-auto no-scrollbar gap-3'
        >
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`text-sm font-semibold rounded-2xl px-3 py-1 ${
                activeCategory === category
                  ? "bg-black text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {showRightArrow && (
          <button
            onClick={() => scroll("right")}
            className='absolute -right-[1.8%] top-1/2 -translate-y-1/2 p-2 shadow-arrowShadow bg-white rounded-full'
          >
            <ChevronRight size={18} />
          </button>
        )}
      </div>
      <section className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 lg:scrollable-content'>
        {projectCards
          .filter(
            (card) =>
              activeCategory === "All" || card.category === activeCategory
          )
          .map((card) => (
            <div className='border-[2px] bg-white font-Poppins p-4 rounded-xl'>
              <img
                src={card.image}
                alt='card-image'
                className='rounded-xl mb-4'
              />

              <section className='ml-2'>
                <h2 className=' mb-1 text-xl font-bold'>{card.title}</h2>
                <h3 className=' text-sm text-gray-400 font-semibold'>
                  {card.category}
                </h3>
                <div className='mt-3 flex gap-x-2'>
                  <button className='project-btn'>
                    <a href={card.code} target='_blank'>
                      View Code
                    </a>
                  </button>
                  <button className='project-btn'>
                    <a href={card.demo} target='_blank'>
                      View Demo
                    </a>
                  </button>
                </div>
              </section>
            </div>
          ))}
      </section>
    </>
  );
};
export default WorkPage;
