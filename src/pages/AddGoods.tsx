// src/pages/AddGoods.tsx
import React from 'react';
import GoodsForm from '../components/GoodsForm';
import { useDispatch, useSelector } from 'react-redux';
import { addGood, Good } from '../store/goodsSlice';
import { AppDispatch, RootState } from '../store';
import { useNavigate } from 'react-router-dom';
import '../styles/AddGoods.css';

const AddGoods: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const goods = useSelector((state: RootState) => state.goods.goods);

  const handleSubmit = (good: Omit<Good, 'id'>) => {
    const newGood: Good = {
      id: goods.length > 0 ? goods[goods.length -1].id + 1 : 1,
      ...good
    };
    dispatch(addGood(newGood));
    navigate('/');
  };

  return (
    <div className="add-goods-container">
      <h1>Thêm hàng hóa</h1>
      <GoodsForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddGoods;
