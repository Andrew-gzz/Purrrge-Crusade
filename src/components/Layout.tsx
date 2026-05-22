import { Outlet } from "react-router-dom";
import background from "/assets/background.jpeg";

function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Outlet />
    </div>
  );
}

export default Layout;
