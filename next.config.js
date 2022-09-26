/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config')
const LOCATION_COOKIE = 'kibo_purchase_location'
const DEFAULT_WISHLIST_NAME = 'default-wishlist'

module.exports = {
  env: {
    KIBO_API_HOST: 't29927-s49817.sandbox.mozu.com',
  },
  reactStrictMode: true,
  i18n,
  images: {
    domains: [
      'd1slj7rdbjyb5l.cloudfront.net',
      'cdn-tp1.mozu.com',
      'cdn-tp2.mozu.com',
      'cdn-tp3.mozu.com',
      'cdn-tp4.mozu.com',
      'cdn-sb.mozu.com',
      'encrypted-tbn0.gstatic.com',
      'images.contentstack.io',
      'images.ctfassets.net',
    ],
  },
  publicRuntimeConfig: {
    colorAttributeFQN: 'Tenant~Color',
    sizeAttributeFQN: 'Tenant~Size',
    paymentTypes: [
      {
        id: 'CreditCard',
        name: 'Credit / Debit Card',
      },
    ],
    countries: ['US', 'AT', 'DE', 'NL'],
    debounceTimeout: '1000',
    productListing: {
      sortOptions: [
        { value: 'Best Match', id: '' },
        { value: 'Price: Low to High', id: 'price asc' },
        { value: 'Price: High to Low', id: 'price desc' },
        { value: 'Latest', id: 'createDate desc' },
        { value: 'Oldest', id: 'createDate asc' },
      ],
      pageSize: 16,
    },
    orderHistory: {
      startIndex: 0,
      pageSize: 20,
    },
    ratingAttrFQN: `tenant~rating`,
    userCookieKey: process.env.KIBO_USER_COOKIE_KEY || 'kibo_at',
    maxCookieAge: 5 * 24 * 60 * 60 * 1000, //5 days
    fullfillmentOptions: [
      {
        value: 'DirectShip',
        code: 'DS',
        name: 'Direct Ship',
        label: 'Ship to Home',
        details: 'Available to Ship',
        isRequired: false,
        shortName: 'Ship',
      },
      {
        value: 'InStorePickup',
        code: 'SP',
        name: 'In Store Pickup',
        label: 'Pickup in Store',
        details: 'Available at',
        isRequired: false,
        shortName: 'Pickup',
      },
    ],
    storeLocator: {
      defaultRange: '160934',
    },
    storeLocationCookie: LOCATION_COOKIE,
    defaultWishlistName: DEFAULT_WISHLIST_NAME,
    pciHost: process.env.KIBO_PCI_HOST,
    apiHost: process.env.KIBO_API_HOST,
    cms: process.env.CMS || 'contentful',
    contentstack: {
      apiKey: process.env.NEXT_PUBLIC_CONTENTSTACK_API_KEY,
      deliveryToken: process.env.NEXT_PUBLIC_CONTENTSTACK_DELIVERY_TOKEN,
      environment: process.env.NEXT_PUBLIC_CONTENTSTACK_ENVIRONMENT,
    },
    contentful: {
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      URL: `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`,
    },
  },
  serverRuntimeConfig: {
    revalidate: 60,
    pageSize: 100,
    cacheKey: 'categoryTree',
    cacheTimeOut: 10000,
  },
}
