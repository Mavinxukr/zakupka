# Generated by Django 3.0.7 on 2020-07-15 12:32

from django.db import migrations, models
import django.db.models.deletion
import django.utils.datetime_safe
import head.models
import head.utils
import parler.fields
import parler.models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'vn_about',
                'verbose_name_plural': 'vnp_about',
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Area',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'vn_area',
                'verbose_name_plural': 'vnp_area',
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Company',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('logo', models.ImageField(upload_to=head.utils.custom_upload_to, verbose_name='vnm_company_logo')),
            ],
            options={
                'verbose_name': 'vb_company',
                'verbose_name_plural': 'vbp_company',
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Contact',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=255, verbose_name='vnm_email_contact')),
                ('phone', models.CharField(max_length=255, verbose_name='vnm_phone_contact')),
                ('linkedin', models.CharField(max_length=100, verbose_name='vnm_linkedin_contact')),
                ('clutch', models.CharField(max_length=100, verbose_name='vnm_clutch_contact')),
                ('teams', models.IntegerField(verbose_name='vnm_teams_contact')),
                ('experience', models.IntegerField(verbose_name='vnm_experience_contact')),
                ('completed_project', models.IntegerField(null=True, verbose_name='vnm_completed_project')),
                ('ios_count_proj', models.IntegerField(null=True, verbose_name='vnm_completed_project_ios')),
                ('android_count_proj', models.IntegerField(null=True, verbose_name='vnm_completed_project_and')),
                ('web_count_proj', models.IntegerField(null=True, verbose_name='vnm_completed_project_web')),
                ('ux_ui_count_proj', models.IntegerField(null=True, verbose_name='vnm_completed_project_ux_ui')),
                ('test_count_proj', models.IntegerField(null=True, verbose_name='vnm_completed_project_test')),
            ],
            options={
                'verbose_name': 'vn_contact',
                'verbose_name_plural': 'vnp_contact',
            },
        ),
        migrations.CreateModel(
            name='Customer',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=head.utils.custom_upload_to, verbose_name='vnm_image_customer')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='customers', to='head.Company', verbose_name='vnm_company_customer')),
            ],
            options={
                'verbose_name': 'vn_customer',
                'verbose_name_plural': 'vnp_customer',
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('priority', models.IntegerField(unique=True, verbose_name='vnm_priority_project')),
                ('head_image', models.ImageField(blank=True, null=True, upload_to=head.utils.custom_upload_to, verbose_name='vnm_company_head_image')),
                ('area', models.ManyToManyField(related_name='projects', to='head.Area', verbose_name='vnm_area_project')),
                ('company', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project', to='head.Company', verbose_name='vnm_company_project')),
            ],
            options={
                'verbose_name': 'vn_project',
                'verbose_name_plural': 'vnp_project',
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='ProjectImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(null=True, upload_to=head.models.custom_upload_to_project_image, verbose_name='vnm_projectimage_image')),
                ('position', models.IntegerField(null=True, verbose_name='vnm_projectimage_position')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='project_images', to='head.Project', verbose_name='vnm_projectimage_project')),
            ],
            options={
                'verbose_name': 'vn_project_image',
                'verbose_name_plural': 'vnp_project_image',
                'db_table': 'head_project_image',
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Review',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('customer', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='head.Customer', verbose_name='vnm_customer_review')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='head.Project', verbose_name='vnm_project_review')),
            ],
            options={
                'verbose_name': 'vn_review',
                'verbose_name_plural': 'vnp_review',
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Subscribers',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=254, verbose_name='vnm_subc_email')),
            ],
            options={
                'verbose_name': 'vm_subscribe',
                'verbose_name_plural': 'vmp_subscribe',
            },
        ),
        migrations.CreateModel(
            name='Topic',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
            ],
            options={
                'verbose_name': 'vn_topic',
                'verbose_name_plural': 'vnp_topic',
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='Order',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('email', models.EmailField(max_length=255, null=True, verbose_name='vnm_email_order')),
                ('phone', models.CharField(max_length=255, null=True, verbose_name='vnm_phone_order')),
                ('name', models.CharField(max_length=255, null=True, verbose_name='vnm_phone_name')),
                ('terms', models.CharField(max_length=20, verbose_name='vnm_terms_order')),
                ('budget', models.CharField(max_length=20, verbose_name='vnm_budget_order')),
                ('detail', models.CharField(max_length=255, verbose_name='vnm_detail_order')),
                ('file', models.FileField(null=True, upload_to=head.utils.custom_upload_to, verbose_name='vnm_file_order')),
                ('status', models.CharField(choices=[('НОВЫЙ', 'Новый'), ('ВЗЯТ', 'Взят'), ('ОЖИДАНИЕ', 'Ожидание'), ('ЗАВЕРЕШЕННЫЙ', 'Завершенный')], default='НОВЫЙ', max_length=20, verbose_name='vnm_status_order')),
                ('date', models.DateTimeField(default=django.utils.datetime_safe.datetime.now, null=True, verbose_name='vnm_date_order')),
                ('area', models.ManyToManyField(related_name='orders', to='head.Area', verbose_name='vnm_name_area')),
            ],
            options={
                'verbose_name': 'vnp_order',
                'verbose_name_plural': 'vnp_order',
            },
        ),
        migrations.CreateModel(
            name='Blog',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('views', models.IntegerField(default=1, verbose_name='vnm_date_views')),
                ('date_publish', models.DateTimeField(default=django.utils.datetime_safe.datetime.now, null=True, verbose_name='vnm_date_blog')),
                ('image', models.ImageField(blank=True, null=True, upload_to=head.utils.custom_upload_to, verbose_name='vnm_image_blog')),
                ('topic', models.ForeignKey(default=1, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='blog', to='head.Topic', verbose_name='vnm_topic_blog')),
            ],
            options={
                'verbose_name': 'vn_blog',
                'verbose_name_plural': 'vnp_blog',
            },
            bases=(parler.models.TranslatableModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='AboutImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to=head.utils.custom_upload_to, verbose_name='vnm_image_aboutimage')),
                ('about', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='about_images', to='head.About', verbose_name='vnm_about_aboutimage')),
            ],
            options={
                'verbose_name': 'vm_aboutimage',
                'verbose_name_plural': 'vmp_aboutimage',
                'db_table': 'head_about_image',
            },
        ),
        migrations.CreateModel(
            name='TopicTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=100, verbose_name='vnm_name_topic')),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='head.Topic')),
            ],
            options={
                'verbose_name': 'vn_topic Translation',
                'db_table': 'head_topic_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='ReviewTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.TextField(max_length=255, verbose_name='vnm_name_review')),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='head.Review')),
            ],
            options={
                'verbose_name': 'vn_review Translation',
                'db_table': 'head_review_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='ProjectTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=30, verbose_name='vnm_name_project')),
                ('description', models.CharField(max_length=255, verbose_name='vnm_desc_project')),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='head.Project')),
            ],
            options={
                'verbose_name': 'vn_project Translation',
                'db_table': 'head_project_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='ProjectImageTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('description', models.TextField(null=True, verbose_name='vnm_projectimage_desc')),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='head.ProjectImage')),
            ],
            options={
                'verbose_name': 'vn_project_image Translation',
                'db_table': 'head_project_image_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='CustomerTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=100, verbose_name='vnm_fio_customer')),
                ('description', models.CharField(max_length=256, verbose_name='vnm_desc_customer')),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='head.Customer')),
            ],
            options={
                'verbose_name': 'vn_customer Translation',
                'db_table': 'head_customer_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='CompanyTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=100, verbose_name='vnm_company_name')),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='head.Company')),
            ],
            options={
                'verbose_name': 'vb_company Translation',
                'db_table': 'head_company_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='BlogTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=100, unique=True, verbose_name='vnm_name_blog')),
                ('description', models.TextField(verbose_name='vnm_desc_blog')),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='head.Blog')),
            ],
            options={
                'verbose_name': 'vn_blog Translation',
                'db_table': 'head_blog_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='AreaTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(max_length=100, verbose_name='vnm_name_area')),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='head.Area')),
            ],
            options={
                'verbose_name': 'vn_area Translation',
                'db_table': 'head_area_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
        migrations.CreateModel(
            name='AboutTranslation',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('language_code', models.CharField(db_index=True, max_length=15, verbose_name='Language')),
                ('name', models.CharField(blank=True, max_length=100, null=True, verbose_name='vnm_name_about')),
                ('text', models.CharField(blank=True, max_length=200, null=True, verbose_name='vnm_text_about')),
                ('description', models.TextField(blank=True, null=True, verbose_name='vnm_desc_about')),
                ('master', parler.fields.TranslationsForeignKey(editable=False, null=True, on_delete=django.db.models.deletion.CASCADE, related_name='translations', to='head.About')),
            ],
            options={
                'verbose_name': 'vn_about Translation',
                'db_table': 'head_about_translation',
                'db_tablespace': '',
                'managed': True,
                'default_permissions': (),
                'unique_together': {('language_code', 'master')},
            },
            bases=(parler.models.TranslatedFieldsModelMixin, models.Model),
        ),
    ]
