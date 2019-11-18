# HTML `animation-iteration-count` Tag

Defines how many times the animation is played.

## Syntax

```css
animation-iteration-count: number|infinite|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">animation-iteration-count: 1;</code>
		</p>
		<div class="example__description">
			<p>The animation will only play once.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-iteration-count square square--plum is-animated" id="animation-iteration-count-1">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-iteration-count: 2;</code>
		</p>
		<div class="example__description">
			<p>You can use integer values to define a specific amount of times the animation will play.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-iteration-count square square--plum is-animated" id="animation-iteration-count-2">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-iteration-count: infinite;</code>
		</p>
		<div class="example__description">
			<p>By using the keyword infinite, the animation will play indefinitely.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-iteration-count square square--plum is-animated" id="animation-iteration-count-infinite">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
