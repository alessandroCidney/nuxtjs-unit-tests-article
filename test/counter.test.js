import { createLocalVue, mount } from "@vue/test-utils"
import Counter from '../components/Counter.vue'

describe('Counter component unit tests', () => {
 const localVue = createLocalVue()
  
 it('After click, counter should be incremented', async () => {
  const wrapper = mount(Counter, { localVue }) // renderizando
  const button = wrapper.find('.counterButton') // encontrando botão

  const firstValue = wrapper.vm.counter // guardando valor inicial

  await button.trigger('click') // emitindo evento de clique

  // Verificando se o valor do contador foi incrementado
  expect(wrapper.vm.counter).toBe(firstValue + 1)
 })
})