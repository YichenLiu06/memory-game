import './Card.css'

function Card({color, clicks, handleClick}){
  return (
    <div className="card" style={{backgroundColor: color}} onClick={() => handleClick(color, clicks)}>
    </div>
  );
}

export default Card