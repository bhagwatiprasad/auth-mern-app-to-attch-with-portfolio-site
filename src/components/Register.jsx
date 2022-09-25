import React from 'react'

const Register = () => {
    return (
        <div className='center verticalStack fs-1' >
            <h1>Register Form</h1>
            <form action="" className='verticalStack p0-5 border'>
                <input autoComplete="new-password" type="text" placeholder='email' className='p0-5 fs-1-2'/>
                <input autoComplete="new-password" type="text" placeholder='phone' className='p0-5 fs-1-2'/>
                <input autoComplete="new-password" type="password" placeholder='pass' className='p0-5 fs-1-2'/>
                <input autoComplete="new-password" type="password" placeholder='confirmPass' className='p0-5 fs-1-2'/>
                <button className="p0-5 fs-1-2" type='submit'>
                    Register
                </button>
            </form>
        </div>
    )
}

export default Register;
