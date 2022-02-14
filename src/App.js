
import{Route, Routes} from 'react-router-dom';
import AllMeetups from './Pages/AllMeetups';
 import NewMeetup from './Pages/NewMeetup';
 import Favorites from './Pages/Favorites';
 import Layout from './Components/layout/Layout';


function App() {
  return (
    
    <Layout>      
     <Routes>
      
      <Route path='/allmeetups'  element={<AllMeetups/>}>
        </Route>
              <Route path='/newmeetup'element={<NewMeetup/>}>
                </Route>
      <Route path='/favorites'element={  <Favorites/>}>
      </Route>
    </Routes>
    </Layout>

  );
}

export default App;

