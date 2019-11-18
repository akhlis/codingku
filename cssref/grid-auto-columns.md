<section id="grid-auto-columns" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/css-grid/">
        In collection: <strong>CSS Grid</strong>
      </a>
      <a class="property__links-direct" href="/property/grid-auto-columns/" data-property-name="grid-auto-columns"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook"
        data-property-name="grid-auto-columns">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=css-grid" data-tooltip="See on Can I use..." rel="external">Can
        I use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/grid-auto-columns"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#grid-auto-columns"><span>#</span>grid-auto-columns</a>
    </h2>
    <div class="property__description">
      <p>Defines the size of grid columns that were created <em>implicitly</em>: it means that
        <code>grid-auto-columns</code> targets the columns that were <em>not</em> defined with
        <code>grid-template-columns</code> or <code>grid-template-areas</code>.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-auto-columns: auto;">grid-auto-columns: auto;</code>
      </p>
      <div class="example__description">
        <p>The implicity-created columns have an <code>auto</code> size.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-auto-columns " id="grid-auto-columns-auto">
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
          data-clipboard-text="grid-auto-columns: 100px;">grid-auto-columns: 100px;</code>
      </p>
      <div class="example__description">
        <p>Here we combine <code>grid-template-areas: &quot;header header header&quot; &quot;sidebar main
            main&quot;</code> with <code>grid-template-columns: 50px 200px</code>.</p>
        <p>In this situation, the <code>grid-template-areas</code> defines <strong>3 columns</strong>, while the
          <code>grid-template-columns</code> only defines <strong>2</strong> column widths.</p>
        <p>As a result, the third column width takes its value from the <code>grid-auto-columns</code> property:
          <code>100px</code>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-auto-columns " id="grid-auto-columns-100px">
          <p class="block block--alpha">Header</p>
          <p class="block block--beta">Sidebar</p>
          <p class="block block--pink">Main</p>
          <p class="block block--yellow">50px</p>
          <p class="block block--purple">200px</p>
          <p class="block block--orange">100px</p>
        </div>
      </div>
    </aside>
  </section>
</section>
