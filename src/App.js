import './App.css';
import Card from './components/Card';
import Intervalo from './components/Intervalo';

function App() {
  return (
    <div className="App">
      <h1>Exercicio React-Redux (Simples)</h1>
      <div className='linha'>
        <Intervalo>X</Intervalo>
      </div>
      <div className='linha'>
        <Card title="Card 2">Y</Card>
      </div>
    </div>
  );
}

export default App;
