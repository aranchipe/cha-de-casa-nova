import sanduicheira from "../assets/images/sanduicheira.png";
import airfryer from "../assets/images/airfryer.jpg";
import ferro from "../assets/images/ferro.jpg";
import maquinaDeCafe from "../assets/images/maquinaDeCafe.avif";
import toalhas from "../assets/images/toalhas.jpg";
import purificador from "../assets/images/purificadorDeAgua.png";
import potes from "../assets/images/potes.jpg";
import fechadura from "../assets/images/fechadura.webp";
import panelaDePressao from "../assets/images/panelaDePressao.webp";
import tabua from "../assets/images/tabua.webp";
import potesTempero from "../assets/images/potesTempero.jpg";
import panoDePrato from "../assets/images/panoDePrato.jpg";
import peneiras from "../assets/images/peneiras.jpg";
import panelas from "../assets/images/panelas.jpg";
import tabuaDeCorte from "../assets/images/tabuaDeCorte.jpg";
import facas from "../assets/images/facas.jpg";
import processador from "../assets/images/processador.jpg";
import formas from "../assets/images/formas.jpg";
import batedeira from "../assets/images/batedeira.jpg";
import tapetes from "../assets/images/tapetes.jpg";
import torradeira from "../assets/images/torradeira.jpg";

