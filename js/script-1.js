$(document).ready(function () {
    var modal = document.querySelector(".modal");

    function toggleModal(element) {
        element.toggleClass("show-modal");
        $('html').toggleClass('html-show-modal', element.hasClass("show-modal"));
    }

    function windowOnClick(event) {
        if (event.target === modal) {
            toggleModal($('.show-modal'));
        }
    }

    window.addEventListener("click", windowOnClick);
    $(document).on('click', '.home-faq-block-list-item-header', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var open = $(this).closest('.home-faq-block-list-item').hasClass('home-faq-block-list-item-open');
        $('.home-faq-block-list-item').removeClass('home-faq-block-list-item-open');
        $(this).closest('.home-faq-block-list-item').toggleClass('home-faq-block-list-item-open', !open);
    });
    $(document).on('click', '.close-button', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleModal($(this).closest('.modal'));
    });
    $(document).on('click', '.info-modal .modal-footer button', function (e) {
        e.preventDefault();
        e.stopPropagation();
        toggleModal($(this).closest('.modal'));
    });
    $(document).on('click', '.home-reviews-block-list-item-block-link a', function (e) {
        e.preventDefault();
        e.stopPropagation();

        var item = $(this).closest('.home-reviews-block-list-item-block');
        var dialog = $('.info-modal');
        dialog.find('.home-reviews-block-list-item-block-header-logo img').attr('src', item.find('.home-reviews-block-list-item-block-image img').attr('src'));
        dialog.find('.home-reviews-block-list-item-block-header-text-title').html(item.find('.home-reviews-block-list-item-block-header-text-title').html());
        dialog.find('.home-reviews-block-list-item-block-header-text-description').html(item.find('.home-reviews-block-list-item-block-header-text-description').html());
        dialog.find('.home-reviews-block-list-item-block-text-full').html(item.find('.home-reviews-block-list-item-block-text-full').html());
        dialog.find('.home-reviews-block-list-item-block-button').html(item.find('.home-reviews-block-list-item-block-button').html());

        toggleModal(dialog);
    });
    $(document).on('click', '.home-widget-block-tab-button button', function (e) {
        e.preventDefault();
        e.stopPropagation();
        let tab = $(this).data('tab');
        $('.home-widget-block-tab-block .home-widget-block-tab-block-item.de-active').removeClass('de-active');
        $('.home-widget-block-tab-button button').removeClass('active');
        $('.home-widget-block-tab-block .home-widget-block-tab-block-item.active').addClass('de-active');
        $('.home-widget-block-tab-block .home-widget-block-tab-block-item').removeClass('active');
        $('.home-widget-block-tab-button button[data-tab="' + tab + '"], .home-widget-block-tab-block .home-widget-block-tab-block-item[data-item="' + tab + '"]').addClass('active');
        setTimeout(() => {
            $('.home-widget-block-tab-block .home-widget-block-tab-block-item.de-active').removeClass('de-active');
        }, 1000);
    });
    $(document).on('click', '.home-more-donations-block-cards-item-data-link a', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).closest('.home-more-donations-block-cards-item').toggleClass('open');
        if ($(this).closest('.home-more-donations-block-cards-item').hasClass('open')) {
            $(this).closest('.home-more-donations-block-cards-item').find('.home-more-donations-block-cards-item-data-full').addClass(['animate-flip-in-x', 'animate-animated']);
            setTimeout(() => {
                $(this).closest('.home-more-donations-block-cards-item').find('.home-more-donations-block-cards-item-data-full').removeClass(['animate-flip-in-x', 'animate-animated']);
            }, 1000);
        } else {
            $(this).closest('.home-more-donations-block-cards-item').find('.home-more-donations-block-cards-item-data-full').addClass(['animate-flip-out-x', 'animate-animated']);
            setTimeout(() => {
                $(this).closest('.home-more-donations-block-cards-item').find('.home-more-donations-block-cards-item-data-full').removeClass(['animate-flip-out-x', 'animate-animated']);
            }, 1000);
        }
    });
    $(document).on('click', '.header-menu-group > a', function (e) {
        e.preventDefault();
        e.stopPropagation();
        $(this).closest('.header-menu-group').addClass('open');
    }).on('click', function (e) {
        if ($(e.target).closest('.header-menu-group').length == 0) {
            $('.header-menu-group').removeClass('open');
        }
    });
    $(document).on('click', '.main-panel-block-additional-price-buttons-block > div', function (e) {
        $('.main-panel-block-additional-price-buttons-block-item').removeClass('main-panel-block-additional-price-buttons-block-item-active');
        $(this).addClass('main-panel-block-additional-price-buttons-block-item-active');
        const period = $('.main-panel-block-additional-price-buttons-block-item-active').data('period');
        $('.main-panel-block-additional-price-list-item-text-sum-period').html((period == 'month' ? '5&nbsp;000&nbsp;₽ <span>в месяц</span>' : '56&nbsp;000&nbsp;₽ <span>в год</span>'));
    });
    $(document).on('click', '.footer-menu-mobile .footer-menu-block-title', function (e) {
        $(this).closest('.footer-menu-block').toggleClass('footer-menu-block-open')
    });
    const options = {
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        dots: true,
        prevArrow: '<div class="carousel-left">' +
            '   <svg width="60" height="60" viewBox="36 36 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '               <g filter="url(#filter0_d_5566_14875)">' +
            '           <circle cx="66" cy="66" r="30" fill="white"/>' +
            '           <path d="M65.0685 71.7131L59.3555 66.0001L65.0685 60.2871M72.6695 66.0001H59.3725" stroke="#2F577A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>' +
            '               </g>' +
            '       <defs>' +
            '           <filter id="filter0_d_5566_14875" x="0" y="0" width="134" height="134" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
            '               <feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
            '               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>' +
            '               <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_5566_14875"/>' +
            '               <feOffset dx="1" dy="1"/>' +
            '               <feGaussianBlur stdDeviation="17.5"/>' +
            '               <feColorMatrix type="matrix" values="0 0 0 0 0.0457465 0 0 0 0 0.169115 0 0 0 0 0.354167 0 0 0 0.15 0"/>' +
            '               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5566_14875"/>' +
            '               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5566_14875" result="shape"/>' +
            '           </filter>' +
            '       </defs>' +
            '   </svg>' +
            '</div>',
        nextArrow: '<div class="carousel-right">' +
            '   <svg width="60" height="60" viewBox="36 36 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">' +
            '               <g filter="url(#filter0_d_5566_14844)">' +
            '           <circle cx="66" cy="66" r="30" fill="white"/>' +
            '           <path d="M66.9565 60.2871L72.6695 66.0001L66.9565 71.7131M59.3555 66.0001H72.6525" stroke="#2F577A" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>' +
            '               </g>' +
            '       <defs>' +
            '           <filter id="filter0_d_5566_14844" x="0" y="0" width="134" height="134" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">' +
            '               <feFlood flood-opacity="0" result="BackgroundImageFix"/>' +
            '               <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>' +
            '               <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_5566_14844"/>' +
            '               <feOffset dx="1" dy="1"/>' +
            '               <feGaussianBlur stdDeviation="17.5"/>' +
            '               <feColorMatrix type="matrix" values="0 0 0 0 0.0457465 0 0 0 0 0.169115 0 0 0 0 0.354167 0 0 0 0.15 0"/>' +
            '               <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_5566_14844"/>' +
            '               <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_5566_14844" result="shape"/>' +
            '           </filter>' +
            '       </defs>' +
            '   </svg>' +
            '</div>',
        dotsClass: 'slick-dots-line reset',
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 1
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    };

    if ($('.home-reviews-block-list-slider').length) {
        $('.home-reviews-block-list-slider').slick(options);
    }

    if ($('.home-build-relationships-block-list-mobile').length) {
        $('.home-build-relationships-block-list-mobile').slick(options);
    }

    if ($('.page-tariff-block-list-mobile').length) {
        $('.page-tariff-block-list-mobile').slick(options);
    }

    var rules = {
        email: {
            required: true,
            email: true
        },
        phone: {required: true},
        name: {required: true},
        organization: {required: true},
        agree: {required: true},
    };
    set_rules($('#main-request'), rules);
    $('#phone').inputmask('phone');
    $(document).on('keypress', '#main-request', function (e) {
        if (e.which == 13) {
            send();
        }
    });
    init_cookie();
    setTimeout(() => {
        const hash = $(location).attr('hash');
        if (hash) {
            $('html, body').animate({
                'scrollTop': $(hash).offset().top
            }, 2000);
        }
    }, 100);
    $(document).on('click', 'a[data-goal]', function (e) {
        e.preventDefault();
        e.stopPropagation();
        const goal = $(this).attr('data-goal');
        const href = $(this).attr('href');
        if (goal) {
            if (typeof ym != "undefined") {
                ym(96116914, 'reachGoal', goal);
            }
            let _tmr = window._tmr || (window._tmr = []);
            if (goal == 'Checkout') {
                _tmr.push({type: 'reachGoal', id: 3580623, goal: 'Клик по кнопке начать бесплатно'});
            }
            if (goal == 'Change_form') {
                _tmr.push({type: 'reachGoal', id: 3580623, goal: 'Начал вводить контактные данные'});
            }
            if (goal == 'save') {
                _tmr.push({type: 'reachGoal', id: 3580623, goal: 'Оформление закончено'});
            }
        }
        if (href) {
            setTimeout(() => {
                location.href = href;
            }, 100);
        }
    });
});

