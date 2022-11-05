from django.db import models

# Create your models here.
class Product(models.Model):
    title =models.CharField(max_length=100)
    price = models.DecimalField(max_digits=5, decimal_places=2)
    category =models.CharField(max_length=100)

















# # object  car 
# # properties  eg name ,color brand,size,year,model 
# # methods () speed(),move(),stop() etc

# class Car():
#     def __init__(self,paraName,paraColor,paraBrand):
#         self.name=paraName
#         self.color=paraColor
#         self.brand=paraBrand
#         # self.size=4567
#         # self.year=2022
#         # self.model =232

# kaiVariable = Car('kai','green','qwerty') 
# print(kaiVariable.name)
# volvoVariable = Car('volvo','red','layout')    
# print(volvoVariable.name)


# # def displayname(name):
# #     return name
# # print(displayname('marley'))
# # print(displayname('kojo'))
# # print(displayname('ama'))