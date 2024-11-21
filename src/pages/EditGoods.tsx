// src/pages/EditGoods.tsx
import React from 'react';
import GoodsForm from '../components/GoodsForm';
import { useDispatch, useSelector } from 'react-redux';
import { updateGood, Good } from '../store/goodsSlice';
import { AppDispatch, RootState } from '../store';
import { useNavigate, useParams } from 'react-router-dom';
import '../styles/EditGoods.css';

const EditGoods: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const goods = useSelector((state: RootState) => state.goods.goods);
  const goodToEdit = goods.find(good => good.id === parseInt(id || '', 10));

  if (!goodToEdit) {
    return <div>Không tìm thấy hàng hóa</div>;
  }

  const handleSubmit = (updatedGood: Omit<Good, 'id'>) => {
    dispatch(updateGood({ id: goodToEdit.id, ...updatedGood }));
    navigate('/');
  };

  return (
    <div className="edit-goods-container">
      <h1>Chỉnh sửa hàng hóa</h1>
      <GoodsForm initialData={goodToEdit} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditGoods;
