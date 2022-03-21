import { WindowsApp } from "../../core/WindowsApp";

export class TesteApp extends WindowsApp {

  constructor() {
    super();
    this.setMinimizeButton(false)
  }

  render() {
    return super.render(<>
      oi
    </>);
  }
}
