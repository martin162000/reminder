import React, { useState } from 'react'
import Pagination from '@mui/material/Pagination';



interface Props {
    paginate: (number:number) => void
    totalPosts:any;
    postsPerPage:any;

    
}

const PaginationPosts = (props: Props) => {

    let {totalPosts,postsPerPage,paginate} = props

    const pageNumbers:any = []
    for(let i = 1; i<=Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }

    const [page, setpage] = useState(1)
    const handleGetPaginate = (event:any, value:any) => {

            setpage(value);
            paginate(value)
    }


    return (



            <Pagination className="pagination" count={pageNumbers.length} page={page} color="standard" onChange={handleGetPaginate} shape="rounded" />


        /*<ul>
            {pageNumbers.map((number:any) => (
                <li key={number}>
                    <span onClick={() => paginate(number)}>
                        {number}
                    </span>
                </li>
            ))}
        </ul>*/

    )
}

export default PaginationPosts
