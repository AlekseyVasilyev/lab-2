Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link"> {{ todo.text }} </a>'
})

var dropDownMenu = new Vue({
    el: '#nav',
    data: {
        navClass:{
            mainNav:'navbar navbar-expand-lg flex-nowrap navbar-dark container-fluid position-fixed',
            menu:'navbar-collapse collapse in navbar-toggleable-sm d-lg-inline-block'
        },
        url:[
            { href:'pages/news.html', text:'Новости'},
            { href:'pages/products.html', text:'Продукция'},
            { href:'pages/calculator.html', text:'Калькулятор кормов'},
            { href:'pages/maps.html', text:'Карта магазинов'},
            { href:'pages/about.html', text:'О нас'}
        ]
    }
})

var main = new Vue({
    el:'#main',
    data:{
        headlines:[
            'О корме:','Преимущества:','Особенности нашего корма:'
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