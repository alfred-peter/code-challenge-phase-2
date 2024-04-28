import React, { useState } from 'react'
import "./Form.css"
function Form() {

    const [Form, setForm] = useState([])
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [category, setCategory] = useState("")
    const [amount, setAmount] = useState("")


    const dateChange = (e) => {
        setDate(e.target.value);
    }
    const descriptionChange = (e) => {
        setDescription (e.target.value)
    }
    const categoryChange = (e) => {
        setCategory(e.target.value)
    }
    const amountChange = (e) => {
        setAmount(e.target.value)
    }

    const submitForm = (event) =>{
        event.preventDefault()
        if (date.trim() && description.trim() !== "") {
            setForm([...Form ,date ,description ,category ,amount])
            setDate("")
            setDescription("")
            setCategory("")
            setAmount("")

        
        
    }}

    console.log(Form)

    return (
        <div id='form'>
            <form onSubmit={submitForm}>
                <input type="date" placeholder='date' value={date} onChange={dateChange}/>
                <input type="text" placeholder= 'description'value={description} onChange={descriptionChange} />
                <input type="text" placeholder='category' value={category} onChange={categoryChange}/>
                <input type="number" placeholder='amount' value={amount} onChange={amountChange}/>
                <button type="submit">Add Transaction</button>
            </form>
            <div className='displayform'>
                {Form.map((FormList,index) =>(
                    
                        

                    <table key={(index)}>
                        <tr>
                            <th>Date</th>
                            <th>Description</th>
                            <th>Category</th>
                            <th>Amount</th>
                        </tr>
                        <tr>
                            <td>{FormList[0]}</td>
                            <td>{FormList[1]}</td>
                            <td>{FormList[2]}</td>
                            <td>{FormList[3]}</td>
                        </tr>
                    </table>

                    


                   



                ))}
            
            
            
            
            </div>

            
        </div>
    )
}

export default Form