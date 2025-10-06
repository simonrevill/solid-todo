function App() {
  return (
    <>
      <h1>Solid Todo</h1>
      <form aria-label="todo-form">
        <label for="todo-input">Enter a todo</label>
        <input type="text" id="todo-input" placeholder="e.g. walk the dog" />
        <button type="submit">Add</button>
      </form>
    </>
  );
}

export default App;
