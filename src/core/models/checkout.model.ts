export interface CheckoutModel {
  status:  string;
  session: Session;
}

export interface Session {
  id:                                   string;
  object:                               string;
  after_expiration:                     null;
  allow_promotion_codes:                null;
  amount_subtotal:                      number;
  amount_total:                         number;
  automatic_tax:                        AutomaticTax;
  billing_address_collection:           null;
  cancel_url:                           string;
  client_reference_id:                  string;
  client_secret:                        null;
  consent:                              null;
  consent_collection:                   null;
  created:                              number;
  currency:                             string;
  currency_conversion:                  null;
  custom_fields:                        any[];
  custom_text:                          CustomText;
  customer:                             null;
  customer_creation:                    string;
  customer_details:                     CustomerDetails;
  customer_email:                       string;
  expires_at:                           number;
  invoice:                              null;
  invoice_creation:                     InvoiceCreation;
  livemode:                             boolean;
  locale:                               null;
  metadata:                             Metadata;
  mode:                                 string;
  payment_intent:                       null;
  payment_link:                         null;
  payment_method_collection:            string;
  payment_method_configuration_details: PaymentMethodConfigurationDetails;
  payment_method_options:               PaymentMethodOptions;
  payment_method_types:                 string[];
  payment_status:                       string;
  phone_number_collection:              PhoneNumberCollection;
  recovered_from:                       null;
  setup_intent:                         null;
  shipping_address_collection:          null;
  shipping_cost:                        null;
  shipping_details:                     null;
  shipping_options:                     any[];
  status:                               string;
  submit_type:                          null;
  subscription:                         null;
  success_url:                          string;
  total_details:                        TotalDetails;
  ui_mode:                              string;
  url:                                  string;
}

export interface AutomaticTax {
  enabled: boolean;
  status:  null;
}

export interface CustomText {
  shipping_address:            null;
  submit:                      null;
  terms_of_service_acceptance: null;
}

export interface CustomerDetails {
  address:    null;
  email:      string;
  name:       null;
  phone:      null;
  tax_exempt: string;
  tax_ids:    null;
}

export interface InvoiceCreation {
  enabled:      boolean;
  invoice_data: InvoiceData;
}

export interface InvoiceData {
  account_tax_ids:   null;
  custom_fields:     null;
  description:       null;
  footer:            null;
  metadata:          PaymentMethodOptions;
  rendering_options: null;
}

export interface PaymentMethodOptions {
}

export interface Metadata {
  "   ": string;
  city:  string;
  phone: string;
}

export interface PaymentMethodConfigurationDetails {
  id:     string;
  parent: null;
}

export interface PhoneNumberCollection {
  enabled: boolean;
}

export interface TotalDetails {
  amount_discount: number;
  amount_shipping: number;
  amount_tax:      number;
}
