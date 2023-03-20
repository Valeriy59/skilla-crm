import axios from "axios";

export const sidebarItems = [
  'Итоги',
  'Заказы',
  'Сообщения',
  'Звонки',
  'Контрагенты',
  'Документы',
  'Исполнители',
  'Отчеты',
  'База знаний',
  'Настройки'
]
export const instance = axios.create({
  baseURL: 'https://api.skilla.ru/mango/',
  headers: {
    'Authorization': 'Bearer testtoken'
  }
})


