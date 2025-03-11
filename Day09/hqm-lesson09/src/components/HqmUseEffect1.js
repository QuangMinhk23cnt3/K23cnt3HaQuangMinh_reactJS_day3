import React, { useEffect, useState } from 'react'

export default function HqmUseEffect1() {
    const [count, setCount] = useState(0);
    useEffect(() => {
        console.log("useEffect (callback)");
    })

    useEffect(() => {
        console.log("useEffect(callback),[]); chi mot lan duy nhat");

    }, [])

    useEffect(() => {
        console.log('Count has change:', count);
        },
    )
    return (
        <div className='alert alert-danger'>
            <h2>useEffect</h2>

            <button className='btn btn-danger' onClick={() => setCount(count + 1)}>Click</button>
        </div>
    )
}
