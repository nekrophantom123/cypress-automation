import { faker } from '@faker-js/faker'
const delay = { delay : 100 };
const force = { force : true };
const multiple = { multiple: true };


describe('Test Reseller', () => {
    it('visit test marketport', () => {
        cy.visit('https://test.marketport.io')
    })
    
    it('login marketport Relller', () => {
        
        // enter email
        cy.get('input[name="user"]').type('3pl2@gmail.com')
        
        // enter password
        cy.get('input[name="password"]').type('12345678')

        // click button login
        cy.get('.blue-gradient-background').click()
    })

    it('add product Direct', () => {

        // click button add product
        cy.get('.Sidebar_findButton__3cp42').click(force)
        
        // upload gambar
        const random = Math.ceil(Math.random() * 13 );
        const file = `${random}.jpg`
        cy.get('input[name="pictures"]').attachFile(file)

        // add product name
        const productName = faker.commerce.productName()
        cy.get('input[name="product_name"]').type(productName, force)
        
        // scroll down
        cy.scrollTo(0, 500)

        // click category MP
        cy.get('.AddProduct_subDetailList__376HR').click(force)
        cy.get('[style="border-radius: 10px 0px 0px 10px;"] > :nth-child(1)').click(force)
        cy.get('.AddProduct_categoryList__1M2Bj > :nth-child(2) > :nth-child(1)').click(force)
        cy.get('[style="border-radius: 0px 10px 10px 0px;"] > :nth-child(1) > .theme-primary-color').click(force)
        
        // type description
        const productDescription = faker.commerce.productDescription()
        cy.get('#description').type(productDescription, force)

        // scroll down
        cy.scrollTo(0, 1000)

        // add price Wholesale
        const productPriceWH = faker.commerce.price(2000, 2100, 0)
        cy.get('.wholesale-price > .input-group > .text-input').type(productPriceWH, force)

        // add SKU
        const randomNum = Math.ceil(Math.random() * 10000000001);
        const productSKU = `sku-${randomNum}`
        cy.get('input[name="sku"]').type(productSKU, force)

        // scroll down
        cy.scrollTo(0, 1500)

        // add Warehouse
        cy.get('.MultiSelect_inputField__eKJ97').click(force)
        cy.get('.MultiSelect_dropdownItem__3YLPa').click(force)

        // add QTY
        const qty =  Math.ceil(Math.random() * 100);
        cy.get('input[name="qty_in_warehouse"]').type(qty, force)

        // add dimensions & weight
        const dimensions = Math.ceil(Math.random() * 11)
        const weight = Math.ceil(Math.random() * 101)
        cy.get(':nth-child(1) > .input-group > .text-input').clear().type(dimensions, force)
        cy.get('.col-md-9 > .row > :nth-child(2) > .input-group > .text-input').clear().type(dimensions, force)
        cy.get('.col-md-9 > .row > :nth-child(3) > .input-group > .text-input').clear().type(dimensions,force)
        cy.get(':nth-child(4) > .input-group > .text-input').clear().type(weight, force)

        // scroll down
        cy.scrollTo(0, 2000)

        // Sales channel 
        // lazada
        cy.get(':nth-child(2) > .py-2 > .col-lg-9 > .d-flex > .form-check > #marketport-fee').click()
        cy.get(':nth-child(2) > .py-2 > .col-lg-9 > .d-flex > :nth-child(2) > :nth-child(1) > .AddProduct_subDetailList__376HR').click()
        cy.get(':nth-child(2) > .py-2 > .col-lg-9 > .d-flex > :nth-child(2) > :nth-child(1) > .AddProduct_categoryListWrapperSalesChannel__RmW5t > .AddProduct_categoryList__1M2Bj > .react-horizontal-scrolling-menu--wrapper > .react-horizontal-scrolling-menu--scroll-container > .react-horizontal-scrolling-menu--item > .AddProduct_catLevelWrapperSalesChannel__2Bz9d > :nth-child(16)').click(force)
        cy.get('[data-key="item2lazada"] > .AddProduct_catLevelWrapperSalesChannel__2Bz9d > :nth-child(4)').click()
        // mandatory attribute
        cy.get('[data-key="item3lazada"] > .AddProduct_catLevelWrapperSalesChannel__2Bz9d > :nth-child(2)').click()
        cy.get('.css-1hwfws3').type('No Warranty{enter}')

        // tokopedia
        cy.get(':nth-child(3) > .py-2 > .col-lg-9 > .d-flex > .form-check > #marketport-fee').click()
        cy.get(':nth-child(3) > .py-2 > .col-lg-9 > .d-flex > :nth-child(2) > :nth-child(1) > .AddProduct_subDetailList__376HR').click()
        cy.get('[data-key="item1shopee"] > .AddProduct_catLevelWrapperSalesChannel__2Bz9d > :nth-child(31) > .theme-primary-color').click()
        cy.get('[data-key="item2shopee"] > .AddProduct_catLevelWrapperSalesChannel__2Bz9d > :nth-child(12)').click()
        // mandatory attribute
        cy.get(':nth-child(3) > .py-2 > .col-lg-9 > .flex-column > :nth-child(2) > :nth-child(4) > .col-md-8 > .form-group > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click().type('14 Inches{enter}')
        cy.get(':nth-child(5) > .col-md-8 > .form-group > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click().type('Gaming{enter}')
        cy.get(':nth-child(6) > .col-md-8 > .form-group > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click().type('12 Months{enter}')
        cy.get(':nth-child(7) > .col-md-8 > .form-group > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').click().type('Supplier Warranty{enter}')

        // tokopedia
        cy.get(':nth-child(4) > .py-2 > .col-lg-9 > .d-flex > .form-check > #marketport-fee').click()
        cy.get(':nth-child(4) > .py-2 > .col-lg-9 > .d-flex > :nth-child(2) > :nth-child(1) > .AddProduct_subDetailList__376HR').click()
        cy.get(':nth-child(4) > .py-2 > .col-lg-9 > .d-flex > :nth-child(2) > :nth-child(1) > .AddProduct_categoryListWrapperSalesChannel__RmW5t > .AddProduct_categoryList__1M2Bj > .react-horizontal-scrolling-menu--wrapper > .react-horizontal-scrolling-menu--scroll-container > .react-horizontal-scrolling-menu--item > .AddProduct_catLevelWrapperSalesChannel__2Bz9d > :nth-child(4)').click()
        cy.get('[data-key="item2tokopedia"] > .AddProduct_catLevelWrapperSalesChannel__2Bz9d > :nth-child(2) > .theme-primary-color').click()
        cy.get('[data-key="item3tokopedia"] > .AddProduct_catLevelWrapperSalesChannel__2Bz9d > :nth-child(2)').click()

        // click button add variant
        cy.get('#add-variant-button').click()
        // set variant
        cy.wait(3000)
        cy.get(':nth-child(2) > [style="width: 38.5%;"] > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type('Color{enter}')
        cy.get(':nth-child(3) > [style="width: 38.5%;"] > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type('colour{enter}')
        cy.get(':nth-child(4) > [style="width: 38.5%;"] > .css-2b097c-container > .css-yk16xz-control > .css-1hwfws3').type('Color{enter}')
        cy.get('.mp-button').click()

        // add variant
        // upload gambar
        const random1 = Math.ceil(Math.random() * 13 );
        const file1 = `${random1}.jpg`
        cy.get('#variant-image-file').attachFile(file1)
        // add variant name
        cy.get(':nth-child(1) > .sku-variant > .text-input').type(productName, force)
        // sku variant
        const randomNum2 = Math.ceil(Math.random() * 10000000001);
        const productSKU2 = `sku-${randomNum2}`
        cy.get(':nth-child(2) > .sku-variant > .text-input').type(productSKU2, force)
        // add location
        cy.get('.MultiSelect_inputField__eKJ97').click()
        cy.get('.MultiSelect_dropdownItem__3YLPa').click()
        // add stock
        cy.get('.d-flex > :nth-child(2) > .text-input').clear().type(qty, force)
        
        // set Lazada
        // set color lazada
        cy.get('.attribute-variant > .form-group > .form-control').select('Black')
       
        // set Shopee
        cy.get('.false.me-3').click()
        // set color shopee
        cy.get('.attribute-variant > .form-group > .form-control').select('Absolute Zero')

        // set Tokopedia
        cy.get('.AddProduct_salesChannelsTab__3Lo0p > :nth-child(3)').click()
        // set color tokopedia
        cy.get('.attribute-variant > .form-group > .form-control').select('White')

        // set price lazada | shopee | Tokopedia
        const productPriceVariant1 = faker.commerce.price(2150, 2250, 0)
        cy.get('.flex-grow-1 > :nth-child(2) > :nth-child(1) > .input-group > .text-input').clear().type(productPriceVariant1, force)

        // click add variant
        cy.get('.green-background').click()
        
        // add variant 2 
        cy.get('.mp-text-primary').click()
        
        // upload gambar
        
        const random2 = Math.ceil(Math.random() * 13 );
        const file2 = `${random2}.jpg`
        cy.get('#variant-image-file').attachFile(file2)
        // add varian name 2
        cy.get(':nth-child(1) > .flex-grow-1 > .flex-wrap > :nth-child(1) > .sku-variant > .text-input').type(productName, force)
        // add sku
        
        const randomNum1 = Math.ceil(Math.random() * 10000000001);
        const productSKUVar1 = `sku-${randomNum1}`
        cy.get(':nth-child(1) > .flex-grow-1 > .flex-wrap > :nth-child(2) > .sku-variant > .text-input').type(productSKUVar1, force)
        // select location
        cy.get('.w-75 > .MultiSelect_MultiSelectWrapper__1j1NE > .MultiSelect_inputField__eKJ97').click()   
        cy.get('.w-75 > .MultiSelect_MultiSelectWrapper__1j1NE > .MultiSelect_dropdownMenu__2t-0_ > .MultiSelect_dropdownItem__3YLPa').click()
        // add stock
        cy.get('.col-lg-9 > .d-flex > :nth-child(2) > .text-input').clear().type(qty, force)
        
        // set lazada
        // set color Lazada
        cy.get('.bg-white > .variant-card > .lazada-variant-card > .d-flex > .attribute-variant > .form-group > .form-control').select('GOLD')
       
        // set Shopee
        cy.get('.bg-white > .variant-card > .AddProduct_salesChannelsTab__3Lo0p > .false.me-3').click()
        // set color Shopee
        cy.get('.shopee-variant-card > .d-flex > .attribute-variant > .form-group > .form-control').select('Duke blue')

        // set Tokopedia
        cy.get('.bg-white > .variant-card > .AddProduct_salesChannelsTab__3Lo0p > :nth-child(3)').click()
        // set color Tokopedia
        cy.get('.tokopedia-variant-card > .d-flex > .attribute-variant > .form-group > .form-control').select('Green')
       
        // set price lazada | shopee | tokopedia
        const productPriceVariant2 = faker.commerce.price(2250, 2350, 0)
        cy.get(':nth-child(1) > .flex-grow-1 > :nth-child(2) > :nth-child(1) > .input-group > .text-input').clear().type(productPriceVariant2, force)

        // click add variant
        cy.get('.green-background').click()
       
        // click publish product
        cy.get('.AddProduct_submitProductButton__1LAJ-').click()
    })

})