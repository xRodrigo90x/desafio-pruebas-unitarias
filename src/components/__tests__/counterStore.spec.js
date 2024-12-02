import { setActivePinia, createPinia } from 'pinia';
import { useCounterStore } from '@/stores/counter';
import { describe, beforeEach, it, expect } from 'vitest';

describe('Counter Store', () => {
  beforeEach(() => {
    // Activar una nueva instancia de Pinia antes de cada prueba
    setActivePinia(createPinia());
  });

  it('debería tener un valor inicial de contador igual a 0', () => {
    const counterStore = useCounterStore();
    expect(counterStore.contador).toBe(0); // Verificar valor inicial
  });

  it('debería incrementar el contador', () => {
    const counterStore = useCounterStore();
    counterStore.incrementar(); // Llamar la función
    expect(counterStore.contador).toBe(1); // Verificar resultado
  });

  it('debería decrementar el contador', () => {
    const counterStore = useCounterStore();
    counterStore.incrementar(); // Incrementar primero
    counterStore.decrementar(); // Luego decrementar
    expect(counterStore.contador).toBe(0); // Verificar resultado
  });
});
