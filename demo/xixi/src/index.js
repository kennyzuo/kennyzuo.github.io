import Layout from './components/layout';
import Icon from './components/icon';
import Button from './components/button'; 
import {Col, Row} from './components/grid';


const components = {
	Layout: Layout,
    Icon: Icon,
    Button: Button,
    ['Button-group']: Button.Group,
    Col,
    Row
};
const xixi = {
    ...components,
};
const install = function(Vue, opts = {}) {
    if (install.installed) return;
    
    Object.keys(xixi).forEach(key => {
        Vue.component(key, xixi[key]);
    }); 
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

const API = {
    version: process.env.VERSION, // eslint-disable-line no-undef
    install,
    ...components
};

export default API
//module.exports.default = module.exports = API;   