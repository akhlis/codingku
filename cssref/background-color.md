# background-color

Defines the color of the element's background.

## Syntax

```css
background-color: color|transparent|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">background-color: transparent;</code>
		</p>
		<div class="example__description">
			<p>By default, the background color is transparent, basically meaning that there is no background color.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-color " id="background-color-transparent">Hello World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">background-color: red;</code>
		</p>
		<div class="example__description">
			<p>You can use one of the 140+ color names.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-color " id="background-color-red">Hello World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">background-color: #05ffb0;</code>
		</p>
		<div class="example__description">
			<p>You can use hexadecimal color codes.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-color " id="background-color-05ffb0">Hello World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">background-color: rgb(50, 115, 220);</code>
		</p>
		<div class="example__description">
			<p>You can use rgb() color codes:</p>
            <ul><li>the first value is for <code>red</code></li><li>the second value is for <code>green</code></li><li>the third value is for <code>blue</code></li></ul>
            <p>Each of them can have a value between 0 and 255.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-color " id="background-color-rgb50-115-220">Hello World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">background-color: rgba(50, 115, 220, 0.3);</code>
		</p>
		<div class="example__description">
			<p>You can use rgba() color codes:</p>
            <ul>
            <li>the first 3 values are for rgb</li>
            <li>the 4th value is for the alpha channel and defines the opacity of the color</li>
            </ul>
            <p>The alpha value can go from zero 0 (transparent) to one 1 (opaque).</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-color " id="background-color-rgba50-115-220-03">Hello World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">background-color: hsl(14, 100%, 53%);</code>
		</p>
		<div class="example__description">
			<p>You can use hsl() color codes:</p>
            <ul><li>the first value is for <code>hue</code> and can go from <strong>0</strong> to <strong>359</strong></li><li>the second value is for <code>saturation</code> and go from <strong>0%</strong> to <strong>100%</strong></li><li>the third value is for <code>luminosity</code> and go from <strong>0%</strong> to <strong>100%</strong></li></ul>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-color " id="background-color-hsl14-100-53">Hello World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">background-color: hsla(14, 100%, 53%, 0.6);</code>
		</p>
		<div class="example__description">
			<p>You can use hsl()a color codes:</p>
            <ul><li>the first 3 values are for <code>hsl</code></li><li>the 4th value is for the <code>alpha</code> channel and defines the opacity of the color</li></ul>
            <p>The alpha value can go from zero 0 (transparent) to one 1 (opaque).</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-color " id="background-color-hsla14-100-53-06">Hello World</div>
			</div>
		</div>
	</aside>
</section>