import React, { useState } from 'react';
import './ThongTinXe.css';

function ThongTinXe() {
  const [maSo, setMaSo] = useState('');
  const [ngayCap, setNgayCap] = useState('');
  const [bienSo, setBienSo] = useState('');
  const [noiDangKy, setNoiDangKy] = useState('');
  const [hangSanXuat, setHangSanXuat] = useState('');
  const [dongXe, setDongXe] = useState('');
  const [phienBan, setPhienBan] = useState('');
  const [thongSoKyThuat, setThongSoKyThuat] = useState('');
  const [mucDichSuDung, setMucDichSuDung] = useState('');
  const [chuSoHuu, setChuSoHuu] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Xử lý dữ liệu form ở đây

    // Reset form sau khi xử lý
    setMaSo('');
    setNgayCap('');
    setBienSo('');
    setNoiDangKy('');
    setHangSanXuat('');
    setDongXe('');
    setPhienBan('');
    setThongSoKyThuat('');
    setMucDichSuDung('');
    setChuSoHuu('');
  };

  return (
    <div className="thong-tin-xe-container">
      <h1>Thông tin về xe</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="ma-so">Giấy chứng nhận đăng ký xe - Mã số:</label>
          <input
            type="text"
            id="ma-so"
            name="ma-so"
            value={maSo}
            onChange={(e) => setMaSo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="ngay-cap">Giấy chứng nhận đăng ký xe - Ngày cấp:</label>
          <input
            type="text"
            id="ngay-cap"
            name="ngay-cap"
            value={ngayCap}
            onChange={(e) => setNgayCap(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="bien-so">Biển đăng ký:</label>
          <input
            type="text"
            id="bien-so"
            name="bien-so"
            value={bienSo}
            onChange={(e) => setBienSo(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="noi-dang-ky">Nơi đăng ký (tỉnh/thành):</label>
          <input
            type="text"
            id="noi-dang-ky"
            name="noi-dang-ky"
            value={noiDangKy}
            onChange={(e) => setNoiDangKy(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="hang-san-xuat">Hãng sản xuất:</label>
          <input
            type="text"
            id="hang-san-xuat"
            name="hang-san-xuat"
            value={hangSanXuat}
            onChange={(e) => setHangSanXuat(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="dong-xe">Dòng xe:</label>
          <input
            type="text"
            id="dong-xe"
            name="dong-xe"
            value={dongXe}
            onChange={(e) => setDongXe(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phien-ban">Phiên bản xe:</label>
          <input
            type="text"
            id="phien-ban"
            name="phien-ban"
            value={phienBan}
            onChange={(e) => setPhienBan(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="thong-so-ky-thuat">Thông số kỹ thuật:</label>
          <textarea
            id="thong-so-ky-thuat"
            name="thong-so-ky-thuat"
            value={thongSoKyThuat}
            onChange={(e) => setThongSoKyThuat(e.target.value)}
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="muc-dich-su-dung">Mục đích sử dụng:</label>
          <select
            id="muc-dich-su-dung"
            name="muc-dich-su-dung"
            value={mucDichSuDung}
            onChange={(e) => setMucDichSuDung(e.target.value)}
          >
            <option value="di-lai-ca-nhan">Đi lại cá nhân</option>
            <option value="dich-vu-tro-khach">Dịch vụ trở khách</option>
            <option value="dich-vu-van-tai">Dịch vụ vận tải</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="chu-so-huu">Chủ sở hữu:</label>
          <input
            type="text"
            id="chu-so-huu"
            name="chu-so-huu"
            value={chuSoHuu}
            onChange={(e) => setChuSoHuu(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input type="submit" value="Submit" />
        </div>
      </form>
    </div>
  );
}

export default ThongTinXe;
