<template>
  <div class="projetos">
    <div class="caixa-texto">
      <h2>Alguns dos meus principais projetos...!</h2>
      <h4>(Como foram hospedados em um servidor gratuito, talvez demore alguns minutos até abrir!)</h4>
    </div>
    <div class="cartas">
      <div class="carta" v-for="(projeto, index) in projetos" :key="index">
        <h3>{{ projeto.nome }}</h3>
        <p>{{ projeto.descricao }}</p>
        <a :href="projeto.link" target="_blank">Ver projeto</a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      projetos: [
        { nome: 'Divinno', descricao: 'Site para a ex-empresa Divinno!', link: 'https://divinno-nrmr.onrender.com' },
        { nome: 'Chat Virtual', descricao: 'Um pequeno chat estático!', link: 'https://site-chat.onrender.com' },
        { nome: 'Pokedéx Manual', descricao: 'Uma pequena Pokedéx para fazer seu próprio catálogo Pokémon!', link: 'https://pokedex-manual.onrender.com' },
        { nome: 'Tira Foto', descricao: 'Um pequeno site para tirar fotos aleatórias em momentos mais aleatórios ainda!', link: 'https://site-foto.onrender.com' },
        { nome: 'Nexus TTS Pro', descricao: 'Um pequeno site para converter textos em áudios!', link: 'https://nexus-tts.onrender.com' },
        { nome: 'História dos NãoSei', descricao: 'Sinceramente...nem eu sei o que foi essa esquizofrênia...mas ele existe!', link: 'https://naosei-page.onrender.com' }
      ],
    };
  },
};
</script>

<style scoped>
.projetos {
  text-align: center;
  padding: 2rem;
  background-image: url('../assets/startes_background.jpg');
}

.caixa-texto {
  background-color: rgba(255, 255, 255, 0.85);
  padding: 1.5rem;
  border-radius: 12px;
  max-width: 840px;
  margin: 0 auto 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

.caixa-texto h2,
.caixa-texto h4 {
  color: #160137;
  margin: 0.5rem 0;
}

.cartas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
}

.carta {
  background-color: #fff;
  border: 2px solid #410195;
  padding: 1rem;
  border-radius: 10px;
  width: 250px;
  box-shadow: 4px 4px 10px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.8s ease;
  opacity: 0;
  transform: translateY(20px);
  animation: aparecer 0.8s forwards;
}

@keyframes aparecer {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.carta:hover {
  transform: scale(1.05);
  box-shadow: 6px 6px 20px rgba(0, 0, 0, 0.2);
}

.carta h3 {
  color: #4c00bd;
}
</style>
