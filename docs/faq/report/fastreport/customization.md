---
id: report-fastreport-customization
title: Customization
description: Fast Report Customization
slug: /faq/report/fastreport/customization
tags: ["Fast Report", "Customization"]
---

## Batch Email with PDF Filename & Current Date

- This guide will teach you on how to capture current date on your export PDF File Name.

1. In QT Template DocNo = EMAIL, PDF File Name may set in **Remark 2**

    ![1](../../../../static/img/report/fastReport-batchEmailCurDate/1.png)

    :::info[note]
    Remark 2 must fill in
    :::

2. Preview your report | Click on **Report Name**

    ![2](../../../../static/img/report/fastReport-batchEmailCurDate/2.png)

3. Click on **Code Tab** |

    ![3](../../../../static/img/report/fastReport-batchEmailCurDate/3.png)

```pascal
procedure OnGetEmailSettings(EmailSettings: TStrings);
var
    vEmail, vName: Variant;
    lDate : String;
begin
    lDate := (formatDateTime('dd.mm.yyyy',Date));

    GetEMailTpl;
    vEmail := Trim(<Document_CompanyBranch."Email">);
    vName := Trim(<Main."CompanyName">);

    if (vName <>  '' ) and (vEmail <>  '') then begin
        EmailSettings.Values['Recipients'] := vEmail;
        EmailSettings.Values['CC'] := <plEMailTpl."CC"> ;
        EmailSettings.Values['BCC'] := <plEMailTpl."BCC"> ;
        EmailSettings.Values['Subject'] := GetFldInfo(<plEMailTpl."Subject">);
        EmailSettings.Values['Body'] := GetFldInfo(RichTextToPlainText(<plEMailTpl."Body">));

        if Trim(<plEMailTpl."PDFFileName">) <>  '' then
            EmailSettings.Values['FileName'] := lDate + ' ' +  GetFldInfo(<plEMailTpl."PDFFileName">);
        if Trim(GetPassword) <>  '' then
            EmailSettings.Values['PDFPassword'] := GetPassword;
    end;

    EmailSettings.Values['ID'] := vName;
end;
```

## Display More Description in Multiple Page

- If More Description more than 1 page, first page will show blank.

- Example Problematic Report :

   ![1](../../../../static/img/report/fastReport-MoreDescMultipage/1.png)

**Solution:**

1. Click on ***Blue Color Report Name*** in bottom.

   1. Click on **DetailData1**

   2. Click on **Events**

   3. Double Click on **OnAfterCalc Script**

        ![2](../../../../static/img/report/fastReport-MoreDescMultipage/2.png)

   4. The system will redirect to Code Page, then disable the script by adding the symbol '**//**' infront of the script.

        ![3](../../../../static/img/report/fastReport-MoreDescMultipage/3.png)

   5. Go back to **Page1 Tab**

        ![4](../../../../static/img/report/fastReport-MoreDescMultipage/4.png)

   6. Right Click on **DetailData1** | Tick **Allow Split**.

        ![5](../../../../static/img/report/fastReport-MoreDescMultipage/5.png)

   7. Right Click on **Qty DBText** | Untick **Auto Width**.

        ![6](../../../../static/img/report/fastReport-MoreDescMultipage/6.png)

   8. Do the same Step 7 for **UnitPrice**, **SubTotal**, **Total Exc GST**, **GST Amt**, **Total Inc GST** and **Tax**

        ![7](../../../../static/img/report/fastReport-MoreDescMultipage/7.png)

   9. Click on **Group Footer1**

   10. Click on **Events**

   11. Double Click on **OnBeforePrint**.

        ![8](../../../../static/img/report/fastReport-MoreDescMultipage/8.png)

   12. In Code Page, Remove the "**– 60**" from the code

        **Before:**

        ![9](../../../../static/img/report/fastReport-MoreDescMultipage/9.png)

        **After Amend:**

        ![10](../../../../static/img/report/fastReport-MoreDescMultipage/10.png)

   13. Go Back to **Page1 Tab** | make **Page footer1** closer.

         ![11](../../../../static/img/report/fastReport-MoreDescMultipage/11.png)

   14. Go to File | Page Setting | Bottom set to 2.5

         ![12](../../../../static/img/report/fastReport-MoreDescMultipage/12.png)

   15. File | Save As | Input New Report Name

   16. Preview again

   17. Problem Solved

         ![13](../../../../static/img/report/fastReport-MoreDescMultipage/13.png)

## Display Text Object in Last Page's Footer only

1. Click on the object you want to show only in Last Page

   ![1](../../../../static/img/report/fastReport-footerTxtLstPg/1.png)

   1. Click on your Object
   2. Click on Events Tab
   3. Click on OnbeforePrint | Double Click it
   4. Place this query inside the Code page.

        ![2](../../../../static/img/report/fastReport-footerTxtLstPg/2.png)

    Code:

    ```pascal
    if <page#> = <totalpages#> then
        shape3.visible := true
    else
        shape3.Visible := false;
    ```

## Fix Report Tax Rate show A instead of 6%

1. Preview the Report format, Click on blue color link and enter into Report Design. (Refer **Pic1**)

    **Pic1:**

    ![14](../../../../static/img/report/fastReport-taxShwA/14.png)

2. Click on Code Tab(Refer **Pic2**)

    **Pic2:**

    ![15](../../../../static/img/report/fastReport-taxShwA/15.png)

