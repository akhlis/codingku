<section id="grid-auto-flow" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/css-grid/">
        In collection: <strong>CSS Grid</strong>
      </a>
      <a class="property__links-direct" href="/property/grid-auto-flow/" data-property-name="grid-auto-flow"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook"
        data-property-name="grid-auto-flow">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=css-grid" data-tooltip="See on Can I use..." rel="external">Can
        I use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/grid-auto-flow"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#grid-auto-flow"><span>#</span>grid-auto-flow</a>
    </h2>
    <div class="property__description">
      <p>Defines the position of auto-generated <strong>grid items</strong>.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-auto-flow: row;">grid-auto-flow: row;</code>
      </p>
      <div class="example__description">
        <p>In this <strong>two-columns</strong> setup, the second grid item is two-columns wide, the third item is
          four-rows tall.</p>
        <p>The other grid items are placed on additional <strong>rows</strong>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-auto-flow " id="grid-auto-flow-row">
          <p class="block block--alpha"><strong>1.</strong> One</p>
          <p class="two-wide block block--beta"><strong>2.</strong> Two: <strong>2 columns wide</strong></p>
          <p class="four-tall block block--pink"><strong>3.</strong> Three: <strong>4 rows tall</strong></p>
          <p class="block block--yellow"><strong>4.</strong> Four</p>
          <p class="block block--orange"><strong>5.</strong> Five</p>
          <p class="block block--purple"><strong>6.</strong> Six</p>
          <p class="block block--alpha"><strong>7.</strong> Seven</p>
          <p class="block block--beta"><strong>8.</strong> Eight</p>
          <p class="block block--yellow"><strong>9.</strong> Nine</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-auto-flow: column;">grid-auto-flow: column;</code>
      </p>
      <div class="example__description">
        <p>The other grid items are placed on additional <strong>columns</strong>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-auto-flow " id="grid-auto-flow-column">
          <p class="block block--alpha"><strong>1.</strong> One</p>
          <p class="two-wide block block--beta"><strong>2.</strong> Two: <strong>2 columns wide</strong></p>
          <p class="four-tall block block--pink"><strong>3.</strong> Three: <strong>4 rows tall</strong></p>
          <p class="block block--yellow"><strong>4.</strong> Four</p>
          <p class="block block--orange"><strong>5.</strong> Five</p>
          <p class="block block--purple"><strong>6.</strong> Six</p>
          <p class="block block--alpha"><strong>7.</strong> Seven</p>
          <p class="block block--beta"><strong>8.</strong> Eight</p>
          <p class="block block--yellow"><strong>9.</strong> Nine</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="grid-auto-flow: dense;">grid-auto-flow: dense;</code>
      </p>
      <div class="example__description">
        <p>The <strong>dense</strong> algorithm tries to place all other grid items in order to fill all the
          &quot;holes&quot; in the grid.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div grid-auto-flow " id="grid-auto-flow-dense">
          <p class="block block--alpha"><strong>1.</strong> One</p>
          <p class="two-wide block block--beta"><strong>2.</strong> Two: <strong>2 columns wide</strong></p>
          <p class="four-tall block block--pink"><strong>3.</strong> Three: <strong>4 rows tall</strong></p>
          <p class="block block--yellow"><strong>4.</strong> Four</p>
          <p class="block block--orange"><strong>5.</strong> Five</p>
          <p class="block block--purple"><strong>6.</strong> Six</p>
          <p class="block block--alpha"><strong>7.</strong> Seven</p>
          <p class="block block--beta"><strong>8.</strong> Eight</p>
          <p class="block block--yellow"><strong>9.</strong> Nine</p>
        </div>
      </div>
    </aside>
  </section>
</section>
