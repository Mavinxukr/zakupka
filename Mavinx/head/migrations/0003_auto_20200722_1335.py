# Generated by Django 3.0.7 on 2020-07-22 10:35

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('head', '0002_project_head_video'),
    ]

    operations = [
        migrations.AddField(
            model_name='project',
            name='link_android_store',
            field=models.CharField(max_length=100, null=True, verbose_name='vnm_android_link_project'),
        ),
        migrations.AddField(
            model_name='project',
            name='link_ios_store',
            field=models.CharField(max_length=100, null=True, verbose_name='vnm_ios_link_project'),
        ),
        migrations.AddField(
            model_name='project',
            name='link_web_store',
            field=models.CharField(max_length=100, null=True, verbose_name='vnm_web_link_project'),
        ),
    ]
