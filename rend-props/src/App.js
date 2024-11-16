import './App.css';
import Goku from './components/players/Goku';
import Vegeta from './components/players/Vegeta';

function App() {
  return (
    <div className="container text-center ">
      <h1>Les props de rendu dans react js</h1>

      <div className="row">
        <Goku
          name={() => {
            return 'Goku';
          }}
        />
        <Vegeta
          render={saiyan => {
            return saiyan && 'Vegeta';
          }}
        />
      </div>
    </div>
  );
}

export default App;
