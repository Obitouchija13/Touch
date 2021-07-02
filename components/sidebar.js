import React from 'react';


export default function SideBar ({children}){
    return(
    
        <div className="column">
            Opciones:
            <div onClick={toggle1} >
            <Link href="/waiter/mesas">
          <a>MESAS</a>
        </Link>
          </div>
          <div onClick={toggle2}  >
            Box 2
          </div>
          <div onClick={toggle3} >
            Box 3
          </div>
          </div>
        
    )
}