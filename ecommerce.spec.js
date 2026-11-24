
const { test, expect } = require('@playwright/test');

test.describe('E-commerce Application Automation', () => {

    // Test 1: Open application
    test('Verify application homepage', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await expect(page).toHaveTitle('Swag Labs');

        console.log('Homepage opened successfully');
    });


    // Test 2: Login with valid credentials
    test('Verify successful login', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');

        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();

        await expect(page).toHaveURL(/inventory/);

        await expect(page.locator('.title'))
            .toHaveText('Products');

        console.log('Login successful');
    });


    // Test 3: Login with invalid password
    test('Verify invalid password error', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');

        await page.locator('#password').fill('wrong_password');

        await page.locator('#login-button').click();

        await expect(page.locator('[data-test="error"]'))
            .toContainText('Username and password do not match');

        console.log('Invalid password validation successful');
    });


    // Test 4: Verify locked user login
    test('Verify locked user account', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('locked_out_user');

        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();

        await expect(page.locator('[data-test="error"]'))
            .toContainText('Sorry, this user has been locked out');

        console.log('Locked account validation successful');
    });


    // Test 5: Verify product list
    test('Verify products are displayed', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');

        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();

        const products = page.locator('.inventory_item');

        await expect(products).toHaveCount(6);

        console.log('Six products displayed successfully');
    });


    // Test 6: Add product to cart
    test('Add product to shopping cart', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');

        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        await expect(page.locator('.shopping_cart_badge'))
            .toHaveText('1');

        console.log('Product added to cart');
    });


    // Test 7: Remove product from cart
    test('Remove product from shopping cart', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');

        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        await page.locator('[data-test="remove-sauce-labs-backpack"]').click();

        await expect(page.locator('.shopping_cart_badge'))
            .toHaveCount(0);

        console.log('Product removed from cart');
    });


    // Test 8: Open shopping cart
    test('Verify shopping cart page', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');

        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        await page.locator('.shopping_cart_link').click();

        await expect(page).toHaveURL(/cart/);

        await expect(page.locator('.inventory_item_name'))
            .toHaveText('Sauce Labs Backpack');

        console.log('Shopping cart verified');
    });


    // Test 9: Complete checkout
    test('Complete checkout successfully', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');

        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();

        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();

        await page.locator('.shopping_cart_link').click();

        await page.locator('[data-test="checkout"]').click();

        await page.locator('[data-test="firstName"]').fill('Ravi');

        await page.locator('[data-test="lastName"]').fill('Puppala');

        await page.locator('[data-test="postalCode"]').fill('500001');

        await page.locator('[data-test="continue"]').click();

        await expect(page.locator('.title'))
            .toHaveText('Checkout: Overview');

        await page.locator('[data-test="finish"]').click();

        await expect(page.locator('.complete-header'))
            .toHaveText('Thank you for your order!');

        console.log('Checkout completed successfully');
    });


    // Test 10: Logout
    test('Verify logout functionality', async ({ page }) => {

        await page.goto('https://www.saucedemo.com/');

        await page.locator('#user-name').fill('standard_user');

        await page.locator('#password').fill('secret_sauce');

        await page.locator('#login-button').click();

        await page.locator('#react-burger-menu-btn').click();

        await page.locator('#logout_sidebar_link').click();

        await expect(page).toHaveURL('https://www.saucedemo.com/');

        await expect(page.locator('#login-button')).toBeVisible();

        console.log('Logout successful');
    });

});
