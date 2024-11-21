// src/pages/Home.tsx
import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import GoodsList from '../components/GoodsList';
import '../styles/Home.css';

const Home: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  return (
    <div className="home-container">
      <h1>Danh sách hàng hóa</h1>
      
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <GoodsList
        searchTerm={searchTerm}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Home;
