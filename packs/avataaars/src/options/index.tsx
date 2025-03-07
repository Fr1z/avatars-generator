import Option from './Option'

export { default as Option } from './Option'
export { default as OptionContext, OptionContextState } from './OptionContext'
export { default as Selector } from './Selector'

export const TopOption = new Option({
  key: 'topType',
  label: 'Testa',
})

export const AccessoriesOption = new Option({
  key: 'accessoriesType',
  label: '↳ 👓 Accessori',
})

export const HatColorOption = new Option({
  key: 'hatColor',
  label: '🎨 Colore cappello',
})

export const HairColorOption = new Option({
  key: 'hairColor',
  label: '↳ 💈 Colore dei Capelli',
})

export const FacialHairOption = new Option({
  key: 'facialHairType',
  label: 'Barba',
})

export const FacialHairColor = new Option({
  key: 'facialHairColor',
  label: '↳ ✂️ Colore Barba',
})

export const ClotheOption = new Option({
  key: 'clotheType',
  label: '👔 Abito',
})

export const ClotheColorOption = new Option({
  key: 'clotheColor',
  label: '↳ Colore Abito',
})

export const GraphicOption = new Option({
  key: 'graphicType',
  label: '↳ Disegno',
})

export const EyesOption = new Option({
  key: 'eyeType',
  label: '👁 Occhi',
})

export const EyebrowOption = new Option({
  key: 'eyebrowType',
  label: '✏️ Sopracciglia',
})

export const MouthOption = new Option({
  key: 'mouthType',
  label: '👄 Bocca',
})

export const SkinOption = new Option({
  key: 'skinColor',
  label: '🎨 Carnagione',
})

export const allOptions = [
  TopOption,
  AccessoriesOption,
  HatColorOption,
  HairColorOption,
  FacialHairOption,
  FacialHairColor,
  ClotheOption,
  ClotheColorOption,
  GraphicOption,
  EyesOption,
  EyebrowOption,
  MouthOption,
  SkinOption,
]
