function kebabCaseConverter(string) {
  if (string.includes("_")) {
    return "The text contains underscores";
  }
  if (string === "") {
    return "You must provide some text";
  }
  if (/[A-Z]/.test(string)) {
    return "The text contains capital letters";
  }
  const splitString = string.split("-");
  const capitalLetters = splitString.map((word, index) =>
    index
      ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      : word.toLowerCase()
  );
  const camelCaseString = capitalLetters.join("");
  return camelCaseString;
}

describe("Function kebabCaseConverter", () => {
  test("When it receives a string with capital letters it should return The text contains capital letters", () => {
    // Arrange
    const string = "Animal-Letters";

    const expected = "The text contains capital letters";

    // Act
    const result = kebabCaseConverter(string);

    // Assert
    expect(result).toBe(expected);
  });
  test("When it receives a string with underscore it should return 'The text contains underscores", () => {
    // Arrange
    const string = "Animal_Letters";

    const expected = "The text contains underscores";

    // Act
    const result = kebabCaseConverter(string);

    // Assert
    expect(result).toBe(expected);
  });
  test("When it receives an empty string it should return 'You must provide some text' ", () => {
    // Arrange
    const string = "";

    const expected = "You must provide some text";

    // Act
    const result = kebabCaseConverter(string);

    // Assert
    expect(result).toBe(expected);
  });
  test("When it receives a kebab-case string it should return camelCase", () => {
    // Arrange
    const string = "kebab-case";

    const expected = "kebabCase";

    // Act
    const result = kebabCaseConverter(string);

    // Assert
    expect(result).toBe(expected);
  });
});
