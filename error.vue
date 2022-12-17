<template>
  <div id="error-page">
    <ui-header></ui-header>
    <main class="error">
      <div class="container">
          <div class="error__wrap row">
              <div class="error__content offset-lg-1 col-lg-4 col-md-5 col-12">
                  <span class="error__code">{{ error.statusCode }}</span>
                  <h3 v-if="error.statusCode == 404" class="error__message">Страница не найдена</h3>
                  <h3 v-else class="error__message">Что-то пошло не так</h3>
                  <button class="button button--black error__backdrop" @click="handleClearError">Назад</button>
              </div>
              <div class="error__icon col-md-7 col-12">
                  <svg width="637" height="503" viewBox="0 0 637 503" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <mask id="mask0_1394_126065" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="337" y="76" width="300" height="400">
                          <path d="M358.089 100.77L337.418 76.1875L564.802 80.657L636.592 223.68L439.377 475.924L337.418 451.342L379.878 401.061L358.089 270.888L372.894 215.299L348.033 135.687L358.089 100.77Z" fill="#D9D9D9"></path>
                      </mask>
                      <g mask="url(#mask0_1394_126065)">
                          <g opacity="0.86">
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M235.744 101.916C240.792 93.0826 250.186 87.6309 260.36 87.6309H371.15C379.949 87.6309 387.081 94.7636 387.081 103.562C387.081 112.361 379.949 119.494 371.15 119.494H262.398L210.352 210.573L383.418 419.445C389.031 426.22 388.09 436.263 381.315 441.877C374.539 447.49 364.496 446.549 358.883 439.774L184.267 229.03C176.733 219.938 175.623 207.127 181.482 196.874L235.744 101.916Z"
                                  fill="#EAEAEA"
                              ></path>
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M506.553 101.916C501.505 93.0826 492.111 87.6309 481.937 87.6309H371.147C362.348 87.6309 355.215 94.7636 355.215 103.562C355.215 112.361 362.348 119.494 371.147 119.494H479.899L531.944 210.573L358.879 419.445C353.266 426.22 354.207 436.263 360.982 441.877C367.757 447.49 377.801 446.549 383.414 439.774L558.03 229.03C565.564 219.938 566.674 207.127 560.815 196.874L506.553 101.916Z"
                                  fill="#EAEAEA"
                              ></path>
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M178.227 215.361C178.227 206.562 185.359 199.43 194.158 199.43H541.941C550.74 199.43 557.873 206.562 557.873 215.361C557.873 224.16 550.74 231.293 541.941 231.293H194.158C185.359 231.293 178.227 224.16 178.227 215.361Z"
                                  fill="#EAEAEA"
                              ></path>
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M340.396 98.3587C348.425 101.958 352.016 111.384 348.417 119.413L310.761 203.415L386.011 399.067C389.17 407.279 385.073 416.497 376.861 419.655C368.649 422.814 359.431 418.717 356.272 410.505L280.497 213.49C277.787 206.442 277.999 198.605 281.088 191.714L319.342 106.379C322.941 98.3506 332.367 94.7596 340.396 98.3587Z"
                                  fill="#EAEAEA"
                              ></path>
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M401.901 98.3587C393.872 101.958 390.281 111.384 393.88 119.413L431.536 203.415L356.286 399.067C353.127 407.279 357.224 416.497 365.436 419.655C373.648 422.814 382.866 418.717 386.025 410.505L461.8 213.49C464.51 206.442 464.298 198.605 461.209 191.714L422.955 106.379C419.356 98.3506 409.93 94.7596 401.901 98.3587Z"
                                  fill="#EAEAEA"
                              ></path>
                          </g>
                      </g>
                      <mask id="mask1_1394_126065" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="45" y="49" width="313" height="411">
                          <path d="M270.15 106.033L244.511 85.4674L80.5189 49.9825L45.5239 256.309L323.406 459.123L357.599 395.865L307.554 271.988L311.466 217.273L267.824 139.201L270.15 106.033Z" fill="#D9D9D9"></path>
                      </mask>
                      <g mask="url(#mask1_1394_126065)">
                          <g opacity="0.86">
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M154.557 132.973C157.539 123.246 165.505 115.862 175.43 113.625L283.509 89.2655C292.093 87.3309 300.619 92.7209 302.554 101.304C304.488 109.888 299.098 118.414 290.515 120.349L184.424 144.26L153.677 244.553L368.432 410.262C375.398 415.637 376.688 425.642 371.313 432.608C365.938 439.574 355.933 440.863 348.967 435.488L132.288 268.295C122.939 261.081 119.041 248.828 122.502 237.538L154.557 132.973Z"
                                  fill="#EAEAEA"
                              ></path>
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M418.75 73.4281C411.883 65.9203 401.52 62.6675 391.595 64.9045L283.516 89.2638C274.933 91.1984 269.543 99.7248 271.477 108.308C273.412 116.892 281.939 122.282 290.522 120.347L396.613 96.4356L467.41 173.843L344.505 415.655C340.518 423.499 343.645 433.089 351.488 437.076C359.332 441.063 368.922 437.936 372.909 430.092L496.916 186.113C502.266 175.586 500.532 162.846 492.562 154.132L418.75 73.4281Z"
                                  fill="#EAEAEA"
                              ></path>
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M123.399 256.286C121.465 247.702 126.855 239.176 135.438 237.241L474.711 160.775C483.294 158.84 491.821 164.23 493.755 172.813C495.69 181.397 490.3 189.923 481.716 191.858L142.444 268.324C133.86 270.259 125.334 264.869 123.399 256.286Z"
                                  fill="#EAEAEA"
                              ></path>
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M255.869 106.493C264.493 108.239 270.069 116.645 268.323 125.269L250.058 215.495L366.484 389.813C371.371 397.13 369.401 407.023 362.085 411.91C354.768 416.797 344.875 414.827 339.988 407.51L222.75 231.977C218.556 225.698 217.04 218.005 218.538 210.604L237.093 118.947C238.839 110.323 247.245 104.747 255.869 106.493Z"
                                  fill="#EAEAEA"
                              ></path>
                              <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M315.878 92.9705C308.837 98.2469 307.407 108.232 312.683 115.273L367.887 188.94L337.496 396.349C336.22 405.055 342.243 413.147 350.949 414.422C359.655 415.698 367.746 409.675 369.022 400.969L399.625 192.115C400.72 184.643 398.789 177.044 394.261 171.002L338.181 96.1657C332.905 89.1247 322.919 87.6941 315.878 92.9705Z"
                                  fill="#EAEAEA"
                              ></path>
                          </g>
                      </g>
                      <path d="M318.191 184.127L322.228 162.543L340.395 174.97L337.031 190.668L318.191 184.127Z" fill="#EAEAEA"></path>
                      <path d="M289.431 104.765L279.719 95.0023L281.176 92.2129L297.201 98.0243V106.858L289.431 114.296V104.765Z" fill="#EAEAEA"></path>
                      <path d="M336.309 113.695L340.909 97.1328L347.35 100.813V113.695H336.309Z" fill="#EAEAEA"></path>
                      <path d="M307.484 76.3705L313.005 53.3672L322.667 71.3098L307.484 76.3705Z" fill="#EAEAEA"></path>
                      <path d="M305.162 421.98L287.68 418.694L298.687 408.178L305.162 421.98Z" fill="#EAEAEA"></path>
                      <path d="M314.121 439.73L341.067 437.384L344.948 453.39L328.942 457.271L314.121 439.73Z" fill="#EAEAEA"></path>
                      <path d="M264.905 448.972L271.127 437.385L271.127 464.514L259.001 457.272L264.905 448.972Z" fill="#EAEAEA"></path>
                      <path d="M356.174 259.994L369.056 266.881V277.477H356.174V259.994Z" fill="#EAEAEA"></path>
                  </svg>
              </div>
          </div>
      </div>
    </main>
  </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/'})
</script>

<style lang="scss" scoped>
#error-page {
  position: relative;
  .error {

    &__wrap {
      position: absolute;
      left: 28px;
      top: 0;
      bottom: 0;
      right: 28px;
      align-content: flex-end;
      padding-bottom: 220px;
      @include max-width('md') {
        padding-bottom: 160px;
      }
    }

    &__content {
      align-self: flex-end;

      @include max-width('md') {
        order: 1;
      }
    }

    &__code {
      font-weight: 300;
      font-size: 67px;
      line-height: 82px;
      margin-bottom: 12px;

      @include max-width('md') {
        font-size: 64px;
        line-height: 78px;
        margin-bottom: unset;
      }
    }

    &__message {
      margin-bottom: 32px;

      @include max-width('md') {
        margin-bottom: unset;
      }
    }

    &__backdrop {
      width: fit-content;

      @include max-width('md') {
        position: absolute;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);
      }
    }

    &__icon svg {
      @include max-width('xl') {
        width: 100%;
      }
      @include max-width('md') {
        height: auto;
      }
    }
  }
}
</style>
