<template>
  <div class="text-center">
    <hr>
    <div class="row">
      <div class="col-md-4">
        <div class="container__new">
          <fieldset class="container__group-box border__orange">
            <legend class="container__group-title border__orange">HABILIDADES PROFESIONALES</legend>
            <div class="container__group-body">
              <p>
                <b>BackEnd</b> Lavarel+
              </p>
              <p>
                <b>FrontEnd</b> Vue CLI (VueJs, VueX, VueRouter)
              </p>
              <p>
                <b>Style</b> Bootstrap 4.x, Bulma
              </p>
              <p>
                <b>Base de Datos</b> MySQL, Sql Server
              </p>
              <p>
                <b>Trabajo remoto</b> Git, GitHub
              </p>
              <p>
                <b>Otros</b> Axios, fetchApi, GuzzleHttp, Lodash, Postman, Insomnia
              </p>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="col-md-4">
        <div class="container__new">
          <fieldset class="container__group-box border__yellow">
            <legend class="container__group-title border__yellow">ESTOY APRENDIENDO</legend>
            <div class="container__group-body">
              <p>
                <b>BackEnd</b> NodeJs, Express, SailsJs
              </p>
              <p>
                <b>FrontEnd</b> React (Route, Redux)
              </p>
              <p>
                <b>Base de Datos</b> PostgreSql
              </p>
              <p>
                <b>Otros</b> <b class="text-success">GraphQL</b>
              </p>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="col-md-4">
        <div class="container__new">
          <fieldset class="container__group-box border__dream">
            <legend class="container__group-title border__dream">QUIERO APRENDER</legend>
            <div class="container__group-body">
              <p>
                <b>BackEnd</b> Python
              </p>
              <p>
                <b>FrontEnd</b> Ionic, Angular
              </p>
              <p>
                <b>Base de Datos</b> Oracle, MongoDB
              </p>
              <p>
                <b>Remoto</b> GitLab
              </p>
              <p>
                <b>Otros</b> Ciencia de Datos
              </p>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="col-md-4">
        <div class="container__new">
          <fieldset class="container__group-box border__info">
            <legend class="container__group-title border__info">¿A DONDE APUNTO?</legend>
            <div class="container__group-body">
              <div>
                <p>Ser <b>parte</b> de un equipo de desarrollo de software.</p>
                <p>No dejar de fomentar al crecimiento de la comunidad VueJs</p>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="col-md-4">
        <div class="container__new">
          <fieldset class="container__group-box border__green">
            <legend class="container__group-title border__green">APTITUDES PROFECIONALES</legend>
            <div class="container__group-body">
              <div>
                Adaptable, creativo, versatil, trabajo en equipo, autodidacta.
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="col-md-4">
        <div class="container__new">
          <fieldset class="container__group-box border__primary">
            <legend class="container__group-title border__primary">APTITUDES PERSONALES</legend>
            <div class="container__group-body">
              <div>
                Creativo, proactivo, responsable.
              </div>
            </div>
          </fieldset>
        </div>
      </div>
      <div class="col-md-4">
        <div class="container__new">
          <fieldset class="container__group-box border__danger">
            <legend class="container__group-title border__danger">DEBILIDADES</legend>
            <div class="container__group-body">
              <p>
                ASP.NET, C++, jQuery (Muy antiguo), lectura de código proyectos legacy (antiguos)
              </p>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "AboutMe"
  }
</script>

<style scoped>
  .container__new{
    padding: 1em;
  }
  .container__group-box{
    padding: 1em;
    border-radius: 1em;
  }
  .container__group-title{
    border-radius: 0.5em;
  }
  .border__green{
    border: 0.15em solid #79CC42;
  }
  .border__orange{
    border: 0.15em solid orange;
  }
  .border__info{
    border: 0.15em solid #17A2B8;
  }
  .border__primary{
    border: 0.15em solid #0680D6;
  }
  .border__dream{
    border: 0.15em solid #3FBCB6;
  }
  .border__danger{
    border: 0.15em solid #DC4E41;
  }
  .border__yellow{
    border: 0.15em solid #ffee43;
  }
  .container__group-body{
    text-align: justify;
  }
  .vl {
    border-left: 3px solid #4b7d80;
    height: 200px;
  }
</style>
