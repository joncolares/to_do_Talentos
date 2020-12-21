<template>
  <header>
    <nav>
      <ul class="nav-links">
        <li>
          <router-link to="/">Home</router-link> 
        </li>
        <li>
          <router-link to="/dashboard">Dashboard</router-link>
        </li>
      </ul>
    </nav>
</header>
</template>

<script>
export default {
}
</script>

<style>
li, router-link {
  font-family: 'Times New Roman', Times, serif;
  font-weight: 500;
  font-size: 16px;
  color: #fff;
  text-decoration: none;
}

header{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 30px 10%;
  background-color: antiquewhite;
}

.nav-links {
  list-style: none;
}

.nav-links li{
  display: inline-block;
  padding: 0 20px;
}
</style>