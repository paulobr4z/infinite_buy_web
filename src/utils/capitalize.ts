export const capitalize = (text: string): string => {
  const newCapitalize =
    text.charAt(0).toUpperCase() + text.slice(1).toLowerCase()

  return newCapitalize
}
