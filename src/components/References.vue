<template>
  <div class="div__references my-2 clearfix">
    <div v-if="ctrlReferences" class="btn-group float-right" @mouseleave="ctrlReferences=false">
      <a href="https://www.linkedin.com/in/marcelo-choque-pacheco-7binary" target="_blank" class="btn bg-right">
        <img src="https://imgurl.me/images/2020/05/19/linkedin4d8cb6e334f0d82f.png" alt="linkedin">
      </a>
      <a href="https://github.com/marcelo170690" target="_blank" class="btn bg-right">
        <img src="https://imgurl.me/images/2020/05/19/github72d0db54fac6309b.png" alt="github">
      </a>
      <a href="https://twitter.com/__marcelocp" target="_blank" class="btn bg-right">
        <img src="https://imgurl.me/images/2020/05/20/twittera89c9a1e6e8f8e7d.png" alt="twitter">
      </a>
    </div>
    <button v-if="!ctrlReferences" class="btn float-right bg-right" @mousemove="ctrlReferences=true">
      <img src="https://imgurl.me/images/2020/05/19/right-36a506eaa3576a72e4.png" alt="right 36">
    </button>
    <div v-if="ctrlContacts" class="btn-group" @mouseleave="ctrlContacts=false">
      <button class="btn bg-left">
        <img src="img/email.svg" alt="" height="36">
        marcelo170690@gmail.com
      </button>
      <button class="btn bg-left">
        <img src="img/phone.svg" alt="" height="36">
        77562023
      </button>
    </div>
    <button v-if="!ctrlContacts" class="btn bg-left float-left" @mousemove="ctrlContacts=true">
      <img src="https://imgurl.me/images/2020/05/19/left-36a60099d40c2dae6b.png" alt="left 36">
    </button>
  </div>
</template>

<script>
  export default {
    name: "References",
    data(){
      return {
        ctrlReferences: false,
        ctrlContacts: false
      }
    }
  }
</script>

<style scoped>
  .div__references{
    position: relative;
    opacity: 0.8;
  }
  .btn>img{
    fill: blue;
  }
  .bg-left{
    background: #41B9B5;
    color: white;
  }
  .bg-right{
    background: #06005A;
    color: white;
  }
</style>
