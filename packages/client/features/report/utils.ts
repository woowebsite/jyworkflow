export const yearLabels = () => {
  const date = new Date()
  const currentYear = date.getFullYear()
  return [
    currentYear - 4,
    currentYear - 3,
    currentYear - 2,
    currentYear - 1,
    currentYear,
  ].map((x) => x.toString())
}

export const monthLabels = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
  '09',
  '10',
  '11',
  '12',
]

export const weekLabels = ['T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'CN']

export const getLabels = (period) => {
  switch (period) {
    case 'year':
      return yearLabels();
    case 'month':
      return monthLabels
    case 'day':
      return weekLabels
  }
}
