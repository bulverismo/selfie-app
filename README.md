# Selfie app
Apenas um exemplo para enviar uma imagem para um servidor em nodejs e receber de volta em um cliente usando processing que é uma biblioteca javascript.

Na página principal do cliente usa p5.js(processing) para abrir o video , depois transforma a imagem em base64 e põe junto com o nome capturado em um json e envia.
Na página de logs busca dados que estão no arquivo database.db recupera as imagens armazenadas no formato base64.

baseado em https://github.com/CodingTrain/Intro-to-Data-APIs-JS
