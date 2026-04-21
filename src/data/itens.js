import maquina from "../assets/images/maquina.png";
import microondas from "../assets/images/microondas.png";
import sanduicheira from "../assets/images/sanduicheira.png";
import fogao from "../assets/images/fogao.webp";
import airfryer from "../assets/images/airfryer.jpg";
import ferro from "../assets/images/ferro.webp";
import baldeDeLixo from "../assets/images/baldeDeLixo.jpg";
import maquinaDeCafe from "../assets/images/maquinaDeCafe.avif";
import mop from "../assets/images/mop.avif";
import kitPia from "../assets/images/kitPia.jpg";
import liquidificador from "../assets/images/liquidificador.jpg";
import toalhas from "../assets/images/toalhas.webp";
import cabides from "../assets/images/cabides.jpg";
import abajur from "../assets/images/abajur.webp";
import purificador from "../assets/images/purificadorDeAgua.png";
import potes from "../assets/images/potes.jpg";
import fechadura from "../assets/images/fechadura.webp";
import tabua from "../assets/images/tabua.jpg";

export const itens = [
  {
    id: "ferro",
    nome: "Ferro de Passar",
    imagem: ferro,
    link: "https://www.mercadolivre.com.br/oster-ceramica-gcstbs5907-017-champanhe-127v/p/MLB24554660?product_trigger_id=MLB24554660&attributes=COLOR%3AChampanhe%2CVOLTAGE%3A127V_vpp&pdp_filters=item_id%3AMLB4614585933&applied_product_filters=MLB24554660&from=gshop&picker=true&matt_tool=86894132&matt_word=&matt_source=google&matt_campaign_id=23730960129&matt_ad_group_id=200343835172&matt_match_type=&matt_network=g&matt_device=c&matt_creative=804447863003&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735098660&matt_product_id=MLB24554660-product&matt_product_partition_id=2535533343117&matt_target_id=pla-2535533343117&cq_src=google_ads&cq_cmp=23730960129&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23730960129&gbraid=0AAAAAD93qcB6u_jtRC09KpdbEvtcKKD3-&gclid=CjwKCAjwwJzPBhBREiwAJfHRnWZBVF2TPccKOoPjgFfHsVZfQQCMV_-EOaNxvSIa9wiZabK236Vk0BoCa0MQAvD_BwE&quantity=1",
    categoria: "Área de Serviço",
    preco: 70.38,
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
    preco: 670,
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
    link: "https://www.mercadolivre.com.br/kit-3-toalhas-banho-rosto-piso-tapete-macio-profissional/p/MLB55914873?pdp_filters=item_id%3AMLB5695079146&from=gshop&matt_tool=40566012&matt_word=&matt_source=google&matt_campaign_id=23440873650&matt_ad_group_id=197094179171&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396422563&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB55914873-product&matt_product_partition_id=2392713115901&matt_target_id=pla-2392713115901&cq_src=google_ads&cq_cmp=23440873650&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23440873650&gbraid=0AAAAAD93qcDYz-BnaTX8PRjyJA5nHPawy&gclid=Cj0KCQjw9-PNBhDfARIsABHN6-3fsmvPuarKkvjp22TCt5KWWUYN0PUjKQJrQFz7KMPCtwoxWU0Nu10aAvqFEALw_wcB",
    categoria: "Banheiro",
    preco: 120,
  },
  {
    id: "cabides",
    nome: "Cabides",
    imagem: cabides,
    link: "https://www.amazon.com.br/Cabides-para-Terno-Madeira-S%C3%B3lida/dp/B09RQ1X9DG/ref=asc_df_B09RQ1X9DG?mcid=9cc1805949383138989064df3408f424&tag=googleshopp00-20&linkCode=df0&hvadid=709968341260&hvpos=&hvnetw=g&hvrand=15774121582560736741&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198184&hvtargid=pla-1637394179166&psc=1&hvocijid=15774121582560736741-B09RQ1X9DG-&hvexpln=0&language=pt_BR",
    categoria: "Quarto",
    preco: 86,
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
    preco: 88,
  },
  {
    id: "fechadura",
    nome: "Fechadura Digital",
    imagem: fechadura,
    link: "https://www.mercadolivre.com.br/fechadura-digital-de-sobrepor-touch-screen-fr-101-preta-intelbras/p/MLB20938205?pdp_filters=item_id%3AMLB5893160558&from=gshop&matt_tool=85656537&matt_word=&matt_source=google&matt_campaign_id=23740811998&matt_ad_group_id=195751060032&matt_match_type=&matt_network=g&matt_device=c&matt_creative=804370643017&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735125422&matt_product_id=MLB20938205-product&matt_product_partition_id=2520856761597&matt_target_id=pla-2520856761597&cq_src=google_ads&cq_cmp=23740811998&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=1&gad_campaignid=23740811998&gbraid=0AAAAAD93qcCfjjBi0TRrKA5_MqZ98q-wk&gclid=CjwKCAjwwJzPBhBREiwAJfHRnaKD26SkRrvhosCCpEUkSE72cvDdEI-NirJBx86bmiUDgbVR-lCeeRoCuLQQAvD_BwE",
    categoria: "Sala de Estar",
    preco: 270,
  },
  {
    id: "tabua",
    nome: "Tábua de Passar",
    imagem: tabua,
    link: "https://www.amazon.com.br/T%C3%A1bua-Passar-Roupa-Extra-Dobr%C3%A1vel/dp/B0CHG1M88Y/ref=asc_df_B0CHG1M88Y?mcid=1a759a12e1723663b9fe753a370a4b4b&tag=googleshopp00-20&linkCode=df0&hvadid=709964506235&hvpos=&hvnetw=g&hvrand=431862258491057636&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198184&hvtargid=pla-2244489947747&psc=1&hvocijid=431862258491057636-B0CHG1M88Y-&hvexpln=0&language=pt_BR",
    categoria: "Área de Serviço",
    preco: 174,
  },
];
