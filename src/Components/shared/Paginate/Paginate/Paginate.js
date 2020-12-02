import React from 'react';
import ReactPaginate from 'react-paginate';
import IconNext from '../../../../static/svg/right.svg';
import IconPrevious from '../../../../static/svg/left.svg';
import styles from './Paginate.scss';
import BlockTo from '../BlockTo/BlockTo';

const Paginate = ({ pageCount, initialPage, router }) => (
  <div className={styles.paginateBlock}>
    <ReactPaginate
      onPageChange={(data) => {
        router.push(
          {
            pathname: router.location.pathname,
            search: `?page=${data.selected + 1}`,
          },
        );
      }}
      initialPage={initialPage - 1}
      pageCount={pageCount}
      previousLabel={<IconPrevious />}
      nextLabel={<IconNext />}
      breakLabel={<BlockTo />}
      marginPagesDisplayed={7}
      pageRangeDisplayed={10}
      containerClassName={styles.mainBlock}
      activeClassName={styles.paginateActive}
      nextClassName={styles.nextButton}
      previousClassName={styles.previousButton}
      pageClassName={styles.pageClassName}
      pageLinkClassName={styles.pageLinkClassName}
      activeLinkClassName={styles.activeLinkClassName}
      previousLinkClassName={styles.previousLinkClassName}
      nextLinkClassName={styles.nextLinkClassName}
    />
  </div>
);

export default Paginate;
