import { type Option } from '@dev-types/select'
import { useGeoStore } from '@store/geo'
import React, { memo } from 'react'
import cls from './Button.module.scss'

/** Интерфейс для свойств компонента кнопки. */
interface ButtonProps {
  /** Объект опции, который будет отображаться на кнопке. */
  option: Option
}

/**
 * Компонент кнопки, который отображает опцию и устанавливает её как текущую при клике.
 *
 * @component
 * @param {ButtonProps} props - Свойства компонента.
 *  * @param {Option} props.option - Объект опции, который будет отображаться на кнопке.
 * @returns {React.Element} Элемент кнопки.
 *
 * @example
 * <Button option={{ label: 'Москва', value: [37.6176, 55.7558], type: 'Point' }} />
 */
export const Button: React.FC<ButtonProps> = memo((props: ButtonProps) => {
  const { option } = props
  const setCurrentOption = useGeoStore(state => state.setCurrentOption)

  const onClickHandler = (option: Option): void => {
    setCurrentOption(option)
  }

  return (
    <button
      type="button"
      onClick={() => { onClickHandler(option) }}
      className={cls.GeoButton}
    >
      {option.label}
    </button>
  )
})
