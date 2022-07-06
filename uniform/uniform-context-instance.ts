// This file is optional, it just providing an example of how to use the `uniformContextPath` property.
import { Context } from '@uniformdev/context';
import manifest from './context-manifest.json';

// For full customization (such as using plugins), You can create your own Uniform Context instance here
// and pass the path of this file to `uniformContextPath` in the module's config.
const contextInstance = new Context({
  manifest,
});

export default contextInstance;
