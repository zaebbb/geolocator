import { type CoordsPoint } from '@dev-types/geo'

/**
 * Форматирование точки геопозиции из OSM в яндекс-карты
 * В соответствии с системой координат яндекс-карт для объекта типа Point
 *
 * @param {CoordsPoint} geometry Координата точки формата OSM
 * @returns {CoordsPoint} Координата точки формата яндекс-карт
 */
export const formatPoint = (geometry: CoordsPoint): [number, number] => {
  return [
    geometry[1],
    geometry[0],
  ]
}
