import * as React from 'react'

import { HairColorOption, Selector } from '../../options'

export interface Props {
  maskID: string
}

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id='Skin/👶🏽-03-Brown'
          mask={`url(#${this.props.maskID})`}
          fill={color}>
          <g transform='translate(0.000000, 0.000000) ' id='Color'>
            <rect x='0' y='0' width='264' height='280' />
          </g>
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}
const Auburn = makeColor('Castano Rame', '#A55728')
const Black = makeColor('Nero', '#2C1B18')
const Blonde = makeColor('Biondo', '#B58143')
const BlondeGolden = makeColor('Biondo Dorato', '#D6B370')
const Brown = makeColor('Castano', '#724133')
const BrownDark = makeColor('Castano Scuro', '#4A312C')
const PastelPink = makeColor('Rosa Pastello', '#F59797')
const Blue = makeColor('Blu', '#000fdb')
const Platinum = makeColor('Platino', '#ECDCBF')
const Red = makeColor('Rossi', '#C93305')
const SilverGray = makeColor('Bianco/Argento', '#E8E1E1')

export default class HairColor extends React.Component<Props> {
  render() {
    return (
      <Selector option={HairColorOption} defaultOption={BrownDark}>
        <Auburn maskID={this.props.maskID} />
        <Black maskID={this.props.maskID} />
        <Blonde maskID={this.props.maskID} />
        <BlondeGolden maskID={this.props.maskID} />
        <Brown maskID={this.props.maskID} />
        <BrownDark maskID={this.props.maskID} />
        <PastelPink maskID={this.props.maskID} />
        <Blue maskID={this.props.maskID} />
        <Platinum maskID={this.props.maskID} />
        <Red maskID={this.props.maskID} />
        <SilverGray maskID={this.props.maskID} />
      </Selector>
    )
  }
}
