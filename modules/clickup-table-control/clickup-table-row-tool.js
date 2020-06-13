import Quill from '../../quill'
import { css, getEventComposedPath } from './utils'
import { TableBody } from '../clickup-table/formats'

const ROW_TOOL_ADD_BUTTON_WIDTH = 12
const COL_TOOL_CELL_HEIGHT = 12
const ROW_TOOL_WIDTH = 32
const ROW_TOOL_CELL_WIDTH = 12
const PRIMARY_COLOR = '#35A7ED'

export default class TableRowControl {
  constructor (table, quill, options) {
    if (!table) return null
    this.table = table
    this.quill = quill
    this.options = options
    this.domNode = null

    this.initRowTool()
  }

  initRowTool () {
    const parent = this.quill.root.parentNode
    const tableRect = this.table.getBoundingClientRect()
    const containerRect = parent.getBoundingClientRect()
    const tableViewRect = this.table.parentNode.getBoundingClientRect()

    this.domNode = document.createElement('div')
    this.domNode.classList.add('cu-row-tool')
    this.updateToolCells()
    parent.appendChild(this.domNode)
    css(this.domNode, {
      width: `${ROW_TOOL_WIDTH}px`,
      height: `${tableViewRect.height}px`,
      left: `${tableViewRect.left - containerRect.left + parent.scrollLeft - ROW_TOOL_WIDTH}px`,
      top: `${tableViewRect.top - containerRect.top + parent.scrollTop + 1}px`
    })
  }

  createToolCell () {
    const toolCell = document.createElement('div')
    toolCell.classList.add('cu-row-tool-cell')
    css(toolCell, {
      'width': `${ROW_TOOL_CELL_WIDTH}px`
    })

    const insertRowTopButton = document.createElement('div')
    insertRowTopButton.classList.add('cu-row-tool-cell-add-row-top')
    insertRowTopButton.innerHTML = '+'
    toolCell.appendChild(insertRowTopButton)

    const insertRowBottomButton = document.createElement('div')
    insertRowBottomButton.classList.add('cu-row-tool-cell-add-row-bottom')
    insertRowBottomButton.innerHTML = '+'
    toolCell.appendChild(insertRowBottomButton)

    const dropdownIcon = document.createElement('div')
    dropdownIcon.classList.add('cu-row-tool-cell-dropdown-icon')
    new Array(3).fill(0).forEach(() => {
      const dot = document.createElement('span')
      dot.classList.add('cu-row-tool-cell-dropdown-icon-dot')
      dropdownIcon.appendChild(dot)
    })
    toolCell.appendChild(dropdownIcon)

    return toolCell
  }

  updateToolCells () {
    const tableContainer = Quill.find(this.table)
    const [tableBody] = tableContainer.descendants(TableBody)
    const tableRows = tableBody.children
    const cellsNumber = tableRows.length
    let existCells = Array.from(this.domNode.querySelectorAll('.cu-row-tool-cell'))

    for (let index = 0; index < Math.max(cellsNumber, existCells.length); index++) {
      let row = tableRows.at(index)
      let rowHeight = row.domNode.getBoundingClientRect().height
      // if cell already exist
      let toolCell = null
      if (!existCells[index]) {
        toolCell = this.createToolCell()
        this.domNode.appendChild(toolCell)
        this.addInertRowButtonHanler(toolCell)
        // set tool cell min-width
        css(toolCell, {
          'min-height': `${rowHeight}px`
        })
      } else if (existCells[index] && index >= cellsNumber) {
        existCells[index].remove()
      } else {
        toolCell = existCells[index]
        // set tool cell min-width
        css(toolCell, {
          'min-height': `${rowHeight}px`
        })
      }
    }

    css(this.domNode, {
      height: `${this.table.parentNode.getBoundingClientRect().height}px`
    })
  }

  destroy () {
    this.domNode.remove()
    return null
  }

  addInertRowButtonHanler(cell) {
    const tableContainer = Quill.find(this.table)
    const $buttonTop = cell.querySelector(".cu-row-tool-cell-add-row-top")
    const $buttonBottom = cell.querySelector(".cu-row-tool-cell-add-row-bottom")
    // helpline relative vars
    let tableRect
    let tableViewRect
    let cellRect
    let $helpLine = null

    $buttonTop.addEventListener('click', () => {
      const index = [].indexOf.call(this.domNode.childNodes, cell)
      tableContainer.insertRow(index, false)
      this.updateToolCells()
    }, false)

    $buttonTop.addEventListener('mouseover', () => {
      tableRect = this.table.getBoundingClientRect()
      tableViewRect = this.table.parentNode.getBoundingClientRect()
      cellRect = cell.getBoundingClientRect()

      $helpLine = document.createElement('div')
      css($helpLine, {
        position: 'fixed',
        top: `${cellRect.top - 1}px`,
        left: `${cellRect.left}px`,
        zIndex: '100',
        width: `${Math.min(
          tableViewRect.width + ROW_TOOL_CELL_WIDTH,
          tableRect.width + ROW_TOOL_CELL_WIDTH
        ) - 1}px`,
        height: '2px',
        backgroundColor: PRIMARY_COLOR
      })
      document.body.appendChild($helpLine)
    }, false)

    $buttonTop.addEventListener('mouseout', () => {
      $helpLine.remove()
      $helpLine = null
    })

    $buttonBottom.addEventListener('click', () => {
      const index = [].indexOf.call(this.domNode.childNodes, cell)
      tableContainer.insertRow(index, true)
      this.updateToolCells()
    }, false)

    $buttonBottom.addEventListener('mouseover', () => {
      tableRect = this.table.getBoundingClientRect()
      tableViewRect = this.table.parentNode.getBoundingClientRect()
      cellRect = cell.getBoundingClientRect()

      $helpLine = document.createElement('div')
      css($helpLine, {
        position: 'fixed',
        top: `${cellRect.top + cellRect.height - 1}px`,
        left: `${cellRect.left}px`,
        zIndex: '100',
        width: `${Math.min(
          tableViewRect.width + ROW_TOOL_CELL_WIDTH,
          tableRect.width + ROW_TOOL_CELL_WIDTH
        ) - 1}px`,
        height: '2px',
        backgroundColor: PRIMARY_COLOR
      })
      document.body.appendChild($helpLine)
    }, false)

    $buttonBottom.addEventListener('mouseout', () => {
      $helpLine.remove()
      $helpLine = null
    })
  }

  colToolCells () {
    return Array.from(this.domNode.querySelectorAll('.cu-col-tool-cell'))
  }
}
