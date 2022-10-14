from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Order, OrderItem, ShippingAddress
from base.serializers import ProductSerializer, OrderSerializer

from rest_framework import status
from datetime import datetime


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def addOrderItems(request):
    user = request.user
    data = request.data

    orderItems = data["orderItems"]

    if orderItems and len(orderItems)  == 0:
        return Response({"detail": "No Order Items"}, status = status.HTTP_400_BAD_REQUEST)
    else: 

        # (1) Create order

        order = Order.objects.create(
            user = user,
            paymentMethod = data["paymentMethod"],
            taxPrice = data["taxPrice"],
            shippingPrice = data["shippingPrice"],
            totalPrice = data["totalPrice"],
        )

        # (2) Create shipping address

        shippingAddress = ShippingAddress.objects.create(
            order = order,
            address = data["shippingAddress"]["address"],
            city = data["shippingAddress"]["city"],
            postalCode = data["shippingAddress"]["postalCode"],
            country = data["shippingAddress"]["country"],
        )
        
        # (3) Create order items and set order to orderItem relationship

        for watch in orderItems: 
            product = Product.objects.get(_id=watch["product"])

            item = OrderItem.objects.create(
                product = product,
                order = order,
                name = product.name,
                qty = watch["qty"],
                price = watch["price"],
                image = product.image.url,
            )

            # (4) Update stock

            product.countInStock -= item.qty
            product.save()

        serializer = OrderSerializer(order, many=False)
        return Response(serializer.data)


@api_view(["GET"])
@permission_classes([IsAuthenticated])
def getOrderById(request, order_id):
    user = request.user

    try: 
        order = Order.objects.get(_id=order_id)

        if user.is_staff or order.user == user:
            serlializer = OrderSerializer(order, many=False)
            return Response(serlializer.data)
        else:
            Response({"detail": "Not authorized to view this order"}, status=status.HTTP_400_BAD_REQUEST)
    except:
        return Response({"details": "Order does not exist"}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["PUT"])
@permission_classes([IsAuthenticated])
def updateOrderToPaid(request, order_id):
    order = Order.objects.get(_id=order_id)

    order.isPaid = True
    order.paidAt = datetime()
    
    order.save()
    return Response("We appreciate your taste in ⌚. Order was paid")