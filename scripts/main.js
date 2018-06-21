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

var map = new Vue({
    el: '#map',
    data: {
        maps:[
            { name:'Ижевск', url:'https://www.google.com/maps/d/embed?mid=1oBX4Tf6xE51G291PCh2LuuDj8Z8c6yKW' },
            { name:'Москва', url:'https://www.google.com/maps/d/embed?mid=1qkAdKcLJwdklf0bMKMQ4OdcTkReKC822' },
            { name:'Санкт-Петербург', url:'https://www.google.com/maps/d/embed?mid=1t-bLLfS8iXf5dujcO0ZH8WjdFv3DUKDx' },
        ],
        selectedCity:''
    }
});
  
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

// var calculator = new Vue({
//     el: '#food-calculator',
//     data:{
//         ages:[
//             { id:0, name:'До одного года' },
//             { id:1, name:'1 год-7 лет' },
//             { id:2, name:'8 лет и старше' }
//         ],
//         selectAge:'',

//         feed:[
//             { id:0, name:'Сухой корм' },
//             { id:1, name:'Влажный корм' }
//         ],
//         selectFeedType:'',

//         dryFood:[
//             { id:0, name:'1 месяц', months:1, dryFoodFirst:(45 + 5 * 1 + 'гр сухого корма') },
//             { id:1, name:'2 месяца', months:2, dryFoodFirst:(45 + 5 * 2 + 'гр сухого корма') },
//             { id:2, name:'3 месяца', months:3, dryFoodFirst:(45 + 5 * 3 + 'гр сухого корма') },
//             { id:3, name:'4 месяца', months:4, dryFoodFirst:(45 + 5 * 4 + 'гр сухого корма') },
//             { id:4, name:'5 месяцев', months:5, dryFoodFirst:(45 + 5 * 5 + 'гр сухого корма') },
//             { id:5, name:'6 месяцев', months:6, dryFoodFirst:(65 + 6 + 'гр сухого корма') },
//             { id:6, name:'7 месяцев', months:7, dryFoodFirst:(65 + 7 + 'гр сухого корма') },
//             { id:7, name:'8 месяцев', months:8, dryFoodFirst:(65 + 8 + 'гр сухого корма') },
//             { id:8, name:'9 месяцев', months:9, dryFoodFirst:(65 + 9 + 'гр сухого корма') },
//             { id:9, name:'10 месяцев', months:10, dryFoodFirst:(65 + 10 + 'гр сухого корма') },
//             { id:10, name:'11 месяцев', months:11, dryFoodFirst:(65 + 11 + 'гр сухого корма') },
//             { id:11, name:'12 месяцев', months:12, dryFoodFirst:(65 + 12 + 'гр сухого корма') },
//         ],
//         selectKittyDryFood:'',
        
//         wetFood:[
//             { id:0, name:'1 месяц', months:1, wetFoodFirst:('1 пачка влажного корма + ' + (30 + 5 * 1) + 'гр сухого') },
//             { id:1, name:'2 месяца', months:2, wetFoodFirst:('1 пачка влажного корма + ' + (30 + 5 * 2) + 'гр сухого') },
//             { id:2, name:'3 месяца', months:3, wetFoodFirst:('1 пачка влажного корма + ' + (30 + 5 * 3) + 'гр сухого') },
//             { id:3, name:'4 месяца', months:4, wetFoodFirst:('1,5 пачки влажного корма + ' + (20 + 5 * 4) + 'гр сухого') },
//             { id:4, name:'5 месяцев', months:5, wetFoodFirst:('1,5 пачки влажного корма + ' + (20 + 5 * 5) + 'гр сухого') },
//             { id:5, name:'6 месяцев', months:6, wetFoodFirst:('2 пачки влажного корма + ' + (32 + 6) + 'гр сухого') },
//             { id:6, name:'7 месяцев', months:7, wetFoodFirst:('2 пачки влажного корма + ' + (32 + 7) + 'гр сухого') },
//             { id:7, name:'8 месяцев', months:8, wetFoodFirst:('2 пачки влажного корма + ' + (32 + 8) + 'гр сухого') },
//             { id:8, name:'9 месяцев', months:9, wetFoodFirst:('2 пачки влажного корма + ' + (32 + 9) + 'гр сухого') },
//             { id:9, name:'10 месяцев', months:10, wetFoodFirst:('2 пачки влажного корма + ' + (32 + 10) + 'гр сухого') },
//             { id:10, name:'11 месяцев', months:11, wetFoodFirst:('2 пачки влажного корма + ' + (32 + 11) + 'гр сухого') },
//             { id:11, name:'12 месяцев', months:12, wetFoodFirst:('2 пачки влажного корма + ' + (32 + 12) + 'гр сухого') },
//         ],
//         selectKittyWetFood:'',
        
