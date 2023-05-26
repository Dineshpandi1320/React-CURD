import { Button, TextField } from '@mui/material'
import React , { useState }  from 'react'
import { useHistory } from 'react-router-dom'
import Base from '../Bases/Base'

const AddStudents = ({studentsData, setStudents}) => {
  
  const [values, setValues] = useState({
    id:"",
    name : "",
    batch :"",
    gender :"",
    experience : ""
  }); 
  const {
      id,
     name,
     batch, 
     gender, 
     experience} = values; 
    const history = useHistory();

// Single handle change event
const handleChange = (name) => (event) =>{
   const value = event.target.value; 
   setValues({...values, [name]:value})
}

    const addNewStudent = () => {
        const newStudent = {
            id,
            name,
            batch,
            gender,
            yearsOfExperience : experience
        }
       setStudents([...studentsData, newStudent])
       setValues({
        ...values, 
        id:"",
        name:"",
        batch:"", 
        gender:"", 
        experience:""
       })
       history.push("/details")
      };


  return (
    <Base
    title = "Add A Student"
    description= "You can a student data here"
    >
              <div className="input-section">
     
        
     <TextField 
     fullWidth label="Enter the id" 
     onChange={handleChange("id")}
     value = {id}
     name= "id"
     id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Name"
     onChange={handleChange("name")}
     value= {name}
     name= "name"
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Batch"
     onChange={handleChange("batch")}
     value = {batch}
     name= "batch"
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Gender"
     onChange={handleChange("gender")}
     value = {gender}
     name= "gender"
      id="fullWidth" />

     <TextField 
     fullWidth 
     label="Enter the Experience"
     onChange={handleChange("experience")}
     value = {experience}
     name="experience"
      id="fullWidth" />
 
     <Button
       className="add-btn"
       color="success"
       variant="contained"
       onClick={addNewStudent}
     >
       Add Data
     </Button>


   </div>
    </Base>
  )
}

export default AddStudents