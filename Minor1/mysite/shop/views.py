from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from joblib import load
model = load('./savedModels/model_customer.joblib')

def predictor(request):
    if request.method == 'POST':
        input1 = request.POST['input1']
        input2 = request.POST['input2']
        input3 = request.POST['input3']
        input4 = request.POST['input4']
        input5 = request.POST['input5']
        input6 = request.POST['input6']
        input7 = request.POST['input7']
        input8 = float(input5) - float(input4)
        input8 = str(input8)
        y_pred = model.predict([[input1, input2, input3, input4, input5, input6, input7, input8]])

        # sepal_length = request.POST['sepal_length']
        # sepal_width = request.POST['sepal_width']
        # petal_length = request.POST['petal_length']
        # petal_width = request.POST['petal_width']
        # y_pred = model.predict([[sepal_length, sepal_width, petal_length, petal_width]])
        print('y_pred:', y_pred)
        if y_pred[0] == 0:
            y_pred = 'Non Fraud'
        # elif y_pred[0] == 1:
        #     y_pred = 'Fraud'
        else:
            y_pred = 'Fraud'
        return render(request, 'main.html', {'result' : y_pred})
    return render(request, 'main.html')

def homepage(request):
    return render(request, 'Home.html')

def customer(request):
    return render(request, 'customerForm.html')

def retailer(request):
    return render(request, 'retailer.html')

@csrf_exempt
def django_view_name(request):
    if request.method == 'POST':
        product_name = request.POST.get('product_name')
        quantity = request.POST.get('quantity')
        print(product_name, quantity)
        # Do something with the variable value, such as save it to a database
        return JsonResponse({'success': True})
    else:
        return JsonResponse({'success': False})