import { Outlet } from "react-router-dom";
import UserChat from "./UserChat";

import (Outlet)

const RouteWithUserChatCompnent = ()=>{
    return (
        <>
            <UserChat/>
            <Outlet/>
        </>
    )
}

export default RouteWithUserChatCompnent;