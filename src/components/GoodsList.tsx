// src/components/GoodsList.tsx
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import GoodsItem from './GoodsItem';
import Pagination from './Pagination';
import '../styles/Table.css';

interface GoodsListProps {
  searchTerm: string;
  currentPage: number;
  setCurrentPage: (page: number) => void;
  itemsPerPage: number;
}

const GoodsList: React.FC<GoodsListProps> = ({ searchTerm, currentPage, setCurrentPage, itemsPerPage }) => {
  const goods = useSelector((state: RootState) => state.goods.goods);

  const filteredGoods = useMemo(() => {
    return goods.filter(good =>
      good.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [goods, searchTerm]);

  const totalPages = Math.ceil(filteredGoods.length / itemsPerPage);
  const currentGoods = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredGoods.slice(start, start + itemsPerPage);
  }, [filteredGoods, currentPage, itemsPerPage]);

  return (
    <div className="table-container">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Tên hàng hóa</th>
            <th>Giá</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          {currentGoods.map(good => (
            <GoodsItem key={good.id} good={good} />
          ))}
        </tbody>
      </table>
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage} />
    </div>
  );
};

export default GoodsList;
