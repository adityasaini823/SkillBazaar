import React from "react";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { Card,Typography ,TextField,Button} from "@mui/material";
function CourseDetails() {
    const [course,setCourse]=useState(null);
    const {id}=useParams();
            useEffect(()=>{
                    fetch(`http://localhost:3000/admin/courses/${id}`,{
                        method:"GET",
                        headers:{
                            "Content-Type":"application/json",
                            "Authorization":"Bearer "+localStorage.getItem("token")
                        }
                    }).then(response=>response.json()).then(data=>setCourse(data));
            },[id])
            if (!course) {
                return <div>Loading...</div>;
            }
    return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center", flexWrap:"wrap"}}>
           <Card variant="outlined" style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column", padding: "20px", margin: "20px", width:"300px", height:"300px"}}>
            <Typography variant="h5" gutterBottom>{course.title}</Typography>
            <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt="Course Image" style={{ width: "200px", height: "200px" }} />
            <Typography variant="h6" gutterBottom>{course.description}</Typography>
            <Typography variant="h5" gutterBottom>Price: {course.price}</Typography>
        </Card>
            <UpdateCourse course={course} setCourse={setCourse}/>
        </div>
    )
}
function UpdateCourse({ course, setCourse }) {
     
     const [title,setTitle]=useState(course.title);
     const [description,setDescription]=useState(course.description);
     const [price,setPrice]=useState(course.price);
     const handleUpdate=()=>{
        
            fetch(`http://localhost:3000/admin/courses/${id}`,{
                method:"PUT",
                headers:{"Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("token")},
                body:JSON.stringify({title,description,price})})
                .then(response=>response.json())
                .then(data=>setCourse(data));
           
           }
    //  const [image,setImage]=useState("");
     const {id}=useParams();
     return(
        <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <Card variant="outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "400px", height: "400px" }}>
                    
                    <TextField label="Title" variant="outlined" value={title} onChange={(e) => setTitle(e.target.value)} style={{ margin: "10px" }} />
                    <TextField label="Price" variant="outlined" value={price} onChange={(e) => setPrice(e.target.value)} style={{ margin: "10px" }} />
                    <TextField label="Description" variant="outlined" value={description} onChange={(e) => setDescription(e.target.value)} style={ {margin: "10px" }} />
                    {/* <TextField label="Image" variant="outlined" value={image} onChange={(e) => setImage(e.target.value)} style={{ margin: "10px" }} /> */}
                    <Button variant="contained" style={{ width: "300px", margin: "10px" }} onClick={handleUpdate}>
                        Update Course
                    </Button>
                    </Card>
        </div>
     )
}
export default CourseDetails;