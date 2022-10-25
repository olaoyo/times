from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.response import Response

from base.models import Product, Review
from base.serializers import ProductSerializer

from rest_framework import status


@api_view(["GET"])
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def getProduct(request, watch_id):
    product = Product.objects.get(_id=watch_id)
    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(["POST"])
@permission_classes([IsAdminUser])
def createProduct(request):
    user = request.user
    product = Product.objects.create(
        user = user,
        name = "Watch Name",
        price = 0,
        brand = "Watch Brand",
        countInStock = 0,
        category = "Watch Category",
        description = ""
    )

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(["PUT"])
@permission_classes([IsAdminUser])
def updateProduct(request, watch_id):
    data = request.data
    product = Product.objects.get(_id=watch_id)

    product.name = data["name"]
    product.price = data["price"]
    product.brand = data["brand"]
    product.countInStock = data["countInStock"]
    product.category = data["category"]
    product.description = data["description"]

    product.save()

    serializer = ProductSerializer(product, many=False)
    return Response(serializer.data)


@api_view(["DELETE"])
@permission_classes([IsAdminUser])
def deleteProduct(request, watch_id):
    product = Product.objects.get(_id=watch_id)
    product.delete()
    return Response("This watch was donated as a charitable gift ⌚️🥰")


@api_view(["POST"])
def uploadImage(request):
    data = request.data  

    product_id = data["product_id"]
    product = Product.objects.get(_id=product_id)

    product.image = request.FILES.get("image")
    # product.imageDetails = request.FILES.get("imageDetails")
    product.save()

    return Response("Watch image was uploaded")


@api_view(["POST"])
def uploadImageDetails(request):
    data = request.data  

    product_id = data["product_id"]
    product = Product.objects.get(_id=product_id)

    product.imageDetails = request.FILES.get("imageDetails")
    product.save()

    return Response("Watch image details were uploaded")


@api_view(["POST"])
@permission_classes([IsAuthenticated])
def createProductReview(request, watch_id):
    user = request.user
    product = Product.objects.get(_id=watch_id)
    data = request.data

    #1 - Review already exists
    alreadyExists = product.review_set.filter(user=user).exists()

    if alreadyExists:
        content = {"detail": "You previously shared your thoughts on this"}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    #2 - No Rating or 0
    elif data["rating"] == 0:
        content = {"detail": "Please rate your experience with this product"}
        return Response(content, status=status.HTTP_400_BAD_REQUEST)

    #3 - Create review
    else:
        review = Review.objects.create(
            user = user,
            product = product,
            name = user.first_name,
            rating = data["rating"],
            comment = data["comment"],
        )

        reviews = product.review_set.all()
        product.numReviews = len(reviews)

        total = 0
        for review in reviews:
            total += review.rating
        
        product.rating = total / len(reviews)
        product.save()

        return Response("We appreciate your thoughts on this watch")

