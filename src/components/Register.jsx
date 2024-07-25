import React from "react";
import { useNavigate } from 'react-router-dom';

import {Button,Card,TextField} from '@mui/material';
// import { dark } from "@mui/material/styles/createPalette";


/// File is incomplete. You need to add input boxes to take input for users to register.
function Register() {
    const navigate = useNavigate();

    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleLogin = () => {
        navigate("/login");
    };


    return (
    <div style={{width:"95vw",height:"95vh"}}>
    <div style={{display:"flex" ,justifyContent:"center" ,alignItems: "center",flexDirection:"column"}}> 
        <h1>Register to the website</h1>
        
        <Card variant="outlined" style={{display:"flex", justifyContent:"center",alignItems: "center"  ,flexDirection:"column" ,width:"350px" ,height:"300px"}}>
                
        <TextField label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} style={{width:"300px" ,margin:"10px"}}/>
        <TextField  label="Passsword" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"300px" ,margin:"10px"}}/>
           
            <Button variant="contained"style={{width:"300px" ,margin:"10px"}} onClick={()=>{
                    fetch("http://localhost:3000/admin/signup",{
                        method:"POST",
                        body:JSON.stringify({
                            username:username,
                            password:password
                        }),
                        headers:{"Content-Type":"application/json"},
                    }).then(response=>response.json()).then(data=>console.log(data))
              }  }>Create Account</Button>
            </Card>
        <br/>
        Already a user?<Button onClick={handleLogin}>Login</Button>
    </div>
    </div>)
}

export default Register;