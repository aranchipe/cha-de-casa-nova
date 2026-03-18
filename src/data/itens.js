import maquina from "../assets/images/maquina.png";
import microondas from "../assets/images/microondas.png";
import sanduicheira from "../assets/images/sanduicheira.png";
import fogao from "../assets/images/fogao.webp";
import airfryer from "../assets/images/airfryer.avif";
import ferro from "../assets/images/ferro.webp";
import baldeDeLixo from "../assets/images/baldeDeLixo.jpg";
import maquinaDeCafe from "../assets/images/maquinaDeCafe.avif";
import mop from "../assets/images/mop.avif";
import tabua from "../assets/images/tabua.webp";
import kitPia from "../assets/images/kitPia.jpg";
import escorredor from "../assets/images/escorredor.jpg";
import liquidificador from "../assets/images/liquidificador.jpg";
import toalhas from "../assets/images/toalhas.webp";
import conjuntoBanheiro from "../assets/images/conjuntoBanheiro.webp";

export const itens = [
  {
    id: "maquina",
    nome: "Máquina de Lavar",
    imagem: maquina,
    link: "https://www.casasbahia.com.br/lavadora-de-roupas-electrolux-11kg-les11-essencial-care-com-filtro-pega-fiapos-branca/p/1571299298?utm_medium=Cpc&utm_source=GP_PLA&IdSku=1571299298&idLojista=24506&tipoLojista=3P&gclsrc=aw.ds&&utm_campaign=cb_mkp_gg_shopping_core_apostas&gad_source=4&gad_campaignid=22327510536&gbraid=0AAAAADtAamjmv4nK3gx3YaCd2gT4Hliw9&gclid=Cj0KCQjw9-PNBhDfARIsABHN6-0MSKyzLQfXqk-d7vneruQg4eQ_HKuyT_E2kBbLmvNivP-a8jRHhxgaAnmoEALw_wcB",
    categoria: "Área de Serviço",
  },
  {
    id: "ferro",
    nome: "Ferro de Passar",
    imagem: ferro,
    link: "https://www.mercadolivre.com.br/p/MLB21010522?pdp_filters=item_id:MLB5924891640&matt_tool=38524122#origin=share&sid=share&wid=MLB5924891640&action=copy",
    categoria: "Área de Serviço",
  },
  {
    id: "balde de lixo",
    nome: "Balde de Lixo",
    imagem: baldeDeLixo,
    link: "https://www.amazon.com.br/LIXEIRA-COM-TAMPA-LTS-PRETA/dp/B098PS1CNB/ref=asc_df_B098PS1CNB?mcid=84de6b1cd1c03808915aab8c2197c1b6&tag=googleshopp00-20&linkCode=df0&hvadid=709968341236&hvpos=&hvnetw=g&hvrand=1224219802836130060&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198184&hvtargid=pla-2200294246481&psc=1&hvocijid=1224219802836130060-B098PS1CNB-&hvexpln=0&language=pt_BR",
    categoria: "Área de Serviço",
  },
  {
    id: "microondas",
    nome: "Microondas",
    imagem: microondas,
    link: "https://loja.electrolux.com.br/micro-ondas-tira-odor-electrolux-mt30s/p",
    categoria: "Cozinha",
  },
  {
    id: "sanduicheira",
    nome: "Sanduicheira",
    imagem: sanduicheira,
    link: "https://www.amazon.com.br/Sanduicheira-Master-Grill-Inox-S-20/dp/B084XR9K4X/ref=asc_df_B084XR9K4X?mcid=3c11ddb43c7038c5adcf6f725e020ab9&tag=googleshopp00-20&linkCode=df0&hvadid=709886750320&hvpos=&hvnetw=g&hvrand=10338129930690126670&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198184&hvtargid=pla-928419993816&hvocijid=10338129930690126670-B084XR9K4X-&hvexpln=0&language=pt_BR&th=1",
    categoria: "Cozinha",
  },
  {
    id: "airfryer",
    nome: "Fritadeira Elétrica Air Fryer",
    imagem: airfryer,
    link: "https://www.casasbahia.com.br/fritadeira-airfryer-philips-walita-serie-1000-xl-62l-1700w-grelha-removivel-preto/p/55070219?utm_medium=cpc&utm_source=GP_PLA&IdSku=55070219&idLojista=10037&tipoLojista=1P&gclsrc=aw.ds&&utm_campaign=cb_b2c_gg_shopping_core_elpo_fritadeira&gad_source=1&gad_campaignid=22440145884&gbraid=0AAAAADtAamiMV-n8afjnR4ewUuKeuUxlA&gclid=Cj0KCQjw9-PNBhDfARIsABHN6-1ptknM4xrto0RE9KyxHwYyXRtXGSrNmY38PwkCfBK9TMZmFJ4oVXsaAqPPEALw_wcB",
    categoria: "Cozinha",
  },
  {
    id: "fogao",
    nome: "Fogão",
    imagem: fogao,
    link: "https://www.mercadolivre.com.br/p/MLB6331388?pdp_filters=item_id:MLB2048022316&matt_tool=38524122#origin=share&sid=share&wid=MLB2048022316&action=copy",
    categoria: "Cozinha",
  },
  {
    id: "mop",
    nome: "Mop",
    imagem: mop,
    link: "https://www.pontofrio.com.br/kit-mop-plano-3-em-1-limpeza-pesada-seca-ou-umida-flashlimp/p/1539767197?utm_medium=cpc&utm_source=google_freelisting&IdSku=1539767197&idLojista=145309&tipoLojista=3P",
    categoria: "Área de Serviço",
  },
  {
    id: "tabua",
    nome: "Tábua de Passar",
    imagem: tabua,
    link: "https://www.mercadolivre.com.br/up/MLBU3219279571?pdp_filters=item_id:MLB3639237069&matt_tool=38524122#origin=share&sid=share&wid=MLB3639237069&action=copy&gid=1&pid=1",
    categoria: "Área de Serviço",
  },
  {
    id: "maquina de cafe",
    nome: "Máquina de Café",
    imagem: maquinaDeCafe,
    link: "https://www.nespresso.com/br/pt/order/machines/original/comprar-maquina-cafe-pixie-redesign-titan-220v?srsltid=AfmBOoolY-gPRVEL4xMj51TqxR5PuanaO1SSwJnXbIeaGUQzsmBJ3e-kf6k",
    categoria: "Cozinha",
  },
  {
    id: "kitPia",
    nome: "Kit Pia",
    imagem: kitPia,
    link: "https://www.amazon.com.br/pe%C3%A7as-Lixeira-Litros-Porta-Detergente/dp/B0CCQBGW2P/ref=asc_df_B0CCQBGW2P?mcid=bae4358b8d683e23bb3e1b1ed94fdaea&tag=googleshopp00-20&linkCode=df0&hvadid=709968341236&hvpos=&hvnetw=g&hvrand=12748190747542872373&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198184&hvtargid=pla-2199077612283&psc=1&hvocijid=12748190747542872373-B0CCQBGW2P-&hvexpln=0&language=pt_BR",
    categoria: "Cozinha",
  },
  {
    id: "escorredor",
    nome: "Escorredor de Prato",
    imagem: escorredor,
    link: "https://www.amazon.com.br/Escorredor-Cozinha-Organizador-Talheres-Gaivota/dp/B0DT9WBP82?source=ps-sl-shoppingads-lpcontext&ref_=fplfs&psc=1&smid=A1ZZFT5FULY4LN",
    categoria: "Cozinha",
  },
  {
    id: "liquidificador",
    nome: "Liquidificador",
    imagem: liquidificador,
    link: "https://www.amazon.com.br/MONDIAL-Liquidificador-Turbo-Power-Preto/dp/B07QKN5NF1/ref=asc_df_B07QK91PTZ?mcid=e0bd5d5f9416309f8bbcecb326f9787a&tag=googleshopp00-20&linkCode=df0&hvadid=709870389015&hvpos=&hvnetw=g&hvrand=7367031370816488861&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdvcmdl=&hvlocint=&hvlocphy=9198184&hvtargid=pla-895105588475&hvocijid=7367031370816488861-B07QK91PTZ-&hvexpln=0&language=pt_BR&th=1",
    categoria: "Cozinha",
  },
  {
    id: "toalhas",
    nome: "Conjunto de Toalhas",
    imagem: toalhas,
    link: "https://www.mercadolivre.com.br/kit-3-toalhas-banho-rosto-piso-tapete-macio-profissional/p/MLB55914873?pdp_filters=item_id%3AMLB5695079146&from=gshop&matt_tool=40566012&matt_word=&matt_source=google&matt_campaign_id=23440873650&matt_ad_group_id=197094179171&matt_match_type=&matt_network=g&matt_device=c&matt_creative=792396422563&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=735128761&matt_product_id=MLB55914873-product&matt_product_partition_id=2392713115901&matt_target_id=pla-2392713115901&cq_src=google_ads&cq_cmp=23440873650&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=23440873650&gbraid=0AAAAAD93qcDYz-BnaTX8PRjyJA5nHPawy&gclid=Cj0KCQjw9-PNBhDfARIsABHN6-3fsmvPuarKkvjp22TCt5KWWUYN0PUjKQJrQFz7KMPCtwoxWU0Nu10aAvqFEALw_wcB",
    categoria: "Banheiro",
  },
  {
    id: "conjuntoBanheiro",
    nome: "Kit Escova Sanitária e Lixeira ",
    imagem: conjuntoBanheiro,
    link: "https://www.mercadolivre.com.br/kit-escova-sanitaria--lixeira-preto-ou-cinza-matte-5l/up/MLBU3768584684?pdp_filters=item_id%3AMLB6210929478&from=gshop&matt_tool=31493002&matt_internal_campaign_id=&matt_word=&matt_source=google&matt_campaign_id=22090354070&matt_ad_group_id=191786768521&matt_match_type=&matt_network=g&matt_device=c&matt_creative=782869962146&matt_keyword=&matt_ad_position=&matt_ad_type=pla&matt_merchant_id=5668471327&matt_product_id=MLBU3768584684&matt_product_partition_id=2535533753437&matt_target_id=pla-2535533753437&cq_src=google_ads&cq_cmp=22090354070&cq_net=g&cq_plt=gp&cq_med=pla&gad_source=4&gad_campaignid=22090354070&gbraid=0AAAAAD93qcDT7UU-WJRRFst4aarmYTB--&gclid=Cj0KCQjw9-PNBhDfARIsABHN6-0JxfUuR4wH8GMA05Z3_83dwuqhgEVe4gfzp9c9RVJi7waRe5PrN6EaAnepEALw_wcB",
    categoria: "Banheiro",
  },
];
