# Generated by Django 3.0.7 on 2020-07-09 13:57

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('head', '0004_auto_20200709_0829'),
    ]

    operations = [
        migrations.AlterField(
            model_name='blog',
            name='topic',
            field=models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='blog', to='head.Topic', verbose_name='vnm_topic_blog'),
        ),
        migrations.AlterField(
            model_name='customertranslation',
            name='name',
            field=models.CharField(max_length=100, verbose_name='vnm_fio_customer'),
        ),
        migrations.AlterField(
            model_name='order',
            name='area',
            field=models.ManyToManyField(related_name='orders', to='head.Area', verbose_name='vnm_name_area'),
        ),
        migrations.AlterField(
            model_name='review',
            name='customer',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='head.Customer', verbose_name='vnm_customer_review'),
        ),
    ]
