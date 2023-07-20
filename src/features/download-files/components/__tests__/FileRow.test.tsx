import {render, screen} from "@testing-library/react"
import { File } from "../../types/file"
import FileRow from "../FileRow"

// Fixes warning about <tr> not being in <tbody>
const TableWrapper = (fileData: File, isSelected = false) => {
  return (
    <table>
      <tbody>
        <FileRow file={fileData} index={0} isSelected={isSelected} handleOnChange={() => {}}/>
      </tbody>
    </table>
  )
}

describe('available dot', () => {
  test('renders available dot when status is available', () => {
    const mockFile: File = {
      name: 'availablefiledownload.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'available'
    }
    
    render(TableWrapper(mockFile))
    const availableDot = screen.getByTestId('availableDot')
    expect(availableDot).toBeInTheDocument()
  })

  test('does not render available dot when status is not available', () => {
    const mockFile: File = {
      name: 'scheduledfiledownload.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'scheduled'
    }

    render(TableWrapper(mockFile))
    const availableDot = screen.queryByTestId('availableDot')
    expect(availableDot).not.toBeInTheDocument()
  })
})

describe('checkbox', () => {
  test('checkbox is disabled when status is not available', () => {
    const mockFile: File = {
      name: 'scheduledfiledownload.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'scheduled'
    }

    render(TableWrapper(mockFile))
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeDisabled()
  })

  test('checkbox is enabled when status is available', () => {
    const mockFile: File = {
      name: 'availablefiledownload.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'available'
    }

    render(TableWrapper(mockFile))
    const checkbox = screen.getByRole('checkbox')
    expect(checkbox).toBeEnabled()
  })
})