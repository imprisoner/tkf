<template>
    <main>
        <div class="container">
            <div class="row">
                <div class="offset-1 col-10">
                    <div class="filters">
                        <div class="filters__triggers">
                            <div class="filters__tabs">
                                <button class="button button--caret filters__tab active" type="button">Бренд</button>
                                <button class="button button--caret filters__tab" type="button">Модель</button>
                                <button class="button button--caret filters__tab" type="button">Цена</button>
                                <button class="button button--caret filters__tab" type="button">Диаметр</button>
                                <button class="button button--caret filters__tab" type="button">Местоположение</button>
                            </div>
                            <div class="button button--square button--gray stroked-icon filters__button">
                                <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M3.98246 3.24611V10.3282C3.98246 10.9353 4.38715 11.3399 4.99419 11.3399C5.60122 11.3399 6.00592 10.9353 6.00592 10.3282V3.24611C6.00592 2.63907 5.60122 2.23438 4.99419 2.23438C4.38715 2.23438 3.98246 2.63907 3.98246 3.24611ZM12.0763 12.3517C12.0763 11.7446 12.481 11.3399 13.088 11.3399C13.6951 11.3399 14.0998 11.7446 14.0998 12.3517V21.4573C14.0998 22.0643 13.6951 22.469 13.088 22.469C12.481 22.469 12.0763 22.0643 12.0763 21.4573V12.3517ZM21.1819 13.3634C21.7889 13.3634 22.1936 12.9587 22.1936 12.3517V3.24611C22.1936 2.63907 21.7889 2.23438 21.1819 2.23438C20.5748 2.23438 20.1701 2.63907 20.1701 3.24611V12.3517C20.1701 12.9587 20.5748 13.3634 21.1819 13.3634ZM0.947266 14.3751C0.947266 13.7681 1.35196 13.3634 1.959 13.3634H8.02938C8.63642 13.3634 9.04111 13.7681 9.04111 14.3751C9.04111 14.9822 8.63642 15.3869 8.02938 15.3869H6.00592V21.4573C6.00592 22.0643 5.60122 22.469 4.99419 22.469C4.38715 22.469 3.98246 22.0643 3.98246 21.4573V15.3869H1.959C1.35196 15.3869 0.947266 14.9822 0.947266 14.3751ZM16.1232 7.29303H14.0998V3.24611C14.0998 2.63907 13.6951 2.23438 13.088 2.23438C12.481 2.23438 12.0763 2.63907 12.0763 3.24611V7.29303H10.0528C9.4458 7.29303 9.04111 7.69772 9.04111 8.30476C9.04111 8.9118 9.4458 9.31649 10.0528 9.31649H16.1232C16.7303 9.31649 17.135 8.9118 17.135 8.30476C17.135 7.69772 16.7303 7.29303 16.1232 7.29303ZM17.135 16.3986C17.135 15.7916 17.5396 15.3869 18.1467 15.3869H24.2171C24.8241 15.3869 25.2288 15.7916 25.2288 16.3986C25.2288 17.0056 24.8241 17.4103 24.2171 17.4103H22.1936V21.4573C22.1936 22.0643 21.7889 22.469 21.1819 22.469C20.5748 22.469 20.1701 22.0643 20.1701 21.4573V17.4103H18.1467C17.5396 17.4103 17.135 17.0056 17.135 16.3986Z"
                                        fill="currentColor"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <div class="filters__window">
                            <aside class="filters__sidebar">
                                <div class="filters__mobile">
                                    <h6 class="filters__mobile-subtitle">Фильтры</h6>
                                    <span class="text-16 lots-found">Найдено 185 товаров</span>
                                    <div class="filters__mobile-close">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.7 17.3C19.1 17.7 19.1 18.3 18.7 18.7C18.5 18.9 18.3 19 18 19C17.7 19 17.5 18.9 17.3 18.7L12 13.4L6.7 18.7C6.5 18.9 6.3 19 6 19C5.7 19 5.5 18.9 5.3 18.7C4.9 18.3 4.9 17.7 5.3 17.3L10.6 12L5.3 6.7C4.9 6.3 4.9 5.7 5.3 5.3C5.7 4.9 6.3 4.9 6.7 5.3L12 10.6L17.3 5.3C17.7 4.9 18.3 4.9 18.7 5.3C19.1 5.7 19.1 6.3 18.7 6.7L13.4 12L18.7 17.3Z"
                                                fill="black"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <ul class="filters__list">
                                    <li class="filters__list-item active">
                                        <div class="filters__list-button button button--text-sm">
                                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M12.8966 6.3087L7.92724 1.33936C7.81167 1.2238 7.69611 1.16602 7.52276 1.16602H1.74446C1.39776 1.16602 1.16663 1.39715 1.16663 1.74385V7.52215C1.16663 7.6955 1.22441 7.81106 1.33998 7.92663L6.30931 12.896C6.65601 13.2427 7.06049 13.416 7.52276 13.416C7.98502 13.416 8.44729 13.2427 8.7362 12.896L12.8966 8.73559C13.59 8.04219 13.59 7.0021 12.8966 6.3087ZM12.0876 7.92663L7.92724 12.087C7.69611 12.3181 7.34941 12.3181 7.11828 12.087L2.32229 7.29102V2.32168H7.29163L12.0876 7.11767C12.3187 7.3488 12.3187 7.6955 12.0876 7.92663ZM5.21144 4.633C5.21144 4.45965 5.15365 4.34408 5.03809 4.22852C4.98031 4.17073 4.92252 4.11295 4.86474 4.11295C4.63361 3.99738 4.40248 4.05517 4.22913 4.22852C4.11356 4.34408 4.05578 4.45965 4.05578 4.633C4.05578 4.69078 4.05578 4.80635 4.11356 4.86413C4.11356 4.92191 4.17134 4.9797 4.22913 5.03748C4.34469 5.15304 4.46026 5.21083 4.63361 5.21083C4.80696 5.21083 4.92252 5.15304 5.03809 5.03748C5.15365 4.92191 5.21144 4.80635 5.21144 4.633Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <span>Бренд</span>
                                            <svg class="filters__mobile-button--icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M11.2929 4.29289C10.9024 4.68342 10.9024 5.31658 11.2929 5.70711L16.5858 11H5C4.44772 11 4 11.4477 4 12C4 12.5523 4.44772 13 5 13H16.5858L11.2929 18.2929C10.9024 18.6834 10.9024 19.3166 11.2929 19.7071C11.6834 20.0976 12.3166 20.0976 12.7071 19.7071L19.7066 12.7076L19.7071 12.7071M19.7065 11.2923L12.7071 4.29289C12.3166 3.90237 11.6834 3.90237 11.2929 4.29289M19.7136 11.2995C19.7115 11.2973 19.7093 11.2951 19.7071 11.2929L19.7065 11.2923"
                                                    fill="black"
                                                ></path>
                                            </svg>
                                        </div>
                                        <div class="filters__mobile-active-filters">
                                            <span class="filters__mobile-active-item">Casio,&nbsp;</span>
                                            <span class="filters__mobile-active-item">Casio,&nbsp;</span>
                                            <span class="filters__mobile-active-item">Casio,&nbsp;</span>
                                            <span class="filters__mobile-active-item">Casio,&nbsp;</span>
                                            <span class="filters__mobile-active-item">Casio,&nbsp;</span>
                                            <span class="filters__mobile-active-item">Casio,&nbsp;</span>
                                        </div>
                                    </li>
                                    <li class="filters__list-item">
                                        <div class="filters__list-button button button--text-sm">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M13.3 0.600781L21.3 4.60078C22.4 5.10078 23 6.10078 23 7.20078V16.7008C23 17.9008 22.3 18.9008 21.3 19.4008L13.3 23.4008C12.9 23.6008 12.5 23.7008 12 23.7008C11.6 23.7008 11.1 23.6008 10.7 23.4008L2.7 19.4008C1.6 18.9008 1 17.8008 1 16.7008V7.20078C1 6.10078 1.6 5.10078 2.6 4.60078L10.6 0.600781C11.5 0.200781 12.5 0.200781 13.3 0.600781ZM12 2.20078C11.9 2.20078 11.7 2.20078 11.6 2.30078L4.2 6.00078L12 9.90078L19.8 6.00078L12.4 2.30078C12.3 2.20078 12.2 2.20078 12 2.20078ZM3.5 17.7008C3.2 17.5008 3 17.1008 3 16.8008V7.60078L11 11.6008V21.4008L3.5 17.7008ZM13 21.4008L20.4 17.7008C20.8 17.5008 21 17.2008 21 16.8008V7.60078L13 11.6008V21.4008Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <span>Модель</span>
                                        </div>
                                        <div class="filters__mobile-active-filters"><span>Все</span></div>
                                    </li>
                                    <li class="filters__list-item">
                                        <div class="filters__list-button button button--text-sm">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M14.5 11H13V6H17C17.6 6 18 5.6 18 5C18 4.4 17.6 4 17 4H13V1C13 0.4 12.6 0 12 0C11.4 0 11 0.4 11 1V4H9.5C7 4 5 6 5 8.5C5 11 7 13 9.5 13H11V18H6C5.4 18 5 18.4 5 19C5 19.6 5.4 20 6 20H11V23C11 23.6 11.4 24 12 24C12.6 24 13 23.6 13 23V20H14.5C17 20 19 18 19 15.5C19 13 17 11 14.5 11ZM9.5 11C8.1 11 7 9.9 7 8.5C7 7.1 8.1 6 9.5 6H11V11H9.5ZM13 18H14.5C15.9 18 17 16.9 17 15.5C17 14.1 15.9 13 14.5 13H13V18Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <span>Цена</span>
                                        </div>
                                        <div class="filters__mobile-active-filters"><span>Все</span></div>
                                    </li>
                                    <li class="filters__list-item">
                                        <div class="filters__list-button button button--text-sm">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23C5.9 23 1 18.1 1 12ZM3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3C7 3 3 7 3 12ZM12 5C8.1 5 5 8.1 5 12C5 15.9 8.1 19 12 19C15.9 19 19 15.9 19 12C19 8.1 15.9 5 12 5ZM7 12C7 14.8 9.2 17 12 17C14.8 17 17 14.8 17 12C17 9.2 14.8 7 12 7C9.2 7 7 9.2 7 12ZM12 9C10.3 9 9 10.3 9 12C9 13.7 10.3 15 12 15C13.7 15 15 13.7 15 12C15 10.3 13.7 9 12 9ZM11 12C11 12.6 11.4 13 12 13C12.6 13 13 12.6 13 12C13 11.4 12.6 11 12 11C11.4 11 11 11.4 11 12Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <span>Диаметр</span>
                                        </div>
                                        <div class="filters__mobile-active-filters"><span>Все</span></div>
                                    </li>
                                    <li class="filters__list-item">
                                        <div class="filters__list-button button button--text-sm">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M1 12C1 5.9 5.9 1 12 1C18.1 1 23 5.9 23 12C23 18.1 18.1 23 12 23C5.9 23 1 18.1 1 12ZM3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 7 17 3 12 3C7 3 3 7 3 12ZM15.9 6.8L9.6 8.9C9.3 9 9 9.3 8.9 9.6L6.8 16C6.7 16.4 6.8 16.8 7 17C7.2 17.2 7.4 17.3 7.7 17.3C7.8 17.3 7.9 17.3 8 17.2L14.4 15.1C14.7 15 14.9 14.8 15 14.5L17.1 8.1C17.2 7.7 17.1 7.3 16.9 7.1C16.7 6.8 16.3 6.7 15.9 6.8ZM9.3 14.6L13.3 13.3L14.6 9.3L10.6 10.6L9.3 14.6Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <span>Место</span>
                                        </div>
                                        <div class="filters__mobile-active-filters"></div>
                                    </li>
                                    <li class="filters__list-item">
                                        <div class="filters__list-button button button--text-sm">
                                            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M17.8749 1.03125H14.7812C14.5077 1.03125 14.2454 1.1399 14.052 1.3333C13.8586 1.52669 13.7499 1.789 13.7499 2.0625C13.7499 2.336 13.8586 2.59831 14.052 2.7917C14.2454 2.9851 14.5077 3.09375 14.7812 3.09375H15.3828L14.0937 4.39141C13.0141 3.54769 11.6826 3.09074 10.3124 3.09375C8.76037 3.09285 7.26463 3.67528 6.12188 4.72555C4.97912 5.77581 4.27281 7.2172 4.14302 8.76384C4.01323 10.3105 4.46945 11.8494 5.42119 13.0754C6.37292 14.3015 7.75067 15.125 9.28119 15.3828V16.5H7.56244C7.28894 16.5 7.02664 16.6086 6.83324 16.802C6.63984 16.9954 6.53119 17.2577 6.53119 17.5312C6.53119 17.8048 6.63984 18.0671 6.83324 18.2605C7.02664 18.4539 7.28894 18.5625 7.56244 18.5625H9.28119V19.9375C9.28119 20.211 9.38984 20.4733 9.58324 20.6667C9.77664 20.8601 10.0389 20.9688 10.3124 20.9688C10.5859 20.9688 10.8482 20.8601 11.0416 20.6667C11.235 20.4733 11.3437 20.211 11.3437 19.9375V18.5625H13.0624C13.3359 18.5625 13.5982 18.4539 13.7916 18.2605C13.985 18.0671 14.0937 17.8048 14.0937 17.5312C14.0937 17.2577 13.985 16.9954 13.7916 16.802C13.5982 16.6086 13.3359 16.5 13.0624 16.5H11.3437V15.3828C12.3558 15.2114 13.3093 14.7909 14.1184 14.1592C14.9275 13.5275 15.5667 12.7044 15.9785 11.7641C16.3903 10.8238 16.5616 9.79586 16.4771 8.77284C16.3926 7.74983 16.0549 6.7639 15.4945 5.90391L16.8437 4.55469V5.15625C16.8437 5.42975 16.9523 5.69206 17.1457 5.88545C17.3391 6.07885 17.6014 6.1875 17.8749 6.1875C18.1484 6.1875 18.4107 6.07885 18.6041 5.88545C18.7975 5.69206 18.9062 5.42975 18.9062 5.15625V2.0625C18.9062 1.789 18.7975 1.52669 18.6041 1.3333C18.4107 1.1399 18.1484 1.03125 17.8749 1.03125ZM10.3124 13.4062C9.4966 13.4062 8.69907 13.1643 8.02072 12.7111C7.34236 12.2578 6.81365 11.6136 6.50144 10.8598C6.18923 10.1061 6.10754 9.27667 6.2667 8.4765C6.42587 7.67633 6.81874 6.94133 7.39563 6.36443C7.97252 5.78754 8.70752 5.39467 9.5077 5.23551C10.3079 5.07635 11.1373 5.15804 11.891 5.47025C12.6448 5.78246 13.289 6.31117 13.7423 6.98952C14.1955 7.66788 14.4374 8.4654 14.4374 9.28125C14.4374 10.3753 14.0028 11.4245 13.2293 12.1981C12.4557 12.9717 11.4065 13.4062 10.3124 13.4062Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <span>Пол</span>
                                        </div>
                                        <div class="filters__mobile-active-filters"><span>Все</span></div>
                                    </li>
                                    <li class="filters__list-item">
                                        <div class="filters__list-button button button--text-sm">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M22.3671 9.2C21.8608 8.6 21.1519 8.1 20.3418 8H19.8354H15.1772V5C15.1772 2.8 13.3544 1 11.1266 1C10.7215 1 10.3165 1.2 10.2152 1.6L6.46835 10H4.03797C2.31646 10 1 11.3 1 13V20C1 21.7 2.31646 23 4.03797 23H18.519C20.038 23 21.2532 21.9 21.557 20.5L22.9747 11.5C23.0759 10.7 22.8734 9.9 22.3671 9.2ZM6.06329 21H4.03797C3.43038 21 3.02532 20.6 3.02532 20V13C3.02532 12.4 3.43038 12 4.03797 12H6.06329V21ZM18.519 21C19.0253 21 19.4304 20.7 19.5316 20.2L21.0506 11.1C21.0506 10.9 21.0506 10.6 20.8481 10.4L20.8481 10.4C20.6456 10.2 20.443 10 20.1392 10H19.9367H14.1646C13.557 10 13.1519 9.6 13.1519 9V5C13.1519 4.1 12.5443 3.4 11.7342 3.1L8.08861 11.2V21H18.519Z"
                                                    fill="currentColor"
                                                ></path>
                                            </svg>
                                            <span>Состояние</span>
                                        </div>
                                        <div class="filters__mobile-active-filters"><span>Все</span></div>
                                    </li>
                                </ul>
                                <button class="filters__save link-button" type="button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M7 2H17C18.7 2 20 3.3 19.9 5V21C19.9 21.4 19.7 21.7 19.4 21.9C19.2 22 19.1 22 18.9 22C18.7 22 18.5 21.9 18.3 21.8L11.9 17.2L5.5 21.8C5.2 22 4.8 22.1 4.5 21.9C4.2 21.7 4 21.4 4 21V5C4 3.3 5.3 2 7 2ZM12.6 15.2L18 19.1V5C18 4.4 17.6 4 17 4H7C6.4 4 6 4.4 6 5V19.1L11.4 15.2C11.6 15.1 11.8 15 12 15C12.2 15 12.4 15.1 12.6 15.2Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <span>Сохранить запрос</span>
                                </button>
                            </aside>
                            <main class="filters__main filter show">
                                <div class="filter__top">
                                    <h3 class="filter__title">Бренды</h3>
                                    <span class="text-16 lots-found">Найдено 185 товаров</span>
                                    <div class="filters__mobile-close">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M18.7 17.3C19.1 17.7 19.1 18.3 18.7 18.7C18.5 18.9 18.3 19 18 19C17.7 19 17.5 18.9 17.3 18.7L12 13.4L6.7 18.7C6.5 18.9 6.3 19 6 19C5.7 19 5.5 18.9 5.3 18.7C4.9 18.3 4.9 17.7 5.3 17.3L10.6 12L5.3 6.7C4.9 6.3 4.9 5.7 5.3 5.3C5.7 4.9 6.3 4.9 6.7 5.3L12 10.6L17.3 5.3C17.7 4.9 18.3 4.9 18.7 5.3C19.1 5.7 19.1 6.3 18.7 6.7L13.4 12L18.7 17.3Z"
                                                fill="black"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div class="filter__backdrop button mobile-caret"><span>Назад</span></div>
                                <div class="filter__popular">
                                    <h4 class="filter__subtitle mobile-caret show-menu">Популярные бренды</h4>
                                    <div class="filter__popular-list">
                                        <button class="filter__popular-item button button--text-sm" type="button">Casio</button>
                                        <button class="filter__popular-item button button--text-sm" type="button">Casio</button>
                                        <button class="filter__popular-item button button--text-sm" type="button">Casio</button>
                                        <button class="filter__popular-item button button--text-sm" type="button">Casio</button>
                                        <button class="filter__popular-item button button--text-sm" type="button">Casio</button>
                                        <button class="filter__popular-item button button--text-sm" type="button">Casio</button>
                                    </div>
                                </div>
                                <div class="filter__main">
                                    <h4 class="filter__subtitle mobile-caret">Все бренды</h4>
                                    <div class="filter__options">
                                        <div class="filter__search search">
                                            <div class="search input-group">
                                                <input id="navbar_search" class="input-group__field" type="text" placeholder="Найти лучшие в мире часы" />
                                                <button class="button button--square button--black" type="button">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path
                                                            fill-rule="evenodd"
                                                            clip-rule="evenodd"
                                                            d="M17.2 15.8L21.7 20.3C22.1 20.7 22.1 21.3 21.7 21.7C21.5 21.9 21.2 22 21 22C20.8 22 20.5 21.9 20.3 21.7L15.8 17.2C14.3 18.3 12.5 19 10.5 19C5.8 19 2 15.2 2 10.5C2 5.8 5.8 2 10.5 2C15.2 2 19 5.8 19 10.5C19 12.5 18.3 14.4 17.2 15.8ZM10.5 4C6.9 4 4 6.9 4 10.5C4 14.1 6.9 17 10.5 17C12.3 17 13.9 16.3 15.1 15.1C16.3 13.9 17 12.3 17 10.5C17 6.9 14.1 4 10.5 4Z"
                                                            fill="currentColor"
                                                        ></path>
                                                        <mask id="mask0_202_16785" style="mask-type: alpha;" maskUnits="userSpaceOnUse" x="2" y="2" width="20" height="20">
                                                            <path
                                                                fill-rule="evenodd"
                                                                clip-rule="evenodd"
                                                                d="M17.2 15.8L21.7 20.3C22.1 20.7 22.1 21.3 21.7 21.7C21.5 21.9 21.2 22 21 22C20.8 22 20.5 21.9 20.3 21.7L15.8 17.2C14.3 18.3 12.5 19 10.5 19C5.8 19 2 15.2 2 10.5C2 5.8 5.8 2 10.5 2C15.2 2 19 5.8 19 10.5C19 12.5 18.3 14.4 17.2 15.8ZM10.5 4C6.9 4 4 6.9 4 10.5C4 14.1 6.9 17 10.5 17C12.3 17 13.9 16.3 15.1 15.1C16.3 13.9 17 12.3 17 10.5C17 6.9 14.1 4 10.5 4Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </mask>
                                                        <g mask="url(#mask0_202_16785)"><rect width="24" height="24" fill="none"></rect></g>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                        <ul class="filter__options-list">
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">Выбрать все</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                            <li class="filter__option">
                                                <label class="checkbox">
                                                    <input type="checkbox" />
                                                    <div class="checkbox__wrap">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path
                                                                d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                                                fill="currentColor"
                                                            ></path>
                                                        </svg>
                                                    </div>
                                                    <div class="checkbox__label-text text-16">A. Lange & Söhne</div>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </main>
                            <footer class="filters__footer">
                                <button class="button button--black" type="button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M16.1711 21.399C15.066 21.7997 13.9608 22 12.8556 22C8.73627 22 4.8179 19.3957 3.41131 15.2889C3.21036 14.788 3.51178 14.187 4.01413 13.9867C4.51649 13.7864 5.11931 14.0869 5.32026 14.5877C6.82732 18.7947 11.3485 20.9983 15.5683 19.4958C19.7881 17.9933 21.9985 13.4859 20.4914 9.27888C19.7881 7.27555 18.281 5.67289 16.3721 4.67123C14.4631 3.76973 12.2528 3.66956 10.2433 4.37073C9.13816 4.77139 8.03298 5.37239 7.22921 6.27389L4.31555 8.97838H7.83203C8.43486 8.97838 8.83674 9.37904 8.83674 9.98004C8.83674 10.581 8.43486 10.9817 7.83203 10.9817H1.80377C1.7033 10.9817 1.60283 10.9817 1.60283 10.9817H1.50236L1.40188 10.8815C1.30141 10.8815 1.30141 10.7814 1.20094 10.7814C1.20094 10.7814 1.20094 10.6812 1.10047 10.6812C1.10047 10.581 1 10.581 1 10.4809C1 10.3807 1 10.2805 1 10.2805V10.1804V3.97006C1 3.36906 1.40188 2.9684 2.00471 2.9684C2.60754 2.9684 3.00942 3.36906 3.00942 3.97006V7.67622L6.02355 4.87156C7.02826 3.8699 8.33439 3.06857 9.74098 2.56773C12.2528 1.66624 14.9655 1.86657 17.3768 2.9684C19.7881 4.1704 21.5966 6.17372 22.5008 8.67788C24.2088 13.8865 21.3956 19.596 16.1711 21.399Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <span>Сбросить</span>
                                </button>
                                <button class="button button--gray stroked-icon" type="button">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M20.7 7.7L9.7 18.7C9.5 18.9 9.3 19 9 19C8.7 19 8.5 18.9 8.3 18.7L3.3 13.7C2.9 13.3 2.9 12.7 3.3 12.3C3.7 11.9 4.3 11.9 4.7 12.3L9 16.6L19.3 6.3C19.7 5.9 20.3 5.9 20.7 6.3C21.1 6.7 21.1 7.3 20.7 7.7Z"
                                            fill="currentColor"
                                        ></path>
                                    </svg>
                                    <span>Сохранить</span>
                                </button>
                            </footer>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>

