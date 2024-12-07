import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ['content']

  contentTargetConnected () {
    this.open()
  }

  initialize () {
    this.element.addEventListener('cancel', this.handleCancelEvent)
  }

  disconnect () {
    this.element.removeEventListener('cancel', this.handleCancelEvent)
  }

  handleCancelEvent = () => {
    const data = this.contentTarget.dataset
    const syntheticEvent = {
      params: {
        closeUrl: data.dialogCloseUrlParam,
        closeTurboAction: data.dialogCloseTurboActionParam,
        closeTurboFrame: data.dialogCloseTurboFrameParam
      }
    }

    this.close(syntheticEvent)
  }

  open = () => {
    this.element.showModal()
  }

  close = (event) => {
    const { closeUrl, closeTurboAction = 'replace', closeTurboFrame = '_top' } = event.params

    this.element.close()

    if (closeUrl) {
      Turbo.visit(closeUrl, { action: closeTurboAction, frame: closeTurboFrame })
    }
  }
}
