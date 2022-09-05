import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <ul>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>

        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </>
  );
};

export default Layout;
