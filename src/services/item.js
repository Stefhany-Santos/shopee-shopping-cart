// CASOS DE USO

// => criar item com subtotal correto
async function createItem(name, price, quantity) {
    return {
        name,
        price,
        quantity,
        subtotal: () => price * quantity,
    }
}

export default createItem;