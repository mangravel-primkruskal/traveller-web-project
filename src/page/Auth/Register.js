import React, { useState } from "react";

function Register() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [category, setCategory] = useState("");
  const [mekanIsmi, setMekan] = useState("");
  const [sesDuzey, setSesDuzey] = useState("");
  const [musteriCategory, setMusteriCategory] = useState("");
  const [urunCategory, setUrunCategory] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 50,
      }}
    >
      <div
        className="col-sm-5 card shadow-lg border-0 rounded-lg mt-5"
        style={{ padding: 30, borderRadius: 20 }}
      >
        <h1>Kayıt Ol</h1>
        <div class="form-outline mb-4">
          <label class="form-label">İsim Soyisim Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="İsim Soyisim"
            onChange={(text) => setName(text.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">Adres Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Adres"
            onChange={(text) => setAddress(text.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">Şehir Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Şehir"
            onChange={(text) => setCity(text.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">İlçe Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="İlçe Giriniz"
            onChange={(text) => setDistrict(text.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">Mekan Kategori Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Mekan Kategori"
            onChange={(text) => setCategory(text.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">Mekan İsmi Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Mekan İsmi"
            onChange={(text) => setMekan(text.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">Mekan Ses Düzeyi Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Ses Düzeyi"
            onChange={(text) => setSesDuzey(text.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">Mekan Müşteri Kategorisi Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Müşteri Kategorisi"
            onChange={(text) => setMusteriCategory(text.target.value)}
          />
        </div>
        <div class="form-outline mb-4">
          <label class="form-label">Mekan Ürün Kategorisi Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Ürün Kategorisi"
            onChange={(text) => setUrunCategory(text.target.value)}
          />
        </div>
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

export default Register;
