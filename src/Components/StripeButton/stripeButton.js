import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({
	clearCart,
	className,
	ComponentClass,
	children,
	price,
}) => {
	const priceStripe = price * 100;
	const publishableKey =
		"pk_test_51GwXBaESWShgg73pFRkrCtHRwWR3bnvlnnkQ3t9YHKiios9m0cwSIz1OuoWA0Ytg8SvFDyk728n1EeEUF4xNDtwe00ieNA2jmc";
	const onToken = (token) => {
		console.log(token);
		clearCart();
		alert("Payment successful");
	};
	return (
		<StripeCheckout
			className={className}
			ComponentClass={ComponentClass}
			label="Pay Now"
			panelLabel="Pay Now"
			name="CROWN Clothing Ltd"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceStripe}
			token={onToken}
			stripeKey={publishableKey}
		>
			{children}
		</StripeCheckout>
	);
};

export default StripeButton;
