import { useState } from 'react';
import "./App.css"
import { Redirect, Route, Routes} from 'react-router-dom';
 import { Switch } from 'react-router-dom';
import Auth from './Components/Auth';
import DashBoard from './Components/DashBoard';
import NoPage from './Components/NoPage';
import StudentProfile from './Components/StudentProfile';
import { StudentDetails } from './Components/Student';
import WelcomePage from './Components/WelcomePage';
import { data } from './Data/data';
import AddStudents from './Components/AddStudents';
import EditStudents from './Components/EditStudents';




function App() {
  const [studentsData, setStudents] = useState(data);
  return (
    <div className="App">
       
    <Switch>
     
      <Route exact path = "/">
      <WelcomePage/>
      </Route>
       
       <Route path="/dashboard">
           <DashBoard/>
       </Route>
 
       <Route path= "/register">
         <Auth/>
       </Route>
 
       <Route path = "/details">
         <StudentDetails 
         studentsData={studentsData} 
         setStudents= {setStudents}/>
       </Route>
 
       <Route path = "/students">
          <Redirect to = "/details"/>
       </Route>
 
       <Route path = "/student/:id">
         <StudentProfile studentsData={studentsData} />
       </Route>
 
       
       <Route path = "/add-data">
         <AddStudents
         studentsData={studentsData} 
         setStudents= {setStudents}
         />
       </Route>
 
       <Route path = "/edit/:id">
         <EditStudents 
         studentsData={studentsData}
         setStudents= {setStudents} />
       </Route>
 
       <Route path = "**">
         <NoPage/>
       </Route>
 
 
 
 
    </Switch>
 
     
     
       
     </div>
  );
}
export default App;