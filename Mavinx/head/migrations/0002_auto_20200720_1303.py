# Generated by Django 3.0.7 on 2020-07-20 10:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('head', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='area',
            name='show_in_block_project',
            field=models.BooleanField(default=False, verbose_name='vnm_area_s_i_b_p'),
        ),
        migrations.AddField(
            model_name='area',
            name='show_in_footer',
            field=models.BooleanField(default=False, verbose_name='vnm_area_s_i_f'),
        ),
    ]
