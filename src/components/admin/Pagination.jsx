import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    if (totalPages <= 1) return null;
    
    // Logic to limit number of visible pages could go here if needed
    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    
    return (
        <div className="admin-pagination">
            <button
                className="page-btn"
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)}
            >
                <img src="/images/img_icons8_com_3d_fluency_94_back_png.png" alt="prev" width="16" height="16" />
            </button>
            
            {pages.map(p => (
                <button
                    key={p}
                    className={`page-btn ${p === currentPage ? 'active' : ''}`}
                    onClick={() => onPageChange(p)}
                >
                    {p}
                </button>
            ))}
            
            <button
                className="page-btn"
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}
            >
                <img src="/images/img_icons8_com_3d_fluency_94_forward_png.png" alt="next" width="16" height="16" />
            </button>
        </div>
    );
};

export default Pagination;
