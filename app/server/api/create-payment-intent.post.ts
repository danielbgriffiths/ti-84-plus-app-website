// Third Party Imports
import Stripe from "stripe";

export default defineEventHandler(async (event) => {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_TEST_KEY!);

    const body = await readBody(event);

    if (!body.amount || !body.currency) {
      throw createError({
        statusCode: 400,
        statusMessage: "Bad Request: groupName and scriptNames are required.",
      });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      currency: body.currency,
      amount: body.amount,
      automatic_payment_methods: { enabled: true },
    });

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.error("error: ", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