3. In Code page insert TaxRate (Refer **Pic3**)

    **Pic3:**

    ![16](../../../../static/img/report/fastReport-taxShwA/16.png)

    **Full Query :**

    ```pascal
    SQL := 'SELECT Code, TaxRate FROM Tax ' +
                'WHERE ISACTIVE=1 ' +
                'AND (TAXTYPE=0X00010000+0X00020000 OR ' +
                '((TAXTYPE / 0X00020000 / 2) - (TAXTYPE / >0X00020000 / 2.0)) &lt;> 0) ' +
                ' ORDER BY CODE';
                AddDataSet('GSTTax', ['Code', 'TaxRate'])
                .GetDBData(SQL)
                .LinkTo('GSTAmt', 'Tax', 'Code');
    ```

4. Click on SubReport1 Tab | Click on the Text Field (Refer **Pic4**)

    **Pic4:**

    ![17](../../../../static/img/report/fastReport-taxShwA/17.png)

5. Change the Query as below | Press OK (**Pic5**)

    **Pic5:**

    ![18](../../../../static/img/report/fastReport-taxShwA/18.png)

6. File | Save

7. Close the Fast Report

8. Preview the same format again.

## Hide Zero Value

1. Method 1

   1. Right Click on the Text | Select Hide Zeros

   2. Tick Allow Expressions

        ![1](../../../../static/img/report/fastReport-hideZero/1.png)

   3. Try save the report and preview the result.

2. Method 2 (**Only use this if method 1 doesn't work**)

   1. Double click on Text

   2. Click on Highlight Tab

   3. Press Add

        ![2](../../../../static/img/report/fastReport-hideZero/2.png)

   4. Press ok

   5. Untick Visible

        ![3](../../../../static/img/report/fastReport-hideZero/3.png)

   6. File | Save as | Enter Report name
   7. Preview and see the result

## Ledger Report Start New Page for New Group

**Before Amend :**

![1](../../../../static/img/report/fastReport-LRptNewGrpPg/1.png)

1. **Right Click** on **Group Header 1**, Select **Start New Page**

    ![2](../../../../static/img/report/fastReport-LRptNewGrpPg/2.png)

2. File | Save as | Enter New Report Name

3. Preview

    ![3](../../../../static/img/report/fastReport-LRptNewGrpPg/3.png)

## Print Date Time

1. Click on Text Object

    ![A](../../../../static/img/report/fastReport-prtDTime/A.png)

2. Enter **[Date] [Time]**

3. File | Save as Enter New Report Name

    ![1](../../../../static/img/report/fastReport-prtDTime/1.png)

4. Preview

    ![2](../../../../static/img/report/fastReport-prtDTime/2.png)

## Report Print Count

**Report Before Set Report Count :**

![1](../../../../static/img/report/fastReport-rptPrtCount/1.png)

**Step to do :**

1. Go into Report Design

2. Click on DetailData1

3. Click On Events Tab

4. Double Click on OnBeforePrint.

    ![2](../../../../static/img/report/fastReport-rptPrtCount/2.png)

5. System will auto bring you to the code page. Insert the Query as Below :

    ```pascal
    if TfrxDetailData(Sender).Visible and (<Line#> mod 20 = 1) and (<Line#> > 1) then Engine.NewPage;
    ```

    If you want to change the Record Count to 15, just change the count:

    ```pascal
    if TfrxDetailData(Sender).Visible and (<Line#> mod 15 = 1) and (<Line#> > 1) then Engine.NewPage;
    ```

6. Go to File | Save As | Insert New Report Name

7. Preview with New Report Name.

    ![3](../../../../static/img/report/fastReport-rptPrtCount/3.png)

## Set Stop Position

**Example of setting the Stop Position with 912 Pixel :**

![1](../../../../static/img/report/fastReport-stpPos/1.png)

1. Go into Report Design

2. Click on **DetailData1**

3. Click on **Events**

4. Double Click **onAfterCalcHeight**.

    ![2](../../../../static/img/report/fastReport-stpPos/2.png)

5. The system will redirect to Code Page

    :::tip[TIPS]
    If you want to stop on 9 Inch, then you have to convert to Pixel.

    1 Inch = 96 Pixel, So if you want stop on 9 Inch, then use 9 *96 = 864 Pixel.
    :::

    ![3](../../../../static/img/report/fastReport-stpPos/3.png)

    **Code**:

    ```pascal
    if TfrxDetailData(Sender).Visible and (Engine.CurY + DetailData1.Height >= 864) then Engine.NewPage;
    ```

6. File | save as | Enter New Report Name

7. Preview with new report name to see the result.

**Example Result after set to 864 Pixel :**

![4](../../../../static/img/report/fastReport-stpPos/4.png)

## Update GST from 6% to 0% (show zero instead of blank)

SQL Account system build in report format will automatic detect your Tax Rate based on your invoice issued.

- If invoice issued on May, it will show GST @ 6%, while invoice issued on June, it will display GST @ 0%.
- If your Delivery Order (D/O) is issued on May, transferred to Invoice and invoice date on June, the system will automatic detect and set your GST rate correctly.
- However, if your format customized previously, you can refer this guideline on how to change the script from GST @ 6% to GST 0%.

1. Click on your report name to enter into report designer page.

    ![1](../../../../static/img/report/fastReport-6to0TaxRate/1.png)

2. Refer to the image below for the follow instructions,

   1. Click on this field, you can double check on left panel, the field name is **MmGST2**

   2. go **Event**

   3. double click the empty area beside **OnBeforePrint**, system will bring you to step iv as below

        ![2](../../../../static/img/report/fastReport-6to0TaxRate/2.png)

   4. **replace to this script**

        ![3](../../../../static/img/report/fastReport-6to0TaxRate/3.png)

        ![4](../../../../static/img/report/fastReport-6to0TaxRate/4.png)

3. Once you complete the steps above, Click file > **save as**, enter a new report name and exit, then you may preview again your format outcome.
