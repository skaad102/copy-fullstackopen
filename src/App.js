import "./App.css";
import Note from "./components/Note";

function App({ notes }) {
  return (
    <div className="App">
      <h1>Notes</h1>
      {/* <ul>
        <li>{notes[0].content}</li>
        <li>{notes[1].content}</li>
        <li>{notes[2].content}</li>
        <li>{notes[3].content}</li>
      </ul> */}
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
    </div>
  );
}


export default App;
