export default defineEventHandler(async () => {
  try {
    return { key: process.env.STRIPE_PUB_TEST_KEY! };
  } catch (error) {
    throw createError({
      statusCode: 500,
      statusMessage: "Internal Server Error",
    });
  }
});
