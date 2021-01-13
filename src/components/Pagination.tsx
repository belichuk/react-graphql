import React from 'react';
import {Nav}  from 'react-bootstrap';

interface Props {
    pageInfo: any,
    page: number,
    next: Function,
    prev: Function
}

function Pagination(props: Props) {
    const {pageInfo, page, next, prev} = props;
    const prevClick = (e: any) => {
        e.preventDefault();
        prev();
    }

    const nextClick = (e: any) => {
        e.preventDefault();
        next();
    }

    return (
        <Nav>
            <ul className="pagination">
                {pageInfo.hasPreviousPage
                    ? <li className="page-item"><a className="page-link" onClick={prevClick} href="#">Prev</a></li>
                    : ""
                }
                <li className="page-item active"><a className="page-link" onClick={e => e.stopPropagation()} href="#">{page}</a></li>
                {pageInfo.hasNextPage
                    ? <li className="page-item"><a className="page-link" onClick={nextClick} href="#">Next</a></li>
                    : ""
                }

            </ul>
        </Nav>
    );
}

export default Pagination;
