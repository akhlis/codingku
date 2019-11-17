# HTML `animation-delay` Tag

Defines how long the animation has to wait before starting. The animation will only be delayed on its first iteration.

## Syntax

```css
animation-delay: time|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">animation-delay: 0s;</code>
		</p>
		<div class="example__description">
			<p>The animation will wait zero seconds, and thus start right away.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-delay square square--plum is-animated" id="animation-delay-0s">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-delay: 1.2s;</code>
		</p>
		<div class="example__description">
			<p>You can use decimal values in seconds with the keyword s</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-delay square square--plum is-animated" id="animation-delay-12s">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-delay: 2400ms;</code>
		</p>
		<div class="example__description">
			<p>You can use milliseconds instead of seconds, with the keyword ms.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-delay square square--plum is-animated" id="animation-delay-2400ms">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-delay: -500ms;</code>
		</p>
		<div class="example__description">
			<p>You can use negative values: the animation will start as if it had already been playing for 500ms.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-delay square square--plum is-animated" id="animation-delay--500ms">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>