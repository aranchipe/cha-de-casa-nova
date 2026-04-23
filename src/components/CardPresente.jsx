import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function CardPresente({
  item,
  marcado,
  abrirLink,
  setOpenModal,
  setItem,
}) {
  return (
    <Box
      className="card"
      sx={{
        background: "white",
        borderRadius: "14px",
        padding: { xs: "8px", md: "15px" },
        textAlign: "center",
        boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
        transition: "all .25s ease",
        // Cálculo para 3 colunas no mobile e 4 no desktop
        flex: {
          xs: "0 0 calc(33.33% - 7px)",
          sm: "0 0 calc(25% - 15px)",
          md: "0 0 calc(25% - 15px)",
        },
        minWidth: { xs: "0", md: "250px" }, // Removido o unset/minWidth no mobile
        // Altura mínima para manter os cards alinhados no mobile
        /* minHeight: { xs: "230px", md: "unset" }, */
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        "&:hover": {
          transform: "translateY(-6px)",
          boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
        },
      }}
    >
      {/* AREA DA IMAGEM */}
      <Box sx={{ position: "relative", width: "100%" }}>
        <Box
          component="img"
          src={item.imagem}
          alt={item.nome}
          sx={{
            width: "100%",
            height: { xs: "70px", md: "180px" },
            objectFit: "contain", // Garante que o produto apareça inteiro
            borderRadius: "10px",
            backgroundColor: "#fff",
          }}
        />
        {marcado && (
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: { xs: "30px", md: "70px" },
              color: "white",
              background: "rgba(0,0,0,0.55)",
              borderRadius: "10px",
              zIndex: 1,
            }}
          >
            ✓
          </Box>
        )}
      </Box>

      {/* NOME DO PRODUTO */}
      <Typography
        sx={{
          fontWeight: 700,
          margin: { xs: "6px 0", md: "12px 0" },
          fontSize: { xs: "10px", md: "16px" },
          lineHeight: 1.1,
          height: { xs: "24px", md: "auto" },
          overflow: "hidden",
          display: "-webkit-box",
          WebkitLineClamp: 2,
          WebkitBoxOrient: "vertical",
          color: "#333",
        }}
      >
        {item.nome}
      </Typography>

      {/* AREA DE BOTÕES */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: { xs: "5px", md: "8px" },
          width: "100%",
        }}
      >
        <Button
          fullWidth
          variant="contained"
          onClick={() => abrirLink(item.link)}
          sx={{
            backgroundColor: "#ececec",
            color: "#333",
            fontSize: { xs: "9px", md: "14px" },
            padding: { xs: "4px 2px", md: "8px" },
            textTransform: "none",
            borderRadius: "8px",
            boxShadow: "none",
            "&:hover": { backgroundColor: "#ddd", boxShadow: "none" },
          }}
        >
          Ver Produto
        </Button>

        <Button
          fullWidth
          variant="contained"
          disabled={marcado}
          onClick={() => {
            setItem(item);
            setOpenModal(true);
          }}
          sx={{
            backgroundColor: "#966e15",
            color: "white",
            fontSize: { xs: "9px", md: "12px" },
            padding: { xs: "6px 4px", md: "10px" },
            textTransform: "none",
            borderRadius: "8px",
            lineHeight: 1,
            minHeight: { xs: "34px", md: "auto" },
            "&:hover": { backgroundColor: "#6f4e08" },
            "&:disabled": {
              backgroundColor: "#bbb",
              color: "#f5f5f5",
            },
          }}
        >
          Confirmar meu presente
        </Button>
      </Box>
    </Box>
  );
}
