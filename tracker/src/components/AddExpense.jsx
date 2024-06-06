import { useState } from 'react';
import {postFormData} from '../service/service';
const AddExpense = (props) => {

    const setDefaultDate = () => {
        const today = new Date();
        return `${today.getFullYear()}-${("0" + (today.getMonth() + 1)).slice(-2)}-${("0" + today.getDate()).slice(-2)}`;
    };

    const [payeeName, setPayeeName] = useState("");
    const [price, setPrice] = useState(0);
    const [product, setProduct] = useState("");
    const [date, setDate] = useState(setDefaultDate());

    const handleSubmit = async (e) => {
        e.preventDefault();
        const postData = {
            payeeName,
            price,
            product,
            setDate: date,
        }
        const data = await postFormData(postData);
        console.log(data);
        props.onTrue();
    }
    return (
        <section  > 
            <header className='header'>
                <h4>Add New Items</h4>
                <p className="colorP">Read the below instruction before proceedings</p>
                <p>Make sure you fil all the fields where * is provided</p>
            </header>
            <form onSubmit={(e) => handleSubmit(e)}>
                <article>
                    <label>
                        Name<br/>
                        <select required value={payeeName} onChange={(e) => setPayeeName(e.target.value)}>
                            <option value="" defaultChecked>Select User</option>
                            <option value="Rahul" >Rahul</option>
                            <option value="Ramesh" >Ramesh</option>
                        </select>
                    </label>
                </article>
                <article>
                    <label>
                        Product Purchased<br/>
                        <input type="text" required value={product} onChange={(e) => setProduct(e.target.value)}/>
                    </label>
                </article>
                <article>
                    <label>
                        Price
                        <br/>
                        <input type="number" required value={price} onChange={(e) => setPrice(e.target.value)}/>
                    </label>
                </article>
                <article>
                    <label>
                        Date<br/>
                        <input type="date" required value={date} onChange={(e) => setDate(e.target.value)}/>
                    </label>
                </article>
                <div>
                    <button type="submit">Submit</button>
                    <button type="button" className="closeBtn" onClick={props.onClose}>Close</button>
                </div>
            </form>
        </section>
    )
}

export default AddExpense;