# Generated by Django 4.1.1 on 2022-09-20 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
        migrations.AddField(
            model_name='product',
            name='imageDetails',
            field=models.ImageField(blank=True, null=True, upload_to=''),
        ),
    ]
