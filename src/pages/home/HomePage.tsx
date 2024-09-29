import { CodeXml, Users } from "lucide-react";

const HomePage = () => {
  return (
    <>
      <section className='mb-4'>
        <h1 className='w-fit relative font-Poppins font-semibold text-2xl lg:text-3xl title-line'>
          ABOUT ME
        </h1>
        <p className='text-sm font-Raleway mt-3 font-medium pl-2'>
          I'm a MERN stack developer with over a year and a half of programming
          experience. After focusing on frontend development for about a year,
          I've gained the required knowledge in MongoDB, Express.js, React, and
          Node.js to work across the full stack.
        </p>
      </section>
      <section className='pl-2'>
        <h2 className='font-Poppins font-semibold text-xl'>What I do!</h2>
        <section className='mt-4 flex flex-col items-center justify-center gap-6 lg:flex-row lg:items-start'>
          <div className='bg-orange-200 rounded-lg px-5 py-4'>
            <h3 className='flex justify-start items-center gap-x-3 mb-2'>
              <CodeXml color='red' />
              <span className='text-xl font-semibold font-Poppins'>
                Web Development
              </span>
            </h3>

            <p className='text-justify font-medium font-Raleway'>
              Skilled in building web applications with React, Node.js,
              TypeScript, and MongoDB. I focus on creating scalable,
              user-friendly solutions and continuously learning new
              technologies.
            </p>
          </div>
          <div className='bg-gray-200 rounded-lg px-5 py-4'>
            <h3 className='flex justify-start items-center gap-x-3 mb-2'>
              <Users color='orange' />
              <span className='text-xl font-semibold font-Poppins'>
                Building in Public
              </span>
            </h3>

            <p className='text-justify font-medium font-Raleway'>
              By building in public, I aim to provide transparency, share
              insights, and inspire others with real-world examples of
              problem-solving and learning in action.
            </p>
          </div>
        </section>
      </section>
    </>
  );
};
export default HomePage;
