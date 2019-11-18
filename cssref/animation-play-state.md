# HTML `animation-play-state` Tag

Defines if an animation is playing or not.

## Syntax

```css
animation-play-state: paused|running|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">animation-play-state: running;</code>
		</p>
		<div class="example__description">
			<p>If the animation-duration and animation-name are defined, the animation will start playing automatically.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-play-state square square--plum is-animated" id="animation-play-state-running">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>

<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-play-state: paused;</code>
		</p>
        <div class="example__description">
			<p>The animation is set paused at the first keyframe.</p>
			<p>This is different than having either no animation-duration or animation-name at all. If the animation is paused, the style applied is that of the first keyframe, and not the default style.</p>
			<p>In this example, the square is visible by default, but the on the first keyframe of fadeAndMove, the opacity is set to 0. When paused, the animation will be "stuck" on this first keyframe, and will thus be invisible.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-name square square--plum is-animated" id="animation-play-state-paused">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>


```css
@keyframes fadeAndMove {
  from {
    opacity: 0;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(100px);
  }
}
```