export const AFFILIATE_LINKS = {
  gusto: {
    url: process.env.NEXT_PUBLIC_GUSTO_LINK || 'https://gusto.com/?utm_source=payrollpicker',
    name: 'Gusto',
    network: 'PartnerStack',
  },
  onpay: {
    url: process.env.NEXT_PUBLIC_ONPAY_LINK || 'https://onpay.com/?utm_source=payrollpicker',
    name: 'OnPay',
    network: 'Impact',
  },
  qbo: {
    url: process.env.NEXT_PUBLIC_QBO_LINK || 'https://quickbooks.intuit.com/payroll/?utm_source=payrollpicker',
    name: 'QuickBooks Payroll',
    network: 'CJ Affiliate',
  },
  patriot: {
    url: process.env.NEXT_PUBLIC_PATRIOT_LINK || 'https://www.patriotsoftware.com/?utm_source=payrollpicker',
    name: 'Patriot',
    network: 'ShareASale',
  },
  rippling: {
    url: process.env.NEXT_PUBLIC_RIPPLING_LINK || 'https://www.rippling.com/?utm_source=payrollpicker',
    name: 'Rippling',
    network: 'PartnerStack',
  },
  adp: {
    url: process.env.NEXT_PUBLIC_ADP_LINK || 'https://www.adp.com/run/?utm_source=payrollpicker',
    name: 'ADP RUN',
    network: 'CJ Affiliate',
  },
} as const

export type ServiceKey = keyof typeof AFFILIATE_LINKS
