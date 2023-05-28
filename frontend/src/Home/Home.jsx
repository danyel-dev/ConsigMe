import { useEffect, useState } from 'react';
import './style.css'
import axios from 'axios';


export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const config = {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Token ' + localStorage.getItem('token')
            }
        }

        axios.get("http://127.0.0.1:8000/users", config).then(response => {
            setUsers(response.data)
            console.log(users)
        })                  
    }, [])

    return (
        <div>
            <p>oi</p>
            <a href="">clikmkm</a>
        </div>
    );
}