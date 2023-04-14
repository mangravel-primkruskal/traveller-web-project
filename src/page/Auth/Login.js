import React, { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
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
            </div>
          </div>
        </div>

        <button
          onClick={() => (window.location.href = "/dashboard")}
          type="button"
          class="btn btn-primary btn-block mb-4"
        >
          Giriş Yap
        </button>
      </div>
    </div>
  );
}

export default Login;
