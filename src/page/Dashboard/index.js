import React, { useEffect, useState } from "react";

import axios from "axios";

export default function Dashboard() {
  const [data, setData] = useState([]);
  const [user, setUser] = useState([]);

  const [userList, setUserList] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      //url: "https://travellerbackend.herokuapp.com/recentdata",
      url: "http://127.0.0.1:5000/recentdata",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setData(response.data.recent_places);
        console.log(response.data);
        setUserList(response.data.recent_users);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [user.role === undefined]);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);

  return (
    <>
      <div class="row">
        <div class="col-md-4 " style={{ backgroundColor: "#4B9D3D" }}>
          <div class="card-body">
            <h5 class="card-title text-white">Toplam Kullanıcı Sayısı</h5>
            <p class="card-text text-white">1000</p>
          </div>
        </div>
        <div class="col-md-4  " style={{ backgroundColor: "#3a603a" }}>
          <div class="card-body">
            <h5 class="card-title text-white">Toplam Mekan Sayısı</h5>
            <p class="card-text text-white">1000</p>
          </div>
        </div>
        <div class="col-md-4" style={{ backgroundColor: "#4B9D3D" }}>
          <div class="card-body">
            <h5 class="card-title text-white">Toplam Ziyaret Sayısı</h5>
            <p class="card-text text-white">1000</p>
          </div>
        </div>
      </div>

      <div class="row">
        <div className="col-md-12" style={{ marginTop: 20, width: "100%" }}>
          <div className="card">
            <div className="card-body">
              <h5
                className="card-title"
                style={{ fontWeight: "600", fontSize: 27, float: "left" }}
              >
                Son Eklenen Mekanlar{" "}
              </h5>
              <div
                style={{
                  width: "100%",
                  justifyContent: "end",
                  paddingRight: 20,
                  paddingBottom: 5,
                  textAlign: "end",
                }}
              >
                <a href="/VenueManagement" className="btn btn-primary">
                  Yeni Mekan Ekle
                </a>
              </div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Mekan Adı</th>
                    <th scope="col">Adresi</th>
                    <th scope="col">Telefon</th>
                    <th scope="col">Kayıt Tarihi</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{item.place_name}</td>
                      <td>{item.place_address}</td>
                      <td>{item.phone_number}</td>
                      <td>{item.registration_date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {user.role == "admin" && (
          <div className="col-md-12" style={{ marginTop: 20, width: "100%" }}>
            <div className="card">
              <div className="card-body">
                <h5
                  className="card-title"
                  style={{ fontWeight: "600", fontSize: 27, float: "left" }}
                >
                  Son Eklenen Kullanıcılar{" "}
                </h5>
                <div
                  style={{
                    width: "100%",
                    justifyContent: "end",
                    paddingRight: 20,
                    paddingBottom: 5,
                    textAlign: "end",
                  }}
                >
                  <a href="/UserManagement" className="btn btn-warning">
                    Yeni Kullanıcı Ekle
                  </a>
                </div>
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col">ID</th>
                      <th scope="col">Kullanıcı Adı</th>
                      <th scope="col">E-Posta</th>
                      <th scope="col">Telefon</th>
                      <th scope="col">Kayıt Tarihi</th>
                    </tr>
                  </thead>
                  <tbody>
                  {userList.map((item1, index1) => (
                    <tr>
                      <td>{index1 + 1}</td>
                      <td>{item1.full_name}</td>
                      <td>{item1.email}</td>
                      <td>{item1.phone}</td>
                      <td>{item1.registration_date}</td>
                    </tr>
                  ))}
                    <tr>
                      <td>1</td>
                      <td>John Doe</td>
                      <td>john.doe@example.com</td>
                      <td>555-555-5555</td>
                      <td>2023-04-01</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Jane Smith</td>
                      <td>jane.smith@example.com</td>
                      <td>555-555-5555</td>
                      <td>2023-04-02</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Bob Johnson</td>
                      <td>bob.johnson@example.com</td>
                      <td>555-555-5555</td>
                      <td>2023-04-03</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
