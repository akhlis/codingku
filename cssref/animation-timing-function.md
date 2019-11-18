# animation-timing-function

Defines how the values between the start and the end of the animation are calculated.

## Syntax

```css
animation-timing-function: linear|ease|ease-in|ease-out|ease-in-out|step-start|step-end|steps(int,start|end)|cubic-bezier(n,n,n,n)|initial|inherit;
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">animation-timing-function: ease;</code>
		</p>
		<div class="example__description">
			<p>The animation starts slowly, accelerates in the middle, and slows down at the end.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-timing-function square square--plum is-animated" id="animation-timing-function-ease">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-timing-function: ease-in;</code>
		</p>
		<div class="example__description">
			<p>The animation starts slowly, and accelerates gradually until the end.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-timing-function square square--plum is-animated" id="animation-timing-function-ease-in">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-timing-function: ease-out;</code>
		</p>
		<div class="example__description">
			<p>The animation starts quickly, and decelerates gradually until the end.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-timing-function square square--plum is-animated" id="animation-timing-function-ease-out">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-timing-function: ease-in-out;</code>
		</p>
		<div class="example__description">
			<p>Like ease, but more pronounced.</p>
			<p>The animation starts quickly, and decelerates gradually until the end.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-timing-function square square--plum is-animated" id="animation-timing-function-ease-in-out">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-timing-function: linear;</code>
		</p>
		<div class="example__description">
			<p>The animation has a *constant speed.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-timing-function square square--plum is-animated" id="animation-timing-function-linear">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-timing-function: step-start;</code>
		</p>
		<div class="example__description">
			<p>The animation jumps instantly to the final state.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-timing-function square square--plum is-animated" id="animation-timing-function-step-start">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-timing-function: step-end;</code>
		</p>
		<div class="example__description">
			<p>The animation stays at the initial state until the end, when it instantly jumps to the final state.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-timing-function square square--plum is-animated" id="animation-timing-function-step-end">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">animation-timing-function: steps(4, end);</code>
		</p>
		<div class="example__description">
			<p>By using steps() with an integer, you can define a specific number of steps before reaching the end. The state of the element will not vary gradually, but rather jump from state to state in separate instants.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div animation-timing-function square square--plum is-animated" id="animation-timing-function-steps4-end">Hello<br>World</div>
			</div>
		</div>
	</aside>
</section>