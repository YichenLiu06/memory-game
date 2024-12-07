import './Header.css'

let highScore = 0

function Header({handleClick, score}){
  highScore = Math.max(highScore, score);
  return (
    <header>
      Welcome to the Memory Game!
      <div className='score'>
        <div>Score: {score}</div>
        <div>High Score: {highScore}</div>
      </div>
      <button className='reset-button' onClick={handleClick}>Reset Game</button>
    </header>
  );
}

export default Header