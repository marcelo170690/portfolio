<template>
  <div class="col-md-6">
    <div class="card mb-2 shadow-sm small">
      <div class="card-body row">
        <div class="col-4">
          <div class="text-center">
            <img :src="project.image" alt="" height="100" width="100">
          </div>
        </div>
        <div class="col-8">
          <h5 class="card-title form-inline">
            <a :href="project.link" target="_blank" class="mr-3">
              <ins>{{project.name}}</ins>
            </a>
            <div class="dropdown">
              <button class="btn btn-sm btn-warning text-white dropdown-toggle" data-toggle="dropdown">
                <b>&lt;/&gt;</b>
              </button>
              <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <li v-for="tool in project.tools" class="dropdown-item">
                  {{tool.name}}
                </li>
              </div>
            </div>
          </h5>
          <p class="card-text">{{project.description}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ProjectComponent",
    props: {
      project: null,
      index: null
    },
  }
</script>

<style scoped>

</style>
