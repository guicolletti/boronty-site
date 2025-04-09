<template>
  <div id="app">
    <nav class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/sobre">Sobre</router-link>
      <router-link to="/projetos">Projetos</router-link>
      <router-link to="/contato">Contato</router-link>
    </nav>
    <router-view />
    <footer class="footer">
      <p>⚡ Desenvolvido por Guilherme Colletti da Silva ⚡ boronty ⚡</p>
    </footer>
  </div>
</template>

<style>
body {
  margin: 0;
  font-family: 'Press Start 2P', cursive;
  background-color: #f0f0f0;
}
.navbar {
  background-color: #1e004a;
  padding: 1rem;
  display: flex;
  justify-content: center;
  gap: 2rem;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
.footer {
  text-align: center;
  padding: 1rem;
  background-color: #260057;
  color: white;
}

html, body, #app {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

#app {
  min-height: 100vh;
}

router-view {
  flex: 1;
}

.home {
  text-align: center;
  padding: 40px;
  background: url('@/assets/background.jpg') no-repeat center;
  background-size: cover;
  color: solid black;
}

.sobre {
  text-align: center;
  padding: 40px;
  background: url('@/assets/background.jpg') no-repeat center;
  background-size: cover;
}

.projetos {
  text-align: center;
  padding: 40px;
  background: url('@/assets/background.jpg') no-repeat center;
  background-size: cover;
}

.contato {
  text-align: center;
  padding: 40px;
  background: url('@/assets/background.jpg') no-repeat center;
  background-size: cover;
}
</style>