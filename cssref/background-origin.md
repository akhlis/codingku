<section id="background-origin" class="property">
    <header class="property__header">
        <nav class="property__links">
            <a class="property__collection" href="/backgrounds/">
                In collection: <strong>backgrounds</strong>
            </a>
            <a class="property__links-direct" href="/property/background-origin/" data-property-name="background-origin"
                data-tooltip="Single page for this property">Permalink</a>
            <a class="property__share" data-tooltip="Share on Twitter or Facebook"
                data-property-name="background-origin">Share</a>
            <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/background-origin"
                data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
        </nav>
        <h1 class="property__name">
            <a href="#background-origin"><span>#</span>background-origin</a>
        </h1>
        <div class="property__description">
            <p>Defines the origin of the background image.</p>
        </div>
    </header>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--default" data-tooltip="This is the property's default value">default</code>
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-origin: padding-box;">background-origin: padding-box;</code>
            </p>
            <div class="example__description">
                <p>The background image starts at the <em>edge</em> of the border: within padding but <em>not</em> the
                    border.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-origin " id="background-origin-padding-box">
                    <p>Hello world</p>
                </div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-origin: border-box;">background-origin: border-box;</code>
            </p>
            <div class="example__description">
                <p>The background image starts <strong>under</strong> the border.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-origin " id="background-origin-border-box">
                    <p>Hello world</p>
                </div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-origin: content-box;">background-origin: content-box;</code>
            </p>
            <div class="example__description">
                <p>The background image only starts at the edge of the <em>content</em>: it doesn&#39;t include the
                    padding, nor the border.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-origin " id="background-origin-content-box">
                    <p>Hello world</p>
                </div>
            </div>
        </aside>
    </section>
</section>