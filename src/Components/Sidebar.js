import SidebarItem from "./SidebarItem";
import items from '../data/sidebar.json'


// import Home from "../pages/Home";
import ViewUpdateRsrc from "../pages/ResourceMgmt/ViewUpdateRsrc";
// import CreateResource from "../pages/ResourceMgmt/CreateResource";
// import SetUpRsrcAvil from "../pages/ResourceMgmt/SetUpRsrcAvil";
// import ViewInActRsrc from "../pages/ResourceMgmt/ViewInActRsrc";



export default function Sidebar() {
    return (
        <>
            <div className="main">
                <div className="sidebar">
                    {items.map((item, index) => <SidebarItem key={index} item={item} />)}
                </div>
                <div>
                    {/* <Home/> */}
                    {/* <CreateResource/> */}
                    {/* <SetUpRsrcAvil/> */}
                    {/* <ViewInActRsrc/> */}
                    <ViewUpdateRsrc/>
                    
                </div>

            </div>


        </>

    )
}