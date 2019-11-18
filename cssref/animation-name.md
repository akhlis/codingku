# HTML `animation-name` Tag

Defines which animation keyframes to use.

## Syntax

```css
animation-name: keyframename|none|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">animation-name: none;</code>
		</p>
		<div class="example__description">
			<p>If no animation name is specified, no animation is played.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-name square square--plum is-animated" id="animation-name-none">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-name: fadeIn;</code>
		</p>
		<div class="example__description">
			<p>If a name is specified, the keyframes matching that name will be used.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-name square square--plum is-animated" id="animation-name-fadein">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>

For example, the fadeIn animation looks like this:
```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-name: moveRight;</code>
		</p>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-name square square--plum is-animated" id="animation-name-moveright">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>

Another example: the moveRight animation:

```css
@keyframes moveRight {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100px);
  }
}
```