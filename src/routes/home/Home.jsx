import { Outlet } from "react-router-dom";

import Book from "../../components/book";

const Home = () => {
  return (
    <>
      <Book />
      <Outlet />
    </>
  );
};

export default Home;
