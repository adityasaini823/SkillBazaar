import React from "react";
import { Button, Card, TextField, Typography } from '@mui/material';


/// You need to add input boxes to take input for users to create a course.
/// I've added one input so you understand the api to do it.
function CreateCourse() {
    const [title, setTitle] = React.useState("");
    const [price,setPrice]= React.useState("");
    const [description, setDescription] = React.useState("");
    const [image, setImage] = React.useState("");

    return <div style={{display:"flex" ,alignItems: "center",justifyContent:"center",flexDirection:"column"}}>
        <Typography variant="h5" gutterBottom>
                        Enter Course details:
                    </Typography>
         <Card variant="outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "400px", height: "400px" }}>
                    
                    <TextField label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} style={{ margin: "10px" }} />
                    <TextField label="Price" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} style={{ margin: "10px" }} />
                    <TextField label="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} style={ {margin: "10px" }} />
                    <TextField label="Image" variant="outlined" value={image} onChange={(e) => setImage(e.target.value)} style={{ margin: "10px" }} />
                    <Button variant="contained" style={{ width: "300px", margin: "10px" }} onClick={() => {
                        fetch("http://localhost:3000/admin/courses", {
                            method: "POST",
                            body: JSON.stringify({
                                title: title,
                                price: price,
                                description:description,
                                image:image
                            }),
                            headers: { "Content-Type": "application/json" ,
                                "Authorization": "Bearer "+localStorage.getItem("token")}
                        }).then(response => response.json()).then(data =>
                            console.log(data)
                        )
                    }}>Create Course</Button>
                    <br />
                </Card>
        
    </div>
}
export default CreateCourse;