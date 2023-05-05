import { Schema, model } from 'mongoose'

const cardSchema = new Schema({
  _id: String,
  name: String,
  image_uris: {
    small: String,
    normal: String
  },
  mana_cost: String,
  type_line: String,
  colors: String,
  rarity: String,
  reserved: Boolean,
  collector_number: Number,
  set: String,
  meta: {
    grade: String,
    price: Number
  }
}, {
  virtuals: {
    id: {
      get () {
        return this._id
      }
    }
  }
})

const Card = model('Card', cardSchema)

export default Card

/*

{
  "object": "card",
  "id": "f295b713-1d6a-43fd-910d-fb35414bf58a",
  "oracle_id": "7bc3f92f-68a2-4934-afc4-89f6d0e8cf98",
  "multiverse_ids": [
    567508
  ],
  "tcgplayer_id": 273737,
  "cardmarket_id": 661711,
  "name": "Dusk // Dawn",
  "lang": "en",
  "released_at": "2022-06-10",
  "uri": "https://api.scryfall.com/cards/f295b713-1d6a-43fd-910d-fb35414bf58a",
  "scryfall_uri": "https://scryfall.com/card/clb/691/dusk-dawn?utm_source=api",
  "layout": "split",
  "highres_image": true,
  "image_status": "highres_scan",
  "image_uris": {
    "small": "https://cards.scryfall.io/small/front/f/2/f295b713-1d6a-43fd-910d-fb35414bf58a.jpg?1674141076",
    "normal": "https://cards.scryfall.io/normal/front/f/2/f295b713-1d6a-43fd-910d-fb35414bf58a.jpg?1674141076",
    "large": "https://cards.scryfall.io/large/front/f/2/f295b713-1d6a-43fd-910d-fb35414bf58a.jpg?1674141076",
    "png": "https://cards.scryfall.io/png/front/f/2/f295b713-1d6a-43fd-910d-fb35414bf58a.png?1674141076",
    "art_crop": "https://cards.scryfall.io/art_crop/front/f/2/f295b713-1d6a-43fd-910d-fb35414bf58a.jpg?1674141076",
    "border_crop": "https://cards.scryfall.io/border_crop/front/f/2/f295b713-1d6a-43fd-910d-fb35414bf58a.jpg?1674141076"
  },
  "mana_cost": "{2}{W}{W} // {3}{W}{W}",
  "cmc": 9,
  "type_line": "Sorcery // Sorcery",
  "colors": [
    "W"
  ],
  "color_identity": [
    "W"
  ],
  "keywords": [
    "Aftermath"
  ],
  "card_faces": [
    {
      "object": "card_face",
      "name": "Dusk",
      "mana_cost": "{2}{W}{W}",
      "type_line": "Sorcery",
      "oracle_text": "Destroy all creatures with power 3 or greater.",
      "artist": "Kasia 'Kafis' Zielińska",
      "artist_id": "a662cb71-4770-4b49-8b03-2cf8497049a7",
      "illustration_id": "3134f77c-7a7d-48e0-99a6-4f323868e1ef"
    },
    {
      "object": "card_face",
      "name": "Dawn",
      "flavor_name": "",
      "mana_cost": "{3}{W}{W}",
      "type_line": "Sorcery",
      "oracle_text": "Aftermath (Cast this spell only from your graveyard. Then exile it.)\nReturn all creature cards with power 2 or less from your graveyard to your hand.",
      "artist": "Kasia 'Kafis' Zielińska",
      "artist_id": "a662cb71-4770-4b49-8b03-2cf8497049a7"
    }
  ],
  "legalities": {
    "standard": "not_legal",
    "future": "not_legal",
    "historic": "legal",
    "gladiator": "legal",
    "pioneer": "legal",
    "explorer": "legal",
    "modern": "legal",
    "legacy": "legal",
    "pauper": "not_legal",
    "vintage": "legal",
    "penny": "legal",
    "commander": "legal",
    "oathbreaker": "legal",
    "brawl": "not_legal",
    "historicbrawl": "legal",
    "alchemy": "not_legal",
    "paupercommander": "not_legal",
    "duel": "legal",
    "oldschool": "not_legal",
    "premodern": "not_legal",
    "predh": "not_legal"
  },
  "games": [
    "paper"
  ],
  "reserved": false,
  "foil": false,
  "nonfoil": true,
  "finishes": [
    "nonfoil"
  ],
  "oversized": false,
  "promo": false,
  "reprint": true,
  "variation": false,
  "set_id": "5e4c3fe8-fd57-4b20-ad56-c03790a16cea",
  "set": "clb",
  "set_name": "Commander Legends: Battle for Baldur's Gate",
  "set_type": "draft_innovation",
  "set_uri": "https://api.scryfall.com/sets/5e4c3fe8-fd57-4b20-ad56-c03790a16cea",
  "set_search_uri": "https://api.scryfall.com/cards/search?order=set&q=e%3Aclb&unique=prints",
  "scryfall_set_uri": "https://scryfall.com/sets/clb?utm_source=api",
  "rulings_uri": "https://api.scryfall.com/cards/f295b713-1d6a-43fd-910d-fb35414bf58a/rulings",
  "prints_search_uri": "https://api.scryfall.com/cards/search?order=released&q=oracleid%3A7bc3f92f-68a2-4934-afc4-89f6d0e8cf98&unique=prints",
  "collector_number": "691",
  "digital": false,
  "rarity": "rare",
  "card_back_id": "0aeebaf5-8c7d-4636-9e82-8c27447861f7",
  "artist": "Kasia 'Kafis' Zielińska",
  "artist_ids": [
    "a662cb71-4770-4b49-8b03-2cf8497049a7"
  ],
  "illustration_id": "3134f77c-7a7d-48e0-99a6-4f323868e1ef",
  "border_color": "black",
  "frame": "2015",
  "security_stamp": "oval",
  "full_art": false,
  "textless": false,
  "booster": false,
  "story_spotlight": false,
  "edhrec_rank": 1006,
  "penny_rank": 3112,
  "prices": {
    "usd": "0.14",
    "usd_foil": null,
    "usd_etched": null,
    "eur": "0.31",
    "eur_foil": null,
    "tix": null
  },
  "related_uris": {
    "gatherer": "https://gatherer.wizards.com/Pages/Card/Details.aspx?multiverseid=567508",
    "tcgplayer_infinite_articles": "https://infinite.tcgplayer.com/search?contentMode=article&game=magic&partner=scryfall&q=Dusk+%2F%2F+Dawn&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    "tcgplayer_infinite_decks": "https://infinite.tcgplayer.com/search?contentMode=deck&game=magic&partner=scryfall&q=Dusk+%2F%2F+Dawn&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    "edhrec": "https://edhrec.com/route/?cc=Dusk+%2F%2F+Dawn"
  },
  "purchase_uris": {
    "tcgplayer": "https://www.tcgplayer.com/product/273737?page=1&utm_campaign=affiliate&utm_medium=api&utm_source=scryfall",
    "cardmarket": "https://www.cardmarket.com/en/Magic/Products/Search?referrer=scryfall&searchString=Dusk+%2F%2F+Dawn&utm_campaign=card_prices&utm_medium=text&utm_source=scryfall",
    "cardhoarder": "https://www.cardhoarder.com/cards?affiliate_id=scryfall&data%5Bsearch%5D=Dusk+%2F%2F+Dawn&ref=card-profile&utm_campaign=affiliate&utm_medium=card&utm_source=scryfall"
  }
}

*/
