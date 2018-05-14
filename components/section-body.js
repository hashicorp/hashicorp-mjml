import { BodyComponent } from 'mjml-core'

export default class SectionBody extends BodyComponent {
  static allowedAttributes = {
    margin: 'px',
    padding: 'px',
    'background-color': 'color',
    width: 'px',
    border: 'boolean'
  }

  static defaultAttributes = {
    margin: '0 auto 20px',
    padding: '0 25px 20px',
    'background-color': 'white',
    border: false
  }

  getStyles() {
    return {
      container: {
        padding: this.getAttribute('padding'),
        'background-color': this.getAttribute('background-color'),
        width: this.getAttribute('width'),
        margin: this.getAttribute('margin'),
        overflow: 'hidden',
        'border-top': this.getAttribute('border') ? '7px solid #1563FF' : '0px'
      }
    }
  }

  render() {
    return `
      <div ${this.htmlAttributes({ style: 'container' })}>
        ${this.renderChildren()}
      </div>
		`
  }
}
