import { useState } from "react";

function UserForm() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // burada form verilerini işleyebilirsiniz
  };

  return (
    <div className="row">
      <div className="col-sm-6">
        <h4>Kullanıcı Ekle</h4>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Kullanıcı Adı</label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Eposta</label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Şifre</label>
            <input
              type="password"
              className="form-control"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Telefon</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="city">Şehir</label>
            <input
              type="text"
              className="form-control"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="district">İlçe</label>
            <input
              type="text"
              className="form-control"
              id="district"
              value={district}
              onChange={(e) => setDistrict(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Yeni Kullanıcı Ekle
          </button>
        </form>
      </div>
      <div className="col-sm-6">
        <h4>Kullanıcılar</h4>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text">
              <i className="fa fa-search"></i>
            </span>
          </div>
          <input
            type="text"
            className="form-control"
            placeholder="Kullanıcı ara"
          />
        </div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Kullanıcı Adı</th>
              <th scope="col">Eposta</th>
              <th scope="col">Telefon</th>
              <th scope="col">Şehir</th>
              <th scope="col">İlçe</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>user1</td>
              <td>user1@example.com</td>
              <td>555-555-5555</td>
              <td>Istanbul</td>
              <td>Beyoglu</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>user2</td>
              <td>user2@example.com</td>
              <td>555-555-5555</td>
              <td>Izmir</td>
              <td>Karsiyaka</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>user3</td>
              <td>user3@example.com</td>
              <td>555-555-5555</td>
              <td>Ankara</td>
              <td>Kecioren</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserForm;