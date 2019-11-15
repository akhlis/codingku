// Import global styles
import '~/assets/style/index.scss'

// Add global components
import Layout from '~/layouts/Default.vue'
import DocsLayout from '~/layouts/Docs.vue'
import RefsLayout from '~/layouts/Refs.vue'
import Section from '~/components/Section.vue'
import Feature from '~/components/Feature.vue'
import Card from '~/components/Card'
import VueMq from 'vue-mq';

import VueScrollTo from 'vue-scrollto'

export default function (Vue, { head, router, isServer }) {
  Vue.use(VueMq, {
    breakpoints: {
        phone: 480,
        mobile: 900,
        laptop: 1240,
        desktop: Infinity
    }
  });

  Vue.component('Layout', Layout)
  Vue.component('DocsLayout', DocsLayout)
  Vue.component('RefsLayout', RefsLayout)
  Vue.component('Section', Section)
  Vue.component('Feature', Feature)
  Vue.component('Card', Card)

  Vue.use(VueScrollTo)

  // head.link.push({
  //   rel: 'stylesheet',
  //   href: 'https://fonts.googleapis.com/css?family=Open+Sans|Roboto'
  // })
}
