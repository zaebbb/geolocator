/** Интерфейс для описания ответа от API Nominatim */
export interface GeoResponse {
  /** Тип запроса */
  type: string
  /** Основная информация о запросе */
  geocoding: Geocoding
  /** Обнаруженные картографические объекты */
  features: Feature[]
}

/** Интерфейс для описания основной информации от запроса к API */
export interface Geocoding {
  /** Версия API */
  version: string
  /** Атрибуция */
  attribution: string
  /** Лицензия */
  licence: string
  /** Поисковой запрос */
  query: string
}

/** Катографический объект */
export interface Feature {
  /** Тип картографического объекта */
  type: string
  /** Основная информация о найденном объекте */
  properties: FeatureProperties
  /** Информация о расположении файла */
  geometry: Geometry
}

/** Данные картографического объекта */
export interface FeatureProperties {
  /** Данные картографического объекта */
  geocoding: FeatureGeocoding
}

/** Данные картографического объекта */
export interface FeatureGeocoding {
  /** Идентификатор в базе данных nominatim */
  place_id: number
  /** Тип OSM объекта */
  osm_type: GeoOsmType
  /** Идентификатор объекта в OSM */
  osm_id: number
  /** Ключ основного объекта OSM */
  osm_key: string
  /** Значение основного тега объекта OSM */
  osm_value: GeoType
  /** Адресный уровень объекта OSM */
  type: GeoType
  /** Полный адрес */
  label: string
  /** Локализированное название места */
  name: string
}

/** Уровни объектов OSM */
export type GeoType =
  'house' | 'street' | 'district' | 'city' | 'county' | 'state' | 'country' | 'locality'
/** Тип OSM объектов */
export type GeoOsmType = 'node' | 'way' | 'relation'

/** Информация о кооринатах объекта */
export interface Geometry {
  /** Тип картографического объекта */
  type: GeometryType
  /** Координаты объекта */
  coordinates: CoordsCommon
}

/** Типы картографических объектов */
export type GeometryType =
  'Point' | 'LineString' | 'LinearRing' |
  'Polygon' | 'MultiPoint' | 'MultiLineString' |
  'MultiPolygon' | 'GeometryCollection'

/** Координаты для типа Point */
export type CoordsPoint = number[]
/** Координаты для типа LineString */
export type CoordsLine = number[][]
/** Координаты для типа Polygon */
export type CoordsPolygon = number[][][]
/** Общая информация о подерживаемых координатах */
export type CoordsCommon = CoordsPoint & CoordsLine & CoordsPolygon
