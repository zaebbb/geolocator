import { type CoordsPolygon } from '@dev-types/geo'

/**
 * Форматирование точек геопозиции из OSM в яндекс-карты
 * В соответствии с системой координат яндекс-карт для объекта типа Polygon
 *
 * @param {CoordsPolygon} geometry Система координат формата OSM
 * @returns {CoordsPolygon} Система координат формата яндекс-карт
 */
export const formatPolygon = (geometry: CoordsPolygon): CoordsPolygon => {
  return geometry.map(line => {
    return line.map(point => {
      return [
        point[1],
        point[0],
      ]
    })
  })
}
