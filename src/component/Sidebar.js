import { useState } from "react";
import { NavLink } from "react-router-dom";

const ASide = () => {
  const [hamburger, setHamburger] = useState(true);

  function toggleSidebar() {
    if (hamburger) {
      var sidebar = document.querySelector(".sidebar");
      sidebar.className = "ol-sm-3 col-md-2 d-sm-block sidebar";
      setHamburger(!hamburger);
    } else {
      var sidebar = document.querySelector(".sidebar");
      sidebar.className = "ol-sm-3 col-md-2 d-none  d-sm-block sidebar";
      setHamburger(!hamburger);
    }
  }
  return (
    <div className="row">
      <div
        className="row"
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: "#0E131F",
          zIndex: 100,
        }}
      >
        <div className="col-sm-12">
          <h1 style={{ color: "white", float: "left" }}>TRAVELLER</h1>

          <div
            className="menu-icon"
            style={{
              cursor: "pointer",
              width: "100%",
              textAlign: "end",
              fontSize: 30,
              color: "white",
              paddingRight: 10,
            }}
            onClick={() => toggleSidebar()}
          >
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </div>

      <nav
        className="col-sm-3 col-md-2 d-none d-sm-block sidebar"
        style={{
          backgroundColor: "#1C2331",
          height: "100%",
          position: "fixed",

          zIndex: 99,
        }}
      >
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            <li className="nav-item" style={{ backgroundColor: "#3E445B" }}>
              <NavLink className="nav-link active text-white" to="/dashboard">
                Anasayfa
              </NavLink>
            </li>
            <li
              className="nav-item text-white"
              style={{ backgroundColor: "#3E445B", marginTop: 10 }}
            >
              <a className="nav-link text-white" href="/UserManagement">
                Kullanıcı Yönetimi
              </a>
            </li>
            <li
              className="nav-item"
              style={{ backgroundColor: "#3E445B", marginTop: 10 }}
            >
              <a
                className="nav-link text-white
               "
                href="/VenueManagement"
              >
                Mekan Yönetimi
              </a>
            </li>
            <li
              className="nav-item text-white"
              style={{ backgroundColor: "#3E445B", marginTop: 10 }}
            >
              <a className="nav-link text-white" href="/login">
                Çıkış
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default ASide;
