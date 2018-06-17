Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link"> {{ todo.text }} </a>'
})
Vue.component('news-main-img', {
    template: '<img class="news_img col-sm-12 col-lg-11 mx-auto">'
})
Vue.component('news-img', {
    template: '<img class="news_img">'
})
// Vue.component('zoo-map', {
//     template: '<iframe width="800" height="700" class="col-12"></iframe>'
// })
  
var dropDownMenu = new Vue({
    el: '#nav',
    data: {
        navClass:{
            mainNav:'navbar navbar-expand-lg flex-nowrap navbar-dark container-fluid position-fixed',
            menu:'navbar-collapse collapse in navbar-toggleable-sm d-lg-inline-block'
        },
        url:[
            { href:'../pages/news.html', text:'Новости'},
            { href:'../pages/products.html', text:'Продукция'},
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
            author:'author_date col-sm-12 col-lg-11 mx-auto',
            button_p:'col-sm-12 col-lg-10 mx-auto'
        },
        feed:[
            {
                id:0,
                img:'../assets/krolik.png', 
                header:'Whiskas Мини-филе с кроликом', 
                description:'Сочное мини-филе с кроликом в нежном желе подарит Вашей любимице настоящее удовольствие. Рацион Whiskas содержит все необходимое, чтобы еда Вашей кошки была не только вкусной, но и полезной.',
                composition:'Мясо и субпродукты (в том числе кролик минимум 4%), злаки, минеральные вещества, витамины, таурин'
            },
            {
                id:1,
                img:'../assets/pashtet_podushki.png',
                header:'Whiskas Подушечки с паштетом, ассорти с мясом птицы',
                description:'Это вкусное блюдо, приготовленное с учетом потребностей, свойственных возрасту Вашей любимицы. Хрустящие подушечки с нежным паштетом внутри обязательно придутся по вкусу Вашей любимице. Кроме того, корм Whiskas содержит все необходимое, чтобы еда Вашей кошки была не только вкусной, но и полезной.',
                composition:'Пшеничная мука, мука животного происхождения: мука из птицы, мука мясокостная; белковые растительные экстракты, рис, жир животный, подсолнечное масло, пивные дрожжи, витамины, минеральные вещества и таурин.'
            },
            {
                id:2,
                img:'../assets/telatina.png',
                header:'Паштет Whiskas из телятины',
                description:'Это аппетитное блюдо, которое приготовлено исходя из  всех потребностей, свойственных возрасту Вашей любимицы, для ее здоровой и долгой жизни. Сбалансированный паштет из телятины подарит Вашей кошке настоящее удовольствие. При этом, корм Whiskas содержит все необходимое и полностью отвечает всем потребностям организма вашей любимицы.',
                composition:'Мясо и субпродукты (в том числе телятина минимум 26 %), растительное масло, таурин, витамины, минеральные вещества.'
            },
            {
                id:3,
                img:'../assets/losos.png',
                header:'Whiskas Подушечки с нежным паштетом. Обед с лососем',
                description:'Это сбалансированный рацион для здоровой и счастливой жизни Вашей кошки. Хрустящие подушечки с нежным паштетом внутри обязательно придутся по вкусу Вашей любимице. Кроме того, корм Whiskas содержит все необходимое, чтобы еда Вашей кошки была не только вкусной, но и полезной.',
                composition:'Пшеничная мука, мука из птицы, белковые растительные экстракты, злаки, мука из рыбы, мука из тунца, мука из лосося, мука из креветок, животные жиры и растительное масло, высушенная куриная и свиная печень, пивные дрожжи, свекольный жом, морковь, минеральные и витаминные смеси.'
            },
            {
                id:4,
                img:'../assets/duo_treats.png',
                header:'Whiskas Подушечки с нежным паштетом. Обед с лососем',
                description:'Лакомство Whiskas Duo Treats c лососем и сыром. Изумительный вкус хрустящих подушечек в сочетании с нежной начинкой не оставит вашу любимицу равнодушной, и она прибежит в ваши объятия с благодарным мурчанием.Кроме того, Whiskas Duo Treats содержит витамины, которые поддерживают здоровье кошки.',
                composition:'Злаки, мука животного происхождения, животные жиры и растительное масло, продукты животного происхождения, гидролизат животного происхождения, минералы и витамины, продукты растительного происхождения.'
            }
        ]
    }
})

var maps = new Vue({
    el: '.form-control',
    data: {
        select:[
            'https://www.google.com/maps/d/embed?mid=1oBX4Tf6xE51G291PCh2LuuDj8Z8c6yKW',
            'https://www.google.com/maps/d/embed?mid=1qkAdKcLJwdklf0bMKMQ4OdcTkReKC822',
            'https://www.google.com/maps/d/embed?mid=1t-bLLfS8iXf5dujcO0ZH8WjdFv3DUKDx'
        ]
    }
})