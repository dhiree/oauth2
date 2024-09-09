import React from 'react';

const PagesDropdown = ({ pages, handlePageSelect }) => (
    <select onChange={handlePageSelect}>
        <option value="">Select a Page</option>
        {pages.map(page => (
            <option key={page.id} value={page.id}>{page.name}</option>
        ))}
    </select>
);

export default PagesDropdown;
