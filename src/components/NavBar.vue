<template>
  <nav class="navbar is-transparent has-shadow" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <g-link class="navbar-item" to="/">
        <strong>{{$static.metadata.siteName}}</strong>
      </g-link>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-start">
        <!-- <g-link class="navbar-item" to="/">Home</g-link> -->
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a href="https://github.com/prateekkumarweb" class="button is-black">
              <span class="icon">
                <font-awesome :icon="['fab', 'github']" />
              </span>
            </a>
            <a href="https://twitter.com/prateekkumarweb" class="button is-info">
              <span class="icon">
                <font-awesome :icon="['fab', 'twitter']" />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/prateekkumarweb" class="button is-link">
              <span class="icon">
                <font-awesome :icon="['fab', 'linkedin']" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
