export const formatCategoryCode = (categoryCode: string): string => {
  const uppercaseFirstLetter = categoryCode.substring(0, 1)
    .toUpperCase()
  const rest = categoryCode.substring(1)
    .replaceAll('AND', '/')
    .replaceAll('_', ' ')
    .toLowerCase()
  return uppercaseFirstLetter + rest
}