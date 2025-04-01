<h1>Be The Hero</h1>

<p>This project is a complete application composed of three parts:</p>

<ul>
  <li><strong>Backend</strong>: API built with Node.js to manage application operations.</li>
  <li><strong>Frontend</strong>: Web interface developed with React.js for user interaction.</li>
  <li><strong>Mobile</strong>: Mobile application created with React Native for access via mobile devices.</li>
</ul>

<h2>Index</h2>

<ul>
  <li><a href="#prerequisites">Prerequisites</a></li>
  <li><a href="#installation">Installation</a>
    <ul>
      <li><a href="#backend">Backend</a></li>
      <li><a href="#frontend">Frontend</a></li>
      <li><a href="#mobile">Mobile</a></li>
    </ul>
  </li>
  <li><a href="#license">License</a></li>
</ul>

<h2 id="prerequisites">Prerequisites</h2>

<p>Make sure you have the following tools installed in your development environment:</p>

<ul>
  <li><a href="https://nodejs.org/">Node.js</a> (version 14 or higher)</li>
  <li><a href="https://www.npmjs.com/">npm</a> or <a href="https://yarnpkg.com/">Yarn</a></li>
  <li><a href="https://docs.expo.dev/get-started/installation/">Expo CLI</a> (for the mobile application)</li>
</ul>

<h2 id="installation">Installation</h2>

<p>Follow the steps below to set up each part of the project:</p>

<h3 id="backend">Backend</h3>

<ol>
  <li><strong>Navigate to the backend directory:</strong></li>
</ol>

<pre><code>cd backend</code></pre>

<ol start="2">
  <li><strong>Install dependencies:</strong></li>
</ol>

<pre><code>npm install</code></pre>

<p>Or, if you are using Yarn:</p>

<pre><code>yarn install</code></pre>

<ol start="3">
  <li><strong>Configure the database:</strong></li>
</ol>

<p>Edit the <code>.env</code> file with your database configurations.</p>

<ol start="4">
  <li><strong>Run migrations:</strong></li>
</ol>

<pre><code>npx knex migrate:latest</code></pre>

<ol start="5">
  <li><strong>Start the server:</strong></li>
</ol>

<pre><code>npm start</code></pre>

<p>Or, if you are using Yarn:</p>

<pre><code>yarn start</code></pre>

<p>The server will be running at <code>http://localhost:3333</code>.</p>

<h3 id="frontend">Frontend</h3>

<ol>
  <li><strong>Navigate to the frontend directory:</strong></li>
</ol>

<pre><code>cd frontend</code></pre>

<ol start="2">
  <li><strong>Install dependencies:</strong></li>
</ol>

<pre><code>npm install</code></pre>

<p>Or, if you are using Yarn:</p>

<pre><code>yarn install</code></pre>

<ol start="3">
  <li><strong>Start the development server:</strong></li>
</ol>

<pre><code>npm start</code></pre>

<p>Or, if you are using Yarn:</p>

<pre><code>yarn start</code></pre>

<p>The application will be available at <code>http://localhost:3000</code>.</p>

<h3 id="mobile">Mobile</h3>

<ol>
  <li><strong>Navigate to the mobile directory:</strong></li>
</ol>

<pre><code>cd mobile</code></pre>

<ol start="2">
  <li><strong>Install dependencies:</strong></li>
</ol>

<pre><code>npm install</code></pre>

<p>Or, if you are using Yarn:</p>

<pre><code>yarn install</code></pre>

<ol start="3">
  <li><strong>Start the application:</strong></li>
</ol>

<pre><code>expo start</code></pre>

<ol start="4">
  <li><strong>Run on a device:</strong></li>
</ol>

<ul>
  <li>Use the <strong>Expo Go</strong> app on your mobile device to scan the QR code displayed in the terminal or browser.</li>
  <li>For emulators, follow the instructions displayed in the terminal.</li>
</ul>

<h2 id="license">License</h2>

<p>This project is licensed under the MIT license. See the <a href="LICENSE">LICENSE</a> file for more details.</p>
