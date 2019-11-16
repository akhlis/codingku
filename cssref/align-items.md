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
				<div class="box box--red"></div>
				<div class="box box--green"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-content: flex-start;</code>
		</p>
		<div class="example__description">
			<p>Each line will only fill the space it needs. They will all move towards the start of the flexbox/grid container's cross axis.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-content" id="align-content-flex-start">
					<p class="square square--plum">1</p>
					<p class="square square--plum">2</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p><p class="square square--plum">5</p>
				<div class="box box--red"></div>
				<div class="box box--green"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-content: flex-end;</code>
		</p>
		<div class="example__description">
			<p>Each line will only fill the space it needs. They will all move towards the end of the flexbox/grid container's cross axis.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-content" id="align-content-flex-end">
					<p class="square square--plum">1</p>
					<p class="square square--plum">2</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p><p class="square square--plum">5</p>
				<div class="box box--red"></div>
				<div class="box box--green"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-content: center;</code>
		</p>
		<div class="example__description">
			<p>Each line will only fill the space it needs. They will all move towards the center of the flexbox/grid container's cross axis.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-content" id="align-content-center">
					<p class="square square--plum">1</p>
					<p class="square square--plum">2</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p><p class="square square--plum">5</p>
				<div class="box box--red"></div>
				<div class="box box--green"></div>
			</div>
		</div>
	</aside>
</section>
<section class="example">
	<header class="example__header">
		<p class="example__name">
        	<code class="example--default">default</code>
			<code class="example--value">align-content: space-between;</code>
		</p>
		<div class="example__description">
			<p>Each line will only fill the space it needs. The remaining space will appear between the lines.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-content" id="align-content-space-between">
					<p class="square square--plum">1</p>
					<p class="square square--plum">2</p>
					<p class="square square--plum">3</p>
					<p class="square square--plum">4</p><p class="square square--plum">5</p>
				<div class="box box--red"></div>
				<div class="box box--green"></div>
			</div>
		</div>
	</aside>
</section>