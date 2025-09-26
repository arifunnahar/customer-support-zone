import "./App.css";
import IssuesManagement from "./components/IssuesManagement/IssuesManagement";
import Footer from "./components/Footer/Footer";

import Navbar from "./components/Navbar";
import { Suspense, useEffect, useState } from "react";

function App() {
  
  const [ticket, setTicket] = useState([])
  
  const [count, setCount] = useState([])
  
  const [isComplete, setIsCompleted] = useState ([])



  useEffect(() => {
    const fetchIssues = async () => {
      const res = await fetch("/data.json");
      const data = await res.json();
      setTicket(data)
      
    };
    fetchIssues ()
  }, []);

 
  return (
    <>
      {/* <Navbar></Navbar> */}

      <IssuesManagement ticket={ticket} setTicket={setTicket} count={count} setCount={setCount}></IssuesManagement>

      {/* <Footer></Footer> */}
    </>
  );
}

export default App;
