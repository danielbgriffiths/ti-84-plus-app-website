export const overviewCodeString = `
# Babylonian Method
def sqrt(n, tolerance=1e-10):
    if n < 0:
        raise ValueError("Cannot compute the square root of a negative number")
    if n == 0:
        return 0
    x = n / 2
    while True:
        next_x = 0.5 * (x + n / x)
        if abs(x - next_x) < tolerance:
            return next_x
        x = next_x

# Nilakantha Series
def pi(iterations=100000):
    res = 3.0
    sign = 1
    for i in range(2, 2 + 2 * iterations, 2):
        res += sign * 4 / (i * (i + 1) * (i + 2))
        sign *= -1
    return res
`;
