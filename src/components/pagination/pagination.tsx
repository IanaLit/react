import React, {
  useState, MouseEvent, useEffect, ChangeEvent,
} from 'react';
import './pagination.scss';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const range = (from:number, to:number, step = 1) => {
  let i = from;
  const rangeArray = [];

  while (i <= to) {
    rangeArray.push(i);
    i += step;
  }
  return rangeArray;
};

export const Pagination = (props: {
  page: number, pageSize: number,
  totalResults: number,
  gotoPage: (page: number) => void,
  setPageSize: any
}) => {
  const {
    page,
    pageSize,
    totalResults,
    gotoPage,
    setPageSize,
  } = props;
  const [currentPage, setCurrentPage] = useState(page);
  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  const fetchPageNumbers = () => {
    const totalPages = Math.ceil(totalResults / pageSize);

    const totalNumbers = 3;
    const totalBlocks = totalNumbers + 2;

    if (totalPages > totalBlocks) {
      const startPage = Math.max(2, currentPage);
      const endPage = Math.min(totalPages - 1, currentPage);
      let pages:(string | number)[] = range(startPage, endPage);

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
  };

  const handleClick = (newPage:number | string) => (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    gotoPage((newPage as number));
  };

  const handleMoveLeft = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    gotoPage(currentPage - 1);
  };

  const handleMoveRight = (e:MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    gotoPage(currentPage + 1);
  };

  if (!totalResults || totalResults === 1) return null;
  const pages = fetchPageNumbers();
  return (
    <div className="pagination">
      <ul>
        { pages.map((curPage, index) => {
          if (curPage === LEFT_PAGE) {
            return (
              <li key={curPage} className="page-item">
                <button type="button" className="page-link" aria-label="Previous" onClick={handleMoveLeft}>
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </button>
              </li>
            );
          }

          if (curPage === RIGHT_PAGE) {
            return (
              <li key={curPage} className="page-item">
                <button type="button" className="page-link" aria-label="Next" onClick={handleMoveRight}>
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </button>
              </li>
            );
          }

          return (
            <li key={curPage} className={`page-item${page === +curPage ? ' active' : ''}`}>
              <button type="button" className="page-link" onClick={handleClick(curPage)}>{ curPage }</button>
            </li>
          );
        }) }

      </ul>
      <label htmlFor="pageSize">
        page size:
        <input type="text" name="pageSize" value={pageSize} onChange={setPageSize} />
      </label>

    </div>
  );
};
