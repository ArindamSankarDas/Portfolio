import ProfilePic from "@/assets/profile-pic.jpg";
import { Github, Linkedin, Mail, MapPin } from "lucide-react";

const ProfileInfo = () => {
  return (
    <section className='mt-28 bg-white rounded-3xl mx-10 lg:w-1/2'>
      <section className='flex flex-col items-center px-2'>
        {/* profile pic and title */}
        <div className='relative -top-10 flex flex-col justify-center items-center gap-3'>
          <img
            src={ProfilePic}
            alt='profile-image'
            width={180}
            className='rounded-2xl h-44'
          />
          <h2 className='font-Poppins font-semibold text-xl sm:text-3xl lg:text-xl'>
            Arindam Sankar Das
          </h2>

          <h3 className='font-Poppins text-gray-400 text-sm sm:text-xl lg:text-sm'>
            Full-stack developer
          </h3>

          <section className='icons flex gap-x-2'>
            <a
              href='https://www.linkedin.com/in/arindam-sankar-das-998523220/'
              target='_blank'
              className='px-4 py-3 bg-gray-100 rounded-lg hover:cursor-pointer'
            >
              <Linkedin color='#3232da' fill='#3232da' size={"26px"} />
            </a>
            <a
              href='https://github.com/ArindamSankarDas'
              target='_blank'
              className='px-4 py-3 bg-gray-100 rounded-lg hover:cursor-pointer'
            >
              <Github size={"26px"} />
            </a>
          </section>
        </div>

        <div className='flex flex-col gap-y-7 mb-10 bg-gray-100 px-8  py-8 rounded-2xl w-full xs:w-auto sm:w-[60%] md:px-6 lg:w-auto'>
          <div className='relative flex items-center gap-3 separation-line'>
            <Mail color='orange' size={"22px"} />
            <h4 className='text-xs flex flex-col font-bold sm:text-base lg:text-xs'>
              <span className='text-gray-500'>Email</span>
              <span className='font-Raleway break-all'>
                arindamshankardas489@gmail.com
              </span>
            </h4>
          </div>
          <div className='flex items-center gap-3'>
            <MapPin color='red' size={"22px"} />
            <h4 className='text-xs flex flex-col font-bold sm:text-base lg:text-xs'>
              <span className='text-gray-500'>Location</span>
              <span className='font-Raleway'>Tezpur, Assam</span>
            </h4>
          </div>
        </div>
      </section>
    </section>
  );
};
export default ProfileInfo;
