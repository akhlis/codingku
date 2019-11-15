<template>
    <header class="site__header header">
        <div class="header__bar"></div>
        <div id="heading" class="header__nav nav" :class="{ navSpace: isLaptop }">
            <div class="nav__wrapper">
                <Logo />
                <div class="nav-mobile nav__toggle" @click="toggle" :class="{ active: isActive }" v-if="isPhone || isMobile">
                    <span class="nav__toggle-item"></span>
                </div>
                <Nav class="nav-menu" :class="{ menuMobile: isActive && (isPhone || isMobile) }" />
                <search v-if="isLaptop || isDesktop" />
            </div>
            <searchMobile v-if="isPhone || isMobile" />
        </div>
        <slot></slot>
    </header>
</template>

<script>
    import Logo from './Logo'
    import Nav from './Nav'
    import search from '~/components/Search'
    import searchMobile from '~/components/SearchMobile'
    import fbIcon from '@/assets/images/icons/facebook-square.svg'
    import igIcon from '@/assets/images/icons/instagram.svg'
    import waIcon from '@/assets/images/icons/whatsapp.svg'

    export default {
        props: {
            showCart: {
                default: true
            }
        },
        components: {
            Logo,
            Nav,
            search,
            searchMobile,
            fbIcon,
            igIcon,
            waIcon
        },
        data: () => ({
            isActive: false,
        }),
        methods: {
            toggle() {
                this.isActive = !this.isActive;
            },
        },
        computed: {
            isPhone() {
                return this.$mq === 'phone' ? true : false
            },
            isMobile() {
                return this.$mq === 'mobile' ? true : false
            },
            isLaptop() {
                return this.$mq === 'laptop' ? true : false
            },
            isDesktop() {
                return this.$mq === 'desktop' ? true : false
            },
        }
    }
</script>

<style lang="scss" scoped>
.site__header {
  z-index: 20;
  position: relative;
  top: 0;
  background-color: var(--bg-transparent);
  border-bottom: 1px solid var(--border-color);
  flex-wrap: nowrap;
  position: sticky;
  transition: background-color .3s, border-color, .3s;
  backdrop-filter: blur(4px);


  .header__bar {
    background: linear-gradient(90deg, var(--primary-color) 0%, #8ED6FB 50%, #D32E9D 100%);
    padding: 2px;
    text-align: center;
    color: #FFF;
    font-size: 1rem;

    a {
      color: currentColor;
    }
  }

  .header-inner {
    padding: 0 var(--space);
    min-height: var(--header-height);
  }
}

@media all and (min-width: 56.25em) {
  .nav__wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
    max-width: calc(115.85714rem + 1vw);
    padding: .9rem 0;
  }
}

.navSpace {
  padding: 0 1em;
}

.nav__toggle {
  position: absolute;
  right: 0.75em;
  top: 1.75em;
  width: 2.6rem;
  height: 2.3rem;
  cursor: pointer;
  z-index: 199;
}

.nav__toggle.active {
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
}

.nav__toggle-item,
.nav__toggle-item:before,
.nav__toggle-item:after {
  cursor: pointer;
  height: 2px;
  width: 22px;
  background: var(--secondary-text-color);
  position: absolute;
  display: block;
  content: '';
  transition: all 300ms ease-in-out;
}

.nav__toggle-item {
  top: 8px;
}

.nav__toggle-item:before {
  top: -6px;
}

.nav__toggle-item:after {
  bottom: -6px;
}

.nav__toggle.active .nav__toggle-item {
  background-color: transparent;

  &:before,
  &:after {
    background: var(--secondary-text-color);
    top: 0;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
}

.leave-enter-active,
.leave-leave-active {
  transition: all 1.2s;
}

.leave-enter,
.leave-leave-to {
  opacity: 0;
  transform: translateX(-15%);
}

.appear-enter-active {
  animation: appear-animation .5s;
}

.appear-leave-active {
  animation: appear-animation .5s reverse;
}

@keyframes appear-animation {
  0% {
    transform: translateY(-15%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
}

</style>