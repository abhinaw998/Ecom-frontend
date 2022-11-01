import { useParams } from "react-router-dom";
const ProductDetailsPage =()=>{
    const {id} = useParams();

    return(
        <div>
            This Product details  page {id}
        </div>
    )
}


export default ProductDetailsPage;