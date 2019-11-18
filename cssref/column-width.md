<section id="column-width" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__links-direct" href="/property/column-width/" data-property-name="column-width"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook" data-property-name="column-width">Share</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/column-width"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#column-width"><span>#</span>column-width</a>
    </h2>
    <div class="property__description">
      <p>Defines the number of columns of the element.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="column-width: auto;">column-width: auto;</code>
      </p>
      <div class="example__description">
        <p>The element will <strong>not</strong> distribute its child elements into columns, unlesse a <code
            class="shorthand"><a href="http://cssreference.io/#column-count">column-count</a></code> value is defined.
          In that case, the column width will be infered from the column count.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div column-width " id="column-width-auto">
          <p class="block block--alpha">Hello world</p>
          <p class="block block--beta">Foo bar</p>
          <p class="block block--pink">CSS Reference</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="column-width: 10px;">column-width: 10px;</code>
      </p>
      <div class="example__description">
        <p>You can use <strong>pixel</strong> values for the column width.</p>
        <p>The number of columns will be the minimum needed to distribute all the content across the element.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div column-width " id="column-width-10px">
          <p class="block block--alpha">Hello world</p>
          <p class="block block--beta">Foo bar</p>
          <p class="block block--pink">CSS Reference</p>
        </div>
      </div>
    </aside>
  </section>
</section>