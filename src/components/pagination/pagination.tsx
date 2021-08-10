import React, { useState , MouseEvent, useEffect } from "react";
import './pagination.scss'

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from:number, to:number, step = 1) => {
  let i = from;
  const range = [];

  while (i <= to) {
    range.push(i);
    i += step;
  }
  return range;
}

export const Pagination = (props: { page: number, pageSize: number, totalResults: number, gotoPage:(page: number) => void }) => {
  const [currentPage, setCurrentPage] = useState(props.page)
  // const [page, setPage] = useState(props.page);
      useEffect(() => {
      setCurrentPage(props.page);
    }, [props.page]);
    
    const fetchPageNumbers = () => {
    const totalPages = Math.ceil(props.totalResults / props.pageSize);

    const totalNumbers = 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage);
      const endPage = Math.min(totalPages - 1, currentPage);
      let pages:(string|number)[] = range(startPage, endPage);

      const hasLeftSpill = startPage > 2;
      const hasRightSpill = (totalPages - endPage) > 1;
      const spillOffset = totalNumbers - (pages.length + 1);

      switch (true) {
        // handle: (1) < {5 6} [7] {8 9} (10)
        case (hasLeftSpill && !hasRightSpill): {
          const extraPages = range(startPage - spillOffset, startPage - 1);
          pages = [LEFT_PAGE, ...extraPages, ...pages];
          break;
        }

        // handle: (1) {2 3} [4] {5 6} > (10)
        case (!hasLeftSpill && hasRightSpill): {
          const extraPages = range(endPage + 1, endPage + spillOffset);
          pages = [...pages, ...extraPages, RIGHT_PAGE];
          break;
        }

        // handle: (1) < {4 5} [6] {7 8} > (10)
        case (hasLeftSpill && hasRightSpill):
        default: {
          pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
          break;
        }
      }

      return [1, ...pages, totalPages];
    }

    return range(1, totalPages);
    }

    const handleClick = (page:number|string) =>(e:MouseEvent<HTMLAnchorElement>)=> {
    e.preventDefault();
    props.gotoPage((page as number));
  }

  const handleMoveLeft = (e:MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.gotoPage(currentPage  - 1);
  }

  const handleMoveRight = (e:MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    props.gotoPage(currentPage + 1);
  }
    
    
    if (!props.totalResults || props.totalResults === 1) return null;
    const pages = fetchPageNumbers();
    return (
    
        <ul className="pagination">
            { pages.map((page, index) => {

              if (page === LEFT_PAGE) return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Previous" onClick={handleMoveLeft}>
                    <span aria-hidden="true">&laquo;</span>
                    <span className="sr-only">Previous</span>
                  </a>
                </li>
              );

              if (page === RIGHT_PAGE) return (
                <li key={index} className="page-item">
                  <a className="page-link" href="#" aria-label="Next" onClick={handleMoveRight}>
                    <span aria-hidden="true">&raquo;</span>
                    <span className="sr-only">Next</span>
                  </a>
                </li>
              );

              return (
                <li key={index} className={`page-item${ currentPage === page ? ' active' : ''}`}>
                  <a className="page-link" href="#" onClick={handleClick(page)}>{ page }</a>
                </li>
              );

            }) }

          </ul>
    )
}