function init_cookie() {
    setTimeout(function () {
        var cookie_string = '' +
            '<div class="cookies-container">' +
            '    <div class="cookies-container-block">' +
            '        <div class="cookies-block">' +
            '            <div class="cookies-block-text">' +
            '                Чтобы сайт корректно работал, мы используем cookie. Оставаясь на сайте, вы даёте согласие на обработку файлов cookie' +
            '            </div>' +
            '            <div class="cookies-button">' +
            '                <a>Понятно</a>' +
            '            </div>' +
            '            <div class="cookies-block-link">' +
            '                <a href="' + base_url + 'privacy-policy">Политика в отношении обработки персональных данных</a>' +
            '            </div>' +
            '        </div>' +
            '    </div>' +
            '</div>';
        var key = 'COOKIE_SUCCESS';
        if (localStorage) {
            var success = localStorage.getItem(key);
            if (success && success == '1') {
                $('.cookies-container').remove();
            } else {
                $('body .main-container').after(cookie_string);
            }
        } else {
            $('body .main-container').after(cookie_string);
        }
        $('.cookies-button a').on('click', function () {
            if (localStorage) {
                localStorage.setItem(key, '1');
            }
            $('.cookies-container').remove();
        });
    }, 3000);
}

/**
 * Сохранение
 */
