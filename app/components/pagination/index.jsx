import React from 'react'
import Link from 'next/link'
import ReactPaginate from 'react-paginate';
const CustomPagination = ({ itemsPerPage = 6,  totalData = 122,onPageChange,currentPage }) => {
    const pageCount = Math.ceil(totalData / itemsPerPage);
    console.log("in pagination......",totalData)

    return (
        <>
            <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={onPageChange}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
                containerClassName='wg-pagination justify-center wow fadeInUp'
                activeClassName='active'
                forcePage={currentPage -1}
                                
                
            />
             {/* <ul className="wg-pagination justify-center wow fadeInUp">
                <li>
                    <Link href="#">
                        <i className="icon-keyboard_arrow_left" />
                    </Link>
                </li>
                {Array.from({ length: totalPages }, (_, index) => (
                    <li>
                        <Link href="#">{index + 1}</Link>
                    </li>
                ))}

               

                <li className="active">
                <Link href="#">2</Link>
            </li>
            <li>
                <Link href="#">3</Link>
            </li>
            <li>
                <Link href="#">4</Link>
            </li>
            <li>
                <Link href="#">...</Link>
            </li>
            <li>
                <Link href="#">20</Link>
            </li>
            <li>
                <Link href="#">
                    <i className="icon-keyboard_arrow_right" />
                </Link>
            </li>
        </ul >  */}
        </>
    )
}

export default CustomPagination