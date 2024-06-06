import React from "react";
import { getExpenceData } from "../service/service";
import { useEffect, useState } from "react";
import AddExpense from "./AddExpense";

const ShowExpense = () => {
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [showform, setShowForm] = useState(false);
    const [sum, setSum] = useState();
    const [rahulspent, setRahulspent] = useState(0);
    const [rameshspent, setRameshspent] = useState(0);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getExpenceData();
                setItems(data);
                setSum(data.reduce((result, v) => (result = result + v.price), 0));
                var rahulspent1 = 0;
                var rameshspent1 = 0;
                data.map((sams) =>
                    sams.payeeName === "Rahul"
                      ? (rahulspent1 = rahulspent1 + sams.price)
                      : (rameshspent1 = rameshspent1 + sams.price)
                );
                setRahulspent(rahulspent1);
                setRameshspent(rameshspent1);
            } catch (error) {
                setError(error);
            }
        }
        fetchData();
    }, [showform]);
    console.log(items);

    const success = () => {
        setShowForm(false);
    };

    const cancel = () => {
        setShowForm(false);
    };

    return (
        <>
            <header id="page-Header">Expense Tracker</header>
            <button id="Add-Button" onClick={() => setShowForm(true)}>Add</button>
            {showform && (
                <div className="form">
                    <AddExpense onTrue={success} onClose={cancel} />
                </div>
            )}
            <>
                <div className="use-inline date header-color">Date</div>
                <div className="use-inline header-color">Product Purchased</div>
                <div className="use-inline price header-color">Price</div>
                <div className="use-inline header-color payee">Payee</div>
            </>
            {items && items.map((user, idx) => (
                <div key={idx}>
                    <div className="use-inline date">{user.setDate}</div>
                    <div className="use-inline">{user.product}</div>
                    <div className="use-inline price">{user.price}</div>
                    <div className={`use-inline payee ${user.payeeName}`}>
                    {user.payeeName}
                    </div>
                </div>
                ))
            }
                <hr />
                <div className="use-inline ">Total: </div>
                <span className="use-inline total">{sum}</span> <br />
                <div className="use-inline ">Rahul paid: </div>
                <span className="use-inline total Rahul">{rahulspent}</span> <br />
                <div className="use-inline ">Ramesh paid: </div>
                <span className="use-inline total Ramesh">{rameshspent}</span> <br />
                <span className="use-inline payable">
                    {rahulspent > rameshspent ? "Pay Rahul " : "Pay Ramesh"}
                </span>
                <span className="use-inline payable payee">
                    {" "}
                    {Math.abs((rahulspent - rameshspent) / 2)}
                </span>
                {error && <>{error?.message}</>}
        </>
    )
}

export default ShowExpense;