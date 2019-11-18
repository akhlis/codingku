<section id="flex-shrink" class="property">
  <header class="property__header">
    <nav class="property__links">
      <a class="property__collection" href="/flexbox/">
        In collection: <strong>flexbox</strong>
      </a>
      <a class="property__links-direct" href="/property/flex-shrink/" data-property-name="flex-shrink"
        data-tooltip="Single page for this property">Permalink</a>
      <a class="property__share" data-tooltip="Share on Twitter or Facebook" data-property-name="flex-shrink">Share</a>
      <a target="_blank" href="http://caniuse.com/#feat=flexbox" data-tooltip="See on Can I use..." rel="external">Can I
        use</a>
      <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/flex-shrink"
        data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
    </nav>
    <h2 class="property__name">
      <a href="#flex-shrink"><span>#</span>flex-shrink</a>
    </h2>
    <div class="property__description">
      <p>Defines how much a flexbox item should <strong>shrink</strong> if there&#39;s <strong>not enough</strong> space
        available.</p>
    </div>
  </header>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--default" data-tooltip="This is the property's default value">default</code>
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="flex-shrink: 1;">flex-shrink:
          1;</code>
      </p>
      <div class="example__description">
        <p>If there&#39;s <strong>not enough</strong> space available in the container&#39;s main axis, the element will
          <strong>shrink</strong> by a factor of <strong>1</strong>, and will wrap its content.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div flex-shrink " id="flex-shrink-1">
          <p class="block block--alpha"><strong>This is the flex-shrink target</strong>
            <p class="block block--pink">Foo bar</p>
            <p class="block block--yellow">Lorem ipsum</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="flex-shrink: 0;">flex-shrink:
          0;</code>
      </p>
      <div class="example__description">
        <p>The element will <strong>not</strong> shrink: it will retain the width it needs, and <strong>not</strong>
          wrap its content. Its siblings will shrink to give space to the target element.</p>
        <p>Because the target element will not wrap its content, there is a chance for the flexbox container&#39;s
          content to <strong>overflow</strong>.</p>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div flex-shrink " id="flex-shrink-0">
          <p class="block block--alpha"><strong>This is the flex-shrink target</strong>
            <p class="block block--pink">Foo bar</p>
            <p class="block block--yellow">Lorem ipsum</p>
        </div>
      </div>
    </aside>
  </section>
  <section class="example">
    <header class="example__header">
      <p class="example__name">
        <code class="example--value" data-tooltip="Click to copy" data-clipboard-text="flex-shrink: 2;">flex-shrink:
          2;</code>
      </p>
      <div class="example__description">
        <p>Because the flex-shrink value is <strong>relative</strong>, its behaviour depends on the value of the flexbox
          item <strong>siblings</strong>.</p>
        <p>In this example, the green item wants to fill 100% of the width. The space it needs is <strong>taken
            from</strong> its two siblings, and is divided in <strong>4</strong>:</p>
        <ul>
          <li><strong>3</strong> quarters are taken from the <strong>red</strong> item</li>
          <li><strong>1</strong> quarter is taken from the <strong>yellow</strong> item</li>
        </ul>
      </div>
    </header>
    <aside class="example__preview">
      <div class="example__browser"><i></i><i></i><i></i></div>
      <div class="example__output">
        <div class="example__output-div flex-shrink " id="flex-shrink-2">
          <p class="block block--alpha">Width<br><strong>100%</strong>
            <p class="block block--pink">Shrink<br><strong>3</strong></p>
            <p class="block block--yellow">Shrink<br><strong>1</strong></p>
        </div>
      </div>
    </aside>
  </section>
</section>