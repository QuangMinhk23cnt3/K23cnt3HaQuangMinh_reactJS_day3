// Them moi du lieu

import axios from 'axios';
import React, { useState } from 'react'

export default function HqmCreateMockAPI() {
    // khoi tao state
    const [hqmFullName, sethqmFullName] = useState('')
    const [hqmAge, sethqmAge] = useState(0)
    const [hqmActive, sethqmActive] = useState(true)

    //api post
    const hqmCreateUserApi = "https://67da74ec35c87309f52c9812.mockapi.io/k23cnt1_haquangminh/hqm_users";

    // khi submit form
    const hqmHandleSubmit = (event)=>{
        event.preventDefault();
        console.log("hqmActive:", hqmActive);
        let HqmNewsUser = {hqmFullName, hqmAge, hqmActive};
        console.log(HqmNewsUser);

        // ghi du lieu vao api
        axios
            .post(hqmCreateUserApi, HqmNewsUser)
            .then((hqm_respone)=>{
                
            })

    }
    return (
        <div className='alert alert-info'>
            <h2>Them moi users</h2>
            <hr />
            <form>
                <div className='mb-1'>
                    <label form="hqmfullName">FullName:</label>
                    <input type='text' name='hqmfullName' id='hqmfullName' 
                        value={hqmFullName}
                        onChange={(ev)=>sethqmFullName(ev.target.value)} />
                </div>

                <div className='mb-1'>
                    <label form="hqmAge">Age:</label>
                    <input type='number' name='hqmAge' id='hqmAge' 
                        value={hqmAge}
                        onChange={(ev)=>sethqmAge(ev.target.value)} />
                </div>

                <div className='row mb-1'>
                    <label form="hqmActive">Active</label>
                        <input type='radio' name='hqmActive' id='hqmActive_hd' value={'true'} onChange={(ev)=>sethqmActive(ev.target.value)} />
                            <label for="hqmActive_hd">Hoat dong</label>
                        <input type='radio' name='hqmActive' id='hqmActive_khoa' value={'false'} onChange={(ev)=>sethqmActive(ev.target.value)} />
                            <label for="hqmActive_khoa">Khoa</label>
                </div>

                <button onClick={hqmHandleSubmit}>Them moi</button>
            </form>
        </div>
    )
}
