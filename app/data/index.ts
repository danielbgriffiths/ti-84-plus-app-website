const REPOSITORY_CODE_URI =
  "https://raw.githubusercontent.com/danielbgriffiths/ti-84-plus-python-applications/main";

export const calculus = "calculus";
export const trig = "trigonometry";
export const pre_calculus = "pre_calculus";

export const limit = "limit";
export const derivative = "derivative";
export const definite_integral = "definite_integral";
export const angular_velocity = "angular_velocity";
export const angular_acceleration = "angular_acceleration";
export const degrees_to_radians = "degrees_to_radians";
export const law_of_sines = "law_of_sines";
export const law_of_cosines = "law_of_cosines";
export const polar_to_rect = "polar_to_rect";
export const radians_to_degrees = "radians_to_degrees";
export const rect_to_polar = "rect_to_polar";
export const triangle_area = "triangle_area";
export const sum_and_difference = "sum_and_difference";
export const greatest_common_divisor = "greatest_common_divisor";
export const least_common_multiple = "least_common_multiple";
export const linear_equation = "linear_equation";
export const matrix_addition = "matrix_addition";
export const matrix_determinant = "matrix_determinant";
export const matrix_multiplication = "matrix_multiplication";
export const matrix_subtraction = "matrix_subtraction";
export const matrix_transposition = "matrix_transposition";
export const polynomial_roots = "polynomial_roots";
export const quadratic_equation = "quadratic_equation";
export const scalar_multiplication = "scalar_multiplication";

export const limit_uri = `${REPOSITORY_CODE_URI}/${calculus}/${limit}`;
export const derivative_uri = `${REPOSITORY_CODE_URI}/${calculus}/${derivative}`;
export const definite_integral_uri = `${REPOSITORY_CODE_URI}/${calculus}/${definite_integral}`;
export const angular_velocity_uri = `${REPOSITORY_CODE_URI}/${trig}/${angular_velocity}`;
export const angular_acceleration_uri = `${REPOSITORY_CODE_URI}/${trig}/${angular_acceleration}`;
export const degrees_to_radians_uri = `${REPOSITORY_CODE_URI}/${trig}/${degrees_to_radians}`;
export const law_of_sines_uri = `${REPOSITORY_CODE_URI}/${trig}/${law_of_sines}`;
export const law_of_cosines_uri = `${REPOSITORY_CODE_URI}/${trig}/${law_of_cosines}`;
export const polar_to_rect_uri = `${REPOSITORY_CODE_URI}/${trig}/${polar_to_rect}`;
export const radians_to_degrees_uri = `${REPOSITORY_CODE_URI}/${trig}/${radians_to_degrees}`;
export const rect_to_polar_uri = `${REPOSITORY_CODE_URI}/${trig}/${rect_to_polar}`;
export const triangle_area_uri = `${REPOSITORY_CODE_URI}/${trig}/${triangle_area}`;
export const sum_and_difference_uri = `${REPOSITORY_CODE_URI}/${trig}/${sum_and_difference}`;
export const greatest_common_divisor_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${greatest_common_divisor}`;
export const least_common_multiple_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${least_common_multiple}`;
export const linear_equation_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${linear_equation}`;
export const matrix_addition_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${matrix_addition}`;
export const matrix_determinant_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${matrix_determinant}`;
export const matrix_multiplication_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${matrix_multiplication}`;
export const matrix_subtraction_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${matrix_subtraction}`;
export const matrix_transposition_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${matrix_transposition}`;
export const polynomial_roots_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${polynomial_roots}`;
export const quadratic_equation_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${quadratic_equation}`;
export const scalar_multiplication_uri = `${REPOSITORY_CODE_URI}/${pre_calculus}/${scalar_multiplication}`;

const calculusGroup = new Map();
calculusGroup.set(limit, {
  name: limit,
  title: "Limit",
  description:
    "This script calculates the limit of a given function as it approaches a specified value of \n" +
    "𝑥\n" +
    "x. It simplifies the process of limit calculation by allowing the user to input a function and the value of \n" +
    "𝑥\n" +
    "x, providing an essential tool for students and professionals dealing with calculus problems.",
  uri: limit_uri,
});
calculusGroup.set(derivative, {
  name: derivative,
  title: "Derivative",
  description:
    "Compute the derivative of a given function at a specific point with ease. By entering a function and the value of \n" +
    "𝑥\n" +
    "x, users can swiftly find the rate of change at that point, providing a crucial tool for calculus problems involving derivatives.",
  uri: derivative_uri,
});
calculusGroup.set(definite_integral, {
  name: definite_integral,
  title: "Definite Integral",
  description:
    "Calculate the definite integral of a function over a specified interval using various numerical methods. Select from left Riemann sum, right Riemann sum, midpoint Riemann sum, trapezoidal rule, or Simpson's rule, and specify the bounds and iteration constraint. This tool is perfect for students and professionals needing precise integral calculations in their calculus work.",
  uri: definite_integral_uri,
});

