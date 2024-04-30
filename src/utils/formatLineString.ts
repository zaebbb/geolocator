import { type CoordsLine } from '@dev-types/geo'

/**
 * Форматирование точек геопозиции из OSM в яндекс-карты
 * В соответствии с системой координат яндекс-карт для объекта типа LineString
 *
 * @param {CoordsLine} geometry Система координат формата OSM
 * @returns {CoordsLine} Система координат формата яндекс-карт
 */
export const formatLineString = (geometry: CoordsLine): CoordsLine => {
  return geometry.map(point => {
    return [
      point[1],
      point[0],
    ]
  })
}
