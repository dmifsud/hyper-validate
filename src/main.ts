import { applyHyperValidate } from "./hyper-validate";

export interface HyperValidate {
  start: () => void;
  applyToHTML: (content: HTMLElement) => void;
}

declare global {
  interface Window {
    HyperValidate: HyperValidate;
  }
}


// Define the HyperValidate object
const HyperValidate = {
  start: function() {
    applyHyperValidate(document.querySelector('body') as HTMLElement);
  },
  applyToHTML: applyHyperValidate
  // Other methods can be added here
};


(function (global: typeof window | undefined) {

  // Expose the HyperValidate object globally
  if (global) {
    global.HyperValidate = HyperValidate;
  }
})(typeof window !== "undefined" ? window : this);

export default HyperValidate;