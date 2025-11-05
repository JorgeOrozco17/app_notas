import { useEffect, useState } from "react";
import axios from "axios";
import NoteItem from "../components/NoteItem";

function Notes() {
  const [notes, setNotes] = useState([]);
  const [text, setText] = useState("");
  const API = "https://api-notas-frbh.onrender.com"; // tu API

  useEffect(() => {
    axios.get(`${API}/notes`).then(res => setNotes(res.data));
  }, []);

  const addNote = async () => {
    if (!text.trim()) return;
    const res = await axios.post(`${API}/notes`, { text });
    setNotes([...notes, res.data]);
    setText("");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>🗒️ Notas</h2>

        <div style={styles.form}>
          <input
            style={styles.input}
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Escribe una nota..."
          />
          <button style={styles.button} onClick={addNote}>Agregar</button>
        </div>

        <ul style={styles.list}>
          {notes.map(note => (
            <NoteItem key={note.id} note={note} />
          ))}
        </ul>
      </div>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #4c6ef5, #7950f2)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    background: "#fff",
    padding: "40px 50px",
    borderRadius: "15px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    width: "400px",
    textAlign: "center",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  form: {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4c6ef5",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    textAlign: "left",
  },
};

export default Notes;
