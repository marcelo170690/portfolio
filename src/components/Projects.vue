<template>
  <div class="bg-white p-3 shadow-lg div__scroll">
    <h4 class="text-center title-project">MIS PROYECTOS</h4>
    <div class="row">
      <project-component
          v-for="(project, index) in projects"
          :key="project.id"
          :project="project"
          :index="index"
      />
    </div>
  </div>
</template>

<script>
  import './css/Projects.css'
  export default {
    name: "Projects",
    created(){
      this.projects = [
        {
          id: 1,
          name: 'Farsoft',
          description: 'Aplicación web que permite el registro de productos farmaceúticos, control de stock y lotes, contempla el modulo de facturación computarizada.',
          link: 'https://farsoft.team7binary.com/',
          image: 'https://imgurl.me/images/2020/05/18/farsoft042489a5d92e477e.png',
          tools: [
            {id: 1, name: 'Vue CLI'},
            {id: 2, name: 'Laravel 7'},
            {id: 3, name: 'Lodash'},
            {id: 4, name: 'Bootstrap 4.x'},
          ]
        },
        {
          id: 2,
          name: 'Watuka',
          description: 'Aplicación web progresiva que realiza la creación de evaluaciones para inducciones de seguridad, y permite el ingreso de diferentes instalaciones, registra entradas y salidas.',
          link: 'https://watuka-client.team7binary.com/',
          image: 'https://imgurl.me/images/2020/05/18/watuka860e3c4b8ec9b74f.png',
          tools: [
            {id: 1, name: 'Vue CLI'},
            {id: 2, name: 'Laravel 6'},
            {id: 3, name: 'Bootstrap 4.x'},
          ]
        },
        {
          id: 3,
          name: 'Sinvo',
          description: 'Aplicación web para emitir facturas computarizadas a los clientes, ideal para trabajadores independientes o empresas que realicen diversos trabajos.',
          link: 'https://sinvo.team7binary.com/',
          image: 'https://imgurl.me/images/2020/05/18/sinvo5e7016509db5ad2a.png',
          tools: [
            {id: 1, name: 'Vue CLI'},
            {id: 2, name: 'Laravel 7'},
            {id: 3, name: 'Bootstrap 4.x'},
          ]
        },
        {
          id: 4,
          name: 'Joysoft',
          description: 'Aplicación web que controla los pagos, pedidos de las ventas de joyas, controla los pagos de prestamos de dinero por empeño de joyas.',
          link: 'http://joyeria.team7binary.com/',
          image: 'https://imgurl.me/images/2020/05/18/joysoft222757823fd89993.png',
          tools: [
            {id: 1, name: 'Laravel 5.6'},
            {id: 2, name: 'VueJs'},
            {id: 3, name: 'Bootstrap 4.1'},
          ]
        },
        {
          id: 5,
          name: 'Games Family',
          description: '(Proyecto personal donde apliqué CIENCIA DE DATOS - ESTADISTICA) Aplicación web que permite el registro de juegos, ver records y juegos mas jugados.',
          link: 'https://games.team7binary.com/',
          image: 'https://imgurl.me/images/2020/05/18/games4c031947ee88b0b1.png',
          tools: [
            {id: 1, name: 'Vue CLI'},
            {id: 2, name: 'Laravel 5.8'},
            {id: 3, name: 'Lodash'},
            {id: 4, name: 'Bootstrap 4.x'},
            {id: 5, name: 'Google Charts'},
          ]
        },
        {
          id: 6,
          name: 'Curriculum Vitae',
          description: 'Mi curriculum Vitae',
          link: 'http://cv.team7binary.com/',
          image: 'img/marcelo.png',
          tools: [
            {id: 1, name: 'React'},
            {id: 2, name: 'Bootstrap 4.x'},
          ]
        },
      ];
    },
    data(){
      return {
        projects: []
      }
    }
  }
</script>

<style scoped>
  .div__scroll {
    overflow-y: scroll;
    height: 300px;
  }
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #a9a9a9;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #757575;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #00AAE5;
  }
  .text-muted{
    font-family: sans-serif;
  }
</style>
