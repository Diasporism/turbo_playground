import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  initialize () {
    addEventListener("turbo:before-frame-render", (event) => {
      if (event.detail.newFrame.id === 'dialog') {
        this.open()
      }
    })
  }

  disconnect () {
    this.close()
  }

  open = () => {
    this.element.showModal()
  }

  close = () => {
    this.element.close()
  }
}
