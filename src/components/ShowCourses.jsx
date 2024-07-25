import React, { useEffect } from "react";
import { Typography, Card } from "@mui/material";
import { useNavigate } from "react-router-dom";
function ShowCourses() {
    
    const [courses, setCourses] = React.useState([]);
    
    useEffect(()=>{
        fetch('http://localhost:3000/admin/courses',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("token")
            }
        }).then(response=>response.json()).then(data=>setCourses(data.courses));
    },[])
    // Add code to fetch courses from the server
    // and set it in the courses state variable.
    return <div>
        <h1>All Courses</h1>
        <div style={{display:"flex" ,flexWrap:"wrap",alignItems:"center",justifyContent:"center"}}>   
         {courses.map(c => <Course title={c.title} key={c._id} id={c._id} description={c.description} price={c.price} />)}
        </div>
    </div>
}

function Course({ id, title, description, price }) {
    const navigate = useNavigate();
    function handleClick(){
        navigate(`/course/${id}`);
    }
    return <div style={{display:"flex"}} onClick={handleClick}>
        <Card variant="outlined" style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", width: "300px", height: "300px",margin:"20px" }} >
       <Typography variant="h5" gutterBottom>{title} </Typography>
            <img src="https://buffer.com/cdn-cgi/image/w=1000,fit=contain,q=90,f=auto/library/content/images/size/w600/2023/10/free-images.jpg" alt="course Image" style={{width:"100px",height:"100px"}} />
       <Typography variant="h6" gutterBottom>{description} </Typography>
       <br />
       {/* <Typography variant="h6" gutterBottom>{props.id} </Typography> */}
       <Typography variant="h5" gutterBottom>{price} </Typography>
        </Card>
    </div>
}

export default ShowCourses;