</script>

<style lang="scss" scoped>
.filters {
  background: white;
  z-index: 1;

  @include max-width('md') {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    // display: grid;
  }

  &__triggers {
    display: flex;
    align-items: center;

    @include max-width('md') {
      display: none;
    }
  }

  &__tabs {
    display: flex;
    flex: 1;
    height: 60px;
    align-items: center;

  }


  &__tab {
    flex: 1;
    height: 44px;
    padding: unset;
    padding: 0 20px;
    border-left: $border;

    &.active::after {
      transform: rotate(180deg);
    }
  }


  // filter contents

  &__window {
    display: grid;

    z-index: 5;
    //
    // display: none;
    //
    grid-template-areas:
      'sidebar main'
      'footer footer'
    ;
    width: 100%;
    grid-template-columns: 2fr 8fr;
    @include shadow;

    @include max-width('md') {
      grid-template-areas:
        'sidebar'
        'footer'
      ;
      height: 100vh;
      grid-template-columns: 1fr;
    }

  }

  &__sidebar {
    grid-area: sidebar;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @include max-width('md') {
      justify-content: start;
    }
  }

  &__main {
    grid-area: main;
    padding: 32px 44px 60px 80px;

    @include max-width('xl') {
      padding-right: 24px;
      padding-left: 40px;
    }


  }

  &__footer {
    grid-area: footer;
    display: flex;

    .button {
      flex: 1;
    }

    @include max-width('md') {
      margin-top: auto;
    }
  }

  // sidebar

  &__list-item {
    padding-left: 46px;
    color: $input;

    @include max-width('lg') {
      padding-left: 24px;
    }

    @include max-width('md') {
      padding: 12px 14px;
      color: black;
      border-bottom: $border;
    }

    &.active {
      background-color: $light-gray;
      color: black;

      @include max-width('md') {
        background-color: unset;
      }
    }

  }

  &__list-button {
    padding: unset;
    justify-content: start;

    @include max-width('md') {
      margin-bottom: 4px;
      height: auto;
    }

    svg {
      width: 14px;
      height: 14px;

      &:last-child {
        display: none;
        margin-left: auto;
        width: 16px;
        height: 16px;

        @include max-width('md') {
          display: initital;
        }
      }
    }
  }

  &__save {
    margin-bottom: 20px;
    margin-left: 20px;

    @include max-width('lg') {
      margin-bottom: 20px;
      margin-left: 8px;
    }

    @include max-width('md') {
      display: none;
    }
  }

  // mobile
  &__mobile {
    display: none;
    position: relative;
    padding: 14px;

    @include max-width('md') {
      display: initital;
    }

    &-subtitle {
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      margin-bottom: 2px;
    }

    &-close {
      position: absolute;
      top: 12px;
      right: 12px;

      svg {
        width: 16px;
        height: 16px;
      }
    }

    &-active-filters {
      display: none;

      @include max-width('md') {
        display: flex;
        overflow: hidden;
        font-size: 11px;
        line-height: 16px;
        color: #6E6B7B;
      }
    }

  }

  @include max-width('md') {
    .lots-found {
      @include max-width('md') {

        &::before,
        &::after {
          content: none;
        }
      }
    }
  }

}

