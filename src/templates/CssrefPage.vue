<template>
  <RefsLayout :subtitles="subtitles" :links="links">
    <VueRemarkContent class="post__ref post__css mb"></VueRemarkContent>
  </RefsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: cssrefPage (id: $id) {
    title
    headings (depth: h1) {
      value
    }
    subtitles: headings {
      depth
      value
      anchor
    }
  }
}
</page-query>

<script>
import links from '@/data/css-links.yaml'

export default {
  computed: {
    links () {
      return links
    },
    subtitles() {
      // Remove h1, h4, h5, h6 titles
      let subtitles = this.$page.doc.subtitles.filter(function(value, index, arr){
        return [2,3].includes(value.depth)
      })
      return subtitles
    }
  },
  metaInfo () {
    const { title, headings } = this.$page.doc

    return {
      title: title || (headings.length ? headings[0].value : undefined)
    }
  }
}
</script>

<style lang="scss">

@media screen and (min-width: 800px) {
  .example {
    display: flex;
    align-items: flex-start;
    padding: 1em 0;
  }

  .example__header,
  .example__preview {
    flex-grow: 1;
    flex-shrink: 1;
  }

  .example__header {
    padding-right: 1em;
    width: 60%;
  }

  .example__preview {
    width: 40%;
  }

  .post__css {

    .example--default,
    .example--value,
    .example--recommended {
      background: #ffdd57;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.7);
      display: inline-block;
      padding: 0.1em 0.5em 0.15em;
      vertical-align: top;
    }

    .example--default,
    .example--recommended {
      background: #fff;
      float: right;
    }

    .example--default {
      box-shadow: inset 0 0 0 1px #ff4538;
      color: #ff4538;
    }
  }
  }


  .example__browser {
    align-items: center;
    background: #f2f2f2;
    border: 1px solid #e6e6e6;
    border-bottom: none;
    border-top-left-radius: 3px;
    border-top-right-radius: 3px;
    display: flex;
    height: 1.5em;
    justify-content: flex-start;
    padding-left: 0.5em;

    i {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 290486px;
      display: block;
      flex-grow: 0;
      flex-shrink: 0;
      height: 4px;
      margin-right: 2px;
      width: 4px;
    }
  }

  .example__output {
    border: 1px solid #e6e6e6;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.05);
    font-size: 0.8em;
    padding: 0.5em;
  }

  .example__output-div {
    padding: 0.8em 1em;
    position: relative;
  }
</style>