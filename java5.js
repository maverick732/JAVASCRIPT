
const inventory = [ ];
//example: const inventory = [{name: "flour", quantity: 5} ];
    const findProductIndex = product => {
        let productName = product.toLowerCase();
        for(let i = 0; i < inventory.length; i++ ){
            if(productName === inventory[i].name.toLowerCase()){
                return i
            }
        }
        return -1
    };

    const addProduct = product => {
        let productName = product.name.toLowerCase()
        let index = findProductIndex(productName);
        if(index !== -1){
            inventory[index].quantity += product.quantity;
            console.log(`${productName} quantity updated`)
        }else{
             const newProduct = {
                name: product.name.toLowerCase(),
                quantity: product.quantity
             }
            inventory.push(newProduct)
             console.log(`${productName} added to inventory`)
        }
    };

    const removeProduct = (productName, quantityToRemove) => {
        const normalizedName = productName.toLowerCase();
        const productIndex = findProductIndex(normalizedName);

            if (productIndex === -1) {
                console.log(`${normalizedName} not found`);
                return;
        }

        const product = inventory[productIndex];

        if (product.quantity < quantityToRemove) {
                console.log(
                `Not enough ${normalizedName} available, remaining pieces: ${product.quantity}`);
                return;
        }

        product.quantity -= quantityToRemove;

        if (product.quantity === 0) {
            inventory.splice(productIndex, 1);
        }

        console.log(
            `Remaining ${normalizedName} pieces: ${product.quantity}`
        );
};
        console.log(inventory)
    addProduct({name: "FLOUR", quantity: 5})
        console.log(inventory)
    addProduct({name: "FLOUR", quantity: 3})
        console.log(inventory)
        removeProduct("Flour", 5)
        console.log(inventory)
