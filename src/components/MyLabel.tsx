
import './myLabel.css';

/**
 * Esta interfáz se traduce en controles que pueden
 *  ser manipulados por el usuario via interfaz de
 *  storybook
 * 
 * Los comentarios dentro de la interfaz configuran
 *  la documentación que será mostrada en la pestaña
 *  docs de la interfáz de storybook
 */
export interface MyLabelProps{
  /**
   * Texto que será mostrado por el label
   */
  label: string;

  /**
   * Tamaños del texto a mostrar
   */
  size: 'normal' | 'h1' | 'h2' | 'h3';

  /**
   * El texto será mostrado en mayúscula fija?
   */
  allCaps?: boolean;

  /**
   * Color de fuente del label
   */
   color?: 'primary' | 'secondary' | 'tertiary';

   /**
   * Color de fuente personalizado para el label 
   */
   fontColor?: string;

   /**
   * Color del background 
   */
   backgroundColor?: string;
} 

/**
 * A pesar de que la interfáz exige que las props sean
 *  obligatorias, se ponen valores por defecto en el componente
 *  para que estos sean usados por storybook al momento de 
 *  renderizar el componente inicialmente
 */

export const MyLabel = ({
  allCaps = false,
  color   = 'primary',
  label   = 'No label',
  size    = 'normal',
  fontColor,
  backgroundColor = 'transparent'
}: MyLabelProps) => {
  return (
    <span 
      className={ `label ${ size } text-${ color }` }
      style={{ color: fontColor, backgroundColor }}
    >
      { allCaps ? label.toUpperCase(): label }
    </span>
  )
}
