import './../globals.css'
import Time from "@/component/Time";
import Sidebar from "@/component/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#E8E8E8" }}>
        <div className="flex">
          <Sidebar/>
          <div className="flex flex-col w-full p-[1.5vw] ml-[87px]">
            <div className="flex justify-between w-full items-center mb-[2vh]">
              <Time />
              <div className="p-[10px] bg-secondary rounded-lg flex gap-2 items-center">
                Username
                <FontAwesomeIcon icon={faUser} className="h-[15px]" />
              </div>
            </div>
            <div>{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
