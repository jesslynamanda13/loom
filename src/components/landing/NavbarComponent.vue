<template>
  <nav class="navbar">
    <div class="logo">
      <a href="#">
        <img src="/assets/img/loom-logo.png" alt="Logo" />
      </a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'NavbarComponent'
}
</script>

<style scoped>
.navbar {
  display: flex;
  margin-left: 4rem;
}

.navbar .logo a {
  text-decoration: none;
}

.navbar .logo img {
  width: 120px;
  height: auto;
}

.nav-links {
  list-style: none;
  display: flex;
}

.nav-links li {
  margin: 0 1rem;
}

.nav-links a {
  color: white;
  text-decoration: none;
}

.nav-links a:hover {
  color: #f39c12;
}
</style>
