import { WindowApp } from 'core/window'

export class VsCode extends WindowApp {
  render() {
    return super.render(
      <iframe src='https://www.vscode.dev'></iframe>
    )
  }
}
