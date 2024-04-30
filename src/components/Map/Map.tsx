import { RenderLineString } from '@components/RenderLineString/RenderLineString'
import { RenderPoint } from '@components/RenderPoint/RenderPoint'
import { RenderPolygon } from '@components/RenderPolygon/RenderPolygon'
import { Map as YMap } from '@pbe/react-yandex-maps'
import { useGeoStore } from '@store/geo'
import { getCenterPoint } from '@utils/getCenterPoint'
import React, { memo } from 'react'

export const Map: React.FC = memo(() => {
  const currentOption = useGeoStore(state => state.currentOption)
  const [
    centerPoint,
    setCenterPoint,
  ] = React.useState(getCenterPoint(currentOption))

  React.useEffect(() => {
    if (currentOption) {
      setCenterPoint(getCenterPoint(currentOption))
    }
  }, [currentOption])

  return (
    <YMap
      defaultState={{
        center: [55.753995, 37.614069],
        zoom: 15,
      }}
      state={{
        center: centerPoint.length ? centerPoint.reverse() : [55.753995, 37.614069],
        zoom: 15,
      }}
      height={'800px'}
      width={'100%'}
    >
      {currentOption?.type === 'Polygon' && (
        <RenderPolygon option={currentOption} />
      )}

      {currentOption?.type === 'LineString' && (
        <RenderLineString option={currentOption} />
      )}

      {currentOption?.type === 'Point' && (
        <RenderPoint option={currentOption} />
      )}
    </YMap>
  )
})
