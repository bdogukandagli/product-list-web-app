import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ totalPageCount, setPageNumber }) => {
  return (
    <ReactPaginate
      pageCount={totalPageCount}
      pageRangeDisplayed={4}
      marginPagesDisplayed={2}
      onPageChange={(e) => setPageNumber(e.selected + 1)}
      containerClassName={'pagination'}
      activeClassName={'active'}
    />
  );
};

export default Pagination;
