# Generated by Django 4.1.1 on 2022-10-24 09:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0003_alter_product_image_alter_product_imagedetails'),
    ]

    operations = [
        migrations.RenameField(
            model_name='order',
            old_name='isDelivrered',
            new_name='isDelivered',
        ),
    ]
