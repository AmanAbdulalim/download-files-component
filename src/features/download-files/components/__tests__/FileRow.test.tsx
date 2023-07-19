import {render, screen} from "@testing-library/react"
import { File } from "../../types/file"
import FileRow from "../FileRow"

describe('file statuses', () => {

  test('renders available dot when status is available', () => {
    const mockData: File = {
      name: 'availablefiledownload.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'available'
    }
    
    render(<FileRow file={mockData}/>)
    const availableDot = screen.getByTestId('availableDot')
    expect(availableDot).toBeInTheDocument()
  })

  test('does not render available dot when status is not available', () => {
    const mockData: File = {
      name: 'scheduledfiledownload.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'scheduled'
    }

    render(<FileRow file={mockData}/>)
    const availableDot = screen.queryByTestId('availableDot')
    expect(availableDot).not.toBeInTheDocument()
  })
})