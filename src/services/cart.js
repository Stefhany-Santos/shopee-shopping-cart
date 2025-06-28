// CASOS DE USO - como consigo usar

// => adicionar item no carrinho
async function addItem(userCart, item) {
    userCart.push(item);
}

// => calcular o total do carrinho
async function calculateTotal(userCart) {
    const result = userCart.reduce((total, item) => total + item.subtotal(), 0);
    console.log("Resultado => ", result);
}

// => deletar item do carrinho
async function deleteItem(userCart, name) {}

// => remover item do carrinho - diminui um item
async function removeItem(userCart, name) {}


export {
    addItem,
    removeItem,
    deleteItem,
    calculateTotal,
}