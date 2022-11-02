
import { Outlet, Navigate} from "react-router-dom";
import { ROUTES } from "../Constent";

const ProtectedRoutesComponent = ()=>{

    const isAuthenticated = false;


    return isAuthenticated ?  <Outlet/> :<Navigate to={ROUTES.LOGIN}/> ;
}


export default ProtectedRoutesComponent;