import { Outlet } from "react-router-dom"; // Placeholder used in nested routes

import Directory from "../../components/directory/directory.component";

const Home = () => {
  return (
    <div>
      <Directory />
      <Outlet /> {/* child component will be rendered here */}
    </div>
  );
};

export default Home;
