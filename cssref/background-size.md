<section id="background-size" class="property">
    <header class="property__header">
        <nav class="property__links">
            <a class="property__collection" href="/backgrounds/">
                In collection: <strong>backgrounds</strong>
            </a>
            <a class="property__links-direct" href="/property/background-size/" data-property-name="background-size"
                data-tooltip="Single page for this property">Permalink</a>
            <a class="property__share" data-tooltip="Share on Twitter or Facebook"
                data-property-name="background-size">Share</a>
            <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/background-size"
                data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
        </nav>
        <h2 class="property__name">
            <a href="#background-size"><span>#</span>background-size</a>
        </h2>
        <div class="property__description">
            <p>Defines the size of the background image.</p>
        </div>
    </header>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--default" data-tooltip="This is the property's default value">default</code>
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-size: auto auto;">background-size: auto auto;</code>
            </p>
            <div class="example__description">
                <p>The background image will retain its <strong>original</strong> size.</p>
                <p>For example, this background image is <strong>960px by 640px</strong> large. Its aspect ratio is
                    <strong>3 by 2</strong>. It&#39;s bigger than its container (which is 150px high) and will thus be
                    <strong>clipped</strong>.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-size " id="background-size-auto-auto">Hello world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-size: 120px 80px;">background-size: 120px 80px;</code>
            </p>
            <div class="example__description">
                <p>You can specify a size in <strong>pixels</strong>:</p>
                <ul>
                    <li>the first value is the <strong>horizontal</strong> size</li>
                    <li>the second is the <strong>vertical</strong> size</li>
                </ul>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-size " id="background-size-120px-80px">Hello world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-size: 100% 50%;">background-size: 100% 50%;</code>
            </p>
            <div class="example__description">
                <p>You can use <strong>percentage</strong> values as well. Beware that this can alter the <strong>aspect
                        ratio</strong> of the background image, and lead to unexpected results.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-size " id="background-size-100-50">Hello world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-size: contain;">background-size: contain;</code>
            </p>
            <div class="example__description">
                <p>The keyword <code>contain</code> will resize the background image to make sure it remains
                    <strong>fully visible</strong>.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-size " id="background-size-contain">Hello world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-size: cover;">background-size: cover;</code>
            </p>
            <div class="example__description">
                <p>The keyword <code>cover</code> will resize the background image to make sure the element is
                    <strong>fully covered</strong>.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-size " id="background-size-cover">Hello world</div>
            </div>
        </aside>
    </section>
</section>
