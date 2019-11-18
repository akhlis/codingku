<section id="flex-wrap" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/flexbox/">
        In collection: <strong>flexbox</strong>
      </a>
      <a class="property__links-direct" href="/property/flex-wrap/" data-property-name="flex-wrap"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook" data-property-name="flex-wrap">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=flexbox" data-tooltip="See on Can I use..." rel="external">Can I
        use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/flex-wrap"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#flex-wrap"><span>#</span>flex-wrap</a>
    </h2>
    <div class="property__description">
      <p>Defines if flexbox items appear on a <strong>single line</strong> or on <strong>multiple lines</strong> within
        a flexbox container.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="flex-wrap: nowrap;">flex-wrap:
          nowrap;</code>
      </p>
      <div class="example__description">
        <p>The flexbox items will remain on a <strong>single line</strong>, no matter what, and will eventually overflow
          if needed.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div flex-wrap " id="flex-wrap-nowrap">
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
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="flex-wrap: wrap;">flex-wrap:
          wrap;</code>
      </p>
      <div class="example__description">
        <p>The flexbox items will be distributed among <strong>multiple lines</strong> if needed.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div flex-wrap " id="flex-wrap-wrap">
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
          data-clipboard-text="flex-wrap: wrap-reverse;">flex-wrap: wrap-reverse;</code>
      </p>
      <div class="example__description">
        <p>The flexbox items will be distributed among <strong>multiple lines</strong> if needed. Any additional line
          will appear <strong>before</strong> the previous one.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div flex-wrap " id="flex-wrap-wrap-reverse">
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
</section>