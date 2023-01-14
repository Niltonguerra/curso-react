import './App.css';

import Helloworld from './components/helloworld';

function App() {
  const nomes = 'json';

  return (
    <div className="App">


      <h1>olá react</h1>
      <p>olá, {nomes}</p>
      <Helloworld/>
      </div>
  );
}

export default App;
