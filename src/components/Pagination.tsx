// src/components/Pagination.tsx
import React from 'react';
import '../styles/Pagination.css';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const pages = [];

  for(let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  if (totalPages === 0) return null;

  return (
    <div className="pagination">
      {pages.map(page => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={page === currentPage ? 'active' : ''}
          disabled={page === currentPage}
        >
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
