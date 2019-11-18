# background-clip

Defines how far the background should extend within the element.

## Syntax

```css
background-clip: border-box|padding-box|content-box|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">background-clip: border-box;</code>
		</p>
		<div class="example__description">
			<p>The background extends completely throughout the element, even under the border.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-clip " id="background-clip-border-box">Hello world</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">background-clip: padding-box;</code>
		</p>
		<div class="example__description">
			<p>The background only extends to the edge of the border: it includes the padding but not the border.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-clip " id="background-clip-padding-box">Hello world</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">background-clip: content-box;</code>
		</p>
		<div class="example__description">
			<p>The background only extends to the edge of the content: it doesn't include the padding, nor the border.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-clip " id="background-clip-content-box">Hello world</div>
			</div>
		</div>
	</aside>
</section>