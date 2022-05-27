import { makeAutoObservable } from 'mobx'
import { FiBluetooth, FiWifi, FiMoon } from 'react-icons/fi'
import { IoMdAirplane } from 'react-icons/io'
import { IoAccessibility } from 'react-icons/io5'
import { BsBatteryFull } from 'react-icons/bs'

class SystemTrayStore {
  constructor() {
    makeAutoObservable(this)
  }

  iconOptions = {
    color: '#fff',
    size: 18,
  }
  
  buttons = [
    {
      icon: <FiWifi {...this.iconOptions} />,
      title: 'Wi-fi',
      isActive: false,
    },
    {
      icon: <FiBluetooth {...this.iconOptions} />,
      title: 'Bluetooth',
      isActive: false,
    },
    {
      icon: <IoMdAirplane {...this.iconOptions} />,
      title: 'Airplane mode',
      isActive: false,
    },
    {
      icon: <BsBatteryFull {...this.iconOptions} />,
      title: 'Battery saver',
      isActive: false,
    },
    {
      icon: <FiMoon {...this.iconOptions} />,
      title: 'Focus assist',
      isActive: false,
    },
    {
      icon: <IoAccessibility {...this.iconOptions} />,
      title: 'Accessibility',
      isActive: false,
    },
  ]

  toggleButton(button: string) {
    this.buttons.forEach(b => {
      if (b.title === button) {
        b.isActive = !b.isActive
      }
    })
  }

}

export default new SystemTrayStore()