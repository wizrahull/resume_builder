import React ,{useState} from 'react'
// import { Link,Routes,useNavigate } from 'react-router-dom'
import './data_form.css'
import Resume1 from './reusme/resume1'
export default function Data_form(props){

   const [name,setName] = useState("")
   const [email,setEmail] = useState("")
   const [address,setAddress] = useState("")


   const [linkedin,setLinkedin] = useState("")
   const [summary,setSummary] = useState("")
   const [tech_skills,setTech_skills] = useState("")
  
   const [ip_skills,setIp_skills] = useState("")
   const [education,setEducation] = useState("")
   const [projects,setProjects] = useState("")



 function handleSubmit  (event) {
    event.preventDefault();
    const form_data = new FormData();
    form_data.append('email', email)
    console.log(form_data['email'])
    console.log(email)
    // alert("email   "  + email )

    document.getElementsByClassName("outer-box").style.visibility='hidden';


// const navigate = useNavigate();
// navigate('./resume/Resume1')
     
    
    

}
 

    return(

<>

        <form  onSubmit={handleSubmit}  className="outer-box">
                <h2 id="title"> Resume Form </h2>
            <label>Name</label>
            <input type="text"   value={name} onChange={(e)=>setName(e.target.value)}    placeholder="Name"/>

            {/* <label>Image</label>
            <input type="file"  name="image" alt="image"  accept="image/png , image/jpg" placeholder="Upload here"/> */}

            <label>E-mail</label>
            <input type="text"  value={email}  onChange={(e)=>setEmail(e.target.value)}   placeholder="E-mail"/> 

            <label>Address</label>
            <input type="text" value={address}  onChange={(e)=>setAddress(e.target.value)}    placeholder="Address"/>


            <label>LinkedIn</label>
            <input type="text" value={linkedin}  onChange={(e)=>setLinkedin(e.target.value)}     placeholder="LinkedIn"/>

            <label>Professional Summary</label>
            <textarea type="text"  value={summary}  onChange={(e)=>setSummary(e.target.value)}    placeholder="Summary"/>

            <label>Technical Skills</label>
            <input type="text" value={tech_skills}  onChange={(e)=>setTech_skills(e.target.value)}     placeholder="Interpersonal Skills"/>

            <label>Interpersonal Skills</label>
            <input type="text"  value={ip_skills}  onChange={(e)=>setIp_skills(e.target.value)}     placeholder="Technical Skills"/> 


            <label>Education</label>
            <input type="text"  value={education}  onChange={(e)=>setEducation(e.target.value)}    placeholder="Education"/> 

            <label>Projects</label>
            <input type="text"  value={projects}  onChange={(e)=>setProjects(e.target.value)}     placeholder="Projects"/>

           <input type="submit"/>
        </form>
        <Resume1   name={name}  />

        </>
    )

}