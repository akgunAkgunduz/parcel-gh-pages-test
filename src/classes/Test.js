export default class Test {
  constructor(message, target) {
    this.message = message
    this.target = target
  }

  init() {
    this.target.innerHTML = this.message
  }
}