import {render, screen} from '@testing-library/react'
import DownloadFilesTable from '../DownloadFilesTable'
import { File } from '../../types/file'

test('renders rows of mock data', () => {
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