# from django.shortcuts import render

# Create your views here.
# from django.shortcuts import render
import pandas as pd
from joblib import load
import numpy as np

from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView

from .serializers import ProductSerializer
from shop.models import Product
model = load('./savedModels/model_customer.joblib')

# product_type_df=pd.read_csv('./static/product.csv')
# RFM_df=pd.read_csv('RFM.csv')
# new_df=pd.read_csv('new_df.csv')

def PredictViewSet(APIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    
    def get(self,request):
        return Response({'status':'success'})

    # def post(self,request):
    #     customer_id = request.data['customer_id']
    #     country = request.data['country']
    #     product = request.data['product']
    #     quantity = request.data['quantity']
    #     return Response({'status':'success'})
    
        # return Response({'customer_id':customer_id,'country':country,'product':product,'quantity':quantity})


# def predictor(request):
#     if request.method == 'POST':
#         CustomerID = request.POST['CustomerID']  #Float
#         Country = request.POST['Country'] # String
#         Product = request.POST['Product'] # String
#         Quantity = request.POST['Quantity'] # int
#         UnitPrice = request.POST['Unit']
#         for i in range(len(RFM_df)):
#             if(RFM_df['CustomerID'][i]==CustomerID):
#                 frequency=RFM_df['Frequency'][i]
#                 recency=0
#                 monetary=RFM_df['Monetary'][i]+UnitPrice*Quantity
#                 country=Country
#                 category=get_product_category(Product)
#                 customer_id=RFM_df['CustomerID'][i]
#         if(Country=='United Kingdom'):
#             Country=1
#         else:
#             Country=0
#         product_categories={
#             'Clothing': 'shirt|t-shirt|top|blouse|sweater|jacket|coat|dress|skirt|pants|jeans|shorts|leggings|underwear|lingerie|socks|stockings',
#             'Shoes': 'shoes|boots|sandals|sneakers|heels|flats|slippers',
#             'Accessories': 'hat|cap|scarf|gloves|belt|tie|watch|jewelry|bag|purse|wallet',
#             'Beauty': 'cosmetics|makeup|skincare|fragrance|haircare|nail polish',
#             'Electronics': 'phone|tablet|laptop|desktop|camera|smartwatch|headphones|speaker|chargers|batteries',
#             'Home Decor': 'furniture|lighting|bedding|bath|kitchen|decor|art|mirror|candles|plants|curtains|towels',
#             'Books': 'book|ebook|audiobook',
#             'Sports': 'sports|outdoor|hiking|camping|fitness|exercise|biking|running|yoga|skiing|snowboarding',
#             'Toys': 'toy|game|puzzle|board game|card game|doll|action figure|lego',
#             'Food': 'food|snack|drink|beverage|coffee|tea|candy|chocolate|sweets',
#             'Pet Supplies': 'pet|dog|cat|fish|bird|reptile|hamster|cage|food|toys|treats|litter',
#             'Office Supplies': 'office|stationery|paper|pen|pencil|notebook|folder|organizer|printer|ink',
#             'Tools': 'tools|hardware|power tool|hand tool|tool box|screwdriver|wrench|drill|saw',
#             'Music': 'music|cd|vinyl|instrument|guitar|piano|drum',
#             'Movies': 'movie|dvd|blu-ray',
#         }
#         columns_ohe=[
#             'ProductType_Accessories',
#             'ProductType_Books',
#             'ProductType_Clothing',
#             'ProductType_Electronics',
#             'ProductType_Food',
#             'ProductType_Home Decor',
#             'ProductType_Office Supplies',
#             'ProductType_Others',
#             'ProductType_Pet Supplies',
#             'ProductType_Toys'
#         ]
#         def get_product_category(description):
#             description=str(description)
#             description = description.lower()
#             for category, keywords in product_categories.items():
#                 for keyword in keywords.split('|'):
#                     if keyword in description:
#                         return category
#             return 'Others'
#         for i in range(len(RFM_df)):
#             if(RFM_df['CustomerID'][i]==CustomerID):
#                 frequency=RFM_df['Frequency'][i]
#                 recency=0
#                 monetary=RFM_df['Monetary'][i]+UnitPrice*Quantity
#                 country=Country
#                 category=get_product_category(Product)
#                 customer_id=RFM_df['CustomerID'][i]
#         lists=[]
#         for column in columns_ohe:
#             if(column[12:]==category):
#                 lists.append(1)
#             else:
#                 lists.append(0)
#         test_data=np.array([customer_id,frequency,monetary,recency,country]+lists).reshape(1,-1)
#         y_pred = model.predict(test_data)
#         def return_monetary(test_data):
#             monetary=test_data['Monetary'][0]
#             percentile75=new_df['Monetary'].quantile(0.75)
#             percentile25=new_df['Monetary'].quantile(0.25)
#             IQR=percentile75-percentile25
#             lower_limit=percentile25-(1.5)*IQR
#             upper_limit=percentile75+(1.5)*IQR
#             if(monetary<lower_limit):
#                 return "Bought a very few Products"
#             elif(monetary>lower_limit and monetary<percentile25):
#                 return "Bought Descent Amount of Products"
#             elif(monetary>percentile25 and monetary<percentile75):
#                 return "Bought Good Amount of Products"
#             elif(monetary>percentile75 and monetary<upper_limit):
#                 return "Bought Many Products"
#             elif(monetary>upper_limit):
#                 return "Buys Products from the Shop very frequently"
#         def return_Frequency(test_data):
#             Frequency=test_data['Frequency'][0]
#             percentile75=new_df['Frequency'].quantile(0.75)
#             percentile25=new_df['Frequency'].quantile(0.25)
#             IQR=percentile75-percentile25
#             lower_limit=percentile25-(1.5)*IQR
#             upper_limit=percentile75+(1.5)*IQR
#             if(Frequency<lower_limit):
#                 return "Very Rare Visitor"
#             elif(Frequency>lower_limit and Frequency<percentile25):
#                 return "Visits Few Times"
#             elif(Frequency>percentile25 and Frequency<percentile75):
#                 return "Visits Descent Amount of Times"
#             elif(Frequency>percentile75 and Frequency<upper_limit):
#                 return "Visits Good Amount of Times"
#             elif(Frequency>upper_limit):
#                 return "Very Frequent Customer"
#         def return_Recency(test_data):
#             Recency=test_data['Recency'][0]
#             percentile75=new_df['Recency'].quantile(0.75)
#             percentile25=new_df['Recency'].quantile(0.25)
#             IQR=percentile75-percentile25
#             lower_limit=percentile25-(1.5)*IQR
#             upper_limit=percentile75+(1.5)*IQR
#             if(Recency<lower_limit):
#                 return "Visited Very Recently"
#             elif(Recency>lower_limit and Recency<percentile25):
#                 return "Visited Few Days back"
#             elif(Recency>percentile25 and Recency<percentile75):
#                 return "Visited Descent Amount of Days back"
#             elif(Recency>percentile75 and Recency<upper_limit):
#                 return "Visited Good Amount of Days back"
#             elif(Recency>upper_limit):
#                 return "Visited Long Back"
#         def return_frequent_product(test_data):
#             for i in range(len(product_type_df)):
#                 if(product_type_df['CustomerID'][i]==test_data['CustomerID'][0]):
#                     return product_type_df['ProductType'][i]
#         if(CustomerID in RFM_df['CustomerID']):
#             if y_pred[0] == 0:
#                 y_pred = 'Spends a good amount overall'
#             elif y_pred[0] == 1:
#                 y_pred = 'Visits more frequently than others and has spent descent amount of money'
#             elif y_pred[0] == 2:
#                 y_pred = 'Prefers buying Accesories and spent a descent amount of money'
#             elif y_pred[0] == 3:
#                 y_pred = 'Less frequently visits the shop and prefers buying Home Decoration'
#             elif y_pred[0] == 4:
#                 y_pred=return_monetary(test_data)+return_Frequency(test_data)+return_Recency(test_data)+f'The user likes buying {return_frequent_product(test_data)} type of product most frequently'
#         else:
#             y_pred='New Customer, No previous data'
#         return render(request, 'main.html', {'result' : y_pred})
#     return render(request, 'main.html')