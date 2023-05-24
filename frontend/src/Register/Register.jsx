import axios from "axios";


export default function Register() {
    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.getItem('token')
        }
    }

    function handleClick() {
        axios.post("http://127.0.0.1:8000/users/", 
        {username: "amelia", email:"amelia@gmail.com", password: "santoscdp"}, config).then(response => {
            console.log(response)
        })  
    }

    return (
        <div>
            <p>hello</p>
            <button onClick={handleClick}>click</button>
        </div>
    );
}
