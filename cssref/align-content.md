# HTML `align-content` Tag

Properti `align-content` merupakan bagian sub-property dari module Flexible Box.

Properti ini digunakan untuk menyelaraskan garis container fleksibel didalamnya ketika ada ruang tambahan di sumbu-silang, mirip dengan bagaimana properti `justify-content` menyelaraskan masing-masing item  dalam sumbu utama.

Properti ini hanya berpengaruh jika `flex-wrap: wrap` dan ada beberapa garis item flexbox.

## Syntax

```css
align-content: flex-start | flex-end | center | space-between | space-around | stretch

.flex-container {
  align-content: space-around;
}
```

<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--default">default</code>
			<code class="example--value">align-content: stretch;</code>
		</p>
		<div class="example__description">
			<p>Masing-masing garis akan membentang memenuhi ruang yang tersisa.</p>
			<p>In this case, the container is <code>300px</code> high. All boxes are <code>50px</code> high, apart from the second one who is <code>100px</code> high.</p>
			<ul>
				<li>The first line is <strong>100px</strong> high</li>
				<li>The second line is <strong>50px</strong> high</li>
				<li>The remaing space is <strong>150px</strong></li>
			</ul>
			<p>This remaining space is distributed equally amongst the two lines:</p>
			<ul>
				<li>The first line is now <strong>175px</strong> high</li>
				<li>The second line is now <strong>125px</strong> high</li>
			</ul>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-content" id="align-content-stretch">
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
<section class="example">
	<header class="example__header">
		<p class="example__name">
			<code class="example--value">align-content: space-around;</code>
		</p>
		<div class="example__description">
			<p>Each line will only fill the space it needs. The remaining space will be distributed equally around the lines: before the first line, between the two, and after the last one.</p>
		</div>
	</header>
	<aside class="example__preview">
		<div class="example__browser"><i></i><i></i><i></i></div>
			<div class="example__output">
				<div class="example__output-div align-content" id="align-content-space-around">
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