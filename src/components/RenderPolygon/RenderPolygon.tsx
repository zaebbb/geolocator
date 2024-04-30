import { type Option } from '@dev-types/select'
import { Polygon } from '@pbe/react-yandex-maps'
import { formatPolygon } from '@utils/formatPolygon'
import React, { memo } from 'react'

/** Интерфейс для свойств компонента отображения полигона. */
interface RenderPolygonProps {
  /** Объект опции, содержащий данные полигона для отображения. */
  option: Option
}

/**
 * Компонент для отображения полигона на карте.
 *
 * @component
 * @param {RenderPolygonProps} props - Свойства компонента.
 * @param {Option} props.option - Объект опции, содержащий данные полигона для отображения.
 * @returns {React.Element} Элемент полигона на карте.
 *
 * @example
 * <RenderPolygon option={{ label: 'Полигон', value: [[[37.6176, 55.7558], [37.6177, 55.7559], [37.6178, 55.7560]]], type: 'Polygon' }} />
 */
export const RenderPolygon: React.FC<RenderPolygonProps> = memo((props: RenderPolygonProps) => {
  const { option } = props

  return (
    <Polygon
      geometry={formatPolygon(option.value as number[][][])}
      options={{
        fillColor: '#8DB2DB',
        strokeColor: '#1D66BF',
        opacity: 0.5,
        strokeWidth: 1,
        strokeStyle: 'solid',
      }}
      height={600}
      width={800}
    />
  )
})
