import React from 'react'

function HqmJsxExpession () {
    // bien
    const name ="Ha Quang Minh"
    // bien doi tuong
    const user = {
        firstName:"Minh",
        lastName:"Quang"
    }
    // ham 
    const fullName=(user)=>{
        return user.firstName + ' ' + user.lastName;
    }

    //element
    const element =(
        <div>
           { /* Bieu thuc jsx */ }
            <h2> {fullName(user)} </h2>
            <hr/>
            <h3>Welcome to, {name}</h3>
        </div>
    );

    // ham
    const sayWelcome = (name)=>{
        if(name){
            return <h3>Welcome to, {name}</h3>
        }else{
            return <h3>Welcome to Fit-NTU - K23CNT3</h3>
        }
    }
  return (
    <div>
        <h1> HQM - JSX Expession</h1>
        {/*su dung bien element */}
        {element}

        <hr/>
        {sayWelcome()}
        <hr/>
        {sayWelcome("Trinh Tran Phuong Tuan")}
    </div>
  )
}

export default HqmJsxExpession;
