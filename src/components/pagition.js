import React from 'react'

export function Pagition(props) {

  const currentPage = props.currentPage;
  const totalPages = props.totalPages;
  const onClickPage = (e) => {
    props.onPageChange(e)
  }
  const onClickPrev = () => {
    const newPage = currentPage - 1;
    props.onPageChange(newPage)
  }
  const onClickNext = () => {
    const newPage = currentPage + 1;
    props.onPageChange(newPage)
  }

  return (
    <nav aria-label="Standard pagination example">
      <ul className="pagination">
        <li className="page-item">
          <button className="page-link" onClick={onClickPrev} disabled={currentPage === 0}>
            &laquo;
          </button>
        </li>

        {[...Array(totalPages)].map((_, i) => {
          const page = i;
          const isFirstFive = page < 5;
          const isLastFive = page >= totalPages - 3;

          if (isFirstFive || isLastFive) {
            return (
              <li key={i} className={`page-item ${currentPage === page  ? 'active' : ''}`}>
                <button className="page-link" onClick={() => onClickPage(page)}>
                  {page + 1}
                </button>
              </li>
            );
          }

          // Show ellipsis once in between
          if (page === 6 && totalPages > 10) {
            return (
              <li key="ellipsis" className="page-item disabled">
                <span className="page-link">...</span>
              </li>
            );
          }

          return null;
        })}

        <li className="page-item">
          <button className="page-link" onClick={onClickNext} disabled={currentPage === totalPages -1}>
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  )
}
