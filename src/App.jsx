import React, { useState } from 'react'


function App() {
    const [change, setChange] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: ""
    }); 

    const Submit = (event) => {
        event.preventDefault();
        alert('sumbmited succesfully')
    };

    const fun_onChange = (e) => {
        const {value,name} = e.target
    
        setChange((preValue) => {
            return{
                ...preValue,
                [name]:value,
            }
            // if (name === "fname") {
            //     return {
            //         fname: value,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }
            // }else if (name === "lname") {
            //     return {
            //         fname: preValue.fname,
            //         lname: value,
            //         email: preValue.email,
            //         phone: preValue.phone
            //     }
            // }
            // else if (name === "email") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: value,
            //         phone: preValue.phone
            //     }
            // }
            // else if (name === "phone") {
            //     return {
            //         fname: preValue.fname,
            //         lname: preValue.lname,
            //         email: preValue.email,
            //         phone: value,
            //     }
            
        })


    }


    return (
        <>
            <div className='main_container'>
                <h3>Hello {change.fname}  {change.lname}</h3>
                <p>{change.email}</p>
                <p>{change.phone}</p>
                <form onSubmit={ Submit} >
                    <input
                        name='fname'
                        value={change.fname}
                        type="text"
                        onChange={fun_onChange}
                        placeholder='enter first name'
                    />

                    <input
                        name='lname'
                        value={change.lname}
                        type="text"
                        onChange={fun_onChange}
                        placeholder='enter last name'
                    />

                    <input
                        name='email'
                        value={change.email}
                        type="text"
                        onChange={fun_onChange}
                        placeholder='enter email'
                    />

                    <input
                        name='phone'
                        value={change.phone}
                        type="text"
                        onChange={fun_onChange}
                        placeholder='enter phone number'
                    />

                    <input type="submit" />
                </form>
            </div>

        </>
    )
}

export default App
