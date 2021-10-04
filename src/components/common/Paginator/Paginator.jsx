import React from "react";
import s from './Paginator.module.css'
const Paginator = ({totalUserCount, pageSize, currentPage, onPageChange}) => {


       let pagesCount = Math.ceil(totalUserCount / pageSize)


        let pages = [];

        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

        return <div>
                {pages.map(p =>{

                   return <span className={currentPage === p && s.silectPage}
                   onClick={(e) =>{onPageChange(p)}}>{p}</span>
                })
                }

            </div>

}


 export default Paginator