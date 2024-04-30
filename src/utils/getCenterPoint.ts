import { type Option } from '@dev-types/select'

/**
 * Форматирование точек геопозиции из OSM в яндекс-карты
 * В соответствии с системой координат яндекс-карт для объекта типа Polygon
 * В случае отсутствия опции возвращается пустой массив
 * В случае отсутсвтяи поддерживаемого типа возвраается пустой массив
 *
 * @param {Option | undefined} option Данные картографического объекта
 * @returns {number[]} Конечная точка отформатированная в соответствии с системой координат яндекс-карт
 */
export const getCenterPoint = (option?: Option): number[] => {
  if (!option) {
    return []
  }

  if (option.type === 'Point') {
    const point = option.value as number[]
    return [point[1], point[0]]
  }

  if (option.type === 'LineString') {
    const point = option.value[0] as number[]
    return [point[1], point[0]]
  }

  if (
    option.type === 'Polygon' &&
    option.value[0] &&
    Array.isArray(option.value[0])
  ) {
    const point = option.value[0][0] as number[]
    return [point[1], point[0]]
  }

  return []
}
