import React from 'react'

/**
 * React-хук для отложенного обновления значения с задержкой.
 *
 * @param {string} value Значение, которое нужно отложить.
 * @param {number} delay Задержка в миллисекундах перед обновлением значения.
 * @returns {string} Отложенное значение.
 *
 * @example
 * const [searchTerm, setSearchTerm] = React.useState('');
 * const debouncedSearchTerm = useDebounce(searchTerm, 500);
 *
 * // При изменении searchTerm, debouncedSearchTerm будет обновляться с задержкой в 500 мс
 */
function useDebounce (value: string, delay: number): string {
  const [debouncedValue, setDebouncedValue] = React.useState(value)

  React.useEffect(
    () => {
      const t = setTimeout(() => {
        setDebouncedValue(value)
      }, delay)

      return () => {
        clearTimeout(t)
      }
    },
    [value, delay]
  )
  return debouncedValue
}

export default useDebounce
