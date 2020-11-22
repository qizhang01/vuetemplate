import { render } from '@testing-library/vue'
import IkeaFocusPoint from '@/components/focusPoint'

describe('focusPoint', () => {
  it('renders when passed', () => {
    const denominator = 4.5,  numerator = 5, totalNumber=220
    const { findByText } = render(IkeaFocusPoint, {
      propsData: { denominator,numerator,totalNumber }
    })
    findByText('4.5/5')
  })
})
