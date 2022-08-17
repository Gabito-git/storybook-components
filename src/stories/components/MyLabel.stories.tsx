import { MyLabel } from "../../components/MyLabel";
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
export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes:{
    size:      { control: 'select' },
    color:     { control: 'select' },
    fontColor: { control: 'color' }
    // size: { control: 'select', options:['normal', 'h1'] }    // Se pueden personalizar las opciones
  }
} as ComponentMeta<typeof MyLabel >

/**
 * Utilización de nuestro componente. Al tipar de esta manera,
 *  se estará permitiendo que al componente se le pasen las props
 *  que está esperando via la interfáz visual de storybook
 */
const Template: ComponentStory<typeof MyLabel> = ( args ) => <MyLabel {...args}/>

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
export const Basic = Template.bind({});
Basic.args ={
  size: 'normal',
  allCaps: false
}

export const AllCaps = Template.bind({});
AllCaps.args ={
  size: 'normal',
  allCaps: true
}

export const Secondary = Template.bind({});
Secondary.args={
  size: 'normal',
  color:'secondary'
}

export const Tertiary = Template.bind({});
Tertiary.args ={
  size:'normal',
  color: 'tertiary'
}

export const CustomFontColor = Template.bind({});
CustomFontColor.args = {
  size: 'h1',
  fontColor: '#5517ac'
}

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  size: 'h1',
  fontColor: 'white',
  backgroundColor: 'black'
}