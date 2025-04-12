import React from 'react'

export function Pagition(props) {

  const currentPage = props.currentPage;
  const totalPages = props.totalPages;
  const onClickPage = (e) => {
    const newPage = e.target.key;
    props.onPageChange(newPage)
  }
  const onClickPrev = () => {
    const newPage = currentPage -1 ;
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
          <button className="page-link" onClick={onClickPrev} disabled={currentPage === 1}>
            &laquo;
          </button>
        </li>

        {[...Array(totalPages)].map((_, i) => (
          <li key={i} className={`page-item ${currentPage === i + 1 ? 'active' : ''}`}>
            <button className="page-link" onClick={onClickPage} >
              {i + 1}
            </button>
          </li>
        ))}

        <li className="page-item">
          <button className="page-link" onClick={onClickNext} disabled={currentPage === totalPages}>
            &raquo;
          </button>
        </li>
      </ul>
    </nav>
  )
}
