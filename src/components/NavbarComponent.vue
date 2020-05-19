<template>
  <div class="my__nav">
    <div class="card border-0 bg-transparent">
      <div class="row no-gutters">
        <div class="col-4">
          <img src="https://imgurl.me/images/2020/05/20/sdsfds2403bb481384b8a9.jpg" alt="marcelo_circle"class="rounded-circle avatar" height="150">
        </div>
        <div class="col-8">
          <div class="card-body p-3 text-right">
            <h6 class="text-white">MARCELO CHOQUE PACHECO</h6>
            <h6 class="text-white">INGENIERO INFORMÁTICO</h6>
          </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavbarComponent"
  }
</script>

<style scoped>
  .my__nav{
    padding: 1em 0em 0em 1em;
    height: 7em;
    background: rgb(2,0,36);
    background: linear-gradient(90deg, rgba(63,188,182,1) 0%, rgb(140, 60, 139) 35%, rgb(5, 0, 90) 100%);
    /*background: #3FBCB6;*/
    box-shadow: 0px 0px 15px 0px #8486ff;
  }
  .avatar{
    border: 0.2em solid white;
  }
</style>
