import "./../globals.css";
import Time from "@/component/Time";
import Sidebar from "@/component/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import Profile from "@/component/Profile";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#E8E8E8" }}>
        <div className="flex">
          <Sidebar />
          <div
            className="flex flex-col p-[1.5vw] ml-[87px]"
            style={{ width: "calc(100% - 87px)" }}
          >
            <div className="flex justify-between w-full items-center mb-[2vh]">
              <Time />
              <Profile />
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
