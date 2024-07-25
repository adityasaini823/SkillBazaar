import React from "react";
import { Button, Card, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleRegister = () => {
        navigate("/register");
    };

    return (
        <div style={{ width: "95vw", height: "95vh" }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Card variant="outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "350px", height: "350px" }}>
                    <Typography variant="h5" gutterBottom>
                        Login to admin dashboard
                    </Typography>
                    <TextField label="Username" variant="outlined" value={username} onChange={(e) => setUsername(e.target.value)} style={{ width: "300px", margin: "10px" }} />
                    <TextField label="Password" variant="outlined" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: "300px", margin: "10px" }} />
                    <Button variant="contained" style={{ width: "300px", margin: "10px" }} onClick={() => {
                        fetch("http://localhost:3000/admin/login", {
                            method: "POST",
                            body: JSON.stringify({
                                username: username,
                                password: password
                            }),
                            headers: { "Content-Type": "application/json" },
                        }).then(response => response.json()).then(data => {
                            console.log(data);
                            localStorage.setItem("token", data.token);
                        });
                    }}>Login</Button>
                    <br />
                    New here? <Button onClick={handleRegister}>Register</Button>
                </Card>
            </div>
        </div>
    );
}

export default Login;
