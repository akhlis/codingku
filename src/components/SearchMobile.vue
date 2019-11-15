<template>
    <div class="nav-search search">
        <div class="search__box">
            <div class="search__form">
                <input class="search__form-input" v-model="query" aria-label="..." type="search" placeholder="Cari...">
                <timesIcon @click="clearSearch" class="times-icon search__form-clear" width="18px" height="18px" />
                <searchIcon class="search-icon search__form-search" width="14px" height="14px" />
            </div>
            <div v-if="searchResults.length > 0" class="search__query">
                <g-link v-for="item in searchResults" :key="item.id" class="search__item-link search__items" :to="item.path">
                    <div class="search__item">
                        <div class="search__item-content">
                            <h2 class="search__item-title" v-html="item.title" />
                        </div>
                    </div>
                </g-link>
            </div>
        </div>
    </div>
</template>

<static-query>
    query AllProduct {
        allProduct: allHtmlPage {
            edges {
                node {
                    id
                    title
                    path
                }
            }
        }
    }
</static-query>

<script>
    import FlexSearch from "flexsearch";
    import searchIcon from '@/assets/images/icons/search.svg'
    import timesIcon from '@/assets/images/icons/times.svg'

    export default {
        data() {
            return {
                query: "",
                index: null
            };
        },
        components: {
            searchIcon,
            timesIcon
        },
        computed: {
            searchResults() {
                if (this.index === null || !this.query || this.query.length < 2)
                    return [];
                return this.index.search({
                    query: this.query,
                    limit: 10
                });
            }
        },
        methods: {
            clearSearch() {
                return this.query = ''
            }
        },
        mounted() {
            this.index = new FlexSearch({
                tokenize: "forward",
                doc: {
                    id: "id",
                    field: ["title"]
                }
            });
            this.index.add(this.$static.allProduct.edges.map(e => e.node));
        },
    }
</script>

<style lang="postcss" scoped>
    .search {
        display: grid;
        grid-column-gap: calc(1.28571rem + .5vw);
        grid-template-columns: 1fr minmax(auto, 89.99rem) 1fr;
        position: relative;
    }

    .search__box {
        grid-column: 2/3;
        position: relative;
    }

    .search__form {
        position: relative;

        & input {
            color: var(--secondary-text-color);
            width: 100%;
            border: 1px solid var(--border-color);
            border-radius: 20px;
            outline: none;
            background-color: transparent;
            padding: 0.4em 2em;
            box-sizing: border-box;
        }

        &:hover .search__form-clear,
        &:focus .search__form-clear {
            color: #969696;
        }

        & input:focus {
            border-color: var(--accent-color);
        }
    }

    .search__form-search,
    .search__form-clear {
        position: absolute;
        color: #969696;
    }

    .search__form-search {
        top: 9px;
        left: 0.75em;
    }

    .search__form-clear {
        color: var(--light-text-color);
        top: 4px;
        right: 0.75em;
        box-sizing: content-box;
        padding: 4px;
        cursor: pointer;
    }

    .search__query {
        position: absolute;
        top: 32px;
        left: 0;
        width: 100%;
        overflow-y: auto;
        background: var(--main-bg);
        transition: .3s cubic-bezier(.25, .8, .5, 1);
        padding: 1em 0;
        box-shadow: 0 3px 1px -2px rgba(0, 0, 0, .2), 0 2px 2px 0 rgba(0, 0, 0, .14), 0 1px 5px 0 rgba(0, 0, 0, .12);
        z-index: 3;
    }

    .search__item {
        display: flex;
        align-items: center;
        padding: 0.5em;

        &:hover,
        &:active {
            background: var(--body-light-bg);
        }
    }

    .search__item-link {
        color: var(--secondary-text-color);

        &:hover {
            text-decoration: none;
        }
    }

    .search__item-image {
        flex-basis: 15%;
        position: relative;
        padding-top: calc(4/3 * 15%);

        & img {
            position: absolute;
            top: 0;
            width: 100%;
            height: 100%;
            z-index: 4;
        }
    }

    .search__item-content {
        flex-basis: 85%;
        padding-left: 1em;
    }

    .search__item-title {
        font-size: 1.4rem;
        font-weight: normal;
        margin: 0;
    }
</style>