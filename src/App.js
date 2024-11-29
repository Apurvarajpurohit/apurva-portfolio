import './App.css';
import React, { useState } from 'react';
function App() {
  const [value, setValue] = useState('');
  const [selectedRow, setSelectedRow] = useState(0)
  const [player, setPlayer] = useState('player1');
  const [startGame, setStartGame] = useState(false)
  console.log(player);
  const handleClick = (key) => {
    setSelectedRow(key)
console.log(selectedRow)
    if (startGame === true) {
      if (player === 'player1') {
        setValue('x')
      }
      else {
        setValue('0')
      }
    }
  }
  return (
    <div style={{
      justifyContent: 'center',
      textAlign: 'center',
      marginLeft: 'auto',
      marginRight: 'auto',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: 40,
    }}>
      <h1 style={{
        color: 'red',
        marginBottom: 40
      }}>
        Hey, Let's Start the Game!
      </h1>
      <table style={{ width: '300px', marginLeft: 'auto', marginRight: 'auto', borderCollapse: 'collapse' }}>

        <tr style={{ border: '1px solid black' }}>
          <td key={1}
            onClick={() => handleClick('1')}
            style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer' }}>{value} </td>
          <td onClick={() => handleClick('2')} style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer' }}> {value} </td>
          <td onClick={() => handleClick('3')} style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer' }}> {value} </td>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <td onClick={() => handleClick("4")} style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer' }}> {value} </td>
          <td onClick={() => handleClick("5")} style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer' }}> {value} </td>
          <td onClick={() => handleClick("6")} style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer' }}> {value}</td>
        </tr>
        <tr style={{ border: '1px solid black' }}>
          <td onClick={() => handleClick("7")} style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer' }}> {value} </td>
          <td onClick={() => handleClick("8")} style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer' }}>{value} </td>
          <td onClick={() => handleClick("9")} style={{ width: '40px', height: '40px', border: '1px solid black', cursor: 'pointer' }}> {value} </td>
        </tr>
      </table>
      <div style={{
        marginTop: 40, display: 'flex', flexDirection: 'row', justifyContent: 'space-around', width: 300,

      }}>
        <button
          onClick={() => setStartGame(true)}
          style={{ width: '80px', height: '30px', backgroundColor: 'red', color: '#ffffff', borderRadius: '8px', fontSize: 16, fontWeight: 700, border: 'none' }}>Start</button>
        <button onClick={() => setStartGame(false)}
          style={{ width: '80px', height: '30px', backgroundColor: 'red', color: '#ffffff', borderRadius: '8px', fontSize: 16, fontWeight: 700, border: 'none' }}>Pause</button>
        <button
          onClick={() => setValue('')}
          style={{ width: '80px', height: '30px', backgroundColor: 'red', color: '#ffffff', borderRadius: '8px', fontSize: 16, fontWeight: 700, border: 'none' }}>Restart</button>
      </div>
      <div style={{ marginTop: 40, width: 200, justifyContent: 'space-between' }}>
        <h2 style={{ color: 'red', fontWeight: 400, cursor: 'pointer' }}
          onClick={() => setPlayer('player1')}
        >Player 1</h2>
        <h2 style={{ color: 'red', fontWeight: 400, cursor: 'pointer' }}
          onClick={() => setPlayer('player2')}>Player 2</h2>
      </div>

    </div>
  );
}

export default App;
