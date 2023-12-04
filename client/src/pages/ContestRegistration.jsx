import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import Container from "../components/shared/Container";
import CheckoutForm from "../components/shared/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const ContestRegistration = () => {
  const location = useLocation();
  const contest = location.state?.contest || {};

  return (
    <Container>
      <div className="max-w-2xl  mx-auto text-center">
        <h1 className="text-3xl text-gray-700 font-semibold text-left my-10">{`Please Payment to Confirm Your Registration`}</h1>
        <Elements stripe={stripePromise}>
          <CheckoutForm amount={contest?.entryFee} />
        </Elements>
      </div>
    </Container>
  );
};

export default ContestRegistration;
