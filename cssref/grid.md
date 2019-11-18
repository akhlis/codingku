<section id="grid" class="property property__-shorthand">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/css-grid/">
        In collection: <strong>CSS Grid</strong>
      </a>
      <a class="property__links-direct" href="/property/grid/" data-property-name="grid"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook" data-property-name="grid">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=css-grid" data-tooltip="See on Can I use..." rel="external">Can
        I use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/grid"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#grid"><span>#</span>grid</a>
    </h2>
    <div class="property__description">
      <p>Shorthand property for <code class="shorthand"><a class="hash" href="/property/grid-template-rows"
            data-property-name="grid-template-rows">grid-template-rows</a></code> <code class="shorthand"><a
            class="hash" href="/property/grid-template-columns"
            data-property-name="grid-template-columns">grid-template-columns</a></code> <code class="shorthand"><a
            class="hash" href="/property/grid-template-areas"
            data-property-name="grid-template-areas">grid-template-areas</a></code> <code class="shorthand"><a
            class="hash" href="/property/grid-auto-rows" data-property-name="grid-auto-rows">grid-auto-rows</a></code>
        <code class="shorthand"><a class="hash" href="/property/grid-auto-columns"
            data-property-name="grid-auto-columns">grid-auto-columns</a></code> and <code class="shorthand"><a
            class="hash" href="/property/grid-auto-flow" data-property-name="grid-auto-flow">grid-auto-flow</a></code>.
      </p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid: &quot;header header header&quot; 50px &quot;sidebar main main&quot; 200px / 100px auto;">grid:
          &quot;header header header&quot; 50px &quot;sidebar main main&quot; 200px / 100px auto;</code>
      </p>
      <div class="example__description">
        <p>You can use it as <code>grid-template</code> by setting all <strong>explicit</strong> rows, columns, and
          areas.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid " id="grid-header-header-header-50px-sidebar-main-main-200px--100px-auto">
          <p class="block block--alpha">Header</p>
          <p class="block block--beta">Sidebar</p>
          <p class="block block--pink">Main</p>
          <p class="block block--purple">Other</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid: 200px 100px / auto-flow 30%;">grid: 200px 100px / auto-flow 30%;</code>
      </p>
      <div class="example__description">
        <p>You can combine <code>grid-template-rows</code> with <code>grid-auto-columns</code>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid " id="grid-200px-100px--auto-flow-30">
          <p class="block block--alpha"><strong>1.</strong> One</p>
          <p class="block block--beta"><strong>2.</strong> Two</p>
          <p class="block block--pink"><strong>3.</strong> Three</p>
          <p class="block block--yellow"><strong>4.</strong> Four</p>
          <p class="block block--purple"><strong>5.</strong> Five</p>
          <p class="block block--orange"><strong>6.</strong> Six</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid: auto-flow 50px / 200px 100px;">grid: auto-flow 50px / 200px 100px;</code>
      </p>
      <div class="example__description">
        <p>You can combine <code>grid-auto-rows</code> with <code>grid-template-columns</code>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid " id="grid-auto-flow-50px--200px-100px">
          <p class="block block--alpha"><strong>1.</strong> One</p>
          <p class="block block--beta"><strong>2.</strong> Two</p>
          <p class="block block--pink"><strong>3.</strong> Three</p>
          <p class="block block--yellow"><strong>4.</strong> Four</p>
          <p class="block block--purple"><strong>5.</strong> Five</p>
          <p class="block block--orange"><strong>6.</strong> Six</p>
        </div>
      </div>
    </aside>
  </section>
</section>
