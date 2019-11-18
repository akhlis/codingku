# HTML `animation-duration` Tag

Defines how long the animation lasts.

## Syntax

```css
animation-duration: time|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">animation-duration: 0s;</code>
		</p>
		<div class="example__description">
			<p>The default value is zero seconds: the animation will simply not play.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-duration square square--plum is-animated" id="animation-duration-0s">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-duration: 1.2s;</code>
		</p>
		<div class="example__description">
			<p>You can use decimal values in seconds with the keyword s.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-duration square square--plum is-animated" id="animation-duration-12s">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-duration: 2400ms;</code>
		</p>
		<div class="example__description">
			<p>You can use milliseconds instead of seconds, with the keyword ms.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-duration square square--plum is-animated" id="animation-duration-2400ms">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>