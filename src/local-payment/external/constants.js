"use strict";

module.exports = {
  REQUIRED_OPTIONS_FOR_START_PAYMENT: [
    "givenName",
    "surname",
    "currencyCode",
    "onPaymentStart",
    "paymentType",
    "amount",
    "fallback",
  ],
  REQUIRED_OPTIONS_FOR_PAY_UPON_INVOICE_PAYMENT_TYPE: [
    "givenName",
    "surname",
    "currencyCode",
    "onPaymentStart",
    "paymentType",
    "amount",
    "address",
    "billingAddress",
    "birthDate",
    "email",
    "locale",
    "customerServiceInstructions",
    "correlationId",
    "phone",
    "phoneCountryCode",
    "lineItems",
  ],
  REQUIRED_OPTIONS_FOR_ADDRESS: [
    "streetAddress",
    "locality",
    "postalCode",
    "countryCode",
  ],
  REQUIRED_OPTIONS_FOR_LINE_ITEMS: [
    "category",
    "name",
    "quantity",
    "unitAmount",
    "unitTaxAmount",
  ],
  REQUIRED_OPTIONS_FOR_BLIK_SEAMLESS_PAYMENT_TYPE: [
    "givenName",
    "surname",
    "currencyCode",
    "onPaymentStart",
    "paymentType",
    "amount",
  ],
  REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_LEVEL_0: ["authCode"],
  REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_FIRST: [
    "authCode",
    "consumerReference",
    "aliasLabel",
  ],
  REQUIRED_OPTIONS_FOR_BLIK_OPTIONS_ONE_CLICK_SUBSEQUENT: [
    "consumerReference",
    "aliasKey",
  ],
};
