import { ComponentInstance } from '@uniformdev/canvas';
import { DefaultNotImplementedComponent } from '@uniformdev/canvas-vue';
import Hero from './Hero.vue';

const mapping = {
  hero: Hero,
};

export const resolveRenderer = (component: ComponentInstance) => {
  return mapping[component.type] ?? DefaultNotImplementedComponent;
};
