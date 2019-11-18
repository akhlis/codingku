<section id="grid-column" class="property property__-shorthand">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/css-grid/">
        In collection: <strong>CSS Grid</strong>
      </a>
      <a class="property__links-direct" href="/property/grid-column/" data-property-name="grid-column"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook" data-property-name="grid-column">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=css-grid" data-tooltip="See on Can I use..." rel="external">Can
        I use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/grid-column"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#grid-column"><span>#</span>grid-column</a>
    </h2>
    <div class="property__description">
      <p>Shorthand property for <code class="shorthand"><a class="hash" href="/property/grid-column-start"
            data-property-name="grid-column-start">grid-column-start</a></code> and <code class="shorthand"><a
            class="hash" href="/property/grid-column-end"
            data-property-name="grid-column-end">grid-column-end</a></code>.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-column: auto auto;">grid-column: auto auto;</code>
      </p>
      <div class="example__description">
        <p>The grid item&#39;s column start and end are automatically set.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-column " id="grid-column-auto-auto">
          <p class="block block--alpha">Item</p>
          <p class="block block--beta">Item</p>
          <p class="block block--pink"><strong>Target</strong></p>
          <p class="block block--yellow">Item</p>
          <p class="block block--purple">Item</p>
          <p class="block block--alpha">Item</p>
          <p class="block block--beta">Item</p>
          <p class="block block--yellow">Item</p>
          <p class="block block--purple">Item</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="grid-column: 1 / 3;">grid-column:
          1 / 3;</code>
      </p>
      <div class="example__description">
        <p>The grid item starts before the first column and ends just before the third one.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-column " id="grid-column-1--3">
          <p class="block block--alpha">Item</p>
          <p class="block block--beta">Item</p>
          <p class="block block--pink"><strong>Target</strong></p>
          <p class="block block--yellow">Item</p>
          <p class="block block--purple">Item</p>
          <p class="block block--alpha">Item</p>
          <p class="block block--beta">Item</p>
          <p class="block block--yellow">Item</p>
          <p class="block block--purple">Item</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="grid-column: span 3;">grid-column:
          span 3;</code>
      </p>
      <div class="example__description">
        <p>The grid item spans <strong>3 columns</strong>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-column " id="grid-column-span-3">
          <p class="block block--alpha">Item</p>
          <p class="block block--beta">Item</p>
          <p class="block block--pink"><strong>Target</strong></p>
          <p class="block block--yellow">Item</p>
          <p class="block block--purple">Item</p>
          <p class="block block--alpha">Item</p>
          <p class="block block--beta">Item</p>
          <p class="block block--yellow">Item</p>
          <p class="block block--purple">Item</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-column: 1 / span 4;">grid-column: 1 / span 4;</code>
      </p>
      <div class="example__description">
        <p>The grid items starts before the first column and spans for <strong>4 columns</strong>, creating a new one in
          the process.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-column " id="grid-column-1--span-4">
          <p class="block block--alpha">Item</p>
          <p class="block block--beta">Item</p>
          <p class="block block--pink"><strong>Target</strong></p>
          <p class="block block--yellow">Item</p>
          <p class="block block--purple">Item</p>
          <p class="block block--alpha">Item</p>
          <p class="block block--beta">Item</p>
          <p class="block block--yellow">Item</p>
          <p class="block block--purple">Item</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="grid-column: main;">grid-column:
          main;</code>
      </p>
      <div class="example__description">
        <p>You can use an <strong>area name</strong> to &quot;copy&quot; its column start and end positions.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-column " id="grid-column-main">
          <p class="block block--alpha">Header</p>
          <p class="block block--beta">Sidebar</p>
          <p class="block block--yellow">Main</p>
          <p class="block block--purple">Footer</p>
          <p class="block block--pink"><strong>Target</strong></p>
        </div>
      </div>
    </aside>
  </section>
</section>
