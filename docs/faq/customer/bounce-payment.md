---
title: Bounce Payment for different currency
description: A guide on Bounce Payment for different currency for SQL Account
slug: /faq/customer/bounce-payment
tags: ["SQL Account", "FAQ", "Customer", "Payment"]
---

## Customer Invoice

Invoice with amount USD100 | Rate 3.00 | Local net total = RM300

![1](../../../static/img/customer/bounce-payment/1.png)

### Situation 1: Received payment RM330, so Gain RM30

![2](../../../static/img/customer/bounce-payment/2.png)

Please follow the steps below to do the bounce payment:

1. **Issue a Customer Debit Note as the previous invoice that had issue.**

    ![3](../../../static/img/customer/bounce-payment/3.png)

2. **Issue a payment voucher to credit out the amount that already knock off.**

    ![4](../../../static/img/customer/bounce-payment/4.png)

### Situation 2: Received payment RM270, so Loss RM30

![5](../../../static/img/customer/bounce-payment/5.png)

Please follow the steps below to do the bounce payment:

 1. **Issue a Customer Debit Note as the previous invoice that had issue.**

     ![6](../../../static/img/customer/bounce-payment/6.png)

 2. **Issue a payment voucher to credit out the amount that already knock off.**

     ![7](../../../static/img/customer/bounce-payment/7.png)

## Supplier Invoice

Supplier Invoice with amount USD100 | Rate 3.00 | Local net total = RM300

![8](../../../static/img/customer/bounce-payment/8.png)

### Situation 1: Make payment RM330, so Loss RM30

![9](../../../static/img/customer/bounce-payment/9.png)

Please follow the steps below to do the bounce payment:

 1. **Issue a Supplier Debit Note as the previous invoice that had issue.**

     ![10](../../../static/img/customer/bounce-payment/10.png)

 2. **Issue an Official receipt to debit the amount that already knock off.**

     ***Put USD30 into loss GL account because we need to paid more USD30 to supplier,but we loss USD**.

     ![11](../../../static/img/customer/bounce-payment/11.png)

### Situation 2: Make payment RM270, so Gain RM30

![12](../../../static/img/customer/bounce-payment/12.png)

Please follow the steps below to do the bounce payment:

 1. **Issue a Supplier Debit Note as the previous invoice that had issue.**

     ![13](../../../static/img/customer/bounce-payment/13.png)

 2. **Issue an Official receipt to debit the amount that already knock off.**

     **\*Put USD -30 into gain GL account because we pay less USD30 to supplier,but we gain USD30.**

     ![14](../../../static/img/customer/bounce-payment/14.png)
