import one from "../assets/images/perfumy-1.jpg"
import two from "../assets/images/perfumy-2.jpg"
import three from "../assets/images/perfumy-3.jpg"

// product component
function Product(){
  return(
    <div class="products">
        
        <div class="box">
            <img src={one} alt="" width="220px" height="300px"></img>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, libero!</p>
        </div>

        <div class="box">
            <img src={two} alt="" width="220px" height="300px"></img>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, libero!</p>
        </div>

        <div class="box">
            <img src={three} alt="" width="220px" height="300px"></img>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, libero!</p>
        </div>
    </div>


  )
}
export default Product
