// src/components/GoodsItem.tsx
import React from 'react';
import { Good } from '../store/goodsSlice';
import { NavLink } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteGood } from '../store/goodsSlice';
import { AppDispatch } from '../store';

interface GoodsItemProps {
  good: Good;
}

const GoodsItem: React.FC<GoodsItemProps> = ({ good }) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa hàng hóa này?')) {
      dispatch(deleteGood(good.id));
    }
  };

  return (
    <tr>
      <td>{good.id}</td>
      <td>{good.name}</td>
      <td>{good.price.toLocaleString()} VNĐ</td>
      <td>
        <NavLink to={`/edit/${good.id}`} className="button button-secondary btn-sm me-2">
          Chỉnh sửa
        </NavLink>
        <button onClick={handleDelete} className="button button-danger btn-sm">
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default GoodsItem;
