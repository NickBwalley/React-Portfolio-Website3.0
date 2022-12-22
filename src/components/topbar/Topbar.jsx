import "./topbar.scss";
import { Person, Mail } from "@material-ui/icons";

export default function Topbar() {
  return (
    <div className="topbar">
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Qonixs.
          </a>
          <div className="itemContainer">
            <Person className="icon" />
            <span>+254 714 394 332</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>nickbwalley@gmail.com</span>
          </div>
        </div>
        <div className="right"></div>
      </div>
    </div>
  );
}
