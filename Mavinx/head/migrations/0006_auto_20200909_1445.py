# Generated by Django 3.0.8 on 2020-09-09 11:45

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('head', '0005_auto_20200909_1441'),
    ]

    operations = [
        migrations.RenameField(
            model_name='blog',
            old_name='one_blog_image',
            new_name='image',
        ),
    ]
