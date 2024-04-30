import { type Option } from '@dev-types/select'
import { create } from 'zustand'

/** Интерфейс для хранения состояния географических данных.  */
export interface GeoState {
  /** Текущий выбранный объект географических данных. */
  currentOption: Option | undefined
  /** Функция для установки текущего выбранного объекта географических данных. */
  setCurrentOption: (option: Option) => void
  /** Массив доступных объектов географических данных. */
  options: Option[]
  /** Функция для установки массива доступных объектов географических данных. */
  setOptions: (options: Option[]) => void
}

/**
 * React-хук для работы с состоянием географических данных.
 *
 * @returns {GeoState} Объект состояния, содержащий текущий выбранный объект географических данных, функцию для его установки,
 * массив доступных объектов географических данных и функцию для их установки.
 */
export const useGeoStore = create<GeoState>()((set) => ({
  currentOption: undefined,
  setCurrentOption: (option: Option) => {
    set(() => ({
      currentOption: option,
    }))
  },
  options: [],
  setOptions: (options: Option[]) => {
    set(() => ({
      options,
    }))
  },
}))
