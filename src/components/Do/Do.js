import './Do.css';

function Do({toDo, handleClick}) {
  return (
    <div className="bullet">
      <p>
        { toDo }
      </p>
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
