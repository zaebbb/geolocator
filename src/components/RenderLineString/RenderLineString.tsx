import { type Option } from '@dev-types/select'
import { Polyline } from '@pbe/react-yandex-maps'
import { formatLineString } from '@utils/formatLineString'
import React, { memo } from 'react'

/** Интерфейс для свойств компонента отображения линии. */
interface RenderLineStringProps {
  /** Объект опции, содержащий данные линии для отображения. */
  option: Option
}

/**
 * Компонент для отображения линии на карте.
 *
 * @component
 * @param {RenderLineStringProps} props - Свойства компонента.
 * @param {Option} props.option - Объект опции, содержащий данные линии для отображения.
 * @returns {React.Element} Элемент линии на карте.
 *
 * @example
 * <RenderLineString option={{ label: 'Линия', value: [[37.6176, 55.7558], [37.6177, 55.7559]], type: 'LineString' }} />
 */
export const RenderLineString: React.FC<RenderLineStringProps> = memo((
  props: RenderLineStringProps
) => {
  const { option } = props

  return (
    <Polyline
      geometry={formatLineString(option.value as number[][])}
      options={{
        strokeColor: '#1D66BF',
        opacity: 0.5,
        strokeWidth: 1,
        strokeStyle: 'solid',
      }}
      height={800}
      width={800}
    />
  )
})
