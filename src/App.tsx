// src/App.tsx
import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import Home from './pages/Home';
import AddGoods from './pages/AddGoods';
import EditGoods from './pages/EditGoods';
import './App.css';
import './styles/Sidebar.css';
import './styles/Table.css';
import './styles/Button.css';
import './styles/Form.css';
import './styles/Pagination.css';
import './styles/SearchBar.css';
import './styles/Home.css';
import './styles/AddGoods.css';
import './styles/EditGoods.css';

const App: React.FC = () => {
  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="sidebar-header">
          <h2>Quản Lý Hàng Hóa</h2>
        </div>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>
                <span className="nav-text">Danh sách hàng hóa</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/add" className={({ isActive }) => isActive ? 'active' : ''}>
                <span className="nav-text">Thêm hàng hóa</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      
      {/* Main Content */}
      <div className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddGoods />} />
          <Route path="/edit/:id" element={<EditGoods />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
