import { render, fireEvent } from '@testing-library/vue'
import Counter from '@/components/Counter.vue'
describe('Testing Library', () => {
  test('increment value', async () => {
    const { getByText } = render(Counter)
    getByText('Times clicked: 0')

    const button = getByText('increment')
    await fireEvent.click(button)
    await fireEvent.click(button)
    getByText('Times clicked: 2')
  })
})
