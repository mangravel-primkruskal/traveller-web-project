import React, { useState } from "react";
import axios from "axios";
function Register() {
  const [name, setName] = useState("ruki");
  const [address, setAddress] = useState("adres ruki");
  const [city, setCity] = useState("sehiruki");
  const [district, setDistrict] = useState("ilceruki");
  const [category, setCategory] = useState("kategoriruki");
  const [mekanIsmi, setMekan] = useState("mekan irem");
  const [sesDuzey, setSesDuzey] = useState("ses12");
  const [musteriCategory, setMusteriCategory] = useState("musterikatego");
  const [urunCategory, setUrunCategory] = useState("urunkategori");
  const [username, setUsername] = useState("irem");
  const [password, setPassword] = useState("123456789Aa");
  const [phone_number, setPhone_Number] = useState("05355555555");
  const [placeType, setPlaceType] = useState("Restoran");
  const [email, setEmail] = useState("relslslslsllslls@g.com");

  const clickToRegister = () => {
    let data = JSON.stringify({
      full_name: name,
      username: username,
      password: password,
      confirm_password: password,
      county: district,
      city: city,
      email: email,
      place_type: placeType,
      place_name: mekanIsmi,
      place_address: address,
      place_volume: sesDuzey,
      place_costumer_type: musteriCategory,
      phone_number: phone_number,
      role: "owner",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
     // url: "https://travellerbackend.herokuapp.com//ownerregister",
      url: "http://127.0.0.1:5000//ownerregister",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (
          response?.data?.message ==
          "Mekan sahibi ve mekan basariyla kaydedildi."
        ) {
          alert("Hoşgeldiniz");
          return (window.location.href = "/login");
        } else return alert(response?.data?.message);
      })
      .catch((error) => {
        alert(error);
        return (window.location.href = "/login");
      });
  };

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
        <a>
          Zaten bir hesabın var mı?{" "}
          <a href="/login" style={{ fontWeight: "bold" }}>
            Giriş Yap
          </a>
        </a>
        <h1>Kayıt Ol</h1>
        <div class="form-outline mb-4">
          <label class="form-label">İsim Soyisim Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="İsim Soyisim"
            value={name}
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
            value={address}
            onChange={(text) => setAddress(text.target.value)}
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label">Telefon Numaranız</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Telefon"
            value={phone_number}
            onChange={(text) => setPhone_Number(text.target.value)}
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label">Email adresiniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Email"
            value={email}
            onChange={(text) => setEmail(text.target.value)}
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label">Mekan Türü</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Mekan Türü"
            value={placeType}
            onChange={(text) => setPlaceType(text.target.value)}
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label">Şehir Giriniz</label>
          <input
            type="text"
            id="textkullanici"
            class="form-control"
            placeholder="Şehir"
            value={city}
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
            value={district}
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
            value={category}
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
            value={mekanIsmi}
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
            value={sesDuzey}
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
            value={musteriCategory}
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
            value={urunCategory}
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
            value={username}
            onChange={(text) => setUsername(text.target.value)}
          />
        </div>

        <div class="form-outline mb-4">
          <label class="form-label">Şifre Giriniz</label>
          <input
            type="password"
            class="form-control"
            value={password}
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
          onClick={() => clickToRegister()}
          type="button"
          class="btn btn-primary btn-block mb-4"
        >
          Kayıt Ol
        </button>
      </div>
    </div>
  );
}

export default Register;
