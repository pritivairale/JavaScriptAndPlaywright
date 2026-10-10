/* Hard Assertion :
If an assertion is fails, test execution is stop immediately.
and Remening line will not execute. 
*/ 

import{test, expect} from '@playwright/test';
test(" Hard Assertion" , async ({page}) => {
    expect(5 + 5).toBe(10);
    expect(5 + 6).toBe(11);

    // This assertion fails
    expect(5 + 7).toBe(11);

    // below assertion is not execute because the previous assertion failed

    expect(5 + 5).toBe(10);
});

/* SOFT ASSERTION :
If an assertion fails, test execution continues.
Playwright collects the failure and report it at the end of the test. */

test.only(" Soft Assertion" , async ({page}) => {
    expect.soft(5 + 5).toBe(10);
    expect.soft(5 + 6).toBe(11);

    // This assertion fails // but execution continue
    expect.soft(5 + 7).toBe(11);

    // below assertion is execute 

    expect.soft(5 + 5).toBe(10);
    console.log("test execution continues after soft assertion failure");
});

