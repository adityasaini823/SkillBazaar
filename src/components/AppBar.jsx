import { Typography, Button } from "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function AppBar() {
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000/admin/me", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(response => response.json()).then(data => {
            console.log(data);
            setEmail(data.username);
        }).catch(error => {
            console.error("Error fetching data:", error);
        });
    },[]);

    if (email) {
        return (
            <div style={{ display: "flex", justifyContent: "space-between", width: "95vw", height: "10vh" }}>
                <div>
                    <Typography variant="h6" gutterBottom>SkillBazzar</Typography>
                </div>
                <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                   <div>
                    {email}
                   </div>
                    <Button variant="contained" style={{ margin: "10px" }} onClick={() => {
                        navigate("/login");
                        localStorage.removeItem("token");
                    }}>
                        Logout
                    </Button>
                </div>
            </div>
        );
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between", width: "95vw", height: "5vh" }}>
            <div>
                <Typography variant="h6" gutterBottom>SkillBazzar</Typography>
            </div>
            <div>
                <Button variant="contained" style={{ margin: "10px" }} onClick={() => navigate("/login")}>
                    SignIn
                </Button>
                <Button variant="contained" style={{ margin: "10px" }} onClick={() => navigate("/register")}>
                    SignUp
                </Button>
            </div>
        </div>
    );
}

export default AppBar;
