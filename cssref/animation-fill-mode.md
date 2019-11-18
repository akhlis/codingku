# HTML `animation-fill-mode` Tag

Defines what happens before an animation starts and after it ends. The fill mode allows to tell the browser if the animation’s styles should also be applied outside of the animation.

## Syntax

```css
animation-fill-mode: none|forwards|backwards|both|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">animation-fill-mode: none;</code>
		</p>
		<div class="example__description">
			<p>The animation styles do not affect the default style: the element is set to its default state before the animation starts, and returns to that default state after the animation ends.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-fill-mode  square square--pink is-animated" id="animation-fill-mode-none">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-fill-mode: forwards;</code>
		</p>
		<div class="example__description">
			<p>The last styles applied at the end of the animation are retained afterwards.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-fill-mode  square square--pink is-animated" id="animation-fill-mode-forwards">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-fill-mode: backwards;</code>
		</p>
		<div class="example__description">
			<p>The animation's styles will already be applied before the animation actually starts.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-fill-mode  square square--pink is-animated" id="animation-fill-mode-backwards">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-fill-mode: both;</code>
		</p>
		<div class="example__description">
			<p>The styles are applied before and after the animation plays.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-fill-mode  square square--pink is-animated" id="animation-fill-mode-both">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>