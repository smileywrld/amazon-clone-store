import { cart } from "../../data/cart.js";

import { getProduct } from "../../data/products.js";

export function renderPaymentSummary() {
	let productPriceCents = 0;
	cart.forEach((cartItem) => {
		const product = getProduct(cartItem.productId);
		product.priceCents * cartItem.quantity;
	});
}
