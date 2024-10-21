<template>
  <header class="header">
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li> <!-- Accéder à l'accueil -->
        <li><a href="#">About</a></li> <!-- Useless for now -->
        <li><a href="#">Services</a></li> <!-- Useless for now -->
        <li><a href="#">Contact</a></li> <!-- Useless for now -->
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header'
};
</script>

<style scoped>
.header {
  background-color: #2c3e50;
  padding: 20px;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: space-around;
}

.navbar ul li {
  display: inline;
}

.navbar ul li a {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
}

.navbar ul li a:hover {
  color: #3498db;
}
</style>
