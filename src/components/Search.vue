<template>
    <div class="nav__search search">
        <div class="search__box">
            <div class="search__form">
                <input class="search__form-input" v-model="query" aria-label="..." type="search" placeholder="Cari...">
                <timesIcon @click="clearSearch" class="times-icon search__form-clear" width="17px" height="17px" />
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
    query AllHtml {
        allHtml: allHtmlPage {
            edges {
                node {
                    id
                    title
                    path
                }
            }
        }
        allTagshtml: allTagsPage {
            edges {
                node {
                    id
                    title
                    path
                }
            }
        }
        allCssref: allCssrefPage {
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
            this.index.add(this.$static.allHtml.edges.map(e => e.node));
            this.index.add(this.$static.allTagshtml.edges.map(e => e.node));
            this.index.add(this.$static.allCssref.edges.map(e => e.node));
        },
    }
</script>