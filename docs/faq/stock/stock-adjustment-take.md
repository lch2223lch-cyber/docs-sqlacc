---
title: Stock Adjustment & Stock Take
description: A guide to stock adjustment and stock take for SQL Account
slug: /faq/stock/stock-adjustment-take
tags: ["SQL Account", "FAQ", "Stock", "Stock Adjustment","Stock Take"]
---

Allow user to key-in quantity in and out from the system, just like combination of stock received and stock issue,
normally use it for stock take purpose. (**Stock > Stock Adjustment > New**)

## How SQL System can help during Stock Take ?

1. Go to **Stock > Print Stock Physical Worksheet**

    ![1](../../../static/img/stock/stock-adjustment-take/1.png)

2. **Filter** the date, stock group or others **information** that you want to do for the stock take, please **make sure that you have choose the correct location and batch if you have this 2 modules**.

    ![2](../../../static/img/stock/stock-adjustment-take/2.png)

3. Click on **Apply and Preview**

    ![3](../../../static/img/stock/stock-adjustment-take/3.png)

4. **Print out this stock physical worksheet -stock take sheet** for stock keeper to manually fill in the actual stock physical quantity at warehouse, so stock keeper just have to **fill in the actual quantity into the physical qty column.**

5. After complete update the stock take report, click on **Stock > Stock Adjustment > Drag Out Book Qty and Physical Qty.**

    ![4](../../../static/img/stock/stock-adjustment-take/4.png)

    ![5](../../../static/img/stock/stock-adjustment-take/5.png)

6. **Repeat the Step 1 & 2** to call out the Stock Physical Worksheet again, at the same time open 2 screen, one is stock adjustment another is stock physical worksheet, then click on **Window | Tile Vertical.**

7. Click on the first item in **Stock Physical Worksheet**, press on **Ctrl + A** on keyboard to select all items. **Then Drag & Drop into Stock Adjustment.**

    ![6](../../../static/img/stock/stock-adjustment-take/6.png)

8. Based on the stock keeper’s Stock Take Report then **fill in the actual physical quantity** on your warehouse into the Stock Adjustment **Physical Qty column**, then system will base on Book Qty and calculate the variant then apply at Qty column.

:::info
**Book Qty** = Quantity that record in system.

**Physical Qty** = Actual Quantity at your warehouse.

**Qty** = Variant between Physical and Book Quantity, system will auto adjust then update accordingly.( Physical Qty – Book Qty )
:::
