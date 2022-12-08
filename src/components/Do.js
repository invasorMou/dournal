function Do({toDo, handleClick}) {
  return (
    <li>
      { toDo }
      <button 
        id='delete-to-do'
        onClick={handleClick}
      >
        X
      </button>
  </li>
  );
}

export default Do;