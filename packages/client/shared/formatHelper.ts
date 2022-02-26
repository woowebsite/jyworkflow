export const formatMoney = (money) => {
  const m = parseFloat(money)

  return isNaN(m)
    ? null
    : m.toLocaleString('vi-VN', {
        style: 'currency',
        currency: 'VND',
      })
}
