import { useEffect, useState } from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Modal from "@mui/material/Modal";
import { db } from "../firebase";
import { ref, get, set } from "firebase/database";
import CircularProgress from "@mui/material/CircularProgress";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "500px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 3,
};

export default function ModalRifa({ open, onClose, item, marcarItem }) {
  const [numeros, setNumeros] = useState([]);
  const [selecionados, setSelecionados] = useState([]);
  const [nome, setNome] = useState("");
  const [loading, setLoading] = useState(false);

  const quantidade = Math.max(1, Math.floor(item.preco / 50));

  useEffect(() => {
    if (open) {
      carregarNumeros();
      setSelecionados([]);
      setNome("");
    }
  }, [open]);

  async function carregarNumeros() {
    const snapshot = await get(ref(db, "rifa"));
    const ocupados = snapshot.exists() ? Object.keys(snapshot.val()) : [];

    const lista = [];
    for (let i = 1; i <= 100; i++) {
      lista.push({
        numero: i,
        ocupado: ocupados.includes(`numero_${i}`),
      });
    }

    setNumeros(lista);
  }

  function toggleNumero(n) {
    if (n.ocupado) return;

    const jaSelecionado = selecionados.includes(n.numero);

    if (jaSelecionado) {
      setSelecionados(selecionados.filter((num) => num !== n.numero));
    } else {
      if (selecionados.length >= quantidade) return;
      setSelecionados([...selecionados, n.numero]);
    }
  }

  async function confirmar() {
    if (nome.trim().length < 3) {
      alert("Digite um nome válido");
      return;
    }

    setLoading(true);

    try {
      for (let num of selecionados) {
        await set(ref(db, `rifa/numero_${num}`), {
          itemId: item.id,
          nome: nome,
        });
      }

      await marcarItem(item.id);
      onClose();
    } catch (error) {
      console.error(error);
      alert("Erro ao salvar, tente novamente");
    } finally {
      setLoading(false);
    }
  }

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={style}>
        <Typography sx={{ mb: 2, textAlign: "center" }}>
          Você tem direito a escolher {quantidade} números
        </Typography>

        {/* INPUT NOME */}
        <TextField
          fullWidth
          label="Digite seu nome"
          variant="outlined"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          sx={{ mb: 2 }}
        />

        {/* GRID DE NUMEROS */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(5, 1fr)", // celular
              sm: "repeat(7, 1fr)", // tablet pequeno
              md: "repeat(10, 1fr)", // desktop
            },
            gap: "5px",
            mb: 2,
          }}
        >
          {numeros.map((n) => (
            <Box
              key={n.numero}
              onClick={() => toggleNumero(n)}
              sx={{
                padding: "8px",
                textAlign: "center",
                cursor: n.ocupado ? "not-allowed" : "pointer",
                background: n.ocupado
                  ? "#ccc"
                  : selecionados.includes(n.numero)
                    ? "#4caf50"
                    : "#eee",
                color: n.ocupado ? "#666" : "#000",
                borderRadius: "5px",
                fontSize: "12px",
              }}
            >
              {n.numero}
            </Box>
          ))}
        </Box>

        <Button
          fullWidth
          variant="contained"
          disabled={
            loading || selecionados.length !== quantidade || !nome.trim()
          }
          onClick={confirmar}
          sx={{
            display: "flex",
            gap: "10px",
            backgroundColor: "#966e15",
            color: "white",
            "&:hover": {
              backgroundColor: "#6f4e08",
            },
            "&:disabled": {
              backgroundColor: "#776a4e",
              color: "#fff",
            },
          }}
        >
          {loading && <CircularProgress size={20} color="red" />}
          {loading ? "Salvando..." : "Confirmar números"}
        </Button>
      </Box>
    </Modal>
  );
}
