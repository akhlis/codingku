# background-attachment

Defines how the background image will behave when scrolling the page.

## Syntax

```css
background-attachment: scroll|fixed|local|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">background-attachment: scroll;</code>
		</p>
		<div class="example__description">
			<p>The background image will scroll with the page. It will also position and resize itself according to the element it's applied to.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-attachment " id="background-attachment-scroll"><p>Hello world</p></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">background-attachment: fixed;</code>
		</p>
		<div class="example__description">
			<p>The background image will not scroll with the page, and remain positioned according to the viewport. It will also position and resize itself according to the viewport. As a result, the background image will probably only be partially visible.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div background-attachment " id="background-attachment-fixed"><p>Hello world</p></div>
			</div>
		</div>
	</aside>
</section>