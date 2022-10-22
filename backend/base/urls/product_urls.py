from django.urls import path
from base.views import product_views as views


urlpatterns = [
    path("", views.getProducts, name="products"),
   
    path("create/", views.createProduct, name="product-create"),
    path("<str:watch_id>/", views.getProduct, name="product"),

    path("update/<str:watch_id>/", views.updateProduct, name="product-update"),
    path("delete/<str:watch_id>/", views.deleteProduct, name="product-delete"),
]