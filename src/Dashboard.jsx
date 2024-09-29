import { useEffect, useState } from 'react';
import axios from 'axios';
import './Dashboard.css';
import Status from './Status';
import Priority from './Priority';
import User from './User';

const Dashboard = () =>{
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showGrouping, setShowGrouping] = useState(false);
    const [organiseBy, setOrganiseBy] = useState(localStorage.getItem("organiseBy") || "Status");
    const [orderBy, setOrderBy] = useState(localStorage.getItem("orderBy") || "Priority");

    useEffect(()=>{
        const getData = async () => {
            try {
                const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
                setData(response.data);
                // console.log(response);
                setLoading(false);
            } catch (error) {
                console.log(error);
            }
        }
        getData();
    },[])

    if(loading){
        return <p>Loading ...</p>
    }

    const handleOrganiseChange = (event)=>{
        const selectedValue = event.target.value;
        setOrganiseBy(selectedValue);
        localStorage.setItem("organiseBy",selectedValue);
    }

    const handleOrderChange = (event)=>{
        const selectedValue = event.target.value;
        setOrderBy(event.target.value);
        localStorage.setItem("orderBy",selectedValue);
    }
    
    return (
        <div>
            <div className="navbar">
                <div className="display">
                    <img src="icons/Display.svg" alt="Display icon" />
                    Display
                    <img src="icons/down.svg" alt="Down icon" onClick={()=>{
                        showGrouping ? setShowGrouping(false) : setShowGrouping(true);
                    }} />
                </div>
            </div>

            {
                showGrouping && (
                    <div  className="grouping-container">
                        <div>
                            Grouping 
                            <select name="organiseBy" id="organiseBy" value={organiseBy} onChange={handleOrganiseChange}>
                                <option value="Status">Status</option>
                                <option value="Priority">Priority</option>
                                <option value="User">User</option>
                            </select>
                        </div>
                        <div>
                            Grouping 
                            <select name="orderBy" id="orderBy" value={orderBy} onChange={handleOrderChange}>
                                <option value="Priority">Priority</option>
                                <option value="Title">Title</option>
                            </select>
                        </div>
                    </div>
                )
        }
        <div className="main">
        {
            organiseBy === "Status" && <Status data = {data} order = {orderBy} />
        }

        {
            organiseBy === "Priority" && <Priority data = {data} order = {orderBy} />
        }

        {
            organiseBy === "User" && <User data = {data} order = {orderBy} />
        }
        </div>


        </div>
    )
}

export default Dashboard;