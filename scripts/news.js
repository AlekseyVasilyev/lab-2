Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link" :class="todo.active"> {{ todo.text }} </a>'
})
Vue.component('news-main-img', {
    template: '<img class="news_img col-sm-12 col-lg-11 mx-auto">'
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
            { title:'Эволюция питания кошки', src:'../assets/news3.1.jpg', href:'news_3.html' },
        ],
        authors:[
            { name:'Жукова Елена Вячеславовна', date:'8 февраля 2018г.'},
            { name:'Алексей Сулин', date:'11 мая 2018г.'},
            { name:'Серёжина Людмила Абрамовна', date:'16 марта 2018г.'}
        ],
        bootsClass:{ 
            header:'news_header col-11 mx-auto',
            author:'author_date col-sm-12 col-lg-11 col-12 mx-auto',
            button_p:'col-sm-12 col-lg-10 col-12 mx-auto'
        }
    }
})