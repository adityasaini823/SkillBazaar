import React from "react";
import {Button,Card,TextField,Typography} from '@mui/material';

/// File is incomplete. You need to add input boxes to take input for users to login.
function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    return <div style={{width:"95vw",height:"95vh"}}> 
        <div style={{display:"flex", alignItems:"center", justifyContent:"center"}}>
                <Card variant="outlined" style={{display:"flex", justifyContent:"center",alignItems: "center"  ,flexDirection:"column" ,width:"350px" ,height:"350px"}}>
                <Typography variant="h5" gutterBottom>
Login to admin dashboard</Typography>
<TextField label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} style={{width:"300px" ,margin:"10px"}}/>
<TextField  label="Passsword" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} style={{width:"300px" ,margin:"10px"}}/>
        <Button variant="contained"style={{width:"300px" ,margin:"10px"}}onClick={()=>{
                    fetch("http://localhost:3000/admin/login",{
                        method:"POST",
                        body:JSON.stringify({
                            username:username,
                            password:password
                        }),
                        headers:{"Content-Type":"application/json"},
                    }).then(response=>response.json()).then(data=>{console.log(data),localStorage.setItem("token",data.token)})
              }}>Login</Button>
        <br/>
        New here? <a href="/register">Register</a>
    </Card>
    </div>
    </div>
}

export default Login;