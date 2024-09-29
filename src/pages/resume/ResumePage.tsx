import { BookOpen, BrainCircuit, BriefcaseBusiness } from "lucide-react";

const ResumePage = () => {
  return (
    <>
      <h1 className='w-fit relative font-Poppins font-semibold text-2xl lg:text-3xl title-line'>
        Resume
      </h1>

      <section className='flex flex-col mt-3 md:flex-row md:justify-between md:gap-3'>
        <div id='education' className='md:w-full lg:w-2/3'>
          <h2 className='flex items-center gap-x-2 mb-2'>
            <BookOpen color='#fd560f' />
            <span className='text-lg font-Poppins font-semibold'>
              Education
            </span>
          </h2>
          <section className='mb-4'>
            <div className='bg-orange-200 py-5 px-6 font-Raleway rounded-xl'>
              <span className='text-xs text-gray-500 font-medium lg:text-sm'>
                2023 - present
              </span>
              <h3 className='font-bold'>Bachelor of Commerce</h3>
              <h4 className='font-semibold text-sm'>Darrang College</h4>
            </div>
          </section>
        </div>
        <div id='experience' className='md:w-full lg:w-2/3'>
          <h2 className='flex items-center gap-x-2 mb-2'>
            <BriefcaseBusiness color='#fd560f' />
            <span className='text-lg font-Poppins font-semibold'>
              Experience
            </span>
          </h2>
          <section>
            <div className='bg-orange-200 py-5 px-6 font-Raleway rounded-xl'>
              <span className='text-xs text-gray-500 font-medium lg:text-sm'>
                Feb 2024 - March 2024
              </span>
              <h3 className='font-bold'>Web Dev Intern</h3>
              <h4 className='font-semibold text-sm'>
                Coding Raja Technologies
              </h4>
            </div>
          </section>
        </div>
      </section>

      <section className='mt-6'>
        <h2 className='flex items-center gap-x-2 mb-4'>
          <BrainCircuit color='#fd560f' />
          <span className='text-2xl font-semibold font-Raleway'>Skills</span>
        </h2>
        <div className='grid grid-cols-3 gap-3 skill-container sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-4 lg:w-1/2'>
          <span className='bg-orange-500'>HTML</span>
          <span className='bg-blue-600'>CSS</span>
          <span className='bg-yellow-400'>JS</span>
          <span className='bg-blue-400'>REACT</span>
          <span className='bg-green-500'>NODE.JS</span>
          <span className='bg-green-700'>MONGODB</span>
          <span className='bg-gray-500'>POSTGRESQL</span>
        </div>
      </section>
    </>
  );
};
export default ResumePage;
