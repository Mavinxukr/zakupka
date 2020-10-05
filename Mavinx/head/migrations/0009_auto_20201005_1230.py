# Generated by Django 3.0.8 on 2020-10-05 09:30

from django.db import migrations, models
import quilljs.fields


class Migration(migrations.Migration):

    dependencies = [
        ('head', '0008_auto_20201005_1228'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blogtranslation',
            name='description',
            field=quilljs.fields.RichTextField(verbose_name='vnm_desc_blog'),
        ),
        migrations.AlterField(
            model_name='blogtranslation',
            name='name',
            field=models.CharField(max_length=100, unique=True, verbose_name='vnm_name_blog'),
        ),
    ]
