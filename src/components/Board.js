import { useState, useEffect } from 'react';
import Squre from "./Squre"
export default function Board() {
    const [squares, setSquares] = useState(Array(9).fill(null));
    const [winner, setwinner] = useState(null);
    const [history, sethistory] = useState([]);
    useEffect(() => {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                setwinner(squares[a]);
            }
        }
    }, [squares])
    function handleSqureClick(position) {
        if (!winner && !squares[position]) {
            const nextSquares = squares.slice();
            var nov = squares.filter(word => word != null).length;
            if (nov % 2 === 0) {
                nextSquares[position] = "X";
            }
            else {
                nextSquares[position] = "O";
            }
            setSquares(nextSquares);
            var numberofvalues = squares.filter(word => word != null).length;
            const newHistory = history.slice(0, numberofvalues)
            const newRecord = { id: newHistory.length + 1, nextSquares }
            sethistory(newHistory.concat(newRecord))
        }
    }
    function handlePlayAgainClick() {
        setSquares(Array(9).fill(null))
        setwinner(null)
        sethistory([])
    }
    function handleActionClick(id) {
        setSquares(history[id - 1].nextSquares)
        // setrewriteHistory(true)
        setwinner(null)
    }
    return <div>
        {winner &&
            <div className='winner'>WINNER IS: {winner} <button className='play-again' onClick={handlePlayAgainClick}>Play Again</button></div>
        }
        <div className='squre-row'>
            <Squre value={squares[0]} handleSqureClick={() => handleSqureClick(0)} />
            <Squre value={squares[1]} handleSqureClick={() => handleSqureClick(1)} />
            <Squre value={squares[2]} handleSqureClick={() => handleSqureClick(2)} />
        </div>
        <div className='squre-row'>
            <Squre value={squares[3]} handleSqureClick={() => handleSqureClick(3)} />
            <Squre value={squares[4]} handleSqureClick={() => handleSqureClick(4)} />
            <Squre value={squares[5]} handleSqureClick={() => handleSqureClick(5)} />
        </div>
        <div className='squre-row'>
            <Squre value={squares[6]} handleSqureClick={() => handleSqureClick(6)} />
            <Squre value={squares[7]} handleSqureClick={() => handleSqureClick(7)} />
            <Squre value={squares[8]} handleSqureClick={() => handleSqureClick(8)} />
        </div>
        <div className='history'><div onClick={handlePlayAgainClick}>Begining Poistion</div>{history.map((move) => <div key={move.id} onClick={() => handleActionClick(move.id)}>Action Number #{move.id}</div>)}</div>
    </div>;
}