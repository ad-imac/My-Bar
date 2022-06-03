<template>
  <header>
    <nav>
      <img src="../assets/my_bar_logo.png" alt="My Bar logo" id="my-bar-logo" />
      <button @click="reloadPage" class="btn-shine">
        <span>Refresh</span>
      </button>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    reloadPage() {
      window.location.reload();
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.jsdelivr.net/npm/@xz/fonts@1/serve/metropolis.min.css");

header,
nav {
  background: lavender;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 10vh;
}

nav {
  justify-content: space-between;
  width: 90vw;
}

#my-bar-logo {
  width: 80px;
}

button {
  position: relative;
  margin: 0;
  padding: 5px 12px;
  height: 40px;
  width: 100px;
  outline: none;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  text-transform: uppercase;
  background-color: #ffffff;
  border-radius: 10px;
  border: solid 1px;
  z-index: 0;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.02, 0.01, 0.47, 1);
}
button span {
  font-size: 12px;
  font-weight: 400;
}

button:hover {
  animation: rotate 0.7s ease-in-out both;
}
button:hover span {
  animation: storm 0.7s ease-in-out both;
  animation-delay: 0.06s;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  25% {
    transform: rotate(3deg) translate3d(0, 0, 0);
  }
  50% {
    transform: rotate(-3deg) translate3d(0, 0, 0);
  }
  75% {
    transform: rotate(1deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
}
@keyframes storm {
  0% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
  25% {
    transform: translate3d(4px, 0, 0) translateZ(0);
  }
  50% {
    transform: translate3d(-3px, 0, 0) translateZ(0);
  }
  75% {
    transform: translate3d(2px, 0, 0) translateZ(0);
  }
  100% {
    transform: translate3d(0, 0, 0) translateZ(0);
  }
}

.btn-shine {
  overflow: hidden;
  position: relative;
}

.btn-shine span {
  z-index: 20;
}
.btn-shine:after {
  background: black;
  content: "";
  height: 155px;
  left: -75px;
  opacity: 0.4;
  position: absolute;
  top: -50px;
  transform: rotate(35deg);
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
  width: 50px;
  z-index: -10;
}
.btn-shine:hover:after {
  left: 120%;
  transition: all 550ms cubic-bezier(0.19, 1, 0.22, 1);
}
</style>

