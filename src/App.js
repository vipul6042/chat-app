// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Pusher from "pusher-js";
// import Sidebar from "./sidebar";
// import Chat from "./Chat";
// import LoginControl from "./login_control";
// import "./App.css";
// import axios  from "./axios";

// function App() {
//   const [message,setMessage]=useState([]);
//   const [user, setUser] = useState(null);

//   const handleLogin = (username) => {
//     setUser(username);
//   };
//   useEffect(()=>{
//     axios.get('/message/sync')
//       .then(Response=>{
//         setMessage(Response.data);
//       })
//   },[])

//   useEffect(()=>{
//     const pusher = new Pusher('5a6593e40562288a67dc', {
//       cluster: 'ap2'
//     });
  
//     const channel = pusher.subscribe('messages');
//     channel.bind('inserted', function(newMessage) {
//       // alert(JSON.stringify(newMessage));
//       setMessage([...message,newMessage])
//     });
//     return()=>{
//       channel.unbind_all();
//       channel.unsubscribe()
//     }

//   },[message])

//   console.log(message);

//   return (
//     <div className="app">
//       <div className="app_body">
//         <BrowserRouter>
//           <Routes>
//             <Route path='/login' element={<LoginControl/>}/>
//           </Routes>
//         </BrowserRouter>
//       {/* {user ? (
//         <>
//         <Chat username={user} />
//         <Sidebar /></>
//       ) : (
//         <LoginControl username={user}/>
//       )}

        
//         <Chat messages={message}/> */}
//       </div>
//     </div>
//   );
// }

// export default App;
import React, { useEffect, useState } from "react";
import Pusher from "pusher-js";
import Sidebar from "./sidebar";
import Chat from "./Chat";
import "./App.css";
import axios  from "./axios";

function App() {
  const [message,setMessage]=useState([]);

  useEffect(()=>{
    axios.get('/message/sync')
      .then(Response=>{
        setMessage(Response.data);
      })
  },[])

  useEffect(()=>{
    const pusher = new Pusher('5a6593e40562288a67dc', {
      cluster: 'ap2'
    });
  
    const channel = pusher.subscribe('messages');
    channel.bind('inserted', function(newMessage) {
      // alert(JSON.stringify(newMessage));
      setMessage([...message,newMessage])
    });
    return()=>{
      channel.unbind_all();
      channel.unsubscribe()
    }

  },[message])

  console.log(message);

  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        <Chat messages={message}/>
      </div>
    </div>
  );
}

export default App;
