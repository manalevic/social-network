import React, { useEffect } from "react"
import { useState } from "react"
import s from "./Users.module.css"


const Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    let portionSize = 10


    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(props.currentPortionNumber)
    let portionLeftPageNumber = (portionNumber - 1) * portionSize + 1
    let portionRightPageNumber = portionNumber * portionSize

  
    const onChangePortionNumber = (currentPortionNumber) => {
        props.setPortionNumberThunk(currentPortionNumber)
    }   
    useEffect(() => {
        setPortionNumber(props.currentPortionNumber)
    },[props.currentPortionNumber])
    return (
        <div className={s.pagination}>
            {portionNumber > 1 && <button onClick={() => onChangePortionNumber(portionNumber - 1)}> Back </button>}

            {pages.filter(p => p >= portionLeftPageNumber && p <= portionRightPageNumber)
                .map(p => <div className={props.currentPage === p ? s.selectedPage : undefined} key={p} onClick={(e) => props.onPageChanged(p)} >{p}</div>)}

            {portionNumber < portionCount && <button onClick={() => onChangePortionNumber(portionNumber + 1)}> Next </button>}

        </div>
    )
    


}

export default Paginator


