export default function snakeToCamel<S extends object, C extends object>(
  obj: S,
): C {
  return Object.keys(obj).reduce((acc, key) => {
    const camelKey = key.replace(/([-_][a-z])/gi, ($1) => {
      return $1.toUpperCase().replace("-", "").replace("_", "");
    });

    const value = (obj as any)[key];
    if (value !== null && typeof value === "object") {
      console.log("value:", value);
      (acc as any)[camelKey] = snakeToCamel(value as S);
    } else {
      (acc as any)[camelKey] = value;
    }

    return acc;
  }, {} as C);
}
