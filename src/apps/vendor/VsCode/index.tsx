import { WindowApp } from '../../../core/window'

export class VsCode extends WindowApp {
  constructor() {
    super()
  }

  render() {
    return super.render(
      <iframe src='https://www.vscode.dev'></iframe>
    )
  }
}
