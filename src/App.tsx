import { Routes, Route } from "react-router-dom";

import Layout from "@components/Layout/Layout";

import HomePage from "@pages/home/HomePage";
import WorkPage from "@pages/work/WorkPage";
import ResumePage from "@pages/resume/ResumePage";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='resume' element={<ResumePage />} />
        <Route path='work' element={<WorkPage />} />
      </Route>
    </Routes>
  );
}

export default App;
