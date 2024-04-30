import { type CoordsCommon, type GeometryType } from './geo'

/** Форматированная информация о картографическом объекте */
export interface Option {
  /** Полное название картографического объекта */
  label: string
  /** Тип картографического объекта */
  type: GeometryType
  /** Координаты картографического объекта */
  value: CoordsCommon
}
