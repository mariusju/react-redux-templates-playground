import * as actionTypes from './../src/actionTypes';
import Issue from './../src/components/Issue.js';

describe('test', () => {

	it('should pass', () => {
		expect(true).toBeTruthy();
	});

	it('should import actionTypes', () => {
		expect(actionTypes).toBeDefined();
	})

	it('should import jsx component', () => {
		expect(Issue).toBeDefined();
	})


})