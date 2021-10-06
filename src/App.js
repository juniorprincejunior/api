import './App.css';

import UserList from './UserList'
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <div className="App">
      <p className='display-3' style={{textAlign:'center', textDecoration:'underline'}}><b><i>Liste des utilisateurs</i></b></p>
      <UserList/>
    </div>
  );
}

export default App;
