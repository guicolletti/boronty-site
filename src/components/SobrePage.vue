<template>
  <div class="sobre">
    <div class="caixa-texto">
      <h2>Sobre Mim</h2>
      <p>Olá! Meu nome é Guilherme Colletti da Silva! Apenas alguém fissurado por Pokémon, jogos e programação :)</p>
    </div>
    <section class="amigos">
      <div class="caixa-texto">
        <h3>Amigos! :D</h3>
      </div>
      <div class="amigo-lista">
        <div class="amigo-card">
          <img src="@/assets/toby.jpg" alt="Manu" />
          <p>🔥Evee🔥</p>
        </div>
        <div class="amigo-card">
          <img src="@/assets/yuta.jpg" alt="Fe" />
          <p>🍃Pado🍃</p>
        </div>
        <div class="amigo-card">
          <img src="@/assets/sylveon.jpg" alt="Yuh" />
          <p>🎀Kirara🎀</p>
        </div>
        <div class="amigo-card">
          <img src="@/assets/haise.jpg" alt="Távio" />
          <p>🕹️Esboriol🕹️</p>
        </div>
        <div class="amigo-card">
          <img src="@/assets/miles.jpg" alt="Thimas" />
          <p>⚖️Thimas⚖️</p>
        </div>
        <div class="amigo-card">
          <img src="@/assets/gato_cowboy.jpg" alt="Lélo" />
          <p>🐱Lelinho🐱</p>
        </div>
      </div>
    </section>
    <section class="gostos">
      <div class="caixa-texto">
        <h3>Coisas que acho joia:</h3>
        <ul>
          <li>⚡ Pokémon</li>
          <li>🎮 Jogos</li>
          <li>💻 Programação</li>
          <li>🧙‍♂️ RPG e nerdices</li>
        </ul>
      </div>
    </section>
  </div>
</template>
<style scoped>
.sobre {
  text-align: center;
  padding: 2rem;
  color: #ffffff;
  background-image: url('../assets/umbreon_wall.jpg');
}

.caixa-texto {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 800px;
  margin: 0 auto 1.5rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  color: #160137;
}

.caixa-texto h2,
.caixa-texto h3,
.caixa-texto p {
  margin: 0.5rem 0;
}

.amigos, .gostos {
  margin-top: 2rem;
}

.amigo-lista {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.amigo-card {
  background-color: #4400c3;
  padding: 1rem;
  border-radius: 12px;
  color: white;
  width: 120px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease;
  animation: fadeInUp 0.8s ease forwards;
  opacity: 0;
}

.amigo-card:hover {
  transform: scale(1.1);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  background-color: #5a00e0;
}

.amigo-card img {
  width: 100%;
  border-radius: 8px;
}

.amigo-card:nth-child(1) { animation-delay: 0.1s; }
.amigo-card:nth-child(2) { animation-delay: 0.2s; }
.amigo-card:nth-child(3) { animation-delay: 0.3s; }
.amigo-card:nth-child(4) { animation-delay: 0.4s; }
.amigo-card:nth-child(5) { animation-delay: 0.5s; }
.amigo-card:nth-child(6) { animation-delay: 0.6s; }

.gostos ul {
  list-style: none;
  padding: 0;
  font-size: 1.2rem;
}

.gostos li {
  margin: 0.5rem 0;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
<script setup lang="ts">
</script>
