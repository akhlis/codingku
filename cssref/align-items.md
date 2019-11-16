# HTML `align-items` Tag

Properti `align-item` terkait dengan layout CSS yang mengatur bagaimana elemen-elemen disejajarkan dalam tata letak Flexbox dan Grid.

## Syntax

```css
align-items: flex-start | flex-end | center | baseline | stretch

.container {
  display: flex;
  align-items: flex-start;
}
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-items: flex-start;</code>
		</p>
		<div class="example__description">
			<p>The flexbox items are aligned at the start of the cross axis.</p>
			<p>By default, the cross axis is vertical. This means the flexbox items will be aligned vertically at the top.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-items" id="align-items-flex-start">
					<p class="square square--plum">1</p>
					<p class="square square--plum">2</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p><p class="square square--plum">5</p>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-items: flex-end;</code>
		</p>
		<div class="example__description">
			<p>The flexbox items are aligned at the end of the cross axis.</p>
			<p>By default, the cross axis is vertical. This means the flexbox items will be aligned vertically at the bottom.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-items" id="align-items-flex-end">
					<p class="square square--plum">1</p>
					<p class="square square--plum">2</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p><p class="square square--plum">5</p>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-items: center;</code>
		</p>
		<div class="example__description">
			<p>The flexbox items are aligned at the center of the cross axis.</p>
			<p>By default, the cross axis is vertical. This means the flexbox items will be centered vertically.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-items" id="align-items-center">
					<p class="square square--plum">1</p>
					<p class="square square--plum">2</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p><p class="square square--plum">5</p>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-items: baseline;</code>
		</p>
		<div class="example__description">
			<p>The flexbox items are aligned at the baseline of the cross axis.</p>
			<p>By default, the cross axis is vertical. This means the flexbox items will align themselves in order to have the baseline of their text align along a horizontal line.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-items" id="align-items-baseline">
					<p class="square square--plum">1</p>
					<p class="square square--plum">2</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p><p class="square square--plum">5</p>
				<div class="line line--red"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
            <code class="example--default">default</code>
			<code class="example--value">align-items: stretch;</code>
		</p>
		<div class="example__description">
			<p>The flexbox items will stretch across the whole cross axis.</p>
			<p>By default, the cross axis is vertical. This means the flexbox items will fill up the whole vertical space.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-items" id="align-items-stretch">
					<p class="square square--plum">1</p>
					<p class="square square--plum">2</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p><p class="square square--plum">5</p>
			</div>
		</div>
	</aside>
</section>