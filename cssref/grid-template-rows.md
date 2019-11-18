<section id="grid-template-rows" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/css-grid/">
        In collection: <strong>CSS Grid</strong>
      </a>
      <a class="property__links-direct" href="/property/grid-template-rows/" data-property-name="grid-template-rows"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook"
        data-property-name="grid-template-rows">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=css-grid" data-tooltip="See on Can I use..." rel="external">Can
        I use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/grid-template-rows"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#grid-template-rows"><span>#</span>grid-template-rows</a>
    </h2>
    <div class="property__description">
      <p>Defines the rows of a <strong>grid container</strong>. You can specify the width of a row by using a keyword
        (like <code>auto</code>) or a length (like <code>10px</code>). The number of rows is determined by the number of
        <strong>values</strong> defined in the space-separated list.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-template-rows: none;">grid-template-rows: none;</code>
      </p>
      <div class="example__description">
        <p>No rows are defined.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-template-rows " id="grid-template-rows-none">
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
          data-clipboard-text="grid-template-rows: 120px auto 3rem;">grid-template-rows: 120px auto 3rem;</code>
      </p>
      <div class="example__description">
        <p>You can mix the <strong>units</strong>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-template-rows " id="grid-template-rows-120px-auto-3rem">
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
          data-clipboard-text="grid-template-rows: 20px 1fr 2fr;">grid-template-rows: 20px 1fr 2fr;</code>
      </p>
      <div class="example__description">
        <p>You can use the <code>fr</code> <strong>flex unit</strong> to distribute the <strong>remaining space</strong>
          across all flex rows.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-template-rows " id="grid-template-rows-20px-1fr-2fr">
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
