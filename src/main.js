import { createApp } from 'vue';
import App from './App';
import components from '@/components/UI';


const app = createApp(App);

console.log(components);  //name, _scope-id, _file 
//Регистрация UI компонентов в Vue
components.forEach(component => {
    app.component(component.name, component);
});






app.mount('#app');
