const { handleSubmit } = require('../client/js/formHandler');
const { postFormData } = require('../client/js/postData');
const { updateUI } = require('../client/js/updateUI');

describe("handSubmit function", () => {
	test("handSubmit should be defined", () => {
		expect(handleSubmit).toBeDefined()
	});
})

describe("postFormData function", () => {
	test("postFormData should be defined", () => {
		expect(postFormData).toBeDefined()
	});
})

describe("updateUI function", () => {
	test("updateUI should be defined", () => {
		expect(updateUI).toBeDefined()
	})
})