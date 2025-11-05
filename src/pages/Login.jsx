import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUser] = useState("");
  const [password, setPass] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("https://api-notas-frbh.onrender.com", { username, password });
      if (res.data.success) navigate("/notes");
      else alert("Usuario o contraseña incorrectos");
    } catch {
      alert("Error al conectar con el servidor");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>📝 Iniciar Sesión</h2>
        <input
          style={styles.input}
          placeholder="Usuario"
          onChange={e => setUser(e.target.value)}
        />
        <input
          style={styles.input}
          type="password"
          placeholder="Contraseña"
          onChange={e => setPass(e.target.value)}
        />
        <button style={styles.button} onClick={handleLogin}>
          Entrar
        </button>
      </div>
    </div>
  );
}

// 🎨 Estilos en JS
const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #4c6ef5, #7950f2)",
    fontFamily: "Arial, sans-serif",
  },
  card: {
    backgroundColor: "#fff",
    padding: "40px 60px",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
    textAlign: "center",
    width: "300px",
  },
  title: {
    marginBottom: "20px",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
  },
  button: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#4c6ef5",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background 0.3s ease",
  },
};

// Hover efecto
styles.button[":hover"] = {
  backgroundColor: "#364fc7",
};

export default Login;
