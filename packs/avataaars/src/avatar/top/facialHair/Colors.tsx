import * as React from 'react'

import { FacialHairColor, Selector } from '../../../options'

export interface Props {
  maskID: string
}

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id='Color/Hair/Brown'
          mask={`url(#${this.props.maskID})`}
          fill={color}>
          <g transform='translate(-32.000000, 0.000000)' id='Color'>
            <rect x='0' y='0' width='264' height='244' />
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

const Auburn = makeColor('Ramati', '#A55728')
const Black = makeColor('Neri', '#2C1B18')
const Blonde = makeColor('Biondi', '#B58143')
const BlondeGolden = makeColor('Biondi Dorati', '#D6B370')
const Brown = makeColor('Marroni', '#724133')
const BrownDark = makeColor('Marrone Scuro', '#4A312C')
const Platinum = makeColor('Platino', '#ECDCBF')
const Red = makeColor('Rossi', '#C93305')
const SilverGray = makeColor('Argentati', '#E8E1E1')

export default class Colors extends React.Component<Props> {
  render() {
    return (
      <Selector option={FacialHairColor} defaultOption={BrownDark}>
        <Auburn maskID={this.props.maskID} />
        <Black maskID={this.props.maskID} />
        <Blonde maskID={this.props.maskID} />
        <BlondeGolden maskID={this.props.maskID} />
        <Brown maskID={this.props.maskID} />
        <BrownDark maskID={this.props.maskID} />
        <Platinum maskID={this.props.maskID} />
        <Red maskID={this.props.maskID} />
        <SilverGray maskID={this.props.maskID} />
      </Selector>
    )
  }
}
