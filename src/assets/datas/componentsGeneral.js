import { elementType, baseElement } from './typesElement'

export const componentsGeneral = [
  // Section
  {
    ...baseElement,
    'name': 'Section',
    'type': elementType.section,
    'egglement': true,
    'containegg': true,
    'width': '100%',
    'height': 300,
    'attrs': {
    },
    'styles': {
      'overflow': 'hidden',
      'border-color': 'rgba(0, 0, 0, 0.15)',
      'border-style': 'solid',
      'border-width': '1px'
    },
    'children': [],
    'classes': {}
  },

  // Text
  {
    ...baseElement,
    'name': 'Text',
    'type': elementType.text,
    'text': 'Text',
    'egglement': true,
    'width': 150,
    'height': 25,
    'attrs': {},
    'styles': {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis'
    },
    'classes': {}
  },

  // Image
  {
    ...baseElement,
    'name': 'Image',
    'type': elementType.image,
    'egglement': true,
    'width': 50,
    'height': 44.44,
    'attrs': {
      'src': 'https://s7d9.scene7.com/is/image/DisneyStoreES/Character_Assets_Atmb-sq_character-alice_launch?$sq-c$'
    },
    'styles': {},
    'classes': {}
  },

  // Button
  {
    ...baseElement,
    'name': 'Button',
    'type': elementType.button,
    'text': 'Button',
    'egglement': true,
    'width': 200,
    'height': 40,
    'attrs': {},
    'styles': {
      'overflow': 'hidden',
      'text-overflow': 'ellipsis'
    },
    'classes': {}
  }
]
