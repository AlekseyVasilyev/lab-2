Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link" :class="todo.active"> {{ todo.text }} </a>'
})

var map = new Vue({
    el: '#map',
    data: {
        maps:[
            { id:0, name:'Ижевск', url:'https://www.google.com/maps/d/embed?mid=1oBX4Tf6xE51G291PCh2LuuDj8Z8c6yKW' },
            { id:1, name:'Москва', url:'https://www.google.com/maps/d/embed?mid=1qkAdKcLJwdklf0bMKMQ4OdcTkReKC822' },
            { id:2, name:'Санкт-Петербург', url:'https://www.google.com/maps/d/embed?mid=1t-bLLfS8iXf5dujcO0ZH8WjdFv3DUKDx' },
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
            { id:0, href:'../pages/news.html', text:'Новости'},
            { id:1, href:'../pages/products.html', text:'Продукция'},
            { id:2, href:'../pages/calculator.html', text:'Калькулятор кормов'},
            { id:3, href:'../pages/maps.html', text:'Карта магазинов', active:'active'},
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