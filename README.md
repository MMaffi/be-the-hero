<h1>Be The Hero</h1>

<p>Este projeto é uma aplicação completa composta por três partes:</p>

<ul>
  <li><strong>Backend</strong>: API construída com Node.js para gerenciar as operações da aplicação.</li>
  <li><strong>Frontend</strong>: Interface web desenvolvida com React.js para interação dos usuários.</li>
  <li><strong>Mobile</strong>: Aplicativo móvel criado com React Native para acesso via dispositivos móveis.</li>
</ul>

<h2>Índice</h2>

<ul>
  <li><a href="#pré-requisitos">Pré-requisitos</a></li>
  <li><a href="#instalação">Instalação</a>
    <ul>
      <li><a href="#backend">Backend</a></li>
      <li><a href="#frontend">Frontend</a></li>
      <li><a href="#mobile">Mobile</a></li>
    </ul>
  </li>
  <li><a href="#licença">Licença</a></li>
</ul>

<h2 id="pré-requisitos">Pré-requisitos</h2>

<p>Certifique-se de ter as seguintes ferramentas instaladas em seu ambiente de desenvolvimento:</p>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a> (versão 14 ou superior)</li>
  <li><a href="https://www.npmjs.com/">npm</a> ou <a href="https://yarnpkg.com/">Yarn</a></li>
  <li><a href="https://docs.expo.dev/get-started/installation/">Expo CLI</a> (para o aplicativo mobile)</li>
</ul>

<h2 id="instalação">Instalação</h2>

<p>Siga os passos abaixo para configurar cada parte do projeto:</p>

<h3 id="backend">Backend</h3>

<ol>
  <li><strong>Navegue até o diretório do backend:</strong></li>
</ol>

<pre><code>cd backend</code></pre>

<ol start="2">
  <li><strong>Instale as dependências:</strong></li>
</ol>

<pre><code>npm install</code></pre>

<p>Ou, se estiver usando Yarn:</p>

<pre><code>yarn install</code></pre>

<ol start="3">
  <li><strong>Configure o banco de dados:</strong></li>
</ol>

<p>Edite o arquivo <code>.env</code> com as configurações do seu banco de dados.</p>

<ol start="4">
  <li><strong>Execute as migrações:</strong></li>
</ol>

<pre><code>npx knex migrate:latest</code></pre>

<ol start="5">
  <li><strong>Inicie o servidor:</strong></li>
</ol>

<pre><code>npm start</code></pre>

<p>Ou, se estiver usando Yarn:</p>

<pre><code>yarn start</code></pre>

<p>O servidor estará em execução no endereço <code>http://localhost:3333</code>.</p>

<h3 id="frontend">Frontend</h3>

<ol>
  <li><strong>Navegue até o diretório do frontend:</strong></li>
</ol>

<pre><code>cd frontend</code></pre>

<ol start="2">
  <li><strong>Instale as dependências:</strong></li>
</ol>

<pre><code>npm install</code></pre>

<p>Ou, se estiver usando Yarn:</p>

<pre><code>yarn install</code></pre>

<ol start="3">
  <li><strong>Inicie o servidor de desenvolvimento:</strong></li>
</ol>

<pre><code>npm start</code></pre>

<p>Ou, se estiver usando Yarn:</p>

<pre><code>yarn start</code></pre>

<p>A aplicação estará disponível em <code>http://localhost:3000</code>.</p>

<h3 id="mobile">Mobile</h3>

<ol>
  <li><strong>Navegue até o diretório do mobile:</strong></li>
</ol>

<pre><code>cd mobile</code></pre>

<ol start="2">
  <li><strong>Instale as dependências:</strong></li>
</ol>

<pre><code>npm install</code></pre>

<p>Ou, se estiver usando Yarn:</p>

<pre><code>yarn install</code></pre>

<ol start="3">
  <li><strong>Inicie o aplicativo:</strong></li>
</ol>

<pre><code>expo start</code></pre>

<ol start="4">
  <li><strong>Execute no dispositivo:</strong></li>
</ol>

<ul>
  <li>Use o aplicativo <strong>Expo Go</strong> no seu dispositivo móvel para escanear o QR code exibido no terminal ou no navegador.</li>
  <li>Para emuladores, siga as instruções exibidas no terminal.</li>
</ul>

<h2 id="licença">Licença</h2>

<p>Este projeto está licenciado sob a licença MIT. Consulte o arquivo <a href="LICENSE">LICENSE</a> para mais detalhes.</p>
