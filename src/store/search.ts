import { create } from 'zustand'

/** Интерфейс для хранения состояния поискового поля. */
export interface SearchState {
/** Текущее значение поискового поля. */
  value: string
  /** Функция для установки значения поискового поля. */
  setValue: (value: string) => void
  /** Флаг фокуса на поисковом поле. */
  focus: boolean
  /** Функция для установки фокуса на поисковом поле. */
  setFocus: (value: boolean) => void
}

/**
 * React-хук для работы с состоянием поискового поля.
 *
 * @returns {SearchState} Объект состояния, содержащий текущее значение поискового поля, функцию для его установки,
 * флаг фокуса на поисковом поле и функцию для установки этого флага.
 */
export const useSearchStore = create<SearchState>()((set) => ({
  value: '',
  setValue: (value: string) => {
    set(() => ({
      value,
    }))
  },
  focus: true,
  setFocus: (focus: boolean) => {
    set(() => ({
      focus,
    }))
  },
}))
