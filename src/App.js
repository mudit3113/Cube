import logo from './logo.svg';
import './App.css';
import { CustomerList } from './Components/CustomerList';
import { CustomerCard } from './Components/CustomerCard';

function App() {
  
  return (
    <>
    <div className="customer-container">
      <div className="customer-list">
      <CustomerList />
      </div>
      <div className='customer-card'>
      <CustomerCard />
      </div>
    </div>
    

    </>

  );
}

export default App;
