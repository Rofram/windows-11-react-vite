import { makeAutoObservable } from 'mobx'

class MicrosoftEdgeStore {
  search = ''
  input: HTMLInputElement | null = null

  constructor() {
    makeAutoObservable(this, {}, {
      autoBind: true,
    })
  }

  setInputRef(ref: HTMLInputElement | null) {
    this.input = ref
  }

  onMount() {
    document.addEventListener('keyup', this.onKeyUp)
  }

  onUnmount()  {
    document.removeEventListener('keyup', this.onKeyUp)
  }

  onKeyUp(e: KeyboardEvent)  {
    if (e.key === 'Enter') {
      this.search = this.input!.value
      console.log(this.input!.value)
    }
  }
}

export default new MicrosoftEdgeStore()