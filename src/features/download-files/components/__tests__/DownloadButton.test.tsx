import { render, screen } from "@testing-library/react"
import DownloadButton, {formatAlertText} from "../DownloadButton"
import { File } from "../../types/file"

describe('Button availability', () => {
  test('Download button disabled when no files selected', () => {
    render(<DownloadButton selectedFiles={[]} />)

    const button = screen.getByTestId('downloadButton')
    expect(button).toBeDisabled()
  })
    
  test('Download button enabled when files selected', () => {
    const mockFiles: File[] = [
        {name: 'firstfile.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'available'},
    ]

    render(<DownloadButton selectedFiles={mockFiles} />)

    const button = screen.getByTestId('downloadButton')
    expect(button).toBeEnabled()
  })
})

describe('Window alert', () => {
  test('Expected alert content when files are selected', () => {
    const mockFiles: File[] = [
      {name: 'firstfile.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'available'},
      {name: 'secondfile.txt', device: 'PC', path: '/Users/username/Documents', status: 'available'},
    ]

    const windowAlertMock = jest.spyOn(window,'alert').mockImplementation(); 

    render(<DownloadButton selectedFiles={mockFiles} />)
    const button = screen.getByTestId('downloadButton')

    button.click()

    expect(windowAlertMock).toHaveBeenCalledWith(`Starting download.\n\n${formatAlertText(mockFiles)}`)
  })

  test('Alert not called when no files are selected', () => {
    const windowAlertMock = jest.spyOn(window,'alert').mockImplementation(); 
    render(<DownloadButton selectedFiles={[]} />)
    const button = screen.getByTestId('downloadButton')

    button.click()

    expect(windowAlertMock).not.toHaveBeenCalled()
  })
})