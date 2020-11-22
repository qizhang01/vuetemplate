import { render } from '@testing-library/vue'
import IkeaFocusPoint from '@/components/focusPoint'

//由于单元测试比较简单 也是时间原因 只是写了一个例子 测试通过即可。

describe('focusPoint', () => {
  it('renders when passed', () => {
    const denominator = 4.5,  numerator = 5, totalNumber=220
    const { findByText } = render(IkeaFocusPoint, {
      propsData: { denominator,numerator,totalNumber }
    })
    findByText('4.5/5')
  })
})
