import { Button } from '@components/Button/Button'
import { Input } from '@components/Input/Input'
import { useGeoStore } from '@store/geo'
import { useSearchStore } from '@store/search'
import React, { memo } from 'react'
import cls from './Panel.module.scss'

/**
 * Компонент панели, который отображает поисковый поле и список кнопок для выбранных геометрических объектов.
 *
 * @component
 * @returns {React.Element} Элемент панели.
 *
 * @example
 * <Panel />
 */
export const Panel: React.FC = memo(() => {
  const options = useGeoStore(state => state.options)
  const focus = useSearchStore(state => state.focus)

  return (
    <div className={cls.Panel}>
      <Input />

      {Boolean(options.length && focus) && (
        <div className={cls.GeyItems}>
          {options.map((option) => (
            <Button
              option={option}
              key={option.label}
            />
          ))}
        </div>
      )}
    </div>
  )
})
