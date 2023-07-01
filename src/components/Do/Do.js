import './Do.css';

function Do({toDo, handleClick}) {
  return (
    <div className="bullet">
      { toDo }
      <button 
        id='delete-to-do'
        onClick={handleClick}
      >
        X
      </button>
  </div>
  );
}

export default Do;