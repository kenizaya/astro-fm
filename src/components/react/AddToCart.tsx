/** @jsxImportSource react */

import React from 'react';
import { addItemToCart } from '../../stores/cart';
import type { ShopItem } from '../../types';

const AddToCart = ({ item }: { item: ShopItem }) => {
	return (
		<button className="big-link" onClick={() => addItemToCart(item)}>
			Add To Cart
		</button>
	);
};

export default AddToCart;
