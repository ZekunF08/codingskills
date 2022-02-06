# Coding Skills Challenge
###
Author: Zekun Fang

Date: 06/02/2022
### Business Requirement:

- Company A have acquired Company B, A and B sell some common products, sourced from suppliers (Sometimes the same supplier, sometimes a different one). 
- The business wants to consolidate the product catalog into one superset (merged catalog). 

### Assumptions:
Here are the assumptions made:
1. There are only 2 companies' data merged at one time.
2. The data is well structured as per sample data.
3. There is no duplicated product within the same company(e.g. different products share the same barcode).
4. The merged catalog should be sort by based on catalog A's order but if there is any product that has the same name in company B,this product would come before the product in company A.Otherwise it display after end of the catalog of company A  

### Install:
1.  Please make sure you have Node installed
2.  Please make sure you have Yarn or Npm installed
3.  #### via npm:
   
    Run `npm install`
    #### via yarn: 
     Run `yarn install`

### Usage:
 #### via npm:
     Run `npm start`
#### via yarn:
     Run `yarn start`

After run the above code you should see a csv document named as [merged.csv](output/merged_catalog.csv). This file in the repo is created by using the sample data below.

For any questions feel free to reach out: zekun.fang08@gmail.com
###  Unit Test:  
#### via npm:
    Run `npm test`
#### via yarn:
    Run `yarn test`

### The below describes a problem statement, make sure to read all the instructions in this readme before you start.
### There are possibilities like:

- Company A and B could have conflicting product codes (SKUs).
- Product codes might be same, but they are different products.
- Product codes are different, but they are same product.
- You should not be duplicating product records in merged catalog.
- Product on merged catalog must have information about the company it belongs to originally.  

The business provided the following information that may help in identifying a matching product:
- Products have associated suppliers, each supplier provides 1 or many barcodes for a product, 
- A product may have many suppliers,
- If any supplier barcode matches for one product of company A with Company B then we can consider that those products as the same.


So, you have following entities to play with:

<img src="./entity_diagram.png" width="800px" height="auto">

### Sample Data 
Please refer input folder for following CSVs:
1. [catalogA.csv](input/catalogA.csv) - Products for Company A
1. [catalogB.csv](input/catalogB.csv) - Products for Company B
1. [suppliersA.csv](input/suppliersA.csv) - List of Suppliers for Company A
1. [suppliersB.csv](input/suppliersB.csv) - List of Suppliers for Company B
1. [barcodesA.csv](input/barcodesA.csv) - Product barcodes provided by supplier for company A
1. [barcodesB.csv](input/barcodesB.csv) - Product barcodes provided by supplier for company B
1. [result_output.csv](output/result_output.csv) - The correct results based on the above sample data
