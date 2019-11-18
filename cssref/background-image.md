<section id="background-image" class="property">
    <header class="property__header">
        <nav class="property__links">
            <a class="property__collection" href="/backgrounds/">
                In collection: <strong>backgrounds</strong>
            </a>
            <a class="property__links-direct" href="/property/background-image/" data-property__name="background-image"
                data-tooltip="Single page for this property">Permalink</a>
            <a class="property__share" data-tooltip="Share on Twitter or Facebook"
                data-property__name="background-image">Share</a>
            <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/background-image"
                data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
        </nav>
        <h1 class="property__name">
            <a href="#background-image"><span>#</span>background-image</a>
        </h1>
        <div class="property__description">
            <p>Defines an image as the background of the element.</p>
        </div>
    </header>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--default" data-tooltip="This is the property's default value">default</code>
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-image: none;">background-image: none;</code>
            </p>
            <div class="example__description">
                <p>Removes any background image.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-image " id="background-image-none">Hello world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-image: url(/images/jt.png);">background-image:
                    url(/images/jt.png);</code>
            </p>
            <div class="example__description">
                <p>Uses the image defined in the <strong>url</strong> path. This path can either be <em>relative</em>
                    (to the css file) or <em>absolute</em> (like <code>http://cssreference.io/images/jt.png</code>).</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-image " id="background-image-urlimagesjtpng">Hello world
                </div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-image: linear-gradient(red, blue);">background-image:
                    linear-gradient(red, blue);</code>
            </p>
            <div class="example__description">
                <p>You can define a <strong>linear gradient</strong> as the background image.</p>
                <p>You need to define at least <strong>two colors</strong>. The first one will start at the top, the
                    second one at the bottom.</p>
                <p>The default angle is <code>to bottom</code> (or <code>180deg</code>), which means the gradient is
                    <strong>vertical</strong>, starting at the top, ending at the bottom of the element.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-image " id="background-image-linear-gradientred-blue">Hello
                    world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-image: linear-gradient(45deg, red, blue);">background-image:
                    linear-gradient(45deg, red, blue);</code>
            </p>
            <div class="example__description">
                <p>You can specify an <strong>angle</strong>, either in <strong>degrees</strong>, or with keywords.</p>
                <p>When using degress, you specify the <em>direction</em> of the gradient, or when it ends. So
                    <code>0deg</code> means the the <strong>top</strong> of the element, like 12:00 on a clock.</p>
                <p>In this example, <code>45deg</code> means 2:30, or the top right corner.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-image " id="background-image-linear-gradient45deg-red-blue">
                    Hello world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-image: radial-gradient(green, purple);">background-image:
                    radial-gradient(green, purple);</code>
            </p>
            <div class="example__description">
                <p>You can define a <strong>radial gradient</strong> as the background image.</p>
                <p>You need to define at least <strong>two colors</strong>. The first one will be at the center, the
                    second one at the edges.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-image " id="background-image-radial-gradientgreen-purple">
                    Hello world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-image: radial-gradient(circle, green, purple);">background-image:
                    radial-gradient(circle, green, purple);</code>
            </p>
            <div class="example__description">
                <p>You can specify the <strong>shape</strong> of the radial gradient: <strong>circle</strong> or
                    <strong>ellipse</strong> (default).</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-image "
                    id="background-image-radial-gradientcircle-green-purple">Hello world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-image: radial-gradient(circle, green 0%, purple 20%, orange 100%);">background-image:
                    radial-gradient(circle, green 0%, purple 20%, orange 100%);</code>
            </p>
            <div class="example__description">
                <p>You can specify <strong>color stops</strong> using percentage values.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-image "
                    id="background-image-radial-gradientcircle-green-0-purple-20-orange-100">Hello world</div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-image: radial-gradient(circle closest-side, green 0%, purple 20%, orange 100%);">background-image:
                    radial-gradient(circle closest-side, green 0%, purple 20%, orange 100%);</code>
            </p>
            <div class="example__description">
                <p>You can specify <em>where</em> the gradient should <strong>end</strong>:</p>
                <ul>
                    <li><code>closest-side</code></li>
                    <li><code>closest-corner</code></li>
                    <li><code>farthest-side</code></li>
                    <li><code>farthest-corner</code></li>
                </ul>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-image "
                    id="background-image-radial-gradientcircle-closest-side-green-0-purple-20-orange-100">Hello world
                </div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="background-image: radial-gradient(circle closest-side at 45px 45px, green 0%, purple 20%, orange 100%);">background-image:
                    radial-gradient(circle closest-side at 45px 45px, green 0%, purple 20%, orange 100%);</code>
            </p>
            <div class="example__description">
                <p>Like with the <a
                        href="http://cssreference.io/#background-position"><code>background-position</code></a>, you can
                    specify the <strong>position</strong> of the gradient.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div background-image "
                    id="background-image-radial-gradientcircle-closest-side-at-45px-45px-green-0-purple-20-orange-100">
                    Hello world</div>
            </div>
        </aside>
    </section>
</section>