<template>
  <a class="card card-square" :class="classname" :href=link>
    <img class="img-resp" :src=image />
      <div class="button button--square button--gray stroked-icon">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5858 16L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L16 14.5858V7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V17C18 17.1356 17.973 17.2649 17.9241 17.3828C17.8764 17.498 17.8063 17.6062 17.7136 17.7005C17.7093 17.7049 17.7049 17.7093 17.7005 17.7136C17.5201 17.8907 17.2728 18 17 18H7C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16H14.5858Z"
                fill="black"
            ></path>
            <mask id="mask0_202_18533" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="6" y="6" width="12" height="12">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.5858 16L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L16 14.5858V7C16 6.44772 16.4477 6 17 6C17.5523 6 18 6.44772 18 7V17C18 17.1356 17.973 17.2649 17.9241 17.3828C17.8764 17.498 17.8063 17.6062 17.7136 17.7005C17.7093 17.7049 17.7049 17.7093 17.7005 17.7136C17.5201 17.8907 17.2728 18 17 18H7C6.44772 18 6 17.5523 6 17C6 16.4477 6.44772 16 7 16H14.5858Z"
                    fill="white"
                ></path>
            </mask>
            <g mask="url(#mask0_202_18533)"><rect width="24" height="24" fill="none"></rect></g>
        </svg>
    </div>
    <h5>{{title}}</h5>
  </a>
</template>

<script setup>
import './m-card.scss';

  defineProps({
    title: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    classname: {
      type: String,
      default: ''
    },
    image: {
      type: String,
      default: ''
    },
  })
</script>
