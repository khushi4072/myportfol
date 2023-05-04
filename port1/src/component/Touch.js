import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Touch (){
  const[ name,setname]=useState("")
  const[ mail,setmail]=useState("")
  const[ text,settext]=useState("")
  const Navigate =useNavigate()

  const show = async ()=>{
    let data= await  fetch("http://localhost:5000/touch",{
        method:'post',
        body: JSON.stringify({name,mail,text}),
        headers:{
          'Content-Type':'application/json',
        },



    });

    data=await data.json()
console.log(data)   
Navigate('/')

}
  
    return(
        <>
<div className="container-fluid fluid bg-gray ">
  
<div className="container my-container3 ">
    <div>
    <h1 className="pt-5  " style={{fontFamily:'Franklin Gothic Medium'}}>GET IN TOUCH</h1>
    </div>

  <div className="row  pb-5">
  <form className="pt-4 pb-5" style={{}}>
  <div className="form-group mt-2 ">
    <label for="text" className="lb">Name</label><br></br>
    <input type="text"  style ={{border: '2px solid rgb(31, 81, 255) ',width:'69%',display:'inline-block'}}class="form-control m-1 p-2" id="usr"value={name} onChange={(e)=>{setname(e.target.value)}}/>
  </div>
  <div className="form-group pt-2">
    <label for="exampleInputPassword1 pt-1  "className="lb">   Email</label><br></br>
    <input type="text"  style ={{border: '2px solid rgb(31, 81, 255)',width:'69%', display:'inline-block'}} className=" ml-5 form-control m-1 p-2" id="exampleInputPassword1"  value={mail}onChange={(e)=>{setmail(e.target.value)}}/>
  </div>
  <div class="my-3 mx-3">
  <label for="exampleFormControlTextarea1" className="form-label ln"> Message</label><br></br>
  <textarea class="form-control  p-5"  style ={{border: '2px solid rgb(31, 81, 255) ',width:'70%',display:'inline-block'}} id="exampleFormControlTextarea1" rows="3"value={text} onChange={(e)=>{settext(e.target.value)}}></textarea>
</div >
<div className="" style={{fontFamily:'Franklin Gothic Medium	',display:"flex",alignItems:'flex-start',marginLeft:'22%'}} >
 
  <button type="submit" className="btn btn-large btn-primary bb" onClick={show}>SUBMIT</button>
</div>
</form>




 

  </div>
</div>
</div>


   </>

    )
}
export default Touch;