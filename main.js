import data from "./data.json" assert { type: 'json' }

import { cards } from './scripts/renderCard.js'

import { showCartProducts } from './scripts/cart.js'

cards(data)

showCartProducts(data)