const trigGroup = new Map();
trigGroup.set(angular_acceleration, {
  name: angular_acceleration,
  title: "Angular Velocity",
  description:
    "Determine the angular acceleration of an object by inputting the change in velocity and the change in time. This script is essential for physics and engineering problems involving rotational motion, providing quick and accurate calculations for angular acceleration.",
  uri: angular_acceleration_uri,
});
trigGroup.set(angular_velocity, {
  name: angular_velocity,
  title: "Angular Acceleration",
  description:
    "Calculate the angular velocity of an object by entering the change in angular position (Δθ) and the change in time (Δt). Ideal for physics and engineering applications, this script helps users quickly find the angular speed, making it a valuable tool for studying rotational motion.",
  uri: angular_velocity_uri,
});
trigGroup.set(degrees_to_radians, {
  name: degrees_to_radians,
  title: "Degrees to Radians",
  description:
    "Convert angles from degrees to radians effortlessly by entering the angle in degrees. This script is particularly useful in trigonometry and physics, where angle measurements often need to be converted for various calculations and analyses.",
  uri: degrees_to_radians_uri,
});
trigGroup.set(law_of_sines, {
  name: law_of_sines,
  title: "Law of Sines",
  description:
    "Utilize the Law of Sines to solve for unknown angles or sides in a triangle. Depending on the variant, input either two angles and one side, or one angle and two sides. This script supports both degrees and radians, making it a versatile tool for solving various trigonometric problems in geometry and physics.",
  uri: law_of_sines_uri,
});
trigGroup.set(law_of_cosines, {
  name: law_of_cosines,
  title: "Law of Cosines",
  description:
    "Apply the Law of Cosines to solve for the unknown side of a triangle given two sides and the included angle. Input the lengths of sides A and B, and the angle C in degrees to quickly find the third side, making this script invaluable for solving complex trigonometric problems in geometry and physics.",
  uri: law_of_cosines_uri,
});
trigGroup.set(polar_to_rect, {
  name: polar_to_rect,
  title: "Polar to Rectangular",
  description:
    "Convert polar coordinates to rectangular coordinates with ease. By entering the radius and angle \n" +
    "𝜃\n" +
    "θ, users can quickly obtain the corresponding \n" +
    "𝑥\n" +
    "x and \n" +
    "𝑦\n" +
    "y coordinates, making this script essential for applications in trigonometry and physics where coordinate transformations are required.",
  uri: polar_to_rect_uri,
});
trigGroup.set(radians_to_degrees, {
  name: radians_to_degrees,
  title: "Radians to Degrees",
  description:
    "Effortlessly convert angles from radians to degrees by inputting the angle in radians. This script is particularly useful in trigonometry and physics, where converting between these units is often necessary for various calculations and analyses.",
  uri: radians_to_degrees_uri,
});
trigGroup.set(rect_to_polar, {
  name: rect_to_polar,
  title: "Rectangular to Polar",
  description:
    "Convert rectangular coordinates to polar coordinates by entering the \n" +
    "𝑥\n" +
    "x and \n" +
    "𝑦\n" +
    "y values. This script provides the radius and angle \n" +
    "𝜃\n" +
    "θ, making it a valuable tool for trigonometry and physics problems that require coordinate transformations.",
  uri: rect_to_polar_uri,
});
trigGroup.set(triangle_area, {
  name: triangle_area,
  title: "Triangle Area",
  description:
    "Calculate the area of a triangle using various methods based on the provided solution type: base-height, side-angle-side (SAS), Heron's formula, or coordinates. Input the appropriate values for each method, such as base and height, two sides and the included angle, all three sides, or the coordinates of the triangle's vertices. This versatile script is ideal for solving geometry problems involving the area of triangles.",
  uri: triangle_area_uri,
});
trigGroup.set(sum_and_difference, {
  name: sum_and_difference,
  title: "Sum and Difference",
  description:
    "Calculate the sum or difference of trigonometric functions for two given angles. Input the trigonometric function, the operator, and the angles (in degrees). The script converts the angles to radians and performs the necessary calculation, making it an essential tool for solving trigonometric identities and equations efficiently.",
  uri: sum_and_difference_uri,
});

