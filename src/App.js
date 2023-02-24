import './App.css';
import Board from './components/Board.js'

function App() {
  return (
    <div>
      <div className='game-title'>T-T-T game built by Pu Yang</div>
      <div className="board">
        <Board />
      </div>
    </div>
  );
}

export default App;
