<section id="grid-template-areas" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/css-grid/">
        In collection: <strong>CSS Grid</strong>
      </a>
      <a class="property__links-direct" href="/property/grid-template-areas/" data-property-name="grid-template-areas"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook"
        data-property-name="grid-template-areas">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=css-grid" data-tooltip="See on Can I use..." rel="external">Can
        I use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/grid-template-areas"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#grid-template-areas"><span>#</span>grid-template-areas</a>
    </h2>
    <div class="property__description">
      <p>Defines areas within a <strong>grid container</strong>. These areas can then be referenced when placing a
        <strong>grid item</strong>.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-template-areas: none;">grid-template-areas: none;</code>
      </p>
      <div class="example__description">
        <p>No area is defined.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-template-areas " id="grid-template-areas-none">
          <p class="block block--alpha">Header</p>
          <p class="block block--beta">Sidebar</p>
          <p class="block block--pink">Main</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-template-areas: &quot;header header header&quot; &quot;sidebar main main&quot;;">grid-template-areas:
          &quot;header header header&quot; &quot;sidebar main main&quot;;</code>
      </p>
      <div class="example__description">
        <p>You can use <strong>area names</strong> to specify which cells each grid item should occupy.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-template-areas "
          id="grid-template-areas-header-header-header-sidebar-main-main">
          <p class="block block--alpha">Header</p>
          <p class="block block--beta">Sidebar</p>
          <p class="block block--pink">Main</p>
        </div>
      </div>
    </aside>
  </section>
</section>