const preCalculusGroup = new Map();
preCalculusGroup.set(greatest_common_divisor, {
  name: greatest_common_divisor,
  title: "Greatest Common Divisor",
  description:
    "Determine the greatest common divisor (GCD) of two numbers by entering the values. This script is particularly useful in pre-calculus and number theory, simplifying the process of finding the largest number that divides both inputs without leaving a remainder.",
  uri: greatest_common_divisor_uri,
});
preCalculusGroup.set(least_common_multiple, {
  name: least_common_multiple,
  title: "Least Common Multiple",
  description:
    "Calculate the least common multiple (LCM) of two numbers by entering the coefficients \n" +
    "𝑎\n" +
    "a and \n" +
    "𝑏\n" +
    "b. This script is invaluable in pre-calculus and number theory, helping users find the smallest multiple that is evenly divisible by both input values.",
  uri: least_common_multiple_uri,
});
preCalculusGroup.set(linear_equation, {
  name: linear_equation,
  title: "Linear Equation",
  description:
    "Solve linear equations in the form \n" +
    "𝑎\n" +
    "𝑥\n" +
    "+\n" +
    "𝑏\n" +
    "=\n" +
    "0\n" +
    "ax+b=0 by entering the coefficients \n" +
    "𝑎\n" +
    "a and \n" +
    "𝑏\n" +
    "b. This script provides a quick and straightforward solution to finding the value of \n" +
    "𝑥\n" +
    "x, making it an essential tool for students and professionals working with algebraic equations.",
  uri: linear_equation_uri,
});
preCalculusGroup.set(matrix_addition, {
  name: matrix_addition,
  title: "Matrix Addition",
  description:
    "Perform matrix addition by inputting two matrices. This script simplifies the process of adding matrices, displaying the resulting matrix clearly. It's an essential tool for students and professionals working with linear algebra, helping to efficiently handle matrix operations.",
  uri: matrix_addition_uri,
});
preCalculusGroup.set(matrix_determinant, {
  name: matrix_determinant,
  title: "Matrix Determinant",
  description:
    "Calculate the determinant of a matrix by inputting the matrix values. This script streamlines the process of finding the determinant, which is crucial for solving linear equations, analyzing matrix properties, and various applications in linear algebra.",
  uri: matrix_determinant_uri,
});
preCalculusGroup.set(matrix_multiplication, {
  name: matrix_multiplication,
  title: "Matrix Multiplication",
  description:
    "Perform matrix multiplication by inputting two matrices. This script facilitates the multiplication process and displays the resulting matrix, making it an invaluable tool for students and professionals dealing with linear algebra and matrix operations.",
  uri: matrix_multiplication_uri,
});
preCalculusGroup.set(matrix_subtraction, {
  name: matrix_subtraction,
  title: "Matrix Subtraction",
  description:
    "Conduct matrix subtraction by entering two matrices. This script simplifies the subtraction process and presents the resulting matrix clearly, making it essential for those working with linear algebra and matrix operations.",
  uri: matrix_subtraction_uri,
});
preCalculusGroup.set(matrix_transposition, {
  name: matrix_transposition,
  title: "Matrix Transposition",
  description:
    "Transpose a matrix by inputting its values. This script efficiently swaps rows and columns of the given matrix, providing a clear and transposed result. It's an essential tool for linear algebra, aiding in various mathematical and computational applications.",
  uri: matrix_transposition_uri,
});
preCalculusGroup.set(polynomial_roots, {
  name: polynomial_roots,
  title: "Polynomial Roots",
  description:
    "Find the roots of a polynomial by entering its degree and coefficients. This script simplifies the process of solving polynomial equations, providing the roots quickly and accurately. It's an invaluable tool for students and professionals dealing with algebraic equations and polynomial functions.",
  uri: polynomial_roots_uri,
});
preCalculusGroup.set(quadratic_equation, {
  name: quadratic_equation,
  title: "Quadratic Equation",
  description:
    "Solve quadratic equations in the form \n" +
    "𝑎\n" +
    "𝑥\n" +
    "2\n" +
    "+\n" +
    "𝑏\n" +
    "𝑥\n" +
    "+\n" +
    "𝑐\n" +
    "=\n" +
    "0\n" +
    "ax \n" +
    "2\n" +
    " +bx+c=0 by entering the coefficients \n" +
    "𝑎\n" +
    "a, \n" +
    "𝑏\n" +
    "b, and \n" +
    "𝑐\n" +
    "c. This script provides the roots of the quadratic equation, making it an essential tool for students and professionals working with algebraic equations.",
  uri: quadratic_equation_uri,
});
preCalculusGroup.set(scalar_multiplication, {
  name: scalar_multiplication,
  title: "Scalar Multiplication",
  description:
    "Perform scalar multiplication on a matrix by entering a scalar value and the matrix. This script multiplies each element of the matrix by the scalar, providing the resulting matrix. It's a crucial tool for students and professionals working with linear algebra and matrix operations.",
  uri: scalar_multiplication_uri,
});

export { calculusGroup, trigGroup, preCalculusGroup };
