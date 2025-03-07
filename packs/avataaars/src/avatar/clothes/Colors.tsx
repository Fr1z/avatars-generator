import * as React from 'react'

import { ClotheColorOption, Selector } from '../../options'

export interface Props {
  maskID: string
}

function makeColor(name: string, color: string) {
  class ColorComponent extends React.Component<Props> {
    render() {
      return (
        <g
          id='Color/Palette/Gray-01'
          mask={`url(#${this.props.maskID})`}
          fillRule='evenodd'
          fill={color}>
          <rect id='🖍Color' x='0' y='0' width='264' height='110' />
        </g>
      )
    }
  }
  const anyComponent = ColorComponent as any
  anyComponent.displayName = name
  anyComponent.optionValue = name
  return anyComponent
}

const Black = makeColor('Nero', '#262E33')
const Blue01 = makeColor('Blu1', '#65C9FF')
const Blue02 = makeColor('Blu2', '#5199E4')
const Blue03 = makeColor('Blu3', '#25557C')
const Gray01 = makeColor('Grigio01', '#E6E6E6')
const Gray02 = makeColor('Grigio02', '#929598')
const Nature = makeColor('Verde Offgrid', '#90c046')
const Heather = makeColor('Grigio Mélange', '#3C4F5C')
const PastelBlue = makeColor('Blu Pastello', '#B1E2FF')
const PastelGreen = makeColor('Verde Pastello', '#A7FFC4')
const PastelOrange = makeColor('Arancio Pastello', '#FFDEB5')
const PastelRed = makeColor('Rosso Pastello', '#FFAFB9')
const PastelYellow = makeColor('Giallo Pastello', '#FFFFB1')
const Pink = makeColor('Rosa', '#FF488E')
const Red = makeColor('Rosso', '#FF5C5C')
const White = makeColor('Bianco', '#FFFFFF')

export default class Colors extends React.Component<Props> {
  render() {
    return (
      <Selector option={ClotheColorOption} defaultOption={Gray01}>
        <Black maskID={this.props.maskID} />
        <Blue01 maskID={this.props.maskID} />
        <Blue02 maskID={this.props.maskID} />
        <Blue03 maskID={this.props.maskID} />
        <Gray01 maskID={this.props.maskID} />
        <Gray02 maskID={this.props.maskID} />
        <Nature maskID={this.props.maskID} />
        <Heather maskID={this.props.maskID} />
        <PastelBlue maskID={this.props.maskID} />
        <PastelGreen maskID={this.props.maskID} />
        <PastelOrange maskID={this.props.maskID} />
        <PastelRed maskID={this.props.maskID} />
        <PastelYellow maskID={this.props.maskID} />
        <Pink maskID={this.props.maskID} />
        <Red maskID={this.props.maskID} />
        <White maskID={this.props.maskID} />
      </Selector>
    )
  }
}
