# HyperValidate

**HyperValidate** is a lightweight client-side form validation library that integrates seamlessly with HTML5 built-in validation. It provides a simple, declarative way to enhance form validation using custom attributes.

## Features

- Declarative form validation using custom HTML attributes
- Seamless integration with HTML5 built-in validation
- Flexible configuration for error messages and styling
- Supports multiple events for triggering validation

## Installation

You can install **HyperValidate** from npm or include it directly in your HTML.

### Using npm

To install **HyperValidate** as an npm package, run:

```bash
npm install hyper-validate
```

### Using a Script Tag
If you prefer to use a script tag, include the IIFE build of HyperValidate:

```html
<script src="path-to-hypervalidate.iife.js"></script>
```

## Usage
### As a Module
If installed via npm, you can import and use HyperValidate in your JavaScript or TypeScript files:

```typescript
import HyperValidate from 'hypervalidate';

// Initialize HyperValidate
HyperValidate.start();
```


### As a Script Tag
If included via a script tag, you can access **HyperValidate** globally:

```html
<script src="path-to-hypervalidate.iife.js"></script>
<script>
  // Initialize HyperValidate
  HyperValidate.start();
</script>
```

## Configuration
**HyperValidate** uses custom HTML attributes to configure form validation. Here’s how to use it:
### Example
```html
<form>
  <label for="email">Email:</label>
  <input type="email" id="email" required
         hv-invalid-target="#email-error"
         hv-invalid-class="border-red-500 text-red-600"
         hv-invalid-events="blur keyup"/>
  <p id="email-error" class="text-red-600 text-sm"></p>
</form>
```

### Attributes

- hv-invalid-target: Specifies the selector for the element where the error message will be displayed.
- hv-invalid-class: Specifies the CSS classes to apply when the field is invalid.
- hv-invalid-events: Specifies the events that will trigger validation (e.g., blur, keyup).

## API

### `HyperValidate.start()`
Initializes **HyperValidate** and applies validation to all applicable forms on the page.

### `HyperValidate.applyToHTML(element: HTMLElement)`

Applies **HyperValidate** validation to a specific HTML element. Useful for dynamically added forms.

## Use with HTMX

```typescript
import htmx from 'htmx.org';
import HyperValidate from 'hyper-validate';

htmx.onLoad((content: HTMLElement) => {
    HyperValidate.applyToHTML(content);
});
```

## Contributing

Contributions are welcome! Please submit a pull request or open an issue for any bugs or feature requests.

## License
**HyperValidate** is open-source and available under the [MIT License](https://opensource.org/license/mit).