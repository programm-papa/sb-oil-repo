
$(document).ready(function app() {
    //Обработка прогресcбара для ПК
    if ($(window).width() > 1110) {
        $(window).scroll(function () {
            let classList = $('.active-page').attr('class');
            let scroll = $(window).scrollTop() + $(window).height();
            if (classList.indexOf('on-main') !== -1) {
                changeProgressBar(0);
            }
            else if (classList.indexOf('extraction-id') !== -1) {
                let p1 = $('#1').offset().top;
                let p2 = $('#2').offset().top;
                let p3 = $('#3').offset().top;
                let p4 = $('#4').offset().top;
                let p5 = $('#5').offset().top;
                let p6 = $('#6').offset().top;
                if (scroll < p1) {
                    changeProgressBar(0);
                }
                else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(34);
                }
                else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(68);
                }
                else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(102);
                }
                else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(136);
                }
                else if (scroll > p6) {
                    changeProgressBar(171);
                }

            }
            else if (classList.indexOf('refining-id') !== -1) {
                let p1 = $('#11').offset().top;
                let p2 = $('#12').offset().top;
                let p3 = $('#13').offset().top;
                let p4 = $('#14').offset().top;
                let p5 = $('#15').offset().top;
                let p6 = $('#16').offset().top;
                if (scroll < p1) {
                    changeProgressBar(171);
                }
                else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(205);
                }
                else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(239);
                }
                else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(273);
                }
                else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(307);
                }
                else if (scroll > p6) {
                    changeProgressBar(342);
                }
            }
            else if (classList.indexOf('oilfield-services-id') !== -1) {
                let p1 = $('#21').offset().top;
                let p2 = $('#22').offset().top;
                let p3 = $('#23').offset().top;
                let p4 = $('#24').offset().top;
                let p5 = $('#25').offset().top;
                let p6 = $('#26').offset().top;
                let p7 = $('#27').offset().top;
                if (scroll < p1) {
                    changeProgressBar(342);
                }
                else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(370);
                }
                else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(399);
                }
                else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(427);
                }
                else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(456);
                }
                else if (scroll > p6 && scroll < p7) {
                    changeProgressBar(484);
                }
                else if (scroll > p7) {
                    changeProgressBar(513);
                }
            }
            else if (classList.indexOf('petrochemicals-id') !== -1) {
                let p1 = $('#31').offset().top;
                let p2 = $('#32').offset().top;
                let p3 = $('#33').offset().top;
                let p4 = $('#34').offset().top;
                let p5 = $('#35').offset().top;
                let p6 = $('#36').offset().top;
                if (scroll < p1) {
                    changeProgressBar(513);
                }
                else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(547);
                }
                else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(581);
                }
                else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(615);
                }
                else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(649);
                }
                else if (scroll > p6) {
                    changeProgressBar(684);
                }
            }
            else if (classList.indexOf('transportation-id') !== -1) {
                let p1 = $('#41').offset().top;
                let p2 = $('#42').offset().top;
                let p3 = $('#43').offset().top;
                let p4 = $('#44').offset().top;
                let p5 = $('#45').offset().top;
                let p6 = $('#46').offset().top;
                if (scroll < p1) {
                    changeProgressBar(684);
                }
                else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(718);
                }
                else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(752);
                }
                else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(786);
                }
                else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(820);
                }
                else if (scroll > p6) {
                    changeProgressBar(855);
                }
            }
            else if (classList.indexOf('gas-processing-id') !== -1) {
                let p1 = $('#51').offset().top;
                let p2 = $('#52').offset().top;
                let p3 = $('#53').offset().top;
                let p4 = $('#54').offset().top;
                let p5 = $('#55').offset().top;
                let p6 = $('#56').offset().top;
                if (scroll < p1) {
                    changeProgressBar(855);
                }
                else if (scroll > p1 && scroll < p2) {
                    changeProgressBar(889);
                }
                else if (scroll > p2 && scroll < p3) {
                    changeProgressBar(923);
                }
                else if (scroll > p3 && scroll < p4) {
                    changeProgressBar(957);
                }
                else if (scroll > p5 && scroll < p6) {
                    changeProgressBar(991);
                }
                else if (scroll > p6) {
                    changeProgressBar(1030);
                }
            }
        });
    }
    //Заполнение прогресcбара
    function changeProgressBar(length) {
       
        if ($(window).width() > 1110) {
            length = length + "px";
            let progressBar = $('.top-header.desctop .progress-wrapper');
            $(progressBar).css("width", length);
        }
        else {
            length = length + "%";
            let progressBar = $('.top-header.adaptive .progress-wrapper');
            $(progressBar).css("width", length); 
        }
    }
    //Обработка нажатия кнопки глосария
    $('.glossary-btn').on('click', function () {
        $(this).toggleClass('glossary-open');
        $('.glossary-content').toggleClass('content-open');
    });
    //Обработка нажатия кнопки подотраслей
    $('.subindustry-btn').on('click', function () {
        $(this).toggleClass('active-btn ');
        $('.subindustry-menu').toggleClass('open-subindustry');
    });
    //Мобильное меню, обработка кликов на адаптиве
    $('.menu-button').on('click', function () {
        $(this).toggleClass('open');
        $('.adaptive-menu').toggleClass('open');
        $('body').toggleClass('scroll-off');
    });
    //Закрытие меню при клике на ссылку подменю
    $('body').on('click', '.sub-menu-link', function () {
        $('.menu-button').toggleClass('open');
        $('.adaptive-menu').toggleClass('open');
        $('body').toggleClass('scroll-off');
    });
    //Обработчик кнопок мобильного глосария 
    $('.adaptive-glossary-btn').on('click', function () {
        $('.adaptive-glossary').toggleClass('open');
        $('body').toggleClass('scroll-off');
    });
    //Обработка разворачиваемого контента
    $('.collapsible-title').on('click', function () {
        $(this).toggleClass('open');
    })


    //Обработчик перехода по подстраницам и запуск лоадера
    //Работаем через делегированные события, тк мы добавляем новые элементы, на которые старые eventListenerы не распространяются 
    $('body').on('click', '.page-link', function () {
        let transition = $('.transition');
        let buttonClass = $(this).attr('class');
        transition.toggleClass('load');
        $('body').addClass('scroll-off');
        setTimeout(function () {
            $('.loader').toggleClass('loader-active ');
        }, 600)
        setTimeout(function () {
            let activePage = $('.active-page');
            activePage.addClass('hidden');
            activePage.removeClass('active-page');
            $("body,html").animate({
                scrollTop: 0
            }, 1);
            //Выключение меню подотрасли
            if ($('.subindustry-menu').hasClass('open-subindustry')) {
                $('.subindustry-menu').removeClass('open-subindustry');
                if ($('.subindustry-btn').hasClass('active-btn')) {
                    $('.subindustry-btn').removeClass('active-btn');
                }
            }


            //Изменение страниц
            if (buttonClass.indexOf('on-main') !== -1) {
                if ($('main.main-page').hasClass('hidden')) {
                    $('main.main-page').removeClass('hidden');
                }
                $('main.main-page').addClass('active-page');
                //Изменение header
                if ($(window).width() > 1110) {
                    changeProgressBar(0);
                }
                else if ($(window).width() > 767) {
                    changeProgressBar(17);
                }
                changeHeader('on-main');
                changeFooter('on-main');
            }
            else if (buttonClass.indexOf('extraction-id') !== -1) {
                if ($('main.extraction-id').hasClass('hidden')) {
                    $('main.extraction-id').removeClass('hidden');
                }
                $('main.extraction-id').addClass('active-page');
                //Изменение header
                changeProgressBar(0);
                changeHeader('extraction-id');
                changeFooter('extraction-id');
            }
            else if (buttonClass.indexOf('refining-id') !== -1) {
                if ($('main.refining-id').hasClass('hidden')) {
                    $('main.refining-id').removeClass('hidden');
                }
                $('main.refining-id').addClass('active-page');
                //Изменение header
                changeProgressBar(171);
                changeHeader('refining-id');
                changeFooter('refining-id');
            }
            else if (buttonClass.indexOf('oilfield-services-id') !== -1) {
                if ($('main.oilfield-services-id').hasClass('hidden')) {
                    $('main.oilfield-services-id').removeClass('hidden');
                }
                $('main.oilfield-services-id').addClass('active-page');
                //Изменение header
                changeProgressBar(342);
                changeHeader('oilfield-services-id');
                changeFooter('oilfield-services-id');
            }
            else if (buttonClass.indexOf('petrochemicals-id') !== -1) {
                if ($('main.petrochemicals-id').hasClass('hidden')) {
                    $('main.petrochemicals-id').removeClass('hidden');
                }
                $('main.petrochemicals-id').addClass('active-page');
                //Изменение header
                changeProgressBar(513);
                changeHeader('petrochemicals-id');
                changeFooter('petrochemicals-id');
            }
            else if (buttonClass.indexOf('transportation-id') !== -1) {
                if ($('main.transportation-id').hasClass('hidden')) {
                    $('main.transportation-id').removeClass('hidden');
                }
                $('main.transportation-id').addClass('active-page');
                //Изменение header
                changeProgressBar(684);
                changeHeader('transportation-id');
                changeFooter('transportation-id');
            }
            else if (buttonClass.indexOf('gas-processing-id') !== -1) {
                if ($('main.gas-processing-id').hasClass('hidden')) {
                    $('main.gas-processing-id').removeClass('hidden');
                }
                $('main.gas-processing-id').addClass('active-page');
                //Изменение header
                changeProgressBar(855);
                changeHeader('gas-processing-id');
                changeFooter('gas-processing-id');
            }

            //Выключения меню подотраслей
            if ($('.adaptive-menu').hasClass('open')) {
                $('.menu-button').removeClass('open');
                $('.adaptive-menu').removeClass('open');
            }
        }, 1200)
        setTimeout(function () {
            $('.loader').toggleClass('loader-active');
        }, 3000)
        setTimeout(function () {
            transition.toggleClass('load');
        }, 2600)
        setTimeout(function () {
            $('body').removeClass('scroll-off');
        }, 3800)
    });

    //Изменение хедера
    function changeHeader(pageId) {
        console.log(pageId + ' id новой страницы');
        //Изменение окраски и контента header
        if (pageId === 'on-main') {
            if (!$('header').hasClass('main-page')) {
                if ($('header').hasClass('other-page')) {
                    $('header').removeClass('other-page');
                }
                $('header').addClass('main-page');
            }
        }
        else {
            if ($('header').hasClass('main-page')) {
                if (!$('header').hasClass('other-page')) {
                    $('header').removeClass('main-page');
                    $('header').addClass('other-page');
                }
            }
        }
        if ($(window).width() > 1110) {
            if (pageId !== 'on-main') {
                let activeLink = '.subindustry-menu ul .page-link.' + pageId;
                if ($('.page-link.active').hasClass('active')) {
                    $('.page-link.active').removeClass('active')
                }
                console.log(activeLink);
                $(activeLink).addClass('active');
            }
        }

        //Изменение меню navigation
        if (pageId === 'on-main') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a class="page-link extraction-id">Добыча нефти и газа</a><div class="nav-line"></div></li><li><a class="page-link refining-id">Нефтепереработка</a> <div class="nav-line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="nav-line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="nav-line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="nav-line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="nav-line"></div> </li>');
            }
        }
        else if (pageId === 'extraction-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a href="#1" class="">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#2" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#3" class="">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#4" class="">Риски</a><div class="nav-line"></div></li> <li><a href="#5" class="">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#6" class="">Структурирование<br>кредитных сделок</a><div class="nav-line"></div></li>');
            }
            else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Добыча нефти и газа</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#1" class="sub-menu-link">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#2" class="sub-menu-link">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#3" class="sub-menu-link">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#4" class="sub-menu-link">Риски</a><div class="nav-line"></div></li> <li><a href="#5" class="sub-menu-link">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#6" class="sub-menu-link">Структурирование<br>кредитных сделок</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li>')
                }
                else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a href="#1" class="sub-menu-link">Описание подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#2" class="sub-menu-link">Регулирование подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#3" class="sub-menu-link">Список документов</a> <div class="nav-line"></div> </li> <li><a href="#4" class="sub-menu-link">Риски</a> <div class="nav-line"></div> </li> <li><a href="#5" class="sub-menu-link">Анализ и финансовое моделирование</a> <div class="nav-line"></div> </li> <li><a href="#6" class="sub-menu-link">Структурирование кредитных сделок</a> <div class="nav-line"></div> </li> </div> <div> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li> </div>');
                }

            }
        }
        else if (pageId === 'refining-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li><a href="#11" class="">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#12" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#13" class="">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#14" class="">Риски</a><div class="nav-line"></div></li> <li><a href="#15" class="">Релевантные<br>кредитные инструменты</a><div class="nav-line"></div></li> <li><a href="#16" class="">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li>');
            }
            else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Нефтепереработка</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#11" class="sub-menu-link">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#12" class="sub-menu-link">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#13" class="sub-menu-link">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#14" class="sub-menu-link">Риски</a><div class="nav-line"></div></li> <li><a href="#15" class="sub-menu-link">Релевантные<br>кредитные инструменты</a><div class="nav-line"></div></li> <li><a href="#16" class="sub-menu-link">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li>')
                }
                else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="page-link extraction-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a href="#11" class="sub-menu-link">Описание подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#12" class="sub-menu-link">Регулирование подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#13" class="sub-menu-link">Список документов</a> <div class="nav-line"></div> </li> <li><a href="#14" class="sub-menu-link">Риски</a> <div class="nav-line"></div> </li> <li><a href="#15" class="sub-menu-link">Релевантные кредитные инструменты</a> <div class="nav-line"></div> </li> <li><a href="#16" class="sub-menu-link">Анализ и финансовое моделирование</a> <div class="nav-line"></div> </li> </div> <div> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li> </div>');
                }

            }
        }
        else if (pageId === 'oilfield-services-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li style="margin-right: 30px"><a href="#21" class="">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li style="margin-right: 30px"><a href="#22" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li style="margin-right: 30px"><a href="#23" class="">Список<br>документов</a><div class="nav-line"></div></li> <li style="margin-right: 30px"><a href="#24" class="">Риски</a><div class="nav-line"></div></li> <li style="margin-right: 30px"><a href="#25" class="">Релевантные<br>кредитные&nbsp;инструменты</a><div class="nav-line"></div></li> <li style="margin-right: 30px"><a href="#26" class="">Анализ&nbsp;и&nbsp;финансовое<br>моделирование</a><div class="nav-line"></div></li> <li style="margin-right: 30px"><a href="#27" class="">Структурирование<br>кредитных&nbsp;сделок</a><div class="nav-line"></div></li>');
            }
            else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Нефтесервисные услуги</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#21" class="sub-menu-link">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#22" class="sub-menu-link">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#23" class="sub-menu-link">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#24" class="sub-menu-link">Риски</a><div class="nav-line"></div></li> <li><a href="#25" class="sub-menu-link">Релевантные<br>кредитные инструменты</a><div class="nav-line"></div></li> <li><a href="#26" class="sub-menu-link">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li>')
                }
                else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a href="#21" class="sub-menu-link">Описание подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#22" class="sub-menu-link">Регулирование подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#23" class="sub-menu-link">Список документов</a> <div class="nav-line"></div> </li> <li><a href="#24" class="sub-menu-link">Риски</a> <div class="nav-line"></div> </li> <li><a href="#25" class="sub-menu-link">Релевантные кредитные инструменты</a> <div class="nav-line"></div> </li> <li><a href="#26" class="sub-menu-link">Анализ и финансовое моделирование</a> <div class="nav-line"></div> </li> </div> <div> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li> </div>');
                }

            }
        }
        else if (pageId === 'petrochemicals-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li ><a href="#31" class="">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li ><a href="#32" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li ><a href="#33" class="">Список<br>документов</a><div class="nav-line"></div></li> <li ><a href="#34" class="">Риски</a><div class="nav-line"></div></li> <li ><a href="#35" class="">Анализ&nbsp;и&nbsp;финансовое<br>моделирование</a><div class="nav-line"></div></li> <li ><a href="#36" class="">Структурирование<br>кредитных&nbsp;сделок</a><div class="nav-line"></div></li>');
            }
            else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Нефтехимия</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#31" class="sub-menu-link">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#32" class="sub-menu-link">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#33" class="sub-menu-link">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#34" class="sub-menu-link">Риски</a><div class="nav-line"></div></li> <li><a href="#35" class="sub-menu-link">Релевантные<br>кредитные инструменты</a><div class="nav-line"></div></li> <li><a href="#36" class="sub-menu-link">Структурирование<br>кредитных&nbsp;сделок</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li>')
                }
                else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="">Нефтехимия</a> <div class="line"></div> </li> <li><a href="#31" class="sub-menu-link">Описание подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#32" class="sub-menu-link">Регулирование подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#33" class="sub-menu-link">Список документов</a> <div class="nav-line"></div> </li> <li><a href="#34" class="sub-menu-link">Риски</a> <div class="nav-line"></div> </li> <li><a href="#35" class="sub-menu-link">Анализ и финансовое моделирование</a> <div class="nav-line"></div> </li> <li><a href="#36" class="sub-menu-link">Структурирование кредитных&nbsp;сделок</a> <div class="nav-line"></div> </li> </div> <div> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li> </div>');
                }

            }
        }
        else if (pageId === 'transportation-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li ><a href="#41" class="">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li ><a href="#42" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li ><a href="#43" class="">Список<br>документов</a><div class="nav-line"></div></li> <li ><a href="#44" class="">Риски</a><div class="nav-line"></div></li> <li ><a href="#45" class="">Анализ&nbsp;и&nbsp;финансовое<br>моделирование</a><div class="nav-line"></div></li> <li ><a href="#46" class="">Структурирование<br>кредитных&nbsp;сделок</a><div class="nav-line"></div></li>');
            }
            else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Транспортировка</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#41" class="sub-menu-link">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#42" class="sub-menu-link">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#43" class="sub-menu-link">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#44" class="sub-menu-link">Риски</a><div class="nav-line"></div></li> <li><a href="#45" class="sub-menu-link">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#46" class="sub-menu-link">Структурирование кредитных&nbsp;сделок</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li>')
                }
                else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="">Транспортировка</a> <div class="line"></div> </li> <li><a href="#41" class="sub-menu-link">Описание подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#42" class="sub-menu-link">Регулирование подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#43" class="sub-menu-link">Список документов</a> <div class="nav-line"></div> </li> <li><a href="#44" class="sub-menu-link">Риски</a> <div class="nav-line"></div> </li> <li><a href="#45" class="sub-menu-link">Анализ и финансовое моделирование</a> <div class="nav-line"></div> </li> <li><a href="#46" class="sub-menu-link">Структурирование кредитных&nbsp;сделок</a> <div class="nav-line"></div> </li> </div> <div> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li> </div>');
                }

            }
        }
        else if (pageId === 'gas-processing-id') {
            if ($(window).width() > 1110) {
                $('.navigation ul').html('<li ><a href="#51" class="">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li ><a href="#52" class="">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li ><a href="#53" class="">Список<br>документов</a><div class="nav-line"></div></li> <li ><a href="#54" class="">Риски</a><div class="nav-line"></div></li> <li ><a href="#55" class="">Анализ&nbsp;и&nbsp;финансовое<br>моделирование</a><div class="nav-line"></div></li> <li ><a href="#56" class="">Структурирование<br>кредитных&nbsp;сделок</a><div class="nav-line"></div></li>');
            }
            else if ($(window).width() < 1110) {
                if ($(window).width() < 768) {
                    $('.adaptive-menu-content').html('<li class="have-sub"><a>Газопереработка и СПГ</a> <div class="line"></div> <ul class="sub-menu"> <li><a href="#51" class="sub-menu-link">Описание<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#52" class="sub-menu-link">Регулирование<br>подотрасли</a><div class="nav-line"></div></li> <li><a href="#53" class="sub-menu-link">Список<br>документов</a><div class="nav-line"></div></li> <li><a href="#54" class="sub-menu-link">Риски</a><div class="nav-line"></div></li> <li><a href="#55" class="sub-menu-link">Анализ и финансовое<br>моделирование</a><div class="nav-line"></div></li> <li><a href="#56" class="sub-menu-link">Структурирование кредитных&nbsp;сделок</a><div class="nav-line"></div></li> </ul> </li> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li>')
                }
                else {
                    $('.adaptive-menu-content').html('<div class="page-menu"> <li class="open-page"><a class="">Газопереработка и СПГ</a> <div class="line"></div> </li> <li><a href="#51" class="sub-menu-link">Описание подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#52" class="sub-menu-link">Регулирование подотрасли</a> <div class="nav-line"></div> </li> <li><a href="#53" class="sub-menu-link">Список документов</a> <div class="nav-line"></div> </li> <li><a href="#54" class="sub-menu-link">Риски</a> <div class="nav-line"></div> </li> <li><a href="#55" class="sub-menu-link">Анализ и финансовое моделирование</a> <div class="nav-line"></div> </li> <li><a href="#56" class="sub-menu-link">Структурирование кредитных&nbsp;сделок</a> <div class="nav-line"></div> </li> </div> <div> <li><a class="page-link extraction-id">Добыча нефти и газа</a> <div class="line"></div> </li> <li><a class="page-link refining-id">Нефтепереработка</a> <div class="line"></div> </li> <li><a class="page-link oilfield-services-id">Нефтесервисные услуги</a> <div class="line"></div> </li> <li><a class="page-link petrochemicals-id">Нефтехимия</a> <div class="line"></div> </li> <li><a class="page-link transportation-id">Транспортировка</a> <div class="line"></div> </li> <li><a class="page-link gas-processing-id">Газопереработка и СПГ</a> <div class="line"></div> </li> </div>');
                }

            }
        }
    }

    //Изменение футера 
    function changeFooter(pageId) {
        //Добавление класса к футеру, для его отображения
        if (pageId === 'on-main') {
            if (!$('footer').hasClass('main-page')) {
                if ($('footer').hasClass('other-page')) {
                    $('footer').removeClass('other-page');
                }
                $('footer').addClass('main-page');
            }
        }
        else {
            if ($('footer').hasClass('main-page')) {
                if (!$('footer').hasClass('other-page')) {
                    $('footer').removeClass('main-page');
                    $('footer').addClass('other-page');
                }
            }
            //Нужные нам кнопки
            let pagePrev = $('.page-prev');
            let pagePrevLink = $('.page-prev .prev-button');
            let pagePrevName = $('.page-prev .page-name');

            let pageNext = $('.page-next');
            let pageNextLink = $('.page-next .next-button');
            let pageNextName = $('.page-next .page-name');
            //Ссылки на все страницы
            const linkArr = ['on-main', 'extraction-id', 'refining-id', 'oilfield-services-id', 'petrochemicals-id', 'transportation-id', 'gas-processing-id'];
            console.log(linkArr);

            //Удаление скрытия на кнопках
            if (pagePrev.hasClass('hidden')) {
                pagePrev.removeClass('hidden')
            }
            if (pageNext.hasClass('hidden')) {
                pageNext.removeClass('hidden')
            }


            //Удаление ссылок на страницы
            console.log(linkArr.length);
            for (i = 0; i < linkArr.length; ++i) {
                if (pagePrevLink.hasClass(linkArr[i])) {
                    pagePrevLink.removeClass(linkArr[i]);
                }
            }
            for (i = 0; i < linkArr.length; ++i) {
                if (pageNextLink.hasClass(linkArr[i])) {
                    pageNextLink.removeClass(linkArr[i]);
                }
            }

            //Изменение контента footer для конкретных страниц
            if (pageId === 'extraction-id') {
                pagePrev.addClass('hidden');
                pageNextLink.addClass('refining-id');
                pageNextName.html('Нефтепереработка');
            }
            else if (pageId === 'refining-id') {
                pagePrevLink.addClass('extraction-id');
                pageNextLink.addClass('oilfield-services-id');
                pagePrevName.html('Добыча нефти и газа');
                pageNextName.html('Нефтесервисные услуги');
            }
            else if (pageId === 'oilfield-services-id') {
                pagePrevLink.addClass('refining-id');
                pageNextLink.addClass('petrochemicals-id');
                pagePrevName.html('Нефтепереработка');
                pageNextName.html('Нефтехимия');
            }
            else if (pageId === 'petrochemicals-id') {
                pagePrevLink.addClass('oilfield-services-id');
                pageNextLink.addClass('transportation-id');
                pagePrevName.html('Нефтесервисные услуги');
                pageNextName.html('Транспортировка');
            }
            else if (pageId === 'gas-processing-id') {
                pagePrevLink.addClass('petrochemicals-id');
                pageNextLink.addClass('on-main');
                pagePrevName.html('Нефтесервисные услуги');
                pageNextName.html('На Главную');
            }
        }
    }

    //Функции работы с popup-info
    $('.orange-info-text').on("click", function () {
        let elementId = $(this).prop('id');
        let popup = $('.popup-info');
        let nameInfo = $('.popup-info .popup-content .name');
        let contentInfo = $('.popup-info .popup-content .content');
        let position = 0;
        if ($(window).width() < 1110) {
            if ($('.main-page').hasClass('active')) {
                position = $(window).scrollTop() + 60;
            }
            else {
                position = $(window).scrollTop() + 50;
            }
            $('body').addClass('scroll-off');
        }
        else {
            position = $(this).offset().top - popup.height() / 2;
        }
        //Добавляем текст в попап
        if (elementId == "a") {
            nameInfo.html('ОПЕК+');
            contentInfo.html('Организация стран-экспортеров нефти (англ. The Organization of the Petroleum Exporting Countries; сокращенно ОПЕК) — международная межправительственная организация, созданная нефтедобывающими странами в целях контроля квот добычи на нефть. В состав ОПЕК входят 13 стран: Алжир, Ангола, Венесуэла, Габон, Иран, Ирак, Конго, Кувейт, Ливия, Объединенные Арабские Эмираты, Нигерия, Саудовская Аравия, Экваториальная Гвинея. На апрель 2020 г. в «картель» ОПЕК+ входят 10 стран — Азербайджан, Бахрейн, Бруней, Казахстан, Малайзия, Мексика, Оман, Россия, Судан, Южный Судан. ')
        }
        else if (elementId == "b") {
            nameInfo.html('Критериям');
            contentInfo.html('НПЗ, которые (i) попадают под действие ограничительных мер, введенных иностранными государствами, и/или (ii) поставляют автомобильный бензин 5-го класса на внутренний рынок и/или нафту для нефтехимии в определенном объеме, и/или (iii) имеют мощность ≥ 600 тыс. т в год и заключили с Минэнерго РФ Соглашение о модернизации.')
        }
        else if (elementId == "c") {
            nameInfo.html('Котлового финансирования');
            contentInfo.html('Финансирование текущей деятельности, не предусматривающее финансирование на цели исполнения конкретного контракта и закрепление источников погашения от реализации конкретного контракта.')
        }
        else if (elementId == "d") {
            nameInfo.html('FCash котел');
            contentInfo.html('Рассчитывается по остаточной стоимости Контрактной базы (за исключением остаточной стоимости, приходящейся на контракты, финансируемые на Принципах контрактного кредитования Банком или КБ, контракты, права требования по которым находятся в залоге у Банка или КБ, контракты, по которым предусматривается направление поступающей по ним выручки на погашение обязательств заемщика по конкретным кредитным соглашениям).')
        }
        else if (elementId == "e") {
            nameInfo.html('Liabilities котел');
            contentInfo.html('В расчет включаются обязательства Контрагента, подлежащие возврату в период действия рассматриваемой сделки.')
        }
        else if (elementId == "f") {
            nameInfo.html('FCash скор');
            contentInfo.html('Совокупность всех реализуемых Контрагентом Контрактов, в т.ч.: государственных, экспортных, договоров на исполнение работ в рамках Контракта, контрактов на стадии заключения (по итогам тендера/аукциона/конкурса), перспективных Контрактов.')
        }
        else if (elementId == "g") {
            nameInfo.html('Liabilities скор');
            contentInfo.html('В расчет не включаются обязательства по Контрактам, не вошедшим в Скорректированную контрактную базу.')
        }
        //Открытие окна
        if (!popup.hasClass('open')) {
            popup.addClass('open');
        }
        popup.css({
            'top': position
        })
    });

    $('.popup-info .popup-content .close').on("click", function () {
        let popup = $('.popup-info');
        if ($(window).width() < 1110) {
            $('body').removeClass('scroll-off');
            if (popup.hasClass('open')) {
                popup.removeClass('open');
            }
        }
        else {
            if (popup.hasClass('open')) {
                popup.removeClass('open');
            }
        }

    })
});
