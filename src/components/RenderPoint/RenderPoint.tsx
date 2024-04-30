import { type Option } from '@dev-types/select'
import { Placemark } from '@pbe/react-yandex-maps'
import { formatPoint } from '@utils/formatPoint'
import React, { memo } from 'react'

/** Интерфейс для свойств компонента отображения точки. */
interface RenderLineStringProps {
  /** Объект опции, содержащий данные точки для отображения. */
  option: Option
}

/**
 * Компонент для отображения точки на карте.
 *
 * @component
 * @param {RenderLineStringProps} props - Свойства компонента.
 * @param {Option} props.option - Объект опции, содержащий данные точки для отображения.
 * @returns {React.Element} Элемент точки на карте.
 *
 * @example
 * <RenderPoint option={{ label: 'Точка', value: [37.6176, 55.7558], type: 'Point' }} />
 */
export const RenderPoint: React.FC<RenderLineStringProps> = memo((props: RenderLineStringProps) => {
  const { option } = props

  return (
    <Placemark
      geometry={formatPoint(option.value as number[])}
      height={600}
      width={800}
    />
  )
})
