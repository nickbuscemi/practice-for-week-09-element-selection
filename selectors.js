const select = () => {
    /* Write queries for each of the following */

    /* Section 1 */
    // 1. Get all seeded fruit elements
    // Your code here
    const seededFruits = document.getElementsByClassName("seed");
    
    // 2. Get all seedless fruit elements
    // Your code here
    const seedlessFruits = document.getElementsByClassName("seedless");

    // 3. Get first seedless fruit element
    // Your code here
    const firstSeedlessFruit = seedlessFruits[0];

    /* Section 2 */
    // 4. Get inner span with text "you"
    // Your code here
    const innerSpan = document.querySelector("#wrapper span");

    // 5. Get all children of element "wrapper"
    // Your code here
    const wrapperChildren = document.querySelector("#wrapper").children;

    // 6. Get all odd number list items in the list
    // Your code here
    const oddItems = document.getElementsByClassName('odd');

    // 7. Get all even number list items in the list
    // Your code here
    const allItems = array.from(document.querySelectorAll('#two ol li'));
    const evenItems = allItems.filter((item, i) => i % 2 === 0);
    /* Section 3 */
    // 8. Get all tech companies without a class name
    // Your code here
    const techCompaniesNoClass = document.querySelectorAll('#three p a:not([class])');

    // 9. Get "Amazon" list element
    // Your code here
    const amazonElement = document.querySelector('#three a[href="https://www.amazon.com"]');

    // 10. Get all unicorn list elements (not the image element)
    // Your code here
    const unicornListElements = document.querySelectorAll('#three li:has(.unicorn)');
}

window.onload = select;