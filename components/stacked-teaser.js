import { BodyComponent } from 'mjml-core'

export default class StackedTeaser extends BodyComponent {

  static allowedAttributes = {
    size: 'enum(small,large)',
    'image-src': 'string',
    href: 'string'
  }

  static defaultAttributes = {
    size: 'small'
  }

  headStyle(breakpoint) {
    return (`
      @media only screen and (max-width:${breakpoint}) {

        .stacked-teaser-column {
          margin: 0 0 12px!important;
          padding: 12px 0!important;
        }

        .stacked-teaser-column * {
          text-align: center!important;
        }

        .stacked-teaser-column > td {
          padding: 12px 0!important;
        }

        .stacked-teaser-column-image {
          padding: 12px 0 0!important;
          margin: 0 auto !important;
          width: 25% !important;
        }
      }
    `)
  }

  renderImage() {
    return `
      <mj-column
        ${this.htmlAttributes({
        width: this.getAttribute('size').toLowerCase() === 'large'
          ? '20%'
          : '12%',
        padding: '16px 0',
        'css-class': 'stacked-teaser-column stacked-teaser-column-image'
      })}
      >
        <mj-image
          ${this.htmlAttributes({
        padding: '10px',
        src: this.getAttribute('image-src'),
        padding: '0px'
      })}
        >
        </mj-image>
    </mj-column>
    `
  }

  renderText() {
    return `
      <mj-column
        ${this.htmlAttributes({
        width: this.getAttribute('size').toLowerCase() === 'large'
          ? '80%'
          : '88%',
        padding: '16px 0',
        'css-class': 'stacked-teaser-column'
      })}
      >
        <mj-text
          ${this.htmlAttributes({
        color: 'black',
        'font-size': '14px',
        padding: '0 0 0 4%'
      })}
        >${this.renderChildren()}
        
        </mj-text>
      </mj-column>
    `
  }

  getStyles() {
    return {
      container: {
        'border-top': '1px solid #ccc',
        padding: '0px',
      }
    }
  }

  render() {
    const href = this.getAttribute('href')
    const content = [
      this.renderMJML(this.renderImage()),
      this.renderMJML(this.renderText())
    ]
    return (
      `
			<div ${this.htmlAttributes({
        style: 'container',
        'css-class': 'stacked-teaser',
        href: 'https://www.hashicorp.com'
      })}>
      ${href ? `<a href="${href}">${content}</a>` : content}
			</div >
  `
    )
  }
}
