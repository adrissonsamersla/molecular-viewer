# molecular-viewer

Esse projeto contém um visualizador 3D de moléculas que roda no Browser (usando a biblioteca ThreeJs).
Por enquanto, foram implementadas as moléculas: metano e benzeno.
Acesse esse [link](https://adrissonsamersla.github.io/molecular-viewer/) para uma demonstração.

## Installation

Por causa das restrições a CORS dos Browsers, é necessário servir os arquivos estáticos com um servidor. 
Durante o desenvolvimento, foi usado o [http-server](https://github.com/http-party/http-server).
A seguir, basta clonar este repositório, levantar o servidor na pasta com o arquivo index.html e acessar o endereço fornecido pelo http-server no browser.

## Usage

Para alternar a molécula, basta comentar ou descomentar as linhas indicadas no arquivo main.js.
