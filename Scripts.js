document.addEventListener('DOMContentLoaded', () => {
    const menuOptions = [
        { name: 'X-Salada', price: 30, vegan: false, src: './img/xsalada.jpeg' },
        { name: 'X-Bacon', price: 34, vegan: false, src: './img/xbacon.png' },
        { name: 'X-Bacon Egg', price: 39, vegan: false, src: './img/bacon-egg.png' },
        { name: 'Monstruoso', price: 50, vegan: false, src: './img/monstruoso.png' },
        { name: 'Big Vegano', price: 55, vegan: true, src: './img/xvegan.png' },
        { name: 'X-Vegan', price: 45, vegan: true, src: './img/monstruoso-vegan.png' },
    ];

    const list = document.getElementById('menu-list');
    const buttonShowAll = document.querySelector('.show-all');
    const buttonMapAll = document.querySelector('.map-all');
    const sumAll = document.querySelector('.sum-all')


    function showAll(productsArray) {
        let myLi = '';
        productsArray.forEach((product) => {
            myLi += `
                <li>
                    <img src="${product.src}">
                    <p>${product.name}</p>
                    <p class="item-price">R$ ${product.price.toFixed(2)}</p>
                </li>
            `;
        });
        list.innerHTML = myLi;
    }

    function mapAllItems() {
        const newPrices = menuOptions.map((product) => ({
            ...product, // Spread operator
            price: product.price * 0.9 // dar 10% de desconto

        }
        ))
        showAll(newPrices)
    }


    function sumAllItems() {
        const totalValue = menuOptions.reduce((acc, curr) => acc + curr.price, 0)

        list.innerHTML =
            `
        <li>
                    <p> Your total value is R$ ${totalValue}</p>
                </li>
        `
    }

    buttonShowAll.addEventListener('click', () => showAll(menuOptions));
    buttonMapAll.addEventListener('click', mapAllItems);
    sumAll.addEventListener('click', sumAllItems);
});
