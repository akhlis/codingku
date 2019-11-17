# HTML `align-self` Tag

Bekerja seperti `align-items`, tetapi hanya ditampilkan pada satu item flex khusus.

## Syntax

```css
align-self: auto | flex-start | flex-end | center | baseline | stretch

.flex-item {
  align-self: flex-end;
}
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">align-self: auto;</code>
		</p>
		<div class="example__description">
			<p>The target will use the value of align-items.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-self" id="align-self-auto">
					<p class="square square--plum">1</p>
					<p class="square target">Target</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p>
                    <p class="square square--plum">5</p>
				<div class="line line--default"></div>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-self: flex-start;</code>
		</p>
		<div class="example__description">
			<p>If the container has align-items: center and the target has align-self: flex-start, only the target will be at the start of the cross axis.</p>
            <p>By default, this means it will be aligned vertically at the top.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-self" id="align-self-flex-start">
					<p class="square square--plum">1</p>
					<p class="square target">Target</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p>
                    <p class="square square--plum">5</p>
				<div class="line line--default"></div>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-self: flex-end;</code>
		</p>
		<div class="example__description">
			<p>If the container has align-items: center and the target has align-self: flex-end, only the target will be at the end of the cross axis.</p>
            <p>By default, this means it will be aligned vertically at the bottom.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-self" id="align-self-flex-end">
					<p class="square square--plum">1</p>
					<p class="square target">Target</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p>
                    <p class="square square--plum">5</p>
				<div class="line line--default"></div>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-self: center;</code>
		</p>
		<div class="example__description">
			<p>If the container has align-items: flex-start and the target has align-self: center, only the target will be at the center of the cross axis.</p>
            <p>By default, this means it will be vertically centered.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-self" id="align-self-center">
					<p class="square square--plum">1</p>
					<p class="square target">Target</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p>
                    <p class="square square--plum">5</p>
				<div class="line line--default"></div>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-self: baseline;</code>
		</p>
		<div class="example__description">
			<p>If the container has align-items: center and the target has align-self: baseline, only the target will be at the baseline of the cross axis.</p>
            <p>By default, this means it will be aligned along the basline of the text.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-self" id="align-self-baseline">
					<p class="square square--plum">1</p>
					<p class="square target">Target</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p>
                    <p class="square square--plum">5</p>
				<div class="line line--default"></div>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-self: stretch;</code>
		</p>
		<div class="example__description">
			<p>If the container has align-items: center and the target has align-self: stretch, only the target will stretch along the whole cross axis.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-self" id="align-self-stretch">
					<p class="square square--plum">1</p>
					<p class="square target">Target</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p>
                    <p class="square square--plum">5</p>
				<div class="line line--default"></div>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>