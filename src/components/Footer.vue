<template>
  <footer class="footer">
    <div class="footer-content">
      <p>&copy; 2024 My Website. All rights reserved.</p>
      <ul class="social-links">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Instagram</a></li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
};
</script>

<style scoped>
.footer {
  background-color: #2c3e50;
  padding: 20px;
  color: white;
  text-align: center;
  position: absolute;
  bottom: 0;
  width: 100%;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.social-links {
  list-style: none;
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-links li a {
  color: white;
  text-decoration: none;
}

.social-links li a:hover {
  color: #3498db;
}
</style>
