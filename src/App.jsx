import { useState, useEffect } from "react";
import "../src/style/style.css";

import titulo from "../src/assets/images/titulo.png";

import { db } from "./firebase";
import { ref, set, get } from "firebase/database";

import { itens } from "./data/itens";
import CardPresente from "./components/CardPresente";

import localizacao from "../src/assets/images/localizacao.png";
import ModalConfirm from "./components/ModalConfirm";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ModalRifa from "./components/ModalRifa";

export default function App() {
  const [marcados, setMarcados] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [item, setItem] = useState({});
  const [openRifa, setOpenRifa] = useState(false);

  useEffect(() => {
    carregarItens();
  }, []);

  async function carregarItens() {
    const snapshot = await get(ref(db, "presentes"));

    if (snapshot.exists()) {
      setMarcados(Object.keys(snapshot.val()));
    }
  }

  async function marcarItem(id) {
    if (marcados.includes(id)) return;

    await set(ref(db, "presentes/" + id), {
      escolhido: true,
    });

    setMarcados((prev) => [...prev, id]);
  }

  function abrirLink(link) {
    window.open(link, "_blank");
  }

  const categorias = [...new Set(itens.map((item) => item.categoria))];

  return (
    <Box
      className="container"
      sx={{ padding: { xs: "10px", md: "20px" }, overflowX: "hidden" }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          padding: { xs: "10px 0", md: "20px 0" },
        }}
      >
        <Box
          component="img"
          src={titulo}
          alt="titulo"
          sx={{
            width: { xs: "90vw", sm: "70vw", md: "60vw", lg: "50vw" },
            maxWidth: "800px",
            height: "auto",
          }}
        />
      </Box>

      <Box
        sx={{ textAlign: "center", margin: "0 auto", maxWidth: "900px", px: 2 }}
      >
        <Typography
          sx={{
            width: { xs: "100%", md: "85%" },
            fontSize: { xs: "18px", md: "48px" },
            lineHeight: { xs: 1.4, md: 1.1 },
            /* fontWeight: { xs: 300, md: 200 }, */
            textAlign: { xs: "center", md: "justify" },
            marginBottom: { xs: "30px", md: "5vh" },
            /* fontFamily: '"IBM Plex Serif", serif', */
            fontFamily: "cursive",
            marginInline: "auto",
            color: "#966e15",
          }}
        >
          Estamos muito felizes em compartilhar com vocês essa nova etapa da
          nossa vida. Para quem quiser nos ajudar a montar e deixar a casa com a
          nossa cara, preparamos uma listinha com algumas coisas que vão fazer
          toda a diferença no nosso novo cantinho.
        </Typography>

        <Box
          sx={{
            textAlign: "left",
            mb: 4,
            width: { xs: "100%", md: "85%" },
            marginInline: "auto",
            px: { xs: 2, md: 0 },
          }}
        >
          <Typography
            sx={{
              fontWeight: 800,
              mb: 3,
              fontSize: { xs: "22px", md: "36px" },
              fontFamily: '"IBM Plex Serif", serif',
              color: "#333",
              textAlign: "center",
            }}
          >
            Como funciona:
          </Typography>

          {/* 🔥 CARD ENVOLVENDO TUDO */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(6px)",
              borderRadius: "16px",
              padding: { xs: "16px", md: "28px" },
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              border: "1px solid rgba(184, 134, 11, 0.2)",
            }}
          >
            {[
              {
                t: "1. Escolha com carinho:",
                d: "Navegue pela nossa lista e clique em 'Ver Produto' para conhecer os detalhes de cada item.",
              },
              {
                t: "2. Reserve seu presente:",
                d: [
                  "Quando decidir qual item deseja nos dar, clique em 'Confirmar meu presente'. Isso evita presentes repetidos!",
                ],
              },
              {
                t: "3. Entrega direta:",
                d: "Se você quiser facilitar e já enviar o presente direto para o nosso novo endereço, os dados de entrega estão logo abaixo.",
              },
              {
                t: "4. Praticidade com Pix:",
                d: "Se quiser nos ajudar de forma mais simples, também deixamos nossa chave Pix disponível.",
              },
              {
                t: "5. Você também terá chance de ser presenteado!",
                d: [
                  "Como forma de agradecer todo esse carinho, criamos um sorteio especial.",
                  "Ao confirmar seu presente, você poderá escolher alguns números para participar. A quantidade de números varia de acordo com o valor do presente — quanto maior o presente, maiores são as suas chances!",
                  "No final, faremos o sorteio e alguém será presenteado também 💛.",
                ],
              },
            ].map((step, index) => (
              <Box key={index} sx={{ mb: 3 }}>
                <Typography
                  sx={{
                    fontWeight: 400,
                    fontSize: { xs: "18px", md: "24px" },
                    mb: 0.5,
                    color: "#966e15",
                    textAlign: "left",
                  }}
                >
                  {step.t}
                </Typography>

                {Array.isArray(step.d) ? (
                  step.d.map((paragrafo, i) => (
                    <Typography
                      key={i}
                      sx={{
                        fontSize: { xs: "16px", md: "28px" },
                        lineHeight: 1.6,
                        fontWeight: 200,
                        fontFamily: '"IBM Plex Serif", serif',
                        color: "#555",
                        mb: i === step.d.length - 1 ? 0 : 1.5,
                        textAlign: "justify",
                      }}
                    >
                      {i === 1 ? (
                        <>
                          Ao confirmar seu presente, você poderá escolher alguns
                          números para participar. A quantidade de números varia
                          de acordo com o valor do presente — quanto maior o
                          presente, maiores são as suas chances!
                        </>
                      ) : (
                        paragrafo
                      )}
                    </Typography>
                  ))
                ) : (
                  <Typography
                    sx={{
                      fontSize: { xs: "16px", md: "28px" },
                      lineHeight: 1.5,
                      fontWeight: 200,
                      fontFamily: '"IBM Plex Serif", serif',
                      color: "#555",
                    }}
                  >
                    {step.d}
                  </Typography>
                )}
              </Box>
            ))}
          </Box>
          {/* 🔥 CARD EXPLICACAO DA RIFA */}
          <Box
            sx={{
              background: "rgba(255,255,255,0.7)",
              backdropFilter: "blur(6px)",
              borderRadius: "16px",
              padding: { xs: "16px", md: "28px" },
              boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              border: "1px solid rgba(184, 134, 11, 0.2)",
              mt: 5,
            }}
          >
            <Typography
              sx={{
                fontWeight: 800,
                mb: 3,
                fontSize: { xs: "22px", md: "36px" },
                fontFamily: '"IBM Plex Serif", serif',
                color: "#333",
                textAlign: "center",
              }}
            >
              O sorteio:
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: "18px", md: "24px" },
                mb: 0.5,
                color: "#966e15",
                textAlign: "left",
              }}
            >
              1. Quantos números você tem direito?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "28px" },
                lineHeight: 1.5,
                fontWeight: 200,
                fontFamily: '"IBM Plex Serif", serif',
                color: "#555",
                mb: 1.5,
              }}
            >
              Cada R$50,00 vale 1 número do sorteio. Então se voce escolhe um
              produto que custa R$120,00 por exemplo, você terá direito a 2
              números.
            </Typography>
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: { xs: "18px", md: "24px" },
                mb: 0.5,
                color: "#966e15",
                textAlign: "left",
              }}
            >
              1. Qual é o prêmio?
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "16px", md: "28px" },
                lineHeight: 1.5,
                fontWeight: 200,
                fontFamily: '"IBM Plex Serif", serif',
                color: "#555",
              }}
            >
              A decidir...
            </Typography>
          </Box>
        </Box>

        <Typography
          sx={{
            fontWeight: 600,
            fontFamily: "cursive",
            fontSize: { xs: "18px", md: "26px" },
            mt: 4,
            color: "#666",
          }}
        >
          Desde já, nosso coração é só gratidão por cada gesto de carinho.
        </Typography>

        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            mt: 10,
          }}
        >
          <Box
            component="img"
            src={localizacao}
            alt="localizacao"
            sx={{
              width: { xs: "100%", md: "70%" },
              maxWidth: "500px",
              height: "auto",
            }}
          />
        </Box>
      </Box>

      <Divider
        sx={{
          width: "70%",
          margin: "40px auto",
          borderColor: "rgba(184, 134, 11, 0.3)",
          borderWidth: "1px",
          mb: { xs: "3vh", md: "10vh" },
        }}
      />

      <Typography
        sx={{
          fontFamily: '"IBM Plex Serif", serif',
          fontSize: { xs: "36px", md: "64px" },
          mt: 4,
          color: "#966e15",
          fontWeight: 400,
          textAlign: "center",
        }}
      >
        Lista de Presentes
      </Typography>

      {categorias.map((categoria) => (
        <Box key={categoria} sx={{ mt: 2 }}>
          <Typography
            sx={{
              fontFamily: '"IBM Plex Serif", serif',
              textAlign: "center",
              fontSize: { xs: "32px", md: "48px" },
              fontWeight: "bold",
              mb: 3,
              color: "#999898",
            }}
          >
            {categoria}
          </Typography>

          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginInline: "auto",
              width: "100%",
              maxWidth: "1200px",
              gap: { xs: "10px", md: "20px" },
              px: { xs: 1, md: 2 },
            }}
          >
            {itens
              .filter((item) => item.categoria === categoria)
              .map((item) => (
                <CardPresente
                  key={item.id}
                  item={item}
                  marcado={marcados.includes(item.id)}
                  abrirLink={abrirLink}
                  setOpenModal={setOpenModal}
                  setItem={setItem}
                />
              ))}
          </Box>

          <Divider
            sx={{
              width: "70%",
              margin: "40px auto",
              borderColor: "rgba(184, 134, 11, 0.3)",
            }}
          />
        </Box>
      ))}

      <ModalConfirm
        openModal={openModal}
        setOpenModal={setOpenModal}
        item={item}
        marcarItem={marcarItem}
        setOpenRifa={setOpenRifa}
      />

      <ModalRifa
        open={openRifa}
        onClose={() => setOpenRifa(false)}
        item={item}
        marcarItem={marcarItem}
      />
    </Box>
  );
}
