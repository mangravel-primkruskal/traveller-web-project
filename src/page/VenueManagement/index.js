import React, { useState, useEffect } from "react";
import axios from "axios";

const VenueManagement = () => {
  const [mevlanlar, setMevlanlar] = useState([
    {
      mekanAdi: "Mevlan Kebap",
      sehir: "Istanbul",
      ilce: "Beyoglu",
      sesDuzeyi: "Orta",
      musteriKategorisi: "Aile",
      urunKategorisi: "Kebap",
      mekanKategorisi: "Restoran",
      adres: "Istiklal Cad. No: 123",
    },
    {
      mekanAdi: "Mevlan Pide",
      sehir: "Izmir",
      ilce: "Karsiyaka",
      sesDuzeyi: "Dusuk",
      musteriKategorisi: "Arkadas",
      urunKategorisi: "Pide",
      mekanKategorisi: "Lokanta",
      adres: "Cumhuriyet Cad. No: 456",
    },
    {
      mekanAdi: "Mevlan Cafeteria",
      sehir: "Ankara",
      ilce: "Kecioren",
      sesDuzeyi: "Yuksek",
      musteriKategorisi: "Ogrenci",
      urunKategorisi: "Kahve",
      mekanKategorisi: "Cafe",
      adres: "Universite Cad. No: 789",
    },
  ]);

  const [mekanAdi, setMekanAdi] = useState("");
  const [sehir, setSehir] = useState("");
  const [ilce, setIlce] = useState("");
  const [sesDuzeyi, setSesDuzeyi] = useState("");
  const [mekanAdresi, setMekanAdresi] = useState("");
  const [urunKategorisi, setUrunKategorisi] = useState("");
  const [mekanKategorisi, setMekanKategorisi] = useState("");
  const [adres, setAdres] = useState("");

  const [update, setUpdate] = useState({
    update: false,
    data: {
      place_type: "",
      place_name: "",
      place_address: "",
      place_lat: "",
      place_long: "",
    },
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://travellerbackend.herokuapp.com/recentdata",
      headers: {},
    };

    axios
      .request(config)
      .then((response) => {
        setData(response.data.recent_places);
        console.log(response.data.recent_places);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addNewVenue = () => {
    if (update.update) return console.log(update);

    let data = JSON.stringify({
      place_type: mekanKategorisi,
      place_name: mekanAdi,
      place_address: mekanAdresi,
      place_lat: "123",
      place_long: "123",
    });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      //url: "https://travellerbackend.herokuapp.com/createplace",
      url: "http://127.0.0.1:5000/createplace",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios
      .request(config)
      .then((response) => {
        if (response.data.message == "Mekan basarili sekilde kaydedildi.") {
          alert("Başarılı");
          window.location.reload();
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="row">
      <div className="col-sm-4">
        <form>
          <div className="mb-3">
            <label htmlFor="mekan-adi" className="form-label">
              Mekan Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="mekan-adi"
              value={mekanAdi}
              onChange={(e) => setMekanAdi(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="sehir" className="form-label">
              Şehir
            </label>
            <input
              type="text"
              className="form-control"
              id="sehir"
              value={sehir}
              onChange={(e) => setSehir(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ilce" className="form-label">
              İlçe
            </label>
            <input
              type="text"
              className="form-control"
              id="ilce"
              value={ilce}
              onChange={(e) => setIlce(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="ses-duzeyi" className="form-label">
              Ses Düzeyi
            </label>
            <input
              type="text"
              className="form-control"
              id="ses-duzeyi"
              value={sesDuzeyi}
              onChange={(e) => setSesDuzeyi(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="venueImage">Mekan Resmi</label>
            <div class="input-group">
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="venueImage" />
                <label class="custom-file-label" for="venueImage">
                  Resim Seç
                </label>
              </div>
              <div class="input-group-append">
                <button class="btn btn-primary" type="button">
                  Yükle
                </button>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="urun-kategorisi" className="form-label">
              Ürün Kategorisi
            </label>
            <input
              type="text"
              className="form-control"
              id="urun-kategorisi"
              value={urunKategorisi}
              onChange={(e) => setUrunKategorisi(e.target.value)}
            />
          </div>
          <button type="button" class="btn btn-primary">
            Yeni Mekan Ekle
          </button>
        </form>
        {/* <form>
          <div className="mb-3">
            <label htmlFor="mekan-adi" className="form-label">
              Mekan Adı
            </label>
            <input
              type="text"
              className="form-control"
              id="mekan-adi"
              value={mekanAdi}
              onChange={(e) => setMekanAdi(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="musteri-kategorisi" className="form-label">
              Mekan Adresi
            </label>
            <input
              type="text"
              className="form-control"
              id="musteri-kategorisi"
              value={mekanAdresi}
              onChange={(e) => setMekanAdresi(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="musteri-kategorisi" className="form-label">
              Mekan Tipi
            </label>
            <input
              type="text"
              className="form-control"
              id="musteri-kategorisi"
              value={mekanKategorisi}
              onChange={(e) => setMekanKategorisi(e.target.value)}
            />
          </div>

          <button
            onClick={() => addNewVenue()}
            type="button"
            class="btn btn-primary"
          >
            Yeni Mekan Ekle
          </button>
        </form> */}
      </div>
      <div className="col-sm-8">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Mekan Adı</th>
              <th scope="col">Şehir</th>
              <th scope="col">İlçe</th>

              <th scope="col">Adres</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{item.place_name}</td>
                <td>{item.place_address}</td>
                <td>{item.phone_number}</td>
                <td>
                  <button className="btn btn-sm btn-danger">Sil</button>{" "}
                  <button
                    onClick={() => setUpdate({ update: true, data: item })}
                    className="btn btn-sm btn-primary"
                  >
                    Düzenle
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VenueManagement;
