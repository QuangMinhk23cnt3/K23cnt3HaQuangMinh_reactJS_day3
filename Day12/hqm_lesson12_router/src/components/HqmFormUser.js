import React, { useState } from 'react'

export default function HqmFormUser({onHqmAddNew}) {

    const [id, setid] = useState('')
    const [hqmFullName, sethqmFullName] = useState('')
    const [hqmUserName, sethqmUserName] = useState('')
    const [hqmPass, setHqmPass] = useState('')


    const hqmHandleSubmit = (event) =>{
        event.preventDefault();
        console.log(id, hqmFullName, hqmUserName, hqmPass)

        onHqmAddNew({id, hqmFullName, hqmUserName, hqmPass})
    }
  return (
    <div>
        <form>
            <p>Ma Sinh Vien:
                <input type='text' name='id' value={id} onChange={(ev)=>setid(ev.target.value)}/>
            </p>
            <p>Ho va Ten:
                <input type='text' name='hqmFullName' value={hqmFullName} onChange={(ev)=>sethqmFullName(ev.target.value)}/>
            </p>
            <p>Tai Khoan:
                <input type='text' name='hqmUserName' value={hqmUserName} onChange={(ev)=>sethqmUserName(ev.target.value)}/>
            </p>
            <p>Mat Khau:
                <input type='password' name='hqmPass' value={hqmPass} onChange={(ev)=>setHqmPass(ev.target.value)}/>
            </p>

            <p>
                <button className='btn btn-primary' name='hqmSave' onClick={hqmHandleSubmit}>Luu</button>
            </p>
        </form>
    </div>
  )
}
