function NoteItem({ note }) {
  return (
    <li style={styles.item}>
      <span>{note.text}</span>
      <small style={styles.date}>
        {new Date(note.created_at).toLocaleString()}
      </small>
    </li>
  );
}

const styles = {
  item: {
    background: "#f1f3f5",
    padding: "10px",
    borderRadius: "8px",
    marginBottom: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "4px",
  },
  date: {
    fontSize: "12px",
    color: "#666",
    textAlign: "right",
  },
};

export default NoteItem;
