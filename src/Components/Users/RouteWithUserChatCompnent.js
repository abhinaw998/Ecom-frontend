import {Outlet } from "react-router-dom";
import UserChat from "./Chat/UserChat";


const RouteWithUserChatCompnent = ()=>{
    return (
        <>
            <UserChat/>
            <Outlet/>
        </>
    )
}

export default RouteWithUserChatCompnent;