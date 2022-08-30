"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
/**
 * El title define la "carpeta" en la que se agrupará
 *  mi componente en el menú lateral del storybook
 *  ( es la pantalla que sale al ejecutar el script
 *  de storybook )
 *
 * argTypes personaliza el tipo de control que se
 *  mostrará
 */
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select' },
        fontColor: { control: 'color' }
        // size: { control: 'select', options:['normal', 'h1'] }    // Se pueden personalizar las opciones
    }
};
/**
 * Utilización de nuestro componente. Al tipar de esta manera,
 *  se estará permitiendo que al componente se le pasen las props
 *  que está esperando via la interfáz visual de storybook
 */
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
/**
 * Crea una copia del Template, rompiendo la referencia
 *  de javascript a los objetos.
 *
 * Corresponde a las "Páginas" de la historia y debe tener
 * al menos una.
 *
 * Basic.args corresponde a los valores que estarán seteados
 *  para cada variante (pagina) de mi componente. Esto hace
 *  que el control aparezca marcado
 */
exports.Basic = Template.bind({});
exports.Basic.args = {
    size: 'normal',
    allCaps: false
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    size: 'normal',
    allCaps: true
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    size: 'normal',
    color: 'secondary'
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    size: 'normal',
    color: 'tertiary'
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    size: 'h1',
    fontColor: '#5517ac'
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    size: 'h1',
    fontColor: 'white',
    backgroundColor: 'black'
};