function send() {
    let form = $('#main-request');
    if (form.valid() && is_captcha()) {
        let params = form.serialize();
        save(form[0].action, params, function (result) {
            form.trigger('reset');
            $.jGrowl('Заявка успешно отправлена');
        });
    }
}

/**
 * Проверка капчи
 * @returns {boolean}
 */
function is_captcha() {
    let field = $('[name="smart-token"]');
    let result = false;
    if (field.length && field.val()) {
        result = true;
        field.closest('.form-control').find('.error').remove();
    } else {
        field.closest('.form-control').append('<label class="error" for="smart-token">Это поле необходимо заполнить.</label>');
    }
    return result;
}

/**
 * Сохранение элемента
 * @param {string} url - адрес для сохранения
 * @param {object} data - данные для сохранения
 * @param {function} success_callback - функция при успешном завершении операции
 * @returns {void}
 */
function save(url, data, success_callback) {
    $.post(url, data, function (result) {
            if (result.is_error === false) {
                $(".show-modal").removeClass("show-modal");
                $('html').removeClass('html-show-modal');
                //вызов пользовательской функции при успешном завершении сохранения
                if (success_callback) {
                    success_callback(result);
                }
            } else {
                $.jGrowl(result.message);
            }
        }
    );
}

/**
 * Устанавливаем правила валидации для формы
 * @param {string} form - селектор формы
 * @param {object} rules - правила валидации
 */
function set_rules(form, rules) {
    this.set_ru_messages();
    if (form) {
        $(form).validate({
            ignore: [],
            'rules': rules,
            onfocusout: false,
            invalidHandler: function (form, validator) {
                var errors = validator.numberOfInvalids();
                var tabs = $(validator.errorList[0].element.closest('div[role="tabpanel"]'));
                if (tabs.length) {
                    $('li[role="tab"]').removeClass('active');
                    $('[aria-controls="' + tabs.attr('id') + '"]').click();
                }
                if (errors) {
                    var multiselect = $(validator.errorList[0].element).next('.multiselect-btn');
                    if (multiselect && multiselect.length) {
                        if (multiselect.offset()) {
                            $('html, body').animate({
                                scrollTop: multiselect.offset().top - 80
                            }, 0);
                        }
                        setTimeout(function () {
                            multiselect.find('button').click();
                        }, 100);
                    } else {
                        validator.errorList[0].element.focus();
                    }
                }
            },
            errorPlacement: function (error, element) {
                if (element.parent('.round').length) {
                    element.parent().parent().append(error);
                } else if (element.parent('.custom-select').length) {
                    error.insertAfter(element.parent());
                } else if (element.parent('.input-group').length) {
                    error.insertAfter(element.parent());
                } else {
                    element.parent().append(error);
                }
            }
        });
    }
}

/**
 * Локализация сообщений об ошибках
 */
function set_ru_messages() {
    $.extend($.validator.messages, {
        required: "Это поле необходимо заполнить.",
        remote: "Пожалуйста, введите правильное значение.",
        email: "Пожалуйста, введите корректный E-mail.",
        url: "Пожалуйста, введите корректный URL.",
        date: "Пожалуйста, введите корректную дату.",
        dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
        number: "Пожалуйста, введите число.",
        digits: "Пожалуйста, вводите только цифры.",
        creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
        equalTo: "Пожалуйста, введите такое же значение ещё раз.",
        accept: "Пожалуйста, выберите файл с правильным расширением.",
        maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
        minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
        rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
        range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
        max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
        min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
    });
}