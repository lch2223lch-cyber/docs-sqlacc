---
sidebar_position: 1
title: Onboarding
description: MyInvois onboarding process
slug: /usage/myinvois/onboarding2
tags: ["SQL Account", "Usage", "MyInvois", "E-Invoice", "Onboarding"]
---

To streamline the e-invoice submission through SQL Account, you will need to go through a simple onboarding process.

## Company Profile Setup

1. Go to **File** > **Company Profile**.
   1. Make sure your company registration number (BRN) is correctly filled in. (click on the magnifying glass to utilize our auto BRN lookup feature)
   2. Make sure the TIN number has been filled in correctly.
   3. Click on 💾 **Save**.

        ![company-profile](../../../static/img/myinvois/onboarding/company-profile-myinvois-1.png)

2. Click on **Connect MyInvois** to setup your **LHDN MyInvois** credential.

    ![company-profile-myinvois-button](../../../static/img/myinvois/onboarding/company-profile-myinvois-2.png)

3. Login to MyInvois Portal on the right side.

    :::warning[IMPORTANT]
    To test E-Invoice, ensure the **I want to try on Sandbox Environment first** checkbox is checked. This lets you use the LHDN Preprod API for testing.

    When you're ready to switch to the production environment, return to this page, click **Go Live**, and follow the steps again.
    :::

    ![company-profile-myinvois-sandbox](../../../static/img/myinvois/onboarding/company-profile-myinvois-4.png)

4. Go to **MyInvois**

    ![company-profile-connect-2](../../../static/img/myinvois/onboarding/company-profile-connect-2.png)

5. Click on top right, and go to Taxpayer Profile.

    ![company-profile-connect-3](../../../static/img/myinvois/onboarding/company-profile-connect-3.png)

6. Scroll to the bottom and click on **Add Intermediary**.

    ![myinvois-portal-3](../../../static/img/myinvois/onboarding/myinvois-portal-3.png)

7. Fill in the **TIN**, **BRN**, and **Name** using the provided info on the left.

    ![myinvois-portal-6](../../../static/img/myinvois/onboarding/myinvois-portal-6.png)

8. Scroll down and click **Continue**.

    ![myinvois-portal-7](../../../static/img/myinvois/onboarding/myinvois-portal-7.png)

9. Setup the **Representation From**, **Representantion To** (leave empty to avoid expiry), and make sure all permissions has been enabled.

    ![myinvois-portal-8](../../../static/img/myinvois/onboarding/myinvois-portal-8.png)

10. Click on **Test Intermediary** and you shall see all permissions can be retrieved successfully.

    ![myinvois-portal-9](../../../static/img/myinvois/onboarding/myinvois-portal-9.png)

11. Click on **Register ERP**.

    ![myinvois-portal-2](../../../static/img/myinvois/onboarding/myinvois-portal-2.png)

12. Fill in the **ERP Name** & **Client Secret expiration** as below:

    ![myinvois-portal-4](../../../static/img/myinvois/onboarding/myinvois-portal-4.png)

13. Click on the copy button in sequence as shown below and you shall see the client id & secrets are being automatically filled on the left. Click on **Register ERP** and you're done!

    ![myinvois-portal-5](../../../static/img/myinvois/onboarding/myinvois-portal-5.png)
