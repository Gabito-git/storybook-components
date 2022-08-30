/// <reference types="react" />
import { ComponentMeta, ComponentStory } from '@storybook/react';
/**
 * El title define la "carpeta" en la que se agrupará
 *  mi componente en el menú lateral del storybook
 *  ( es la pantalla que sale al ejecutar el script
 *  de storybook )
 *
 * argTypes personaliza el tipo de control que se
 *  mostrará
 */
declare const _default: ComponentMeta<({ allCaps, color, label, size, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => JSX.Element>;
export default _default;
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
export declare const Basic: ComponentStory<({ allCaps, color, label, size, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => JSX.Element>;
export declare const AllCaps: ComponentStory<({ allCaps, color, label, size, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => JSX.Element>;
export declare const Secondary: ComponentStory<({ allCaps, color, label, size, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => JSX.Element>;
export declare const Tertiary: ComponentStory<({ allCaps, color, label, size, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => JSX.Element>;
export declare const CustomFontColor: ComponentStory<({ allCaps, color, label, size, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => JSX.Element>;
export declare const CustomBackgroundColor: ComponentStory<({ allCaps, color, label, size, fontColor, backgroundColor }: import("../../components/MyLabel").MyLabelProps) => JSX.Element>;
