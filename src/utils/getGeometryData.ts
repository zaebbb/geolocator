import { type GeoResponse } from '@dev-types/geo'
import { type Option } from '@dev-types/select'
import axios, { type AxiosError } from 'axios'

/**
 * Получение данных API из конечного эндпоинта /search сервиса nominatim
 *
 * @param {string} search Поисковой запрос
 * @returns {Promise<Option[] | void>} Сформированный массив опций для использования в сервисе
 * @throws {Error} Если произошла ошибка при выполнении запроса
 */
export const getGeometryData = async (search: string): Promise<Option[] | undefined> => {
  try {
    const response = await axios.get<GeoResponse>('https://nominatim.openstreetmap.org/search', {
      params: {
        q: search,
        format: 'geocodejson',
        polygon_geojson: 1,
        addressdetails: 1,
      },
      headers: {
        'Accept-Language': 'ru',
      },
    })

    if (response.data) {
      const resOptions: Option[] = []

      response.data.features.forEach(feature => {
        resOptions.push({
          label: feature.properties.geocoding.label,
          value: feature.geometry.coordinates,
          type: feature.geometry.type,
        })
      })

      return resOptions
    }
  } catch (e) {
    throw new Error((e as AxiosError).message)
  }
}
