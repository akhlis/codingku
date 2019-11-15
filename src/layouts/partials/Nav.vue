<template>
    <nav id="menu">
        <ul class='nav-menu__item menu'>
            <template v-for="group in links">
                <li class="menu-item">
                    <template v-if="group.items">
                        <span class="submenu-button" v-on:click="display_drop_menu()" v-if="isPhone || isMobile"></span>
                        <g-link class="menu-item__link" :to="group.link">{{ group.title }}</g-link>
                        <ul class="submenu" :class="{ submenuHover: (isLaptop || isDesktop) }">
                            <template v-for="item in group.items">
                                <li class="submenu-item">
                                    <g-link class="submenu-item__link" :to="item.link">{{ item.title }}</g-link>
                                </li>
                            </template>
                        </ul>
                    </template>
                    <template v-else>
                        <g-link class="menu-item__link" :to="group.link">{{ group.title }}</g-link>
                    </template>
                </li>
            </template>
        </ul>
    </nav>
</template>

<script>
import links from '@/data/nav-links.yaml'

export default {
    data() {
        return {
            isActive: false,
        };
    },
    methods: {
        display_drop_menu () {
            var drop_menu = event.target.parentElement.getElementsByClassName("submenu")[0];
            var drop_menus = document.getElementsByClassName("submenu");

            Array.from(drop_menus).forEach(function(e){
                if(e != drop_menu){
                    e.classList.remove("submenuActive");
                }
            });
            var lis = document.getElementById("menu").getElementsByTagName("li");
            Array.from(lis).forEach(function(e){
                e.style.marginTop = 0;
                e.classList.remove("submenu-opened")
            });
            (!drop_menu.classList.contains("submenuActive")) ? drop_menu.classList.add("submenuActive") : drop_menu.classList.remove("submenuActive");
            if(window.innerWidth < 900 && drop_menu.classList.contains("submenuActive")) {
                event.target.parentElement.nextSibling.style.marginTop = drop_menu.clientHeight + "px";
                event.target.parentElement.classList.add("submenu-opened");
            }
        }
    },
    computed: {
        links () {
            return links
        },
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
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu,
    .menu-item,
    .submenu,
    .submenu-item {
      padding: 0;
      margin: 0;
    }

    .menu,
    .submenu {
      list-style: none;
    }

    .menu-item__link,
    .menu-item__link:visited {
      display: block;
      font-family: var(--font-heading);
      color: var(--secondary-text-color);
      font-size: 1.4rem;
      font-weight: 400;
      text-transform: uppercase;
      text-decoration: none;

      &:hover,
      &:active {
        text-decoration: none;
        color: var(--primary-color);
      }

      &.active {
        color: var(--primary-color);
      }
    }

    .nav-menu {
      .menu {
        li {
          position: relative;

          .submenu-button {
            position: absolute;
            z-index: 99;
            right: 0;
            top: 0;
            display: block;
            border-left: 1px solid var(--border-color);
            height: 36px;
            width: 40px;
            cursor: pointer;

            &:before,
            &:after {
              position: absolute;
              display: block;
              background: var(--lightgrey-text-color);
              content: '';
            }

            &:before {
              top: 14px;
              right: 19px;
              width: 2px;
              height: 8px;
            }

            &:after {
              top: 17px;
              right: 16px;
              width: 8px;
              height: 2px;
            }

            &:hover,
            &:active {
              background: var(--body-dark-bg);
            }
          }

          &.submenu-opened {
            .submenu-button {
              &:before {
                display: none;
              }
            }
          }
        }
      }
    }

    .submenu {
      position: absolute;
      width: 100%;
      background: var(--main-bg);
      opacity: 0;
      transform: scaleY(0);
      transform-origin: top;
      transition: 0.25s;
      z-index: 199;

      li {
        display: block;
        position: relative;

        a {
          display: block;
          font-family: var(--font-heading);
          font-size: 1.4rem;
          font-weight: 400;
          color: var(--secondary-text-color);

          &:hover,
          &:active {
            text-decoration: none;
            color: var(--hovered-link-color);
            background: var(--body-light-bg);
          }
        }
      }
    }

    .submenuActive {
      opacity: 1;
      transform: scaleY(1);
    }

    .menu-item:hover .submenuHover {
      opacity: 1;
      transform: scaleY(1);
    }

    @media all and (max-width: 56.1875em) {
      .nav-menu {
        position: absolute;
        background: var(--main-bg);
        width: 100%;
        min-height: 1080px;
        height: 100%;
        padding: 0;
        overflow-x: hidden;
        overflow-y: auto;
        padding-top: 1em;
        transform: translateX(-100%);
        transition: all .3s ease;
        z-index: 999;
      }

      .menuMobile {
        transform: translateX(0);
      }

      .menu {
        min-height: 560px;
      }

      .menu-item {
        border-bottom: 1px solid var(--border-color);
      }

      .menu-item__link {
        padding: 5px 16px;
      }

      .submenu li {
        border-bottom: 1px solid var(--border-color);

        &:first-child {
          border-top: 1px solid var(--border-color);
        }

        &:last-child {
          border: none;
        }
      }

      .submenu-item__link {
        padding: 4px 24px;
      }
    }

    @media all and (min-width: 56.25em) {
      .heading {
        position: relative;
      }

      .nav-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-left: auto;
        margin-right: auto;
        max-width: calc(78rem + 34rem + 3.85714rem + 1vw);
        position: relative;
      }

      .nav-wrapper {
        padding: 0.9rem 0;
      }

      .nav-menu {
        position: relative;
      }

      .nav-mobile {
        display: none;
      }

      .nav-menu__item {
        display: flex;
        justify-content: flex-end;
      }

      .menu-item__link,
      .menu-item__link:visited {
        line-height: var(--nav-height);
        padding: 0 1em;
      }

      .submenu {
        width: 230px;
        box-shadow: 0 1px 3px rgba(0, 0, 0, .3);

        li {
          display: block;

          a {
            display: block;
            line-height: 3.2rem;
            padding: 0 1em;

            &:hover {
              text-decoration: none;
            }
          }

          &:last-child {
            padding-bottom: 1em;
          }
        }
      }
    }
</style>