import Quill from '../../quill'
import { css } from './utils'
import IconManager from './clickup-icon-manager'
import { TableToolSize } from './clickup-table-table-tool'

export default class TableTableDropdown {
  constructor(tool) {
    this.tool = tool
    this.table = tool.table
    this.quill = tool.quill
    this.options = tool.options || {}
    this.domNode = null
    this.iconManager = new IconManager()

    this.initDropdown()

    this.destroyHandler = this.destroy.bind(this)
    setTimeout(() => {
      document.body.addEventListener('click', this.destroyHandler, false)
    }, 0)
  }

  initDropdown() {
    this.domNode = document.createElement('div')
    this.domNode.classList.add('cu-col-tool-dropdown')

    let item, $dropdownItem, $dropdownItemIcon, $dropdownItemText
    Object.keys(TableTableDropdown.defaults).forEach(key => {
      item = TableTableDropdown.defaults[key]
      $dropdownItem = document.createElement('div')
      $dropdownItem.classList.add('cu-col-tool-dropdown-item')
      $dropdownItemIcon = document.createElement('span')
      $dropdownItemIcon.classList.add('cu-col-tool-dropdown-item-icon')
      $dropdownItemIcon.innerHTML = this.iconManager.getSvgIcon(key)
      $dropdownItemText = document.createElement('span')
      $dropdownItemText.classList.add('cu-col-tool-dropdpwn-item-text')
      $dropdownItemText.innerText = item.text
      $dropdownItem.addEventListener('click', item.handler.bind(this), false)

      $dropdownItem.appendChild($dropdownItemIcon)
      $dropdownItem.appendChild($dropdownItemText)
      this.domNode.appendChild($dropdownItem)
    })

    const tableViewRect = this.table.parentNode.getBoundingClientRect()
    css(this.domNode, {
      position: 'fixed',
      top: `${tableViewRect.top - TableToolSize}px`,
      left: `${tableViewRect.left - 1}px`,
      zIndex: '101'
    })

    document.body.appendChild(this.domNode)
  }

  destroy() {
    this.tool.setCellToInActive()
    document.body.removeEventListener('click', this.destroyHandler, false)
    this.domNode.remove()
  }
}

TableTableDropdown.defaults = {
  'delete': {
    text: 'Delete Table',
    handler(e) {
      e.stopPropagation()
      const tableModule = this.quill.getModule('table')
      const tableContainer = Quill.find(this.table)
      this.destroy()
      tableModule.hideTableTools()
      tableContainer.remove()
    }
  }
}