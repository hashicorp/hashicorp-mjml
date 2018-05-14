import { BodyComponent } from 'mjml-core'

export default class ColumnTeaser extends BodyComponent {

  static allowedAttributes = {
    'img-src': 'string',
    'img-alt': 'string'
  }

  getStyles() {
    return {
      column: {}
    }
  }

  headStyle(breakpoint) {
    return (`

      @media only screen and (min-width:${breakpoint}) {
        .column-teaser:nth-child(2n) {
          margin-right: 4%!important;
        }
      }
    `)
  }

  render() {

    // TODO: wrapping renderChildren() in mj-text is likely the result of a bug inside
    // MJML which they say they will resolve 4.1
    return this.renderMJML(`
      <mj-column ${this.htmlAttributes({
        width: '48%',
        'css-class': 'column-teaser'
      })}>
        <mj-image ${this.htmlAttributes({
        src: this.getAttribute('img-src'),
        alt: this.getAttribute('img-alt'),
        'inner-padding': '0px',
        padding: '0px'
      })} />
        <mj-text ${this.htmlAttributes({
        padding: '12px 12px 12px 0'
      })}> ${this.renderChildren()}</mj-text>
      </mj-column> 
    `)
  }
}
