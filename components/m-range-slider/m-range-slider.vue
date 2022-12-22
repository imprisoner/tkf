<template>
  <div class="range-slider">
    <div
      class="range-slider__wrap"
      style="`--a: ${a}; --b: ${b}; --min: ${min}; --max: ${max}`"
    >
      <label for="a" class="range-slider__label">0 USD</label>
      <input id="a" type="range" min="min" value="a" max="max" />
      <output
        class="range-slider__top-label"
        for="a"
        style="--c: var(--a); left: 15%"
      ></output>
      <output
        class="range-slider__bottom-label"
        for="a"
        style="--c: var(--a); left: 15%"
      ></output>
      <label for="b" class="range-slider__label">100000 USD</label>
      <input id="b" type="range" min="min" value="b" max="max" />
      <output
        class="range-slider__top-label"
        for="b"
        style="--c: var(--b); right: 20%"
      ></output>
      <output
        class="range-slider__bottom-label"
        for="b"
        style="--c: var(--b); right: 20%"
      ></output>
      <div class="range-slider__track"></div>
    </div>
  </div>
</template>

<script setup>
  import './m-range-slider.scss'
  // addEventListener(
  //   'input',
  //   (e) => {
  //     let _t = e.target
  //     _t.parentNode.style.setProperty(`--${_t.id}`, +_t.value)
  //   },
  //   false
  // )
</script>
