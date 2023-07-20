import {act, render, screen} from '@testing-library/react'
import DownloadFilesTable from './DownloadFilesTable'
import { File } from '../types/file'

test('renders rows of mock data @integration', () => {
  const mockData: File[] = [
    {name: 'firstfile.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'available'},
    {name: 'secondfile.txt', device: 'PC', path: '/Users/username/Documents', status: 'scheduled'},
  ]

  render(<DownloadFilesTable fileList={mockData} />)
  const firstFile = screen.getByText('firstfile.txt') 
  const secondFile = screen.getByText('secondfile.txt') 
  expect(firstFile).toBeInTheDocument()
  expect(secondFile).toBeInTheDocument()
})

describe('Select all @integration', () => {
  test('toggles files from selected to unselected', () => {
    const mockData: File[] = [
      {name: 'firstfile.txt', device: 'Mac', path: '/Users/username/Downloads', status: 'available'},
      {name: 'secondfile.txt', device: 'PC', path: '/Users/username/Documents', status: 'scheduled'},
      {name: 'thirdfile.txt', device: 'PC', path: '/Users/username/Documents', status: 'available'},
    ]
  
    render(<DownloadFilesTable fileList={mockData} />)
    const selectAllCheckbox = screen.getByTestId('selectAllCheckbox') as HTMLInputElement
  
    // Toggles all available files to selected
    act(() => {
      selectAllCheckbox.click()
    })
    
    const checkboxes = screen.getAllByTestId('rowCheckbox') as HTMLInputElement[]
    expect(checkboxes[0].checked).toBe(true)
    expect(checkboxes[1].checked).toBe(false)
    expect(checkboxes[2].checked).toBe(true)
  
    // Toggles all available files to unselected
    act(() => {
      selectAllCheckbox.click()
    })
  
    expect(checkboxes[0].checked).toBe(false)
    expect(checkboxes[1].checked).toBe(false)
    expect(checkboxes[2].checked).toBe(false)
  })
})
