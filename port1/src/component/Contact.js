import { useNavigate } from "react-router-dom";
function Contact (){
  const navigate =useNavigate()
  const change= ()=>{
    navigate('/project')
  }

    return(
        <>
<div className="container-fluid fluid bg-gray ">
<div class="container my-container1 ">
  <div className="row">
  <div >
  <h1 className="mt-5 fw-bold" >ABOUT ME </h1>
  <h5 className="m-4"  >Here you will find more information about me, what I do,<br></br> and my current skills mostly in terms of programming and technology</h5>
  </div>
  <br></br>
  <div className="col col-sm-6">
    <h2 className=" main mr-5 fw-bold">G<span className="text-primary">E</span>T M<span className="text-primary">O</span>RE </h2>
  <p className="mt-4 ">I'm a MERN Web Developer building the MERN Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
  <p className="mt-4 "> Also Having skills of Seo To gives webiste boost for its ranking ,website optimization with wordpress </p>

  <p className="mt-4 ">I have deal with many projects in domains like React, MOngodb ,Nodejs ,Express js  as you can go thorugh my project section</p>
  <div>  <p className="mt-4 "> Seeking a challenging position in a reputed organization where I can learn new skills, expand my knowledge, and leverage my learnings. </p>

  <button className="btn btn-primary btn-lg px-5 mt-" onClick={change} style={{fontFamily:'Franklin Gothic Medium	'}}>Projects</button>
  </div>
 </div>

    <div className="col mb-4" >
    <h2 className=" main ml-5 mt-3 text-primary fw-bold ">My Skills </h2>
    <div className="container  sm-1">
    <div className="row m-5 mt-1">
    <span class="badge col m-3  p-4  bg-warning text-black ">HTML</span>

    <span class="badge col m-3   p-4  bg-warning text-black ">CSS</span>


    <span class="badge col m-3  p-4  bg-warning text-black ">JAVASCRIPT</span>
    <div class="w-100"></div>
    <span class="badge col m-3  p-4  bg-warning text-black ">REACT JS</span>

    <span class="badge col m-3  p-4  bg-warning text-black ">BOOTSTRAP</span>


    <span class="badge col m-3  p-4  bg-warning text-black ">EXPRESS JS</span>
    <div class="w-100"></div>
    <span class="badge col m-3  p-4  bg-warning text-black ">NODE JS</span>

    <span class="badge col m-3  p-4  bg-warning text-black ">MONGODB</span>


    <span class="badge col m-3  p-4  bg-warning text-black ">C++</span>
    <div class="w-100"></div>
    <span class="badge col m-3  p-4  bg-warning text-black ">PYTHON</span>

    <span class="badge col m-3  p-4  bg-warning text-black ">SEO</span>


    <span class="badge col m-3  p-4  bg-warning text-black ">WORDPRESS</span>


    </div>
    </div>

  </div>
 

  </div>
</div>
</div>


   </>

    )
}
export default Contact;