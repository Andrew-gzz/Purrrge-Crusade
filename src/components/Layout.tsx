import { Outlet } from "react-router-dom";
import background from "/assets/background.jpeg";

function Layout() {
  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${background})`, // ← esto faltaba
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed", // ← opcional, efecto parallax
      }}
    >
      <Outlet />
    </div>
  );
}

export default Layout;
