import React, { useState } from 'react';
import axios from 'axios';

export default function UploadVehicle() {
  const [file, setFile] = useState(null);
  console.log('hi')
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', file);

    try {
      await axios.post('http://localhost:3001/vehicles/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('Tải lên thành công!');
    } catch (error) {
      console.error(error);
      alert('Đã xảy ra lỗi khi tải lên!');
    }
  };

  return (
    <div className="container">
      <h2 className="mt-4">Tải Lên Xe Ô Tô</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="file">Chọn Tệp</label>
          <input
            type="file"
            className="form-control-file"
            id="file"
            accept=".csv"
            onChange={handleFileChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Tải Lên
        </button>
      </form>
    </div>
  );
};
