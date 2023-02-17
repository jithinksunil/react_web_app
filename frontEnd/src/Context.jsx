import { createContext, useState } from "react";

export const MyContext = createContext(null);
export default function MyProvider({children}){
    const [loggedIn,setLoggedIn] = useState(false);
    const [adminLoggedIn,setAdminLoggedIn]=useState(false)
    return(
      <MyContext.Provider value={{loggedIn,setLoggedIn,adminLoggedIn,setAdminLoggedIn}}>
        {children}
      </MyContext.Provider>
    )
}
