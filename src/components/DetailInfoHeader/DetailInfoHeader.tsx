import { Briefcase, House, NotepadText } from "lucide-react";
import { NavLink } from "react-router-dom";

const DetailInfoHeader = () => {
  return (
    <section className='flex justify-center mt-8 lg:justify-end lg:mr-4'>
      <nav className='grid grid-cols-2 gap-5 w-fit text-sm font-semibold bg-white py-4 px-5 rounded-xl lg:grid-cols-3'>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `flex flex-col items-center py-3 px-5 rounded-lg hover:cursor-pointer ${
              isActive ? "active-header" : "bg-gray-200"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <House color={isActive ? "white" : "grey"} />
              <span>Home</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={"/resume"}
          className={({ isActive }) =>
            `flex flex-col items-center py-3 px-5 rounded-lg hover:cursor-pointer ${
              isActive ? "active-header" : "bg-gray-200"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <NotepadText color={isActive ? "white" : "grey"} />
              <span>Resume</span>
            </>
          )}
        </NavLink>

        <NavLink
          to={"/work"}
          className={({ isActive }) =>
            `relative left-[55%] flex flex-col items-center py-3 px-5 rounded-lg hover:cursor-pointer lg:static ${
              isActive ? "active-header" : "bg-gray-200"
            }`
          }
        >
          {({ isActive }) => (
            <>
              <Briefcase color={isActive ? "white" : "grey"} />
              <span>Work</span>
            </>
          )}
        </NavLink>
      </nav>
    </section>
  );
};
export default DetailInfoHeader;
