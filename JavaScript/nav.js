window.onload = function () {

    //导航的悬停效果
    var current = document.getElementById('current');
    var CCTVshow = document.getElementById('CCTVshow');
    var chinese = document.getElementById('chinese');
    var nav_son_uls = document.querySelectorAll('.nav_son_ul');
    var nav_extras = document.querySelectorAll('.nav_extra');
    var szColor = document.getElementById('szColor');
    var szColorGroup = document.getElementById('szColorGroup');
    var zbColor = document.getElementById('zbColor');
    var zbColorGroup = document.getElementById('zbColorGroup');
    var cnColor = document.getElementById('cnColor');
    var cnColorGroup = document.getElementById('cnColorGroup');
    //出现的事件触发
    current.addEventListener('mouseover', function () {
        for (var i = 0; i < nav_son_uls.length; i++) {
            nav_son_uls[i].className = 'nav_son_ul';
        }
        nav_son_uls[1].className = 'nav_son_ul nav_son_ul_none';
        szColor.style.color = '#bf0614';
        szColorGroup.style.transform = 'rotate(180deg)';
        szColorGroup.style.backgroundPosition = '44.78px -0.59px';
    })
    CCTVshow.addEventListener('mouseover', function () {
        for (var i = 0; i < nav_son_uls.length; i++) {
            nav_son_uls[i].className = 'nav_son_ul';
        }
        nav_son_uls[2].className = 'nav_son_ul nav_son_ul_none';
        zbColor.style.color = '#bf0614';
        zbColorGroup.style.transform = 'rotate(180deg)';
        zbColorGroup.style.backgroundPosition = '44.78px -0.59px';
    })
    chinese.addEventListener('mouseover', function () {
        for (var i = 0; i < nav_son_uls.length; i++) {
            nav_son_uls[i].className = 'nav_son_ul';
        }
        nav_son_uls[3].className = 'nav_son_ul nav_son_ul_none';
        cnColor.style.color = '#bf0614';
        cnColorGroup.style.transform = 'rotate(180deg)';
        cnColorGroup.style.backgroundPosition = '44.78px -0.59px';
    })
    for (var j = 0; j < nav_extras.length; j++) {
        nav_extras[j].addEventListener('mouseover', function () {
            for (var i = 0; i < nav_son_uls.length; i++) {
                nav_son_uls[i].className = 'nav_son_ul';
            }
            nav_son_uls[0].className = 'nav_son_ul nav_son_ul_none';
            szColor.style.color = 'white';
            szColorGroup.style.backgroundPosition = '58.78px -0.59px';
            szColorGroup.style.transform = 'rotate(-360deg)';
            zbColor.style.color = 'white';
            zbColorGroup.style.backgroundPosition = '58.78px -0.59px';
            zbColorGroup.style.transform = 'rotate(-360deg)';
            cnColor.style.color = 'white';
            cnColorGroup.style.backgroundPosition = '58.78px -0.59px';
            cnColorGroup.style.transform = 'rotate(-360deg)';
        })
    }

    /*
    *主体部分的热榜
    *
    * */
    var input_hot = document.querySelector('.myInput');
    var hotSearch_content = document.querySelector('.hotSearch_content');
    input_hot.onfocus = function () {
        hotSearch_content.style.display = 'block';
        input_hot.className = 'myInput';
    }
    input_hot.onblur = function () {
        hotSearch_content.style.display = 'none';
        input_hot.className = 'myInput myInput02';
    }

    //热门搜索调用接口
    var hotSearch_content_li_i = document.querySelectorAll('.hotSearch_content_li_i');
    var hotSearch_content_li_a = document.querySelectorAll('.hotSearch_content_li_a');
    const xhr0 = new XMLHttpRequest();
    xhr0.responseType = 'json';
    xhr0.open("GET", "http://106.52.74.37:8000/getHotSearch");
    xhr0.send();
    xhr0.onreadystatechange = function () {
        if (xhr0.readyState === 4) {
            if (xhr0.status >= 200 && xhr0.status < 500) {
                var getHotSearch = xhr0.response.data.hotSearchData;
                for (var i = 0; i < hotSearch_content_li_i.length; i++) {
                    hotSearch_content_li_i[i].innerHTML = getHotSearch[i].rank;
                    hotSearch_content_li_a[i].innerHTML = getHotSearch[i].title;
                }
            }
            else {
                console.log(xhr0.status);
            }
        }
    }

    //导航栏动画
    var online_page_child = document.querySelector('.online_page_child');
    var search_box_content_left = document.querySelector('.search_box_content_left');
    search_box_content_left.onclick = function () {
        online_page_child.style.display = 'block';
    }

    //热搜搜索跳转百度
    var myInput = document.querySelector('.myInput');
    myInput.addEventListener('onkeydown', function () {
        console.log('up' + entersearch.keyCode);
    })
    function jumpPage(searchValue) {
        window.location.href = "http://www.baidu.com/s?ie=UTF-8&wd" + searchValue;
    }
    function entersearch(event) {
        if (event.keyCode == 13) {
            to();
        }
    }
    function to() {
        var searchValue = document.querySelector('.myInput').value;
        jumpPage(searchValue);
    }

    var searchIcon = document.querySelector('.searchIcon');
    var search_Bigbox = document.querySelector('.search_Bigbox');
    var search_box = document.querySelector('.search_box');


    //往右的动画 常用
    function animateRight(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetLeft == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            obj.style.left = obj.offsetLeft + step + 'px';
        }, 10);
    }
    //往左出现的动画
    function animateLeft(obj, target, callback) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var step = (obj.offsetLeft - target) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            if (obj.offsetTop == target) {
                clearInterval(obj.timer);
                callback && callback();
            }
            obj.style.left = obj.offsetLeft - step + 'px';
        }, 10);
    }
    searchIcon.addEventListener('click', function () {
        animateLeft(search_box, 0);
        // search_Bigbox.className = 'search_Bigbox';
    })
    // searchIcon.addEventListener('mouseleave',function(){
    //     animateLeft(search_box,492);
    //     // search_Bigbox.className = 'search_Bigbox nav_hidden';
    // })

    //按钮
    var carousel_btn_left = document.querySelector('.carousel_btn_left');
    var carousel_btn_right = document.querySelector('.carousel_btn_right');
    carousel_btn_left.addEventListener('mouseover', function () {
        carousel_btn_left.className = 'carousel_btn_left carousel_btn_lefthover';
    })
    carousel_btn_left.addEventListener('mouseleave', function () {
        carousel_btn_left.className = 'carousel_btn_left';
    })
    carousel_btn_right.addEventListener('mouseover', function () {
        carousel_btn_right.className = 'carousel_btn_right carousel_btn_righthover';
    })
    carousel_btn_right.addEventListener('mouseleave', function () {
        carousel_btn_right.className = 'carousel_btn_right';
    })

    // 热门电视剧点击按钮变换效果
    var carousel_TVprogram_ul = document.querySelector('.carousel_TVprogram_ul');

    var flag = 0;
    carousel_btn_right.addEventListener('click', () => {
        flag++;
        if (flag == 4) {
            flag = 3;
        }
        animateRight(carousel_TVprogram_ul, -600 * flag);
        // console.log('右边按钮的flag的值是' + flag);
        if (flag == 1) {
            carousel_btn_left.style.display = 'block';
        }
        if (flag == 2) {
            carousel_btn_left.style.display = 'block';
            carousel_btn_right.style.display = 'block';
        }
        if (flag == 3) {
            // flag = 0;
            carousel_btn_right.style.display = 'none';
        }
        if (flag == 0) {
            carousel_btn_left.style.display = 'none';
        }

    })
    carousel_btn_left.addEventListener('click', () => {
        flag--;
        if (flag == -1) {
            flag = 0;
            carousel_btn_left.style.display = 'none';
        }
        animateRight(carousel_TVprogram_ul, -600 * flag);
        // console.log('左边按钮的flag的值是' + flag);
        if (flag == 2) {
            carousel_btn_left.style.display = 'block';
            carousel_btn_right.style.display = 'block';
        }
        if (flag == 1) {
            carousel_btn_left.style.display = 'block';
        }
        if (flag == 0) {
            carousel_btn_left.style.display = 'none';
        }
    })
    var wonderful = document.getElementById('wonderful');
    var TVprogram_img_a = document.querySelectorAll('.TVprogram_img_a');
    var TVprogramDIV_img = document.querySelectorAll('.TVprogramDIV_img');
    var TVprogram_title = document.querySelectorAll('.TVprogram_title');
    var TVprogram_title_a = document.querySelectorAll('.TVprogram_title_a');
    var strl_text = document.querySelectorAll('.strl_text');
    var carousel_content_img = document.querySelectorAll('.carousel_content_img');
    //轮播图热门剧集发送请求
    setTimeout(() => {
        const xhr2 = new XMLHttpRequest();
        xhr2.responseType = 'json';
        xhr2.open("GET", "http://106.52.74.37:8000/getSwiper");
        xhr2.send();
        xhr2.onreadystatechange = function () {
            if (xhr2.readyState === 4 && xhr2.status == 200) {
                if (xhr2.response != null) {
                    var TVprogram_img = xhr2.response.data.liveData.livePlay;
                    var recomendPicture = xhr2.response.data.recommendData.recomendContent;

                    //为图片、标题动态赋地址
                    var imgArray = new Array(2);
                    var blobArray = new Array(2);
                    for (var i = 0; i < 12; i++) {
                        TVprogram_title[i].innerHTML = TVprogram_img[i].name;
                        blobArray[i] = TVprogram_img[i].imgSrc;
                        imgArray[i] = document.createElement("img");
                        imgArray[i].src = blobArray[i];
                        TVprogramDIV_img[i].append(imgArray[i]);
                        TVprogram_img_a[i].href = TVprogram_img[i].link;
                        TVprogram_title_a[i].href = TVprogram_img[i].link;
                    }

                    //轮播图-精彩推荐 六张大图动态获取添加入html
                    var commendimgArray = new Array(6);
                    var commendblobArray = new Array(6);
                    for (var i = 0; i < 6; i++) {
                        commendblobArray[i] = recomendPicture[i].imgSrc;
                        commendimgArray[i] = document.createElement("img");
                        commendimgArray[i].src = commendblobArray[i];
                        carousel_content_img[i].append(commendimgArray[i]);
                        strl_text[i].innerHTML = recomendPicture[i].title;
                    }

                }

            }
            else {
                console.log(xhr2.status);
            }
        }
    }, 100)



    var medalw = document.getElementById('medalw');
    var hotshowbox = document.getElementById('hotshowbox');
    var strl_hotshow = document.getElementById('strl_hotshow');
    var rocketw = document.getElementById('rocketw');


    // 轮播图js
    var strlfirsts = document.querySelectorAll('.strlfirst');
    var carousel_box_lis = document.getElementsByClassName('carousel_box_li');
    var index = 0;

    strl_hotshow.style.color = '#0084ff';
    rocketw.className = 'rocketb';
    //鼠标经过轮播图
    for (var i = 0; i < carousel_box_lis.length; i++) {
        carousel_box_lis[i].addEventListener('mouseenter', function () {
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
            clearInterval(timer);
            timer = null;
        })
        carousel_box_lis[i].addEventListener('mouseleave', function () {
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
            timer = setInterval(function () {
                time++;
                if (time == 20) {
                    goNext();
                    time = 0;
                }
            }, 500)
        })
    }
    //鼠标经过轮播图菜单
    for (var i = 0; i < strlfirsts.length; i++) {
        strlfirsts[i].addEventListener('mouseenter', function () {
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
            clearInterval(timer);
            timer = null;
        })
        strlfirsts[i].addEventListener('mouseleave', function () {
            var pointIndex = this.getAttribute('data-index');
            index = pointIndex;
            goIndex();
            timer = setInterval(function () {
                time++;
                if (time == 20) {
                    goNext();
                    time = 0;
                }
            }, 500)
        })
    }

    var clearActive = function () {
        for (var i = 0; i < carousel_box_lis.length; i++) {
            carousel_box_lis[i].className = 'carousel_box_li';
        }
    }
    var goNext = function () {
        if (index < 7) {
            index++;
        }
        if (index == 7) {
            index = 0;
        }
        goIndex();
    }
    var goIndex = function () {
        clearActive();
        changeColor();
        carousel_box_lis[index].className = 'carousel_box_li carouselActive';
    }
    var time = 0;
    var timer = setInterval(function () {
        time++;
        if (time == 20) {
            goNext();
            time = 0;
        }
    }, 500)

    //轮播图菜单的颜色改变
    var changeColor = function () {
        if (index == 0) {
            strl_hotshow.style.color = '#0084ff';
            rocketw.className = 'rocketb';
            wonderful.style.color = '#fff';
            medalw.className = 'medalw';
            for (var i = 0; i < 6; i++) {
                strl_text[i].style.color = '#fff';
            }
        }
        else if (index > 0 && index < 7) {
            strl_hotshow.style.color = '#fff';
            rocketw.className = 'rocketw';
            for (var i = 0; i < 6; i++) {
                strl_text[i].style.color = '#fff';
            }
            strl_text[index - 1].style.color = '#0084ff';
            wonderful.style.color = '#0084ff';
            medalw.className = 'medalb';
        }
    }

    //page处鼠标经过变化蓝色
    var pbll_zb = document.querySelectorAll('.pbll_zb');
    var pbll_zb_picture1 = document.getElementById('pbll_zb_picture1');
    var pbll_zb_picture2 = document.getElementById('pbll_zb_picture2');
    var pbll_zb_picture3 = document.getElementById('pbll_zb_picture3');
    var pbll_zb_picture4 = document.getElementById('pbll_zb_picture4');
    var pbll_zb_picture5 = document.getElementById('pbll_zb_picture5');
    var pbll_zb_picture6 = document.getElementById('pbll_zb_picture6');
    var pbll_zb_picture7 = document.getElementById('pbll_zb_picture7');
    var pbll_zb_picture8 = document.getElementById('pbll_zb_picture8');
    var pbll_zb_picture9 = document.getElementById('pbll_zb_picture9');
    var pbll_zb_picture10 = document.getElementById('pbll_zb_picture10');
    var pbll_zb_picture11 = document.getElementById('pbll_zb_picture11');
    var pbll_zb_picture12 = document.getElementById('pbll_zb_picture12');

    pbll_zb[0].addEventListener('mouseover', function () {
        pbll_zb_picture1.className = 'pbll_zb_picture2';
    })
    pbll_zb[0].addEventListener('mouseout', function () {
        pbll_zb_picture1.className = 'pbll_zb_picture1';
    })
    pbll_zb[1].addEventListener('mouseover', function () {
        pbll_zb_picture2.className = 'pbll_jmd_picture2';
    })
    pbll_zb[1].addEventListener('mouseout', function () {
        pbll_zb_picture2.className = 'pbll_jmd_picture1';
    })
    pbll_zb[2].addEventListener('mouseover', function () {
        pbll_zb_picture3.className = 'pbll_pddq_picture2';
    })
    pbll_zb[2].addEventListener('mouseleave', function () {
        pbll_zb_picture3.className = 'pbll_pddq_picture1';
    })
    pbll_zb[3].addEventListener('mouseover', function () {
        pbll_zb_picture4.className = 'pbll_lmdq_picture2';
    })
    pbll_zb[3].addEventListener('mouseout', function () {
        pbll_zb_picture4.className = 'pbll_lmdq_picture1';
    })
    pbll_zb[4].addEventListener('mouseover', function () {
        pbll_zb_picture5.className = 'pbll_zcr_picture2';
    })
    pbll_zb[4].addEventListener('mouseout', function () {
        pbll_zb_picture5.className = 'pbll_zcr_picture1';
    })
    pbll_zb[5].addEventListener('mouseover', function () {
        pbll_zb_picture6.className = 'pbll_ty_picture2';
    })
    pbll_zb[5].addEventListener('mouseout', function () {
        pbll_zb_picture6.className = 'pbll_ty_picture1';
    })
    pbll_zb[6].addEventListener('mouseover', function () {
        pbll_zb_picture7.className = 'pbll_dsj_picture2';
    })
    pbll_zb[6].addEventListener('mouseout', function () {
        pbll_zb_picture7.className = 'pbll_dsj_picture1';
    })
    pbll_zb[7].addEventListener('mouseover', function () {
        pbll_zb_picture8.className = 'pbll_dhp_picture2';
    })
    pbll_zb[7].addEventListener('mouseout', function () {
        pbll_zb_picture8.className = 'pbll_dhp_picture1';
    })
    pbll_zb[8].addEventListener('mouseover', function () {
        pbll_zb_picture9.className = 'pbll_jlp_picture2';
    })
    pbll_zb[8].addEventListener('mouseout', function () {
        pbll_zb_picture9.className = 'pbll_jlp_picture1';
    })
    pbll_zb[9].addEventListener('mouseover', function () {
        pbll_zb_picture10.className = 'pbll_tbjm_picture2';
    })
    pbll_zb[9].addEventListener('mouseout', function () {
        pbll_zb_picture10.className = 'pbll_tbjm_picture1';
    })
    pbll_zb[10].addEventListener('mouseover', function () {
        pbll_zb_picture11.className = 'pbll_4kzq_picture2';
    })
    pbll_zb[10].addEventListener('mouseout', function () {
        pbll_zb_picture11.className = 'pbll_4kzq_picture1';
    })
    pbll_zb[11].addEventListener('mouseover', function () {
        pbll_zb_picture12.className = 'pbll_rb_picture2';
    })
    pbll_zb[11].addEventListener('mouseout', function () {
        pbll_zb_picture12.className = 'pbll_rb_picture1';
    })

    // 今日热门

    //鼠标经过变蓝
    var DayHotTextTitle = document.querySelectorAll('.DayHotTextTitle');
    for (var i = 0; i < DayHotTextTitle.length; i++) {
        DayHotTextTitle[i].addEventListener('mouseover', function () {
            this.style.color = '#0084ff'
        })
        DayHotTextTitle[i].addEventListener('mouseleave', function () {
            this.style.color = 'black'
        })
    }
    //获取
    var DayHotTextBrief = document.querySelector('.DayHotTextBrief');
    var DayHotPictureAbox = document.querySelectorAll('.DayHotPictureAbox');

    setTimeout(() => {
        //接口
        const xhr = new XMLHttpRequest();
        xhr.responseType = 'json';
        xhr.open('GET', 'http://106.52.74.37:8000/getHotTopic');
        xhr.send();

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status == 200) {
                    var dayHotData = xhr.response.data.hotTopicData;
                    var dayHotimgArray = new Array(9);
                    var dayHotblobArray = new Array(9);
                    var dayHotImglinkArray = new Array(9);
                    var dayHotTitlelinkArray = new Array(9);
                    for (var i = 0; i < DayHotTextTitle.length; i++) {
                        DayHotTextTitle[i].innerHTML = dayHotData[i].title.text;
                        dayHotblobArray[i] = dayHotData[i].img.src;
                        dayHotImglinkArray[i] = dayHotData[i].img.link;
                        dayHotTitlelinkArray[i] = dayHotData[i].title.link
                        DayHotPictureAbox[i].href = dayHotImglinkArray[i];
                        DayHotTextTitle[i].href = dayHotTitlelinkArray[i];
                        dayHotimgArray[i] = document.createElement("img");
                        dayHotimgArray[i].src = dayHotblobArray[i];
                        DayHotPictureAbox[i].append(dayHotimgArray[i]);
                    }

                    DayHotTextBrief.innerHTML = dayHotData[0].brief;
                }
                else {
                    console.log(xhr.status);
                }
            }
        }
    }, 300)

    //直播导视
    var zbds = document.getElementById('zbds');
    zbds.addEventListener('mouseenter', function () {
        zbds.style.color = '#0084ff';
    })
    zbds.addEventListener('mouseleave', function () {
        zbds.style.color = '#000';
    })

    //直播导视js开始
    var show_slider_buttonLeft = document.querySelector('.show_slider_buttonLeft');
    var show_slider_buttonRight = document.querySelector('.show_slider_buttonRight');
    var show_slider_content_ul = document.querySelector('.show_slider_content_ul');
    show_button_right = document.querySelector('.show_button_right');
    show_slider_buttonLeft.addEventListener('mouseover', function () {
        show_slider_buttonLeft.style.backgroundColor = '#0084ff';
    })
    show_slider_buttonLeft.addEventListener('mouseleave', function () {
        show_slider_buttonLeft.style.backgroundColor = '#e0e0e0';
    })
    show_slider_buttonRight.addEventListener('mouseover', function () {
        show_slider_buttonRight.style.backgroundColor = '#0084ff';
        show_button_right.src = 'https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/zbds_right_hover.png';
    })
    show_slider_buttonRight.addEventListener('mouseleave', function () {
        show_slider_buttonRight.style.backgroundColor = '#fff';
        if (flag_show == 3) {
            show_slider_buttonRight.style.backgroundColor = '#e0e0e0';
        }
        show_button_right.src = 'https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/right.png';
    })

    var flag_show = 0;
    show_slider_buttonRight.addEventListener('click', function () {
        flag_show++;
        console.log('右边的按钮' + flag_show);
        if (flag_show > 3) {
            // show_slider_buttonRight.style.backgroundColor = '#e0e0e0';
            flag_show = 3;
        }
        animateRight(show_slider_content_ul, -1200 * flag_show);

    })
    show_slider_buttonLeft.addEventListener('click', function () {
        flag_show--;
        console.log('左边的按钮' + flag_show);
        if (flag_show < 0) {
            // show_slider_buttonRight.style.backgroundColor = '#e0e0e0';
            flag_show = 0;
        }
        animateRight(show_slider_content_ul, -1200 * flag_show);

    })


    var show_slider_content_li_content = document.querySelectorAll('.show_slider_content_li_content');
    var showLead_blueLine = document.querySelectorAll('.showLead_blueLine');
    console.log(showLead_blueLine);
    for (var i = 0; i < 20; i++) {
        show_slider_content_li_content[i].addEventListener('mouseover', function () {
            var data_index = this.getAttribute('data-index1');
            showLead_blueLine[data_index].style.display = 'block';
        })
        show_slider_content_li_content[i].addEventListener('mouseleave', function () {
            var data_index = this.getAttribute('data-index1');
            showLead_blueLine[data_index].style.display = 'none';
        })
    }

    console.log(show_slider_content_li_content);
    console.log(showLead_blueLine);


    //获取需要返回的元素
    var showLead_Apicture = document.querySelectorAll('.showLead_Apicture');
    var showLead_title = document.querySelectorAll('.showLead_title');
    var showLead_start = document.querySelectorAll('.showLead_start');
    var showLead_end = document.querySelectorAll('.showLead_end');
    var showLead_name = document.querySelectorAll('.showLead_name');

    var showLeadImgsrcArray = new Array(20);
    var showLeadBlobsrcArray = new Array(20);
    //直播导视发送请求
    const xhr3 = new XMLHttpRequest;
    xhr3.responseType = 'json';
    xhr3.open("GET", "http://106.52.74.37:8000/getLiveGuide");
    xhr3.send();
    xhr3.onreadystatechange = function () {
        if (xhr3.readyState === 4) {
            if (xhr3.status >= 200 && xhr3.status < 500) {
                console.log(xhr3.response);
                var showLeadResponse = xhr3.response.data;

                for (var i = 0; i < 20; i++) {
                    showLeadBlobsrcArray[i] = showLeadResponse[i].img.src;
                    showLead_Apicture[i].href = showLeadResponse[i].img.link;
                    showLeadImgsrcArray[i] = document.createElement("img");
                    showLeadImgsrcArray[i].src = showLeadBlobsrcArray[i];
                    showLead_Apicture[i].append(showLeadImgsrcArray[i]);
                    showLead_start[i].innerHTML = showLeadResponse[i].time.startTime;
                    showLead_end[i].innerHTML = showLeadResponse[i].time.endTime;
                    showLead_title[i].innerHTML = showLeadResponse[i].topic;
                    showLead_name[i].innerHTML = showLeadResponse[i].itemName;
                }
            }
            else {
                console.log(xhr3.status);
            }
        }
    }
    // var try01 = document.getElementById('tryy');
    var try01 = document.querySelectorAll('.bfbc_flex_box1');
    var blue_flex_box_content = document.querySelector('.blue_flex_box_content');
    console.log(blue_flex_box_content.style.width);
    console.log(try01[0].style.backgroundImage);
    for (var i = 0; i < 11; i++) {
        try01[i].addEventListener('mouseleave', function () {
            var numm = this.getAttribute('data-index03');
            try01[numm].style.backgroundImage = 'url("' + '	https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/ind06_cel2.png' + '")';
        })
        try01[i].addEventListener('mouseenter', function () {
            var numm = this.getAttribute('data-index03');
            try01[numm].style.backgroundImage = 'url("' + 'https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/ind06_cel2H.png' + '")';
        })
    }

    var bfbc_flex_box3 = document.querySelectorAll('.bfbc_flex_box3');
    for (var i = 0; i < bfbc_flex_box3.length; i++) {
        bfbc_flex_box3[i].addEventListener('mouseenter', function () {
            var num2 = this.getAttribute("data-index04");
            bfbc_flex_box3[num2].style.backgroundImage = 'url("' + '		https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/ind06_cel1H.png' + '")';
        })
        bfbc_flex_box3[i].addEventListener('mouseleave', function () {
            var num2 = this.getAttribute("data-index04");
            bfbc_flex_box3[num2].style.backgroundImage = 'url("' + '	https://p3.img.cctvpic.com/photoAlbum/templet/common/DEPA1628231077516717/ind06_cel1.png' + '")';

        })
    }

    //片库的js部分
    var film_library_li = document.querySelectorAll('.film_library_li');
    var film_library_float = document.querySelectorAll('.film_library_float');
    var fltr_ul_li = document.querySelectorAll('.fltr_ul_li');
    var film_library_content_slideBox_box = document.querySelector('.film_library_content_slideBox_box');
    for (var i = 0; i < fltr_ul_li.length; i++) {

        fltr_ul_li[i].addEventListener('mouseover', function () {
            for (var j = 0; j < fltr_ul_li.length; j++) {
                fltr_ul_li[j].className = 'fltr_ul_li';
            }
            var fltr_num = this.getAttribute('data-index05');
            fltr_ul_li[fltr_num].className = 'fltr_ul_li ful_active';
            animateRight(film_library_content_slideBox_box, -1200 * fltr_num);
        })
    }


    for (var i = 0; i < film_library_li.length; i++) {
        film_library_li[i].addEventListener('mouseenter', function () {
            var filml_num = this.getAttribute('data-index05');
            console.log(filml_num + '进入');
            film_library_float[filml_num].style.display = 'block';
        })
        film_library_li[i].addEventListener('mouseleave', function () {
            var filml_num = this.getAttribute('data-index05');
            console.log(filml_num + '进离开');
            film_library_float[filml_num].style.display = 'none';
        })
    }
        //看点处的js
        var seeTime_btn_ul_li = document.querySelectorAll('.seeTime_btn_ul_li');
        
        for (var i = 0; i < seeTime_btn_ul_li.length; i++) {
            seeTime_btn_ul_li[i].addEventListener('mouseover', function () {
                var seeNum = this.getAttribute('data-index6');
                console.log(1);
                for (var i = 0; i < seeTime_btn_ul_li.length; i++) {
                    seeTime_btn_ul_li[i].className = 'seeTime_btn_ul_li';
                }
                seeTime_btn_ul_li[seeNum].className = 'seeTime_btn_ul_li seeTime_active';
            })
        }
}   