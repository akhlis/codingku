<section id="box-sizing" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/box-model/">
        In collection: <strong>box-model</strong>
      </a>
      <a class="property__links-direct" href="/property/box-sizing/" data-property-name="box-sizing"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook" data-property-name="box-sizing">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=css3-boxsizing" data-tooltip="See on Can I use..."
        rel="external">Can I use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/box-sizing"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#box-sizing"><span>#</span>box-sizing</a>
    </h2>
    <div class="property__description">
      <p>Defines how the width and height of the element are calculated: whether they include the <em>padding</em> and
        <em>borders</em> or not.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="box-sizing: content-box;">box-sizing: content-box;</code>
      </p>
      <div class="example__description">
        <p>The <strong>width</strong> and <strong>height</strong> of the element only apply to the
          <strong>content</strong> of the element.</p>
        <p>For example, this element has</p>
        <ul>
          <li><code>border-width: 12px</code></li>
          <li><code>padding: 30px</code></li>
          <li><code>width: 200px</code></li>
        </ul>
        <p>The <em>full width</em> is 24px + 60px + 200px = <strong>284px</strong>.</p>
        <p>The content has the defined width. The box accomodates for those dimensions.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div box-sizing " id="box-sizing-content-box">
          <div class="actual"><span>Hello world</span>
            <div class="box box--red"></div>
          </div>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="box-sizing: border-box;">box-sizing: border-box;</code>
      </p>
      <div class="example__description">
        <p>The <strong>width</strong> and <strong>height</strong> of the element apply to all parts of the element: the
          <strong>content</strong>, the <strong>padding</strong> and the <strong>borders</strong>.</p>
        <p>For example, this element has</p>
        <ul>
          <li><code>border-width: 12px</code></li>
          <li><code>padding: 30px</code></li>
          <li><code>width: 200px</code></li>
        </ul>
        <p>The <em>full width</em> is <strong>200px</strong>, no matter what.</p>
        <p>The box has the defined width. The content accomodates for those dimensions, and ends up being 200px - 60px -
          24px = <strong>116px</strong>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div box-sizing " id="box-sizing-border-box">
          <div class="actual"><span>Hello world</span>
            <div class="box box--red"></div>
          </div>
        </div>
      </div>
    </aside>
  </section>
</section>