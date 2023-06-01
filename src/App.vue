<template>
  <div class="wrapper">
    <header>
      <nav class="navbar">
        <div class="container">
          <div class="navbar-content">
            <div class="logo">VUE-CLI</div>
            <ul class="navbar-list">
              <li class="navbar-item" v-for="link in links" :key="link.title">
                <router-link
                  class="navbar-link"
                  :title="link.title"
                  :to="link.url"
                >
                  {{ link.title }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>

    <router-view></router-view>

    <!-- <footer></footer> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        {
          title: "Home",
          url: "/",
        },
        {
          title: "Example",
          url: "/example",
        },
         {
          title: "Card",
          url: "/card",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.navbar-link {
  &.router-link-exact-active {
    color: #5247e7;
    transition: color 0.3s;
  }
}
</style>
