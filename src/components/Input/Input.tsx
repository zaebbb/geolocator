import useDebounce from '@hooks/useDebounce'
import { useGeoStore } from '@store/geo'
import { useSearchStore } from '@store/search'
import { getGeometryData } from '@utils/getGeometryData'
import React, { memo } from 'react'
import cls from './Input.module.scss'

/**
 * Компонент поискового поля, который обрабатывает ввод пользователя, устанавливает фокус и получает геометрические данные.
 *
 * @component
 * @returns {React.Element} Элемент поискового поля.
 *
 * @example
 * <Input />
 */
export const Input = memo(() => {
  const setOptions = useGeoStore(state => state.setOptions)
  const value = useSearchStore(state => state.value)
  const setValue = useSearchStore(state => state.setValue)
  const debounceValue = useDebounce(value, 1000)
  const setFocus = useSearchStore(state => state.setFocus)

  const onFocus = (): void => { setFocus(true) }
  const onBlur = (): void => {
    setTimeout(() => {
      setFocus(false)
    }, 300)
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(e.target.value)
  }

  const getGeoData = React.useCallback(async () => {
    const options = await getGeometryData(debounceValue)

    if (options) {
      setOptions(options)
    }
  }, [debounceValue, setOptions])

  React.useEffect(() => {
    if (debounceValue) {
      void getGeoData()
    } else {
      setOptions([])
    }
  }, [debounceValue, getGeoData, setOptions])

  return (
    <input
      type="text"
      onChange={onChangeHandler}
      value={value}
      className={cls.Input}
      onFocus={onFocus}
      onBlur={onBlur}
    />
  )
})