//         factors:[
//             { id:0, name:'Нет' },
//             { id:1, name:'Беременная' },
//             { id:2, name:'Кормящая' }
//         ],
//         selectFactor:'',
//         resetButton:false,
//         weight:'',

        // dryFoodFirst:(45 + 5 * this.selectKittyDryFood.months + 'гр сухого корма'),
        // dryFoodSecond:(65 + this.selectKittyDryFood.months + 'гр сухого корма'),
        // wetFoodFirst:('1 пачка влажного корма + ' + (30 + 5 * this.selectKittyWetFood.months) + 'гр сухого'),
        // wetFoodSecond:('1,5 пачки влажного корма + ' + (20 + 5 * this.selectKittyWetFood.months) + 'гр сухого'),
        // wetFoodThird:('2 пачки влажного корма + ' + (32 + this.selectKittyWetFood.months) + 'гр сухого'),
        // calories:(65 + (37.5 - 0.5 * this.weight) * this.weight),

        // dryOld:(this.calories/3.75),

        // pregnantDry:'120гр сухого корма',
        // pregnantWet:'2 пачки влажного корма + 90гр сухого',
        // nursingDry:'150гр сухого корма',
        // nursingWet:'2 пачки влажного корма + 100гр сухого',
    // },

    // computed:{
    //     wetOld: function (){
    //         if(this.weight <= 3) 
    //             return ('1 пачка влажного корма + ' + ((this.calories-56)/3.75) + 'гр сухого')
    //         else 
    //             return ('2 пачки влажного корма + ' + ((this.calories-2*56)/3.75) + 'гр сухого')
    //     },
        // total: function(){
        //     if()
        // }
    //     dryFoodFirst: function (){
    //         return (45 + 5 * this.selectKittyDryFood.months + 'гр сухого корма')
    //     },
    //     dryFoodSecond: function (){
    //         return (65 + this.selectKittyDryFood.months + 'гр сухого корма')
    //     },
    //     wetFoodFirst: function (){
    //         return ('1 пачка влажного корма + ' + (30 + 5 * this.selectKittyWetFood.months) + 'гр сухого')
    //     },
    //     wetFoodSecond: function (){
    //         return ('1,5 пачки влажного корма + ' + (20 + 5 * this.selectKittyWetFood.months) + 'гр сухого')
    //     },
    //     wetFoodThird: function (){
    //         return ('2 пачки влажного корма + ' + (32 + this.selectKittyWetFood.months) + 'гр сухого')
    //     },
    //     calories: function (){
    //         return (65 + (37.5 - 0.5 * this.weight) * this.weight)
    //     },
    //     dryOld: function() {
    //         return (this.calories/3.75);
    //     }
//     }
// })

// if(selectKittyDryFood!='')
// {
//     var dryFoodFirst = (45 + 5 * selectKittyDryFood.months+'гр сухого корма');
//     var dryFoodSecond = (65 + selectKittyDryFood.months+'гр сухого корма');
// }

// if(selectKittyWetFood!='')
// {
//     var wetFoodFirst = ('1 пачка влажного корма + ' + (30+5*selectKittyWetFood.months)+'гр сухого');
//     var wetFoodSecond = ('1,5 пачки влажного корма + ' + (20+5*selectKittyWetFood.months)+'гр сухого');
//     var wetFoodThird = ('2 пачки влажного корма + ' + (32+selectKittyWetFood.months)+'гр сухого');    
// }

// var calories = 65 + (37.5 - 0.5 * weight) * weight;
// var dryOld = calories/3.75;

// var wetOld;
// if(weight < 3) 
//     wetOld = '1 пачка влажного корма + ' + ((calories-56)/3.75) + 'гр сухого';
// else 
//     wetOld = '2 пачки влажного корма + ' + ((calories-2*56)/3.75) + 'гр сухого';
// var pregnantDry = '120гр сухого корма';
// var pregnantWet = '2 пачки влажного корма + 90гр сухого' ;

// var nursingDry = '150гр сухого корма';
// var nursingWet = '2 пачки влажного корма + 100гр сухого';

// var total = new Vue({
//     el:'#total',
//     data:{
        
//     }
// })