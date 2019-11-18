<section id="grid-template" class="property property__-shorthand">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/css-grid/">
        In collection: <strong>CSS Grid</strong>
      </a>
      <a class="property__links-direct" href="/property/grid-template/" data-property-name="grid-template"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook" data-property-name="grid-template">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=css-grid" data-tooltip="See on Can I use..." rel="external">Can
        I use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/grid-template"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#grid-template"><span>#</span>grid-template</a>
    </h2>
    <div class="property__description">
      <p>Shorthand property for <code class="shorthand"><a class="hash" href="/property/grid-template-rows"
            data-property-name="grid-template-rows">grid-template-rows</a></code> <code class="shorthand"><a
            class="hash" href="/property/grid-template-columns"
            data-property-name="grid-template-columns">grid-template-columns</a></code> and <code class="shorthand"><a
            class="hash" href="/property/grid-template-area"
            data-property-name="grid-template-area">grid-template-area</a></code>.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-template: none;">grid-template: none;</code>
      </p>
      <div class="example__description">
        <p>No rows, columns, or areas are defined.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-template " id="grid-template-none">
          <p class="block block--alpha"><strong>1.</strong> One</p>
          <p class="block block--beta"><strong>2.</strong> Two</p>
          <p class="block block--pink"><strong>3.</strong> Three</p>
          <p class="block block--yellow"><strong>4.</strong> Four</p>
          <p class="block block--orange"><strong>5.</strong> Five</p>
          <p class="block block--purple"><strong>6.</strong> Six</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-template: 200px 1fr / 100px auto 3rem;">grid-template: 200px 1fr / 100px auto
          3rem;</code>
      </p>
      <div class="example__description">
        <p>You can define <strong>rows</strong> first, <strong>columns</strong> second, by splitting them with a slash
          <code>/</code>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-template " id="grid-template-200px-1fr--100px-auto-3rem">
          <p class="block block--alpha"><strong>1.</strong> One</p>
          <p class="block block--beta"><strong>2.</strong> Two</p>
          <p class="block block--pink"><strong>3.</strong> Three</p>
          <p class="block block--yellow"><strong>4.</strong> Four</p>
          <p class="block block--orange"><strong>5.</strong> Five</p>
          <p class="block block--purple"><strong>6.</strong> Six</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-template: &quot;header header header&quot; 50px &quot;sidebar main main&quot; 200px / 100px auto;">grid-template:
          &quot;header header header&quot; 50px &quot;sidebar main main&quot; 200px / 100px auto;</code>
      </p>
      <div class="example__description">
        <p>You can define both <strong>areas</strong> <em>and</em> <strong>rows</strong> and <strong>columns</strong>
          dimensions. In this case, each set of areas have a row size attached to it. The first row is <code>50px</code>
          high, the second one is <code>200px</code> high. The sidebar column is <code>100px</code> wide, while the main
          column&#39;s width is set to <code>auto</code> and takes up the remaining width.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-template "
          id="grid-template-header-header-header-50px-sidebar-main-main-200px--100px-auto">
          <p class="block block--alpha">Header</p>
          <p class="block block--beta">Sidebar</p>
          <p class="block block--pink">Main</p>
        </div>
      </div>
    </aside>
  </section>
</section>
