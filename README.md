# GeoLocator

**GeoLocator** - это инструмент для визуализации географических данных, использующий API Nominatim для получения информации о местоположении и Яндекс.Карты для визуализации. Это решение часто встречается в проектах, связанных с геолокацией и картографией, где необходимо предоставить пользователям возможность искать и визуализировать местоположения на карте.

### Оглавление

- [Начало работы](#начало-работы)
- [Начало работы](#начало-работы)
- [Деплой](#деплой)
- [Лицензия](#лицензия)
- [Вклад в проект](#вклад-в-проект)


![Static Badge](https://img.shields.io/badge/Geolocator-Zaebbb-Zaebbb)
![GitHub top language](https://img.shields.io/github/languages/top/zaebbb/geolocator)
![GitHub](https://img.shields.io/github/license/zaebbb/geolocator)
![GitHub Repo stars](https://img.shields.io/github/stars/zaebbb/geolocator)
![GitHub issues](https://img.shields.io/github/issues/zaebbb/geolocator)

## Технологии

- [`TypeScript`](https://www.typescriptlang.org/)
- [`Create React App (CRA)`](https://create-react-app.dev/)
- [`React`](https://reactjs.org/)
- [`@pbe/react-yandex-maps`](https://github.com/pbe/react-yandex-maps)
- [`SCSS`](https://sass-lang.com/)
- [`Zustand`](https://github.com/pmndrs/zustand)
- [`Axios`](https://github.com/axios/axios)

## Начало работы

Склонируйте проект 
```shell
    git clone https://github.com/zaebbb/search-geolocation-osm-ymap.git
```
Перейдите в директорию с проектом 
```shell
    cd ./search-geolocation-osm-ymap
```
Установка npm-зависимостей
### `npm install`
Запуск приложения
### `npm start`
Запуск приложения
### `npm run build`

## Деплой

Деплой проекта осуществляется через CI/CD с GitHub Actions. Конфигурация находится в файле `.github/workflows/main.yml`.

## Лицензия

Этот проект лицензирован под [MIT License](LICENSE).

## Вклад в проект

1. Fork проекта и создайте свою ветку (`git checkout -b feature/AmazingFeature`)
2. Commit изменения (`git commit -am 'Add some AmazingFeature'`)
3. Push ветку (`git push origin feature/AmazingFeature`)
4. Создайте Pull Request
