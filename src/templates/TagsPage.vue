<template>
  <RefsLayout :subtitles="subtitles" :links="links">
    <VueRemarkContent class="post__ref mb"></VueRemarkContent>
  </RefsLayout>
</template>

<page-query>
query ($id: ID!) {
  doc: tagsPage (id: $id) {
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
import links from '@/data/html-links.yaml'

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
//docs page
.attribute {
  display: flex;
  margin-bottom: 1em;
}
.attribute__name {
  margin-bottom: 0.5em;
}
.attribute__desc,
.attribute__value-desc {
  font-size: 15px;

  p {
    margin-bottom: 0;
  }
}
.attribute__desc--required {
  color: #ff4538;
}
.attribute__desc--novalue {
  color: #b86bff;
}
.attribute__header,
.attribute__value-header {
  position: relative;
  border: none;
}
.attribute__value-title {
  margin-bottom: 0.5em;
}
.attribute__preview {
  font-size: 16px;
  padding: 1.5em 0;
}
.docs-page code.attribute__tag {
  display: inline-block;
  font-family: "Inconsolata","Source Code Pro","Consolas","Monaco","Courier",monospace;
  font-size: 14px;
  font-weight: 700;
  padding: 1px 6px 3px;
  vertical-align: top;
  color: #333;
  background: #BADBFF;
}

.docs-page code.attribute__tag--required {
  background: #ff4538;
  color: #fff;
}

.docs-page code.attribute__tag--novalue {
  background: #e9d1ff;
}

.docs-page code.attribute__value-tag {
  position: relative;
  border-radius: 3px;
  color: #333;
  display: inline-block;
  font-family: "Inconsolata","Source Code Pro","Consolas","Monaco","Courier",monospace;
  font-size: 14px;
  font-weight: 700;
  padding: 1px 6px 3px;
  vertical-align: top;
  background: #DEFF82;

  &:before {
    color: #000;
    content: "=";
    font-weight: 400;
    margin-right: 0.5em;
    opacity: 0.5;
    pointer-events: none;
    position: absolute;
    right: 100%;
    top: 0;
  }
}

@media (min-width: 56.25em) {
  .attribute__header {
    flex-grow: 0;
    flex-shrink: 0;
    padding-right: 1rem;
    width: 30%;
  }
  .attribute__values {
    flex-grow: 1;
    flex-shrink: 1;
    width: 70%;
  }
}

.example {
    .example__label {
        margin: 0;
    }

    .example__label strong {
        background: #ffdd57;
        padding: 4px 8px;
    }

    .example__preview {
        border: 1px solid #ffdd57;
        padding: 1em 1.5em;

        header,
        footer {
            border: none;
        }

        a {
            font-weight: normal;
            display: inline-block;
            padding: 0;
            text-decoration: none;
            font-size: 1.6rem;
            color: var(--primary-color);
        }
    }
}

</style>
