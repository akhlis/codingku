<template>
  <div class="logo">
    <g-link class="nav-brand site-link" to="/" title="Back to home">
      <Logo class="site-img" width="156" />
    </g-link>
  </div>
</template>

<script>
    import Logo from '~/assets/images/logo-hijacket.svg'
    export default {
        components: {
            Logo
        }
    }
</script>

<style lang="postcss" scoped>
    .logo {
        text-align: center;

        svg {
            height: auto;
            margin-top: -3px;
        }

        &:hover {
            opacity: .8;
        }
    }
</style>