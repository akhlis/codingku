<section id="content" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__links-direct" href="/property/content/" data-property-name="content"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook" data-property-name="content">Share</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/content"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#content"><span>#</span>content</a>
    </h2>
    <div class="property__description">
      <p>Defines the text content of the <code>:before</code> and <code>:after</code> pseudo-elements.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="content: normal;">content:
          normal;</code>
      </p>
      <div class="example__description">
        <p>No content is added to the element.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div content " id="content-normal">
          <p data-something="cssreference">Hello world</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="content: &quot;Foo bar&quot;;">content: &quot;Foo bar&quot;;</code>
      </p>
      <div class="example__description">
        <p>Considering this HTML element:</p>
        <pre>&lt;p class="element"&gt;
  Hello world
&lt;/p&gt;</pre>
        <p>And this CSS:</p>
        <pre>.element:before {
  content: "Foo bar";
}</pre>
        <p>The text content will be <strong>prepended</strong> to the element&#39;s content.</p>
        <p>Notice how the end result <em>combines</em> text from the HTML and text from the CSS.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div content " id="content-foo-bar">
          <p data-something="cssreference">Hello world</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="content: url(/images/jt.png);">content: url(/images/jt.png);</code>
      </p>
      <div class="example__description">
        <p>You can insert <strong>images</strong> by using the <code>url()</code> function.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div content " id="content-urlimagesjtpng">
          <p data-something="cssreference">Hello world</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="content: attr(data-something);">content: attr(data-something);</code>
      </p>
      <div class="example__description">
        <p>Considering this HTML element:</p>
        <pre>&lt;p class="element" data-something="cssreference"&gt;
  Hello world
&lt;/p&gt;</pre>
        <p>And this CSS:</p>
        <pre>.element:before {
  content: attr(data-something);
}</pre>
        <p>The element will grab the text content from the HTML <strong>attribute</strong>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div content " id="content-attrdata-something">
          <p data-something="cssreference">Hello world</p>
        </div>
      </div>
    </aside>
  </section>
</section>