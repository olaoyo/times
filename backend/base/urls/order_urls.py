from django.urls import path
from base.views import order_views as views


urlpatterns = [
    path("", views.getOrders, name="orders"),
    path("add/", views.addOrderItems, name="orders-add"),
    path("myorders/", views.getMyOrders, name="myorders"),

    path("<str:order_id>/", views.getOrderById, name="user-order"),
    path("<str:order_id>/pay/", views.updateOrderToPaid, name="pay"),
]