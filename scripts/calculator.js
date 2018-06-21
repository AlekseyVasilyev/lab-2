Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link" :class="todo.active"> {{ todo.text }} </a>'
})
var dropDownMenu = new Vue({
    el: '#nav',
    data: {
        navClass:{
            mainNav:'navbar navbar-expand-lg flex-nowrap navbar-dark container-fluid position-fixed',
            menu:'navbar-collapse collapse in navbar-toggleable-sm d-lg-inline-block'
        },
        url:[
            { id:0, href:'../pages/news.html', text:'Новости'},
            { id:1, href:'../pages/products.html', text:'Продукция'},
            { id:2, href:'../pages/calculator.html', text:'Калькулятор кормов', active:'active'},
            { id:3, href:'../pages/maps.html', text:'Карта магазинов'},
            { id:4, href:'../pages/about.html', text:'О нас'}
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
        feed:[
            {
                id:0,
                img:'../assets/krolik.png', 
                header:'Whiskas Мини-филе с кроликом', 
                description:'Сочное мини-филе с кроликом в нежном желе подарит Вашей любимице настоящее удовольствие. Рацион Whiskas содержит все необходимое, чтобы еда Вашей кошки была не только вкусной, но и полезной.',
                composition:'Мясо и субпродукты (в том числе кролик минимум 4%), злаки, минеральные вещества, витамины, таурин',
                condition:'(selectAge.id == 1) && (selectFeedType.id == 1)',
            },
            {
                id:1,
                img:'../assets/pashtet_podushki.png',
                header:'Whiskas Подушечки с паштетом, ассорти с мясом птицы',
                description:'Это вкусное блюдо, приготовленное с учетом потребностей, свойственных возрасту Вашей любимицы. Хрустящие подушечки с нежным паштетом внутри обязательно придутся по вкусу Вашей любимице. Кроме того, корм Whiskas содержит все необходимое, чтобы еда Вашей кошки была не только вкусной, но и полезной.',
                composition:'Пшеничная мука, мука животного происхождения: мука из птицы, мука мясокостная; белковые растительные экстракты, рис, жир животный, подсолнечное масло, пивные дрожжи, витамины, минеральные вещества и таурин.',
                condition:'(selectAge.id == 2)',
            },
            {
                id:2,
                img:'../assets/telatina.png',
                header:'Паштет Whiskas из телятины',
                description:'Это аппетитное блюдо, которое приготовлено исходя из  всех потребностей, свойственных возрасту Вашей любимицы, для ее здоровой и долгой жизни. Сбалансированный паштет из телятины подарит Вашей кошке настоящее удовольствие. При этом, корм Whiskas содержит все необходимое и полностью отвечает всем потребностям организма вашей любимицы.',
                composition:'Мясо и субпродукты (в том числе телятина минимум 26 %), растительное масло, таурин, витамины, минеральные вещества.',
                condition:'(selectAge.id == 2) && (selectFeedType.id == 1)',
            },
            {
                id:3,
                img:'../assets/losos.png',
                header:'Whiskas Подушечки с нежным паштетом. Обед с лососем',
                description:'Это сбалансированный рацион для здоровой и счастливой жизни Вашей кошки. Хрустящие подушечки с нежным паштетом внутри обязательно придутся по вкусу Вашей любимице. Кроме того, корм Whiskas содержит все необходимое, чтобы еда Вашей кошки была не только вкусной, но и полезной.',
                composition:'Пшеничная мука, мука из птицы, белковые растительные экстракты, злаки, мука из рыбы, мука из тунца, мука из лосося, мука из креветок, животные жиры и растительное масло, высушенная куриная и свиная печень, пивные дрожжи, свекольный жом, морковь, минеральные и витаминные смеси.',
                condition:'(selectAge.id == 1)',
            },
            {
                id:4,
                img:'../assets/kitty_chiken.png',
                header:'Whiskas для котят паштет с курицей',
                description:'Это сбалансированный рацион для здорового роста Вашего малыша. Нежный мясной паштет с курочкой, бесспорно, понравится Вашему котенку. Рацион Whiskas® для котят создан специально, чтобы Ваш малыш получил все самое полезное и вкусное для здорового роста и развития.',
                composition:'Мясо и субпродукты (в том числе курица минимум 25 %), растительное масло, таурин, витамины, минеральные вещества. ',
                condition:'(selectAge.id == 0) && (selectFeedType.id == 1)'
            },
            {
                id:5,
                img:'../assets/kitty_dry.png',
                header:'Whiskas для котят подушечки с молоком, индейкой и морковью',
                description:'Это сбалансированный рацион для здоровой и счастливой жизни Вашего котенка. Хрустящие подушечки с молоком внутри обязательно придутся по вкусу Вашему любимимцу. Кроме того, рационы Whiskas® содержит все необходимое, чтобы еда Вашей кошки была не только вкусной, но и полезной.',
                composition:'Пшеничная мука, мука животного происхождения: мука из птицы, мука из индейки (индейки не менее 4% в желтых, коричневых и красных гранулах), мука мясокостная, рис, белковые растительные экстракты, жир животный, подсолнечное масло, овощи, молочные продукты (в том числе сухое молоко, минимум 4% в подушках), витамины, минеральные вещества и таурин.',
                condition:'(selectAge.id == 0)',
            }
        ],
        honey:[
            {
                id:0,
                img:'../assets/duo_treats_1.png',
                header:'Whiskas Подушечки с нежным паштетом. Обед с лососем',
                description:'Лакомство Whiskas Duo Treats c лососем и сыром. Изумительный вкус хрустящих подушечек в сочетании с нежной начинкой не оставит вашу любимицу равнодушной, и она прибежит в ваши объятия с благодарным мурчанием.Кроме того, Whiskas Duo Treats содержит витамины, которые поддерживают здоровье кошки.',
                composition:'Злаки, мука животного происхождения, животные жиры и растительное масло, продукты животного происхождения, гидролизат животного происхождения, минералы и витамины, продукты растительного происхождения.',
            },
            {
                id:1,
                img:'../assets/duo_treats_2.png',
                header:'Лакомство Whiskas Duo Treats c говядиной и сыром',
                description:'Изумительный вкус хрустящих подушечек в сочетании с нежной начинкой не оставит Вашу любимицу равнодушной, и она прибежит в Ваши объятия с благодарным мурчанием.',
                composition:'Витамин А для поддержания здоровья зрения; витамины группы B для поддержания жизненных сил вашего питомца; витамин D3 для крепких костей; витамин Е, способствующий поддержанию иммунитета.',
            },
            {
                id:2,
                img:'../assets/duo_treats_3.png',
                header:'Лакомство Whiskas Duo Treats c лососем и сыром',
                description:' Whiskas Duo Treats – это прекрасное дополнение к ежедневному рациону взрослой кошки.Мы создали это лакомство, чтобы вы всегда могли проявить свою нежность и побаловать свою любимицу чем-то особенно вкусным и полезным.',
                composition:'злаки и продукты их переработки, мука животного происхождения (в том числе мука из лосося минимум 4%), животные жиры и растительное масло, продукты животного происхождения (в том числе сыр 4%), гидролизат животного происхождения, минералы и витамины, продукты растительного происхождения.',
            }
        ],
        ages:[
            { id:0, name:'До одного года' },
            { id:1, name:'1 год-7 лет' },
            { id:2, name:'8 лет и старше' }
        ],
        selectAge:'',

        feedType:[
            { id:0, name:'Сухой корм' },
            { id:1, name:'Влажный корм' }
        ],
        selectFeedType:'',

        kittyMonths:[
            { id:0, name:'1 месяц', months:1 },
            { id:1, name:'2 месяца', months:2 },
            { id:2, name:'3 месяца', months:3 },
            { id:3, name:'4 месяца', months:4 },
            { id:4, name:'5 месяцев', months:5 },
            { id:5, name:'6 месяцев', months:6 },
            { id:6, name:'7 месяцев', months:7 },
            { id:7, name:'8 месяцев', months:8 },
            { id:8, name:'9 месяцев', months:9 },
            { id:9, name:'10 месяцев', months:10 },
            { id:10, name:'11 месяцев', months:11 },
            { id:11, name:'12 месяцев', months:12 },
        ],
        selectKittyMonths:'',
        
        factors:[
            { id:0, name:'Нет' },
            { id:1, name:'Беременная' },
            { id:2, name:'Кормящая' }
        ],
        selectFactor:'',
        resetButton:false,
        weight:''
    },
    computed:{
        total: function(){
            if(this.selectAge.id == 0)
            {
                if(this.selectFeedType.id == 0)
                {
                    if(this.selectKittyMonths.id<6)
                        return ((45 + 5 * this.selectKittyMonths.months).toFixed(1) + 'гр сухого корма')
                    else
                        return ((65 + this.selectKittyMonths.months).toFixed(1) + 'гр сухого корма')
                }
                else if(this.selectFeedType.id == 1)
                {
                    if(this.selectKittyMonths.id<4) 
                        return ('1 пачка влажного корма + ' + (30 + 5 * this.selectKittyMonths.months).toFixed(1) + 'гр сухого')
                    else if(this.selectKittyMonths.id>3 && this.selectKittyMonths.id<6)
                        return ('1,5 пачки влажного корма + ' + (20 + 5 * this.selectKittyMonths.months).toFixed(1) + 'гр сухого')
                    else
                        return ('2 пачки влажного корма + ' + (32 + this.selectKittyMonths.months).toFixed(1) + 'гр сухого')
                }
            }
            else if(this.selectAge.id == 1 || this.selectAge.id == 2)
            {
                if(this.selectFeedType.id == 0)
                {
                    if(this.selectFactor.id == 0)
                    {
                        return (((65 + (37.5 - 0.5 * this.weight) * this.weight)/3.75).toFixed(1) + 'гр сухого корма')
                    }
                    else if(this.selectFactor.id == 1)
                        return '120гр сухого корма'
                    else if(this.selectFactor.id == 2)
                        return '150гр сухого корма'
                }
                else if(this.selectFeedType.id == 1)
                {
                    if(this.selectFactor.id == 0)
                    {
                        if(this.weight < 3)
                            return ('1 пачка влажного корма + ' + (((65 + (37.5 - 0.5 * this.weight) * this.weight)-56)/3.75).toFixed(1) + 'гр сухого')
                        else 
                            return ('2 пачки влажного корма + ' + (((65 + (37.5 - 0.5 * this.weight) * this.weight)-2*56)/3.75).toFixed(1) + 'гр сухого')
                    }
                    else if(this.selectFactor.id == 1)
                        return '2 пачки влажного корма + 90гр сухого'
                    else if(this.selectFactor.id == 2)
                        return '2 пачки влажного корма + 100гр сухого'
                }
            }
        }
    }
})