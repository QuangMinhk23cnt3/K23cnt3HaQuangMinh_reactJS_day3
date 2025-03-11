import React, { useState } from 'react'

export default function HqmUseState() {
    // Tao state la count va ham cap nhat state la setCount
    const [count, setCount] = useState(0);
    // Ham xu ly su kien Tang cua count
    const hqmHandleTang = () => {
        setCount(count + 1);
    }
    // Ham xu ly su kien, them phan tu ngau nhien vao danh sach
    const hqmHandleAddNewRandom = () => {
        // setList(prev =>{
        //    return [
        //        ...prev,
        //        parseInt(Math.random()*1000)
        //    ]
        // })
        
        setList([
            ...list,
            parseInt(Math.random() * 1000)
        ])

    }
    // State la mang(list)
    const lists = [100, 120, 150, 200];
    // Khoi tao state
    const [list, setList] = useState(lists);

    return (
        <div className='alert alert-info'>
            <h2>Su dung useState</h2>
            <div>
                <b>Count: {count} </b>
                <button className="btn btn-outline-primary" onClick={hqmHandleTang}>Tang</button>
                <button className="btn btn-outline-primary" onClick={() => setCount(count - 1)}>Giam</button>
                <button className="btn btn-outline-primary" onClick={() => setCount(0)}>Reset</button>
            </div>
            <div>
                <h3>List: {list.toString()}</h3>
                <button className='btn btn-outline-primary' onClick={hqmHandleAddNewRandom}>Add new (random)</button>
            </div>
        </div>
    )
}
