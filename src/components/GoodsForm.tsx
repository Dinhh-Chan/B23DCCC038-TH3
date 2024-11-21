// src/components/GoodsForm.tsx
import React, { useState, useEffect } from 'react';
import { Good } from '../store/goodsSlice';
import '../styles/Form.css';

interface GoodsFormProps {
  initialData?: Good;
  onSubmit: (good: Omit<Good, 'id'>) => void;
}

const GoodsForm: React.FC<GoodsFormProps> = ({ initialData, onSubmit }) => {
  const [name, setName] = useState(initialData ? initialData.name : '');
  const [price, setPrice] = useState(initialData ? initialData.price : 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if(name.trim() === '' || price <= 0){
      alert('Vui lòng nhập tên và giá hợp lệ.');
      return;
    }
    onSubmit({ name, price });
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Tên hàng hóa:</label>
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            required
            placeholder="Nhập tên hàng hóa"
          />
        </div>
        <div className="form-group">
          <label>Giá:</label>
          <input
            type="number"
            value={price}
            onChange={e => setPrice(parseFloat(e.target.value))}
            required
            min="0"
            placeholder="Nhập giá hàng hóa"
          />
        </div>
        <div className="form-submit">
          <button type="submit" className="button button-primary">Lưu</button>
        </div>
      </form>
    </div>
  );
};

export default GoodsForm;
