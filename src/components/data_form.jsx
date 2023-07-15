import React ,{useState } from 'react'
// import { Link,Routes,useNavigate } from 'react-router-dom'
import './data_form.css'
import Resume1 from './reusme/resume1'
export default function Data_form(props){
    // window.onload= result_show()
    const [result_show,setResult_show] = useState(false)
    const [show_form,setShow_form] = useState(true)

    // const file=useRef(null)
    const [image, setImage] = useState("./reusme/avatar.png")

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

    setResult_show(true)
    setShow_form(false)

    // document.getElementsByClassName("outer-box").style.visibility='hidden';


// const navigate = useNavigate();
// navigate('./resume/Resume1')

// setImage=(URL.createObjectURL(e.target.files[0]))
     

}
 
    return(

<>
        {show_form ?
        <form  onSubmit={handleSubmit}  className="outer-box">
                <h2 id="title"> Resume Form </h2>
            <label>Name</label>
            <input type="text"   value={name} onChange={(e)=>setName(e.target.value)}    placeholder="Name"/>

            <label>Image</label>
            <input id='avatar-img' type="file"   alt="image"     name={image}      onChange={(e)=>setImage(URL.createObjectURL(e.target.files[0]))}   accept="image/png , image/jpg" placeholder="Upload here"/>

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
        </form> : null }

        


        {result_show? <Resume1  name={name}   email={email}  address={address }  image={image}
                                linkedin={linkedin} summary={summary} tech_skills={tech_skills}
                                ip_skills={ip_skills} education={education} projects={projects}
                
                /> : null}


        </>
    )
}