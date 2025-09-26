
import './App.css'
import IssuesManagement from './components/IssuesManagement/IssuesManagement'
import Footer from './components/Footer/Footer'


import Navbar from './components/Navbar'
import { Suspense } from 'react'


const fetchIssues = async () => {
  const res = await fetch('/data.json')
  return res.json()
}
  
const fetchPromise = fetchIssues();

function App() {
  
  return (
    <>
      <Navbar></Navbar>
      
    


      <Suspense fallback={"Loading...."}>
         <IssuesManagement fetchPromise={fetchPromise}></IssuesManagement>
      </Suspense>
      
      <Footer></Footer>
     
    </>
  )
}

export default App
