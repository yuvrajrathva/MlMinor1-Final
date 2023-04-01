import csv 
import json 
  
# Function to convert a CSV to JSON 
# Takes the file paths as arguments 
def make_json(csvFilePath, jsonFilePath): 
      
    # create a dictionary 
    
    ls=[] 
    # Open a csv reader called DictReader 
    with open(csvFilePath, 'r', encoding='unicode_escape',) as csvf: 
        csvReader = csv.reader(csvf) 

        # Convert each row into a dictionary  
        # and add it to data 
        for rows in csvReader: 
            data = {} 
            if rows !=[]:
                # print(rows[0])
                data['product']=rows[0]
            # data['product']=rows[0]
            ls.append(data)
            print(ls)
            # Assuming a column named 'No' to 
            # be the primary key 

  
    # Open a json writer, and use the json.dumps()  
    # function to dump data 
    with open(jsonFilePath, 'w', encoding='utf-8') as jsonf: 
        jsonf.write(json.dumps(ls, indent=4)) 
        
# Driver Code 
  
# Decide the two file paths according to your  
# computer system 
csvFilePath = r'C:\Users\Dell\OneDrive\Desktop\Webdev Projects\MLMinor1\Minor1\frontend\src\assets\product.csv'
jsonFilePath = r'C:\Users\Dell\OneDrive\Desktop\Webdev Projects\MLMinor1\Minor1\frontend\src\assets\product_json.json'
  
# Call the make_json function 
make_json(csvFilePath, jsonFilePath)