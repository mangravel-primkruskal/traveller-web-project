import React from "react";

export default function Dashboard() {
  return (
    <>
      <div class="row">
        <div class="col-md-4 " style={{ backgroundColor: "#604a72" }}>
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
        <div class="col-md-4" style={{ backgroundColor: "#604c3a" }}>
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
                <button type="submit" className="btn btn-primary">
                  Yeni Mekan Ekle
                </button>
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
                  <tr>
                    <td>1</td>
                    <td>Xxx Kafe</td>
                    <td>Abc mahallesi xx sokak</td>
                    <td>555-555-5555</td>
                    <td>2023-04-01</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Xxx Kafe</td>
                    <td>Abc mahallesi xx sokak</td>
                    <td>555-555-5555</td>
                    <td>2023-04-01</td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>Xxx Kafe</td>
                    <td>Abc mahallesi xx sokak</td>
                    <td>555-555-5555</td>
                    <td>2023-04-01</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
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
                <button type="submit" className="btn btn-warning">
                  Yeni Mekan Ekle
                </button>
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
      </div>
    </>
  );
}
