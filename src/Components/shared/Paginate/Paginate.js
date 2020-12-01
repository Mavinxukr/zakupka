import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './Paginate.scss';

const Paginate = () => (
  <div className={styles.paginateBlock}>
    <ReactPaginate
      previousLabel="Попередня сторінка"
      nextLabel="Наступна сторінка"
      breakLabel="..."
      breakClassName="break-me"
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      containerClassName="pagination"
      subContainerClassName="pages pagination"
      activeClassName={styles.paginateActive}
    />
  </div>
);

export default Paginate;
