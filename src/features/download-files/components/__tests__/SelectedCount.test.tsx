import { render, screen } from "@testing-library/react"
import SelectedCount from "../SelectedCount"

describe('Checkbox state', () => {
  test('unchecked when no files are selected', () => {
    render(
      <SelectedCount 
        selectedCount={0} 
        availableCount={2} 
        handleOnChange={() => {}} // not required for test
      />)

    const checkbox = screen.getByTestId('selectAllCheckbox')

    expect((checkbox as HTMLInputElement).checked).toBe(false)
    expect((checkbox as HTMLInputElement).indeterminate).toBe(false)
  })

  test('indeterminate when some available files are selected', () => {
    render(
      <SelectedCount 
        selectedCount={1} 
        availableCount={2} 
        handleOnChange={() => {}} 
      />)

    const checkbox = screen.getByTestId('selectAllCheckbox')

    expect((checkbox as HTMLInputElement).checked).toBe(true)
    expect((checkbox as HTMLInputElement).indeterminate).toBe(true)
  })

  test('checked when all files are selected', () => {
    render(
      <SelectedCount 
        selectedCount={2} 
        availableCount={2} 
        handleOnChange={() => {}} 
      />)

    const checkbox = screen.getByTestId('selectAllCheckbox')

    expect((checkbox as HTMLInputElement).checked).toBe(true)
    expect((checkbox as HTMLInputElement).indeterminate).toBe(false)
  })
})