.filter {
  display: flex;
  flex-direction: column;
  gap: 32px;

  @include max-width('md') {
    display: none;
    padding: unset;
    gap: unset;

    &.show {
      grid-area: 1 / 1;
      display: flex;
      background: white;
      z-index: 1;
    }
  }

  &__subtitle {
    margin-bottom: 24px;

    @include max-width('md') {
      margin-bottom: unset;
      padding: 12px 14px;
      border-bottom: $border;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;

      &::after {
        transform: rotate(-90deg);
      }
    }

  }

  &__subtitle.show-menu {
    @include max-width('md') {

      &::after {
        transform: rotate(0);
      }

      &~* {
        display: initial;
      }
    }
  }

  &__options {
    @include max-width('md') {
      display: none;
    }
  }

  &__search {
    margin-bottom: 32px;

    @include max-width('md') {
      margin-bottom: unset;
    }
  }

  &__top {
    display: flex;
    align-items: center;

    @include max-width('md') {
      flex-direction: column;
      position: relative;
      align-items: flex-start;
      gap: 4px;
      padding: 12px 14px;
    }
  }

  &__backdrop {
    display: none;

    @include max-width('md') {
      display: initial;
      padding: 12px 14px;
      border-bottom: $border;
      flex-direction: row-reverse;
      justify-content: start;

      &::after {
        transform: rotate(90deg);
      }
    }
  }

  &__popular-list {
    display: flex;
    align-items: center;
    gap: 4px;
    flex-wrap: wrap;

    @include max-width('md') {
      display: none;
    }
  }

  &__popular-item {
    &.active {
      background-color: $neutral;
    }
  }

  &__options-list {
    display: grid;
    grid-template-columns: repeat(3, auto);
    gap: 9px 60px;

    @include max-width('xl') {
      column-gap: 32px;
    }

    @include max-width('lg') {
      grid-template-columns: repeat(2, auto);
    }

    @include max-width('md') {
      grid-template-columns: auto;
      gap: unset;
    }
  }

  &__option {
    @include max-width('md') {
      padding: 12px 14px;
      border-bottom: 1px solid $light-gray;
      line-height: 16px;
    }
  }

  &__range-fields {
    display: flex;
    margin-top: 48px;
  }

  &__range-input {
    flex: 1;
  }

  // mobile


}
</style>
