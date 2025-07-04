import React from 'react'

function Form() {
    return (
        <div>
            <form>
                <label> Enter the Name</label>
                <input type='text' name='name' placeholder='Enter name' />
                <br />
                <label> Enter the Email</label>
                <input type='email' placeholder='Enter Email' />
                <br />
                <label>Gender</label>
                <input type='radio' name='name' value={'Male'} />Male
                <input type='radio' name='name' value={'Female'} />Female
            </form>
        </div>
    )
}

export default Form
