import i18n from 'i18next'
import { messages } from './languages'

i18n
    .init({
        debug: false,
        lng: 'pt-BR',
        defaultNS: ['translations'],
        fallbackLng: 'pt',
        ns: ['translations'],
        resources: messages
    })

export { i18n }