export const itens = [
  {
    id: "ferro",
    nome: "Ferro de Passar",
    imagem: ferro,
    link: "https://www.amazon.com.br/Ferro-Passar-Antiaderente-Oster-GCSTBS5002/dp/B09LNKQYND?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&smid=A1ZZFT5FULY4LN&th=1",
    categoria: "Área de Serviço",
    preco: 85.41,
  },
  {
    id: "sanduicheira",
    nome: "Sanduicheira",
    imagem: sanduicheira,
    link: "https://www.amazon.com.br/Sanduicheira-Master-Grill-Inox-S-20/dp/B084XR9K4X/ref=asc_df_B084XR9K4X?mcid=3c11ddb43c7038c5adcf6f725e020ab9&tag=googleshopp00-20&linkCode=df0&hvadid=709886750320&hvpos=&hvnetw=g&hvrand=10338129930690126670&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198184&hvtargid=pla-928419993816&hvocijid=10338129930690126670-B084XR9K4X-&hvexpln=0&language=pt_BR&th=1",
    categoria: "Cozinha",
    preco: 85,
  },
  {
    id: "airfryer",
    nome: "Fritadeira Elétrica Air Fryer",
    imagem: airfryer,
    link: "https://www.amazon.com.br/Electrolux-Antiaderente-Receitas-Programadas-Fritadeira/dp/B0FRH96P1G/ref=asc_df_B0FRH96P1G?mcid=f7fb13de3c9831869a87130b1fc6192f&tag=googleshopp00-20&linkCode=df0&hvadid=773067503959&hvpos=&hvnetw=g&hvrand=13720499199544463780&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198184&hvtargid=pla-2443418595333&hvocijid=13720499199544463780-B0FRH96P1G-&hvexpln=0&language=pt_BR&th=1",
    categoria: "Cozinha",
    preco: 631.47,
  },
  {
    id: "maquina de cafe",
    nome: "Máquina de Café",
    imagem: maquinaDeCafe,
    link: "https://www.nespresso.com/br/pt/order/machines/original/comprar-maquina-cafe-pixie-redesign-titan-220v?srsltid=AfmBOoolY-gPRVEL4xMj51TqxR5PuanaO1SSwJnXbIeaGUQzsmBJ3e-kf6k",
    categoria: "Cozinha",
    preco: 1100,
  },
  {
    id: "toalhas",
    nome: "Conjunto de Toalhas",
    imagem: toalhas,
    link: "https://a.co/d/07drHFZX",
    categoria: "Banheiro",
    preco: 239.9,
  },
  {
    id: "purificador",
    nome: "Purificador de Água",
    imagem: purificador,
    link: "https://www.softpurificador.com.br/soft-star-prata?utm_source=Site&utm_medium=GoogleMerchant&utm_campaign=GoogleMerchant&sku=7BDE6R5RR-110v&srsltid=AfmBOorbhJqQ-tqGNrwgWzVCdfNLnuMN8z8SMT0JtgVCg00WWVmFHMPxdaE",
    categoria: "Cozinha",
    preco: 1336,
  },
  {
    id: "potes",
    nome: "Potes",
    imagem: potes,
    link: "https://www.amazon.com.br/Kit-Potes-Herm%C3%A9ticos-Pl%C3%A1stico-Electrolux/dp/B09XJL4B9H/ref=asc_df_B09XJL4B9H?mcid=e89f2780ee773943b4c20f0a7d7d7fed&tag=googleshopp00-20&linkCode=df0&hvadid=709964506304&hvpos=&hvnetw=g&hvrand=9800508059505779755&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198184&hvtargid=pla-1662902312395&hvocijid=9800508059505779755-B09XJL4B9H-&hvexpln=0&language=pt_BR&th=1",
    categoria: "Cozinha",
    preco: 88.1,
  },
  {
    id: "fechadura",
    nome: "Fechadura Digital",
    imagem: fechadura,
    link: "https://www.mercadolivre.com.br/fechadura-digital-de-sobrepor-touch-screen-fr-101-preta-intelbras/p/MLB20938205?pdp_filters=item_id%3AMLB5893160558&from=gshop&matt_tool=85656537&matt_word=&matt_source=google&matt_campaign_id=23740811998&matt_ad_group_id=195751060032&matt_match_type=&matt_network=g&matt_device=c&matt_creative=804370643017&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB20938205-product&matt_product_partition_id=2520856761597&matt_target_id=pla-2520856761597&cq_src=google_ads&cq_cmp=23740811998&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23740811998&gbraid=0AAAAAD93qcCfjjBi0TRrKA5_MqZ98q-wk&gclid=CjwKCAjwwJzPBhBREiwAJfHRnaKD26SkRrvhosCCpEUkSE72cvDdEI-NirJBx86bmiUDgbVR-lCeeRoCuLQQAvD_BwE",
    categoria: "Sala de Estar",
    preco: 288.88,
  },
  {
    id: "tabua",
    nome: "Tábua de Passar",
    imagem: tabua,
    link: "https://br.shp.ee/Cite564o",
    categoria: "Área de Serviço",
    preco: 173.9,
  },
  {
    id: "potestempero",
    nome: "Potes Para Temperos",
    imagem: potesTempero,
    link: "https://a.co/d/0ggXrfja",
    categoria: "Cozinha",
    preco: 41.88,
  },
  {
    id: "panoDePrato",
    nome: "Pano de Prato",
    imagem: panoDePrato,
    link: "https://a.co/d/03UmQfGW",
    categoria: "Cozinha",
    preco: 78.9,
  },
  {
    id: "peneiras",
    nome: "Jogo de Peneiras",
    imagem: peneiras,
    link: "https://a.co/d/0a2At9tW",
    categoria: "Cozinha",
    preco: 21,
  },
  {
    id: "panelas",
    nome: "Jogo de Panelas",
    imagem: panelas,
    link: "https://a.co/d/0gc7pQO7",
    categoria: "Cozinha",
    preco: 484.65,
  },
  {
    id: "tabuaDeCorte",
    nome: "Tábua de Corte",
    imagem: tabuaDeCorte,
    link: "https://a.co/d/07pvxCkj",
    categoria: "Cozinha",
    preco: 59.9,
  },
  {
    id: "facas",
    nome: "Jogo de Facas",
    imagem: facas,
    link: "https://a.co/d/0b29KbXA",
    categoria: "Cozinha",
    preco: 90,
  },
  {
    id: "processador",
    nome: "Processador",
    imagem: processador,
    link: "https://a.co/d/0ilVAZQz",
    categoria: "Cozinha",
    preco: 249.5,
  },
  {
    id: "formas",
    nome: "Jogo de Formas",
    imagem: formas,
    link: "https://a.co/d/05ChWZkN",
    categoria: "Cozinha",
    preco: 40,
  },
  {
    id: "batedeira",
    nome: "Batedeira",
    imagem: batedeira,
    link: "https://a.co/d/0bFVhHwJ",
    categoria: "Cozinha",
    preco: 129.9,
  },
  {
    id: "tapetes",
    nome: "Tapetes de Banheiro",
    imagem: tapetes,
    link: "https://a.co/d/018iJo4s",
    categoria: "Banheiro",
    preco: 31.9,
  },
  {
    id: "torradeira",
    nome: "Torradeira",
    imagem: torradeira,
    link: "https://a.co/d/0hDmxAhE",
    categoria: "Cozinha",
    preco: 130,
  },
  {
    id: "panelaDePressão",
    nome: "Panela de Pressão Elétrica",
    imagem: panelaDePressao,
    link: "https://loja.electrolux.com.br/panela-de-pressao-eletrica-pce20-electrolux/p?idsku=2002911&gclsrc=aw.ds&gad_source=1&gad_campaignid=21351429095&gclid=CjwKCAjwtcHPBhADEiwAWo3sJtH5px53MC68BpeHvR0j2398ZwkPR1aK9RspFDYeeFMNRWXBjZL-pxoCRjUQAvD_BwE",
    categoria: "Cozinha",
    preco: 342,
  },
];
