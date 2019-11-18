<section id="box-shadow" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__links-direct" href="/property/box-shadow/" data-property-name="box-shadow"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook" data-property-name="box-shadow">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=css-boxshadow" data-tooltip="See on Can I use..."
        rel="external">Can I use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/box-shadow"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#box-shadow"><span>#</span>box-shadow</a>
    </h2>
    <div class="property__description">
      <p>Defines the shadow of the element.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="box-shadow: none;">box-shadow:
          none;</code>
      </p>
      <div class="example__description">
        <p>Removes any box-shadow that was applied to the element.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div box-shadow " id="box-shadow-none">Hello world</div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="box-shadow: 2px 6px;">box-shadow:
          2px 6px;</code>
      </p>
      <div class="example__description">
        <p>You need at least <strong>two values</strong>:</p>
        <ul>
          <li>the first is the <em>horizontal</em> offset</li>
          <li>the second is the <em>vertical</em> offset</li>
        </ul>
        <p>The shadow color will be inherited from the text color.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div box-shadow " id="box-shadow-2px-6px">Hello world</div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="box-shadow: 2px 6px red;">box-shadow: 2px 6px red;</code>
      </p>
      <div class="example__description">
        <p>You can define a <strong>color</strong> as the <em>last</em> value.</p>
        <p>As with <code class="shorthand"><a href="http://cssreference.io/#color">color</a></code>, you can use color
          names, hexadecimal, rgb, hsl...</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div box-shadow " id="box-shadow-2px-6px-red">Hello world</div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="box-shadow: 2px 4px 10px red;">box-shadow: 2px 4px 10px red;</code>
      </p>
      <div class="example__description">
        <p>The optional <strong>third value</strong> defines the <strong>blur</strong> of the shadow.</p>
        <p>The color will be diffused across 10px in this example, from opaque to transparent.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div box-shadow " id="box-shadow-2px-4px-10px-red">Hello world</div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy"
          data-clipboard-text="box-shadow: 2px 4px 10px 4px red;">box-shadow: 2px 4px 10px 4px red;</code>
      </p>
      <div class="example__description">
        <p>The optional <strong>fourth value</strong> defines the <strong>spread</strong> of the shadow.</p>
        <p>The spread defines how much the shadow should <em>grow</em>: it enhances the shadow.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div box-shadow " id="box-shadow-2px-4px-10px-4px-red">Hello world</div>
      </div>
    </aside>
  </section>
</section>