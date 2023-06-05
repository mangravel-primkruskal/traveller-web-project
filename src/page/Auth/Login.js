import React, { useState } from "react";
import axios from "axios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const clickToLogin = () => {
    let data = JSON.stringify({
      username: username,
      password: password,
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://127.0.0.1:5000/ownerlogin",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (response?.data?.message == "Login basarili") {
          alert("Hoşgeldiniz");
          localStorage.setItem("user", response.data.owner);
          return (window.location.href = "/");
        } else return alert(response?.data?.message);
      })
      .catch((error) => {
        alert(error);
      });
  };

  const loginStatic = () => {
    const gelenDataStatikOrnek = {
      email: "mailaafv1f@mbbail123456.coma",
      full_name: "Rukiye İrem Sarısoy",
      object_id: "6479d9ab88bc1f863bb94d3b",
      password: "123456789",
      phone_number: "34434ss5",
      role: "admin",
      username: "mekansahibirem1",
    };
    localStorage.setItem("user", JSON.stringify(gelenDataStatikOrnek));
    if (gelenDataStatikOrnek.role === "owner") window.location.href = "/VenueManagement";
    else window.location.href = "/";
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div
        className="col-sm-5 card shadow-lg border-0 rounded-lg mt-5"
        style={{ padding: 30, borderRadius: 20 }}
      >
        <h1>Giriş Yap</h1>
        <div class="form-outline mb-4">
          <label class="form-label">Kullanıcı Adı Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Kullanıcı Adı"
            onChange={(text) => setUsername(text.target.value)}
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label">Şifre Giriniz</label>
          <input
            type="password"
            class="form-control"
            placeholder="Şifre"
            onChange={(text) => setPassword(text.target.value)}
          />
        </div>

        <div class="row mb-4">
          <div class="col d-flex justify-content-center">
            <div class="form-check">
              <input
                class="form-check-input"
                type="checkbox"
                value=""
                id="form2Example31"
                checked
              />
              <label class="form-check-label" for="form2Example31">
                Beni Hatırla
              </label>
              <br />
              <a>
                Hesabın yok mu?{" "}
                <a href="/register" style={{ fontWeight: "bold" }}>
                  Kayıt Ol
                </a>
              </a>
            </div>
          </div>
        </div>

        <button
          onClick={() => loginStatic()}
          type="button"
          class="btn btn-block mb-4"
          style={{ backgroundColor: "#4B9D3D" }}
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
}

export default Login;
