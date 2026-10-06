### Lab 2 - Oct 4
#### Topics Covered:
1. HTML Images
	- attributes of `<img>` tag:
		- `src`
		- `alt`
		- `width` and `height`
		- `title` (homework)
2. HTML Tables
	- attributes of `<table>` tag:
		- `border`
		- `colspan` (homework)
		- `rowspan` (homework)
3. HTML Forms
	- Used to create forms where users submit their data to the website
	- i.e. Account creation form (see [Lab 1's example form.html](form.html))
		- May contain input fields for username, password, email, gender, age etc.
		- Each type of input field is created using the `<input>` tag with different `type` attributes (e.g., `text`, `password`, `email`, `number`, `radio`, `checkbox`, etc.)
		- All forms should have a submit button, which is created using the `<input>` tag with `type="submit"` (and optionally a `value` attribute to specify the text on the button). When the user clicks this button, the form data is sent to the server for processing (this will be coverered in the final term).
		- **Form Validation**
			- All user input should be validated to ensure that the data is in the correct format and meets the required criteria before it is submitted. This can be done using HTML5 attributes (e.g., `required`, `pattern`, `min`, `max`, etc.) or JavaScript for more complex validation. <small>*This is arguably the most important aspect of form design and of this course.*</small>
    - attributes of `<form>` tag:
        - `action`
        - `method`
            - **GET vs POST methods**
        - `target` (homework)
        - `enctype` (for final term)
        - `autocomplete` (homework)
        - `novalidate` (homework)
    - input types (new):
        - `number`
        - `radio`
        - `checkbox`
        - `range`
        - `date` (homework)
        - `month` (homework)
        - `file` (homework)
    - `id` and `name` attributes
    - Other form elements:
        - `<select>` tag
        - `<option>` tag
        - `<textarea>` tag
        - `<button>` tag
        - `<datalist>` tag (homework)
