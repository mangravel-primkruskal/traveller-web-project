import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ASide = () => {
  const [hamburger, setHamburger] = useState(true);

  const [user, setUser] = useState([]);

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

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [user.role === undefined]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <div className="row">
      <div
        className="row"
        style={{
          width: "100%",
          padding: 10,
          backgroundColor: "#4B7D3D",
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
          backgroundColor: "#C7E8CA",
          height: "100%",
          position: "fixed",

          zIndex: 99,
        }}
      >{user.role}
        <div className="sidebar-sticky">
          <ul className="nav flex-column">
            {user.role == "admin" && (
              <>
                <li className="nav-item" style={{ backgroundColor: "#4B9D3D" }}>
                  <a
                    className="nav-link active text-white"
                    href="/Dashboard"
                  >
                    Anasayfa
                  </a>
                </li>
                <li
                  className="nav-item text-white"
                  style={{ backgroundColor: "#4B9D3D", marginTop: 10 }}
                >
                  <a className="nav-link text-white" href="/UserManagement">
                    Kullanıcı Yönetimi
                  </a>
                </li>
              </>
            )}

            <li
              className="nav-item"
              style={{ backgroundColor: "#4B9D3D", marginTop: 10 }}
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
              style={{ backgroundColor: "#4B9D3D", marginTop: 10 }}
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
