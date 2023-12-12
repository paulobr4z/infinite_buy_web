export const formatCurrency = (n: number | string) => {
  return Number(n).toLocaleString('pt-br', {
    style: 'currency',
    currency: 'BRL',
  })
}
