<section id="border-collapse" class="property">
    <header class="property__header">
        <nav class="property__links">
            <a class="property__links-direct" href="/property/border-collapse/" data-property-name="border-collapse"
                data-tooltip="Single page for this property">Permalink</a>
            <a class="property__share" data-tooltip="Share on Twitter or Facebook"
                data-property-name="border-collapse">Share</a>
            <a target="_blank" href="https://developer.mozilla.org/en/docs/Web/CSS/border-collapse"
                data-tooltip="See on Mozilla Developer Network" rel="external">MDN</a>
        </nav>
        <h2 class="property__name">
            <a href="#border-collapse"><span>#</span>border-collapse</a>
        </h2>
        <div class="property__description">
            <p>Defines whether <strong>table</strong> borders should be separated or collapsed.</p>
        </div>
    </header>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--default" data-tooltip="This is the property's default value">default</code>
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="border-collapse: separate;">border-collapse: separate;</code>
            </p>
            <div class="example__description">
                <p>Each table <strong>cell</strong> will display its own borders.</p>
                <p>In this example, each cell has a <code>border-width</code> of <strong>4px</strong>. As a result, the
                    border between <em>two</em> cells will be <strong>8px</strong>.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div border-collapse " id="border-collapse-separate">
                    <table>
                        <tr>
                            <td><strong>Name</strong></td>
                            <td><strong>Instrument</strong></td>
                        </tr>
                        <tr>
                            <td>John Lennon</td>
                            <td>Rhythm Guitar</td>
                        </tr>
                        <tr>
                            <td>Paul McCartney</td>
                            <td>Bass</td>
                        </tr>
                        <tr>
                            <td>George Harrison</td>
                            <td>Lead Guitar</td>
                        </tr>
                        <tr>
                            <td>Ringo Starr</td>
                            <td>Drums</td>
                        </tr>
                    </table>
                </div>
            </div>
        </aside>
    </section>
    <section class="example">
        <header class="example__header">
            <p class="example__name">
                <code class="example--value" data-tooltip="Click to copy"
                    data-clipboard-text="border-collapse: collapse;">border-collapse: collapse;</code>
            </p>
            <div class="example__description">
                <p>Adjacent table cells will <strong>merge</strong> their borders together.</p>
                <p>The cell that appears <em>first</em> in the code will &quot;win&quot;: its borders will <em>mask</em>
                    those of the following cells.</p>
            </div>
        </header>
        <aside class="example__preview">
            <div class="example__browser"><i></i><i></i><i></i></div>
            <div class="example__output">
                <div class="example__output-div border-collapse " id="border-collapse-collapse">
                    <table>
                        <tr>
                            <td><strong>Name</strong></td>
                            <td><strong>Instrument</strong></td>
                        </tr>
                        <tr>
                            <td>John Lennon</td>
                            <td>Rhythm Guitar</td>
                        </tr>
                        <tr>
                            <td>Paul McCartney</td>
                            <td>Bass</td>
                        </tr>
                        <tr>
                            <td>George Harrison</td>
                            <td>Lead Guitar</td>
                        </tr>
                        <tr>
                            <td>Ringo Starr</td>
                            <td>Drums</td>
                        </tr>
                    </table>
                </div>
            </div>
        </aside>
    </section>
</section>