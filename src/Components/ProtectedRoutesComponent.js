
import { Outlet, Navigate} from "react-router-dom";
import UserChat from "./Users/Chat/UserChat";
import { ROUTES } from "../Constent";

const ProtectedRoutesComponent = ({admin})=>{

    if(admin){
        let adminAuth =false;
        return adminAuth? <Outlet/> : <Navigate to ={ROUTES.LOGIN}/>
    }else{
        let isUserAuth = true;
        return isUserAuth ? <><UserChat/> <Outlet/> </> : <Navigate to={ROUTES.LOGIN}/> ;

    }
    
    
}


export default ProtectedRoutesComponent;