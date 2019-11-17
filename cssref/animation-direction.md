# HTML `animation-direction` Tag

Defines in which direction the animation is played.

## Syntax

```css
animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">animation-direction: normal;</code>
		</p>
		<div class="example__description">
			<p>The animation is played forwards. When it reaches the end, it starts over at the first keyframe.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-direction square square--plum is-animated" id="animation-direction-normal">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-direction: reverse;</code>
		</p>
		<div class="example__description">
			<p>The animation is played backwards: begins at the last keyframe, finishes at the first keyframe.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-direction square square--plum is-animated" id="animation-direction-reverse">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-direction: alternate;</code>
		</p>
		<div class="example__description">
			<p>The animation is played forwards first, then backwards:</p>
            <ul><li>starts at the first keyframe</li><li>stops at the last keyframe</li><li>starts again, but at the last keyframe</li><li>stops at the first keyframe</li></ul>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-direction square square--plum is-animated" id="animation-direction-alternate">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-direction: alternate-reverse;</code>
		</p>
		<div class="example__description">
			<p>The animation is played backwards first, then forwards:</p>
            <ul><li>starts at the last keyframe</li><li>stops at the first keyframe</li><li>starts again, but at the first keyframe</li><li>stops at the last keyframe</li></ul>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-direction square square--plum is-animated" id="animation-direction-alternate-reverse">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>