import Header from "@components/Header/Header";
import ProfileInfo from "@components/ProfileInfo/ProfileInfo";
import DetailInfoHeader from "@components/DetailInfoHeader/DetailInfoHeader";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div id='body-layout' className='bg-gray-200 w-full min-h-screen pb-3'>
      <Header />
      <section className='lg:wide-screenview'>
        <ProfileInfo />
        <div className='lg:w-[110%]'>
          <DetailInfoHeader />
          <div className='bg-white mx-8 rounded-3xl mt-8 py-5 px-8  lg:px-10 lg:py-8 lg:mx-5'>
            <Outlet />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Layout;
