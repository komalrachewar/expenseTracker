import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowExpense from './components/ShowExpense'
import AddExpense from './components/AddExpense';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShowExpense/>}/>
          <Route path='/add' element={<AddExpense/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
