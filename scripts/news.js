$(document).ready(function(){
    $(".news_img").mouseenter(function() {
        $(".btn_pink").removeClass("fadeOut");
        $(".btn_pink").addClass("animated");
        $(".btn_pink").addClass("fadeIn");
    })
    $(".btn_pink").mouseenter(function() {
        $(".btn_pink").removeClass("fadeOut");
        $(".btn_pink").addClass("animated");
        $(".btn_pink").addClass("fadeIn");
    })
})

Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link" :class="todo.active"> {{ todo.text }} </a>'
})
Vue.component('news-main-img', {
    template: '<img class="news_img col-sm-12 col-lg-11 col-11 mx-auto test">'
})
Vue.component('small-news-img', {
    props:['link'],
    template:`<div class="col-lg-6 col-md-6 col-sm-6 col-5 img-link">
        <img :src="link.src[0]" class="news_img">
    </div>`
})
Vue.component('small-news-header', {
    props:['header'],
    template:'<h3 class="news_header header-link col-lg-5 col-4 mr-auto p-0" style="text-align: left">{{ header.title }}</h3>'
})
Vue.component('comment', {
    props:['word'],
    template:`<div>
    <hr>
    <h4>{{ word.name }}</h4>
    <p>{{ word.comment }}</p>
    </div>`
})

Vue.component('news-img', {
    template: '<img class="news_img">'
})

var dropDownMenu = new Vue({
    el: '#nav',
    data: {
        navClass:{
            mainNav:'navbar navbar-expand-lg flex-nowrap navbar-dark container-fluid position-fixed',
            menu:'navbar-collapse collapse in navbar-toggleable-sm d-lg-inline-block'
        },
        url:[
            { href:'../pages/news.html', text:'Новости', active:'active'},
            { href:'../pages/products.html', text:'Продукция'},
            { href:'../pages/calculator.html', text:'Калькулятор кормов'},
            { href:'../pages/maps.html', text:'Карта магазинов'},
            { href:'../pages/about.html', text:'О нас'}
        ]
    }
})

var footer = new Vue({
    el:'.footer',
    data:{
        footerStyle:{
            footer:'col-6 p-0'
        },
        inf:[
            { address:'Адрес: Студенческая, 7, Ижевск, Pеспублика Удмуртия, 426069', email:'Email: vatruzka99@mail.ru' },
            { phone:'Телефон: +7 951 199 18 71', another:'Прочие ссылки: https://vk.com/id143300347' }
        ]
    }
})

var main = new Vue({
    el:'#main',
    data:{
        headers:[
            { title:'Мифы о корме для кошек', src:['../assets/news1.1.png','../assets/news1.2.jpg'], href:'news_1.html' },
            { title:'Почему в производстве кормов для домашних животных важен научный подход?', src:['../assets/news2.1.jpg','../assets/news2.2.jpg'], href:'news_2.html' },
            { title:'Эволюция питания кошки', src:['../assets/news3.1.jpg'], href:'news_3.html' },
        ],
        authors:[
            { name:'Жукова Елена Вячеславовна', date:'8 февраля 2018г.'},
            { name:'Алексей Сулин', date:'11 мая 2018г.'},
            { name:'Серёжина Людмила Абрамовна', date:'16 марта 2018г.'}
        ],
        bootsClass:{ 
            header:'news_header col-11 mx-auto',
            author:'author_date col-sm-12 col-lg-11 col-12 mx-auto',
        },
        name:'',
        comment:'',
        comments:[
        ],
        nextCommentId:0,
        list:false,
        full:true
    },
    methods: {
        addNewComment: function () {
          this.comments.push({
            id: this.nextCommentId++,
            name: this.name,
            comment: this.comment
          })
          this.name = '',
          this.comment = ''
        },
    }
})