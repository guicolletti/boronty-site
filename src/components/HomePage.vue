<template>
  <div class="home">
    <img src="@/assets/banner.gif" alt="Banner Pokémon" class="banner" />

    <div class="caixa-texto">
      <h1>Olá! Sou Guilherme :)</h1>
      <h3>Ou boronty, se preferir!</h3>
      <div class="container">
        <p>Treinador Full Stack especializado em batalhas de código!</p>
        <p style="padding: 0 0 10px 0">Amante de jogos, RPG, exatas e Pokémon!</p>
      </div>
      <router-link to="/sobre" class="btn">Saiba mais sobre mim</router-link>
    </div>
  </div>
</template>

<style scoped>
.banner {
  max-width: 300px;
  margin-bottom: 20px;
}

.caixa-texto {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  margin: 0 auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #1a0036;
  text-align: center;
}

.caixa-texto h1,
.caixa-texto h3,
.caixa-texto p {
  margin-bottom: 1rem;
}

.btn {
  background-color: #27006c;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 12px;
  text-decoration: none;
  font-weight: bold;
  transition: 0.3s;
}
.btn:hover {
  background-color: #4400c3;
  color: white;
}
</style>
<script setup lang="ts">
</script>