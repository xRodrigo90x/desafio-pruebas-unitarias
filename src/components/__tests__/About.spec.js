import { describe, it, expect, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';
import { mount } from '@vue/test-utils'
import AboutView from '@/views/AboutView.vue'

describe('Prueba AboutView', () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it('Renderizar H1', () => {
    const wrapper = mount(AboutView)
    expect(wrapper.text()).toContain('Vista About')
  })
})
