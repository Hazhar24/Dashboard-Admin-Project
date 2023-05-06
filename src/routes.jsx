import Home from "./pages/Home/Home"
import UserList from "./pages/Users/UserList"
import NewUser from "./pages/NewUser/NewUser"
import Products from "./pages/Products/Products"

let Routes = [
     {path:'/' , element:<Home />},
     {path:'/users' , element:<UserList />},
     {path:'/NewUser' , element:<NewUser />},
     {path:'/Products' , element:<Products />},
]


export default Routes