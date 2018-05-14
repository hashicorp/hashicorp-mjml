import { BodyComponent } from 'mjml-core'
import StackedTeaser from './stacked-teaser'

export default class CalendarTeaser extends StackedTeaser {

  static allowedAttributes = {
    month: 'string',
    href: 'string',
    date: 'number'
  }

  renderCalendar() {
    return `
      <mj-column
        ${this.htmlAttributes({
        width: '12%',
        padding: '16px 0',
        'css-class': 'stacked-teaser-column stacked-teaser-column-image'
      })}
      >
      <mj-text ${this.htmlAttributes({
        color: 'white',
        'container-background-color': 'red',
        padding: '4px 0px',
        align: 'center',
        'font-size': '10px',
        'text-transform': 'uppercase'
      })}>${this.getAttribute('month')}</mj-text>
      <mj-text${this.htmlAttributes({
        color: 'black',
        'container-background-color': '#efefef',
        padding: '8px 0px',
        'font-size': '28px',
        align: 'center',
        'font-weight': '600'
      })}>${this.getAttribute('date')}</mj-text>
    </mj-column>
    `
  }

  render() {
    const href = this.getAttribute('href')
    const content = [
      this.renderMJML(this.renderCalendar()),
      this.renderMJML(this.renderText())
    ]
    return (
      `
			<div ${this.htmlAttributes({
        style: 'container',
        'css-class': 'stacked-teaser'
      })}>
        ${href ? `<a href="${href}">${content}</a>` : content}
  }
			</div >
  `
    )
  }
}
