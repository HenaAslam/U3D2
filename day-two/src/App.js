import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './Components/MyNav';
import Welcome from './Components/Welcome';
import AllTheBooks from './Components/AllTheBooks';
import MyFooter from './Components/MyFooter';

import fantasy from '../src/data/books/fantasy.json'
import BookList from './Components/BookList';

function App() {
  return (
    <div>
      <MyNav />
      <Welcome />
     
      <BookList listOfBooks={fantasy} />
      <AllTheBooks />
   
      <MyFooter />
    </div>
  );
}

export default App;
