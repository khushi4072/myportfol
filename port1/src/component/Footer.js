import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Footer(){
    const navi = useNavigate()

   
    
    const move2 = ()=>{
        navi('/contact')

    }
    return(
        <>
   <div className="container-fluid h2  pt-5  ">
    <h5> Thankyou for visit 
        Have a great day !
    </h5>
   <Link to="https://www.rammaheshwari.com/" target="_blank"><i class="fa-brands mx-3 fa-instagram mx-4"></i></Link>

   <Link to="https://www.rammaheshwari.com/" target="_blank"><i class="fa-brands mx-3 fa-linkedin-in mx-4"></i></Link>
    

  <i class="fa-solid fa-user mx-4" onClick={move2}></i>
    <hr className="si"></hr>
    <div className="mt-3">
    <h5 className="">By - Khushi Singh</h5>
    <h6>  khushi ,MERN Web Developer building the MERN Websites and Web Applications that leads to the success of the overall product</h6>
</div>
   


   </div>
   </>

    )
}


export default Footer;