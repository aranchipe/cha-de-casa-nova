import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  display: "flex",
};

function ModalConfirm({ openModal, setOpenModal, item, marcarItem }) {
  const handleClose = () => setOpenModal(false);

  return (
    <Box>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, gap: "20px", flexDirection: "column" }}>
          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            Tem certeza que deseja dar {item.nome}?
          </Typography>
          <Typography
            sx={{
              fontSize: "18px",
              textAlign: "center",
            }}
          >
            OBS: Os aparelhos elétricos devem ser de 110V
          </Typography>
          <Grid
            container
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Grid item md={5} lg={5}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  background: "rgb(18, 203, 8)",
                  color: "white",
                  ":hover": { background: "green" },
                }}
                onClick={() => {
                  marcarItem(item.id);
                  handleClose();
                }}
              >
                Sim
              </Button>
            </Grid>
            <Grid item md={5} lg={5}>
              <Button
                variant="contained"
                fullWidth
                type="submit"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  background: "rgb(203, 6, 6)",
                  ":hover": { background: "rgb(174, 5, 5)" },
                }}
                onClick={handleClose}
              >
                Não
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </Box>
  );
}

export default ModalConfirm;
