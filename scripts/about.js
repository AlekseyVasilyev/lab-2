Vue.component('li-item', {
    props: ['todo'],
    template: '<a class="nav-link" :class="todo.active"> {{ todo.text }} </a>'
})
Vue.component('about',{
    props: ["user"],
    template:`<div>
                <img class="avatar" :src='user.src'>
                <p><span>{{ user.name }}</span></p>
                <p>{{ user.position }}</p>
            </div>`
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
            { id:2, href:'../pages/calculator.html', text:'Калькулятор кормов'},
            { id:3, href:'../pages/maps.html', text:'Карта магазинов'},
            { id:4, href:'../pages/about.html', text:'О нас', active:'active'}
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
        creators:[
            { id:0, name:'Кот борис', src:'../assets/boris.jpg', position:'Исполнительный директор.' },
            { id:1, name:'Кот шеба', src:'../assets/sheba.jpg', position:'Креативный директор.' },
            { id:2, name:'Васильев Алексей', src:'../assets/vasilyev.jpg', position:'Главный программист.' },
            { id:3, name:'Кот матроскин', src:'../assets/matroskin.jpg', position:'Главный бухгалтер.' }
        ],
    }
})