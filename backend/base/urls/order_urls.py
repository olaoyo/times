from django.urls import path
from base.views import order_views as views


urlpatterns = [
    path("add/", views.addOrderItems, name="orders-add"),
    path("<str:order_id>/", views.getOrderById, name="user-order"),
    path("<str:order_id>/pay/", views.updateOrderToPaid, name="pay"),
]