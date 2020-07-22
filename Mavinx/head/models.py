from django.db import models
from django.utils.datetime_safe import datetime
from django.utils.translation import ugettext_lazy as _
from parler.models import TranslatableModel, TranslatedFields

from . utils import custom_upload_to


class Company(TranslatableModel):
    class Meta:
        verbose_name_plural = _('vbp_company')
        verbose_name = _('vb_company')

    translations = TranslatedFields(
        name = models.CharField(max_length=100, verbose_name=_('vnm_company_name'))
    )
    logo = models.ImageField(verbose_name=_('vnm_company_logo'), upload_to=custom_upload_to)

    def __str__(self):
        return self.name


class Area(TranslatableModel):
    class Meta:
        verbose_name_plural = _('vnp_area')
        verbose_name = _('vn_area')

    show_in_footer = models.BooleanField(default=False,verbose_name=_('vnm_area_s_i_f'))
    show_in_block_project = models.BooleanField(default=False,verbose_name=_('vnm_area_s_i_b_p'))

    translations = TranslatedFields(
        name=models.CharField(max_length=100, verbose_name=_('vnm_name_area')),
    )

    def __str__(self):
        return self.name


class Technology(models.Model):
    class Meta:
        verbose_name_plural = _('vnm_name_technology')
        verbose_name = _('vnm_name_technology')

    name=models.CharField(max_length=30,verbose_name=_('vnm_name_technology'))

    def __str__(self):
        return self.name

class TechnologyUsing(models.Model):
    class Meta:
        verbose_name_plural = _('vnm_name_technology_use')
        verbose_name = _('vnm_name_technology_use')

    name = models.CharField(max_length=30, verbose_name=_('vnm_name_technology_using'))
    technology = models.ForeignKey(Technology, verbose_name=_('vnm_name_technology_using_parent'), on_delete=models.CASCADE)

    def __str__(self):
        return self.name


class Topic(TranslatableModel):
    class Meta:
        verbose_name_plural = _('vnp_topic')
        verbose_name = _('vn_topic')

    translations = TranslatedFields(
        name=models.CharField(max_length=100, verbose_name=_('vnm_name_topic')),
    )

    def __str__(self):
        return self.name


class Blog(TranslatableModel):
    class Meta:
        verbose_name_plural = _('vnp_blog')
        verbose_name = _('vn_blog')

    translations = TranslatedFields(
        name=models.CharField(max_length=100, verbose_name=_('vnm_name_blog'), unique=True),
        description = models.TextField(verbose_name=_('vnm_desc_blog'))
    )
    views = models.IntegerField(default=1, verbose_name=_('vnm_date_views'))
    date_publish = models.DateTimeField(default=datetime.now, null=True, verbose_name=_('vnm_date_blog'))
    topic = models.ForeignKey(Topic, related_name='blog', on_delete=models.CASCADE, null=True,
                             verbose_name=_(u'vnm_topic_blog'), default=1)
    image = models.ImageField(verbose_name=_(u'vnm_image_blog'), upload_to=custom_upload_to,
                              null=True, blank=True)

    def __str__(self):
        return self.name


class Customer(TranslatableModel):
    class Meta:
        verbose_name_plural = _('vnp_customer')
        verbose_name = _('vn_customer')

    translations = TranslatedFields(
        name=models.CharField(max_length=100, verbose_name=_('vnm_fio_customer')),
        description = models.CharField(max_length=256, verbose_name=_('vnm_desc_customer'))
    )

    image = models.ImageField(verbose_name=_('vnm_image_customer'), upload_to=custom_upload_to)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='customers',
                                verbose_name=_('vnm_company_customer'))

    def __str__(self):
        return self.name


class ProjectSector(TranslatableModel):
    class Meta:
        verbose_name_plural = _('vnp_project_sector')
        verbose_name = _('vn_project_sector')

    translations = TranslatedFields(
        name=models.CharField(max_length=30, verbose_name=_('vnm_name_sector')),
    )

    def __str__(self):
        return self.name


class Project(TranslatableModel):
    class Meta:
        verbose_name_plural = _('vnp_project')
        verbose_name = _('vn_project')

    translations = TranslatedFields(
        name=models.CharField(max_length=30, verbose_name=_('vnm_name_project')),
        description = models.CharField(max_length=255, verbose_name=_('vnm_desc_project')),
        dev_time = models.CharField(max_length=50, verbose_name=_('vnm_time_project',),null=True),
        location = models.CharField(max_length=100, verbose_name=_('vnm_location_project',),null=True),

    )

    area = models.ManyToManyField(Area, related_name='projects', verbose_name=_('vnm_area_project'))
    priority = models.IntegerField(verbose_name=_('vnm_priority_project'), unique=True)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='project',
                                verbose_name=_('vnm_company_project'))
    head_image = models.ImageField(null=True, blank=True, upload_to=custom_upload_to,
                                   verbose_name=_('vnm_company_head_image'))
    technology_use = models.ManyToManyField(TechnologyUsing,related_name='projects',verbose_name=_('vnm_technology_project'))
    teems = models.IntegerField(verbose_name=_('vnm_teems_project'), null=True)
    sector = models.ManyToManyField(ProjectSector, related_name='projects', verbose_name=_('vnm_sector_project'))


    def __str__(self):
        return self.name

def custom_upload_to_project_image(instance, filename):
    instance_id = Project.objects.last().id
    return 'head/project/{}/{}'.format(instance_id, filename)


class ProjectImage(TranslatableModel):
    class Meta:
        db_table = 'head_project_image'
        verbose_name_plural = _('vnp_project_image')
        verbose_name = _('vn_project_image')

    translations = TranslatedFields(
        description = models.TextField(null=True, verbose_name=_('vnm_projectimage_desc'))
    )
    image = models.ImageField(verbose_name=_('vnm_projectimage_image'), null=True, upload_to=custom_upload_to_project_image)
    project = models.ForeignKey(Project, related_name='project_images', on_delete=models.CASCADE,
                                verbose_name=_('vnm_projectimage_project'))

    def __str__(self):
        return self.project.name


class Review(TranslatableModel):
    class Meta:
        verbose_name_plural = _('vnp_review')
        verbose_name = _('vn_review')

    translations = TranslatedFields(
        name=models.TextField(max_length=255, verbose_name=_('vnm_name_review'))
    )

    customer = models.ForeignKey(Customer, related_name='reviews', on_delete=models.CASCADE,
                                 verbose_name=_('vnm_customer_review'))
    project = models.ForeignKey(Project, on_delete=models.CASCADE, related_name='reviews',
                                verbose_name=_('vnm_project_review'))

    def __str__(self):
        return self.name


class Contact(models.Model):
    class Meta:
        verbose_name_plural = _('vnp_contact')
        verbose_name = _('vn_contact')

    email = models.EmailField(max_length=255, verbose_name=_('vnm_email_contact'))
    phone = models.CharField(max_length=255, verbose_name=_('vnm_phone_contact'))
    linkedin = models.CharField(max_length=100, verbose_name=_('vnm_linkedin_contact'))
    clutch = models.CharField(max_length=100, verbose_name=_('vnm_clutch_contact'))
    teams = models.IntegerField(verbose_name=_('vnm_teams_contact'))
    experience = models.IntegerField(verbose_name=_('vnm_experience_contact'))
    completed_project = models.IntegerField(verbose_name=_('vnm_completed_project'), null=True)
    ios_count_proj = models.IntegerField(verbose_name=_('vnm_completed_project_ios'), null=True)
    android_count_proj = models.IntegerField(verbose_name=_('vnm_completed_project_and'), null=True)
    web_count_proj = models.IntegerField(verbose_name=_('vnm_completed_project_web'), null=True)
    ux_ui_count_proj = models.IntegerField(verbose_name=_('vnm_completed_project_ux_ui'), null=True)
    test_count_proj = models.IntegerField(verbose_name=_('vnm_completed_project_test'), null=True)


    def __str__(self):
        return self.email


class Order(models.Model):
    class Meta:
        verbose_name_plural = _('vnp_order')
        verbose_name = _('vnp_order')

    STATUS_CHOICES = (
        ("НОВЫЙ", "Новый"),
        ("ВЗЯТ", "Взят"),
        ("ОЖИДАНИЕ", "Ожидание"),
        ("ЗАВЕРЕШЕННЫЙ", "Завершенный"),
    )

    area = models.ManyToManyField(Area, verbose_name=_('vnm_name_area'),related_name='orders')
    email = models.EmailField(max_length=255, null=True, verbose_name=_('vnm_email_order'))
    phone = models.CharField(max_length=255, null=True, verbose_name=_('vnm_phone_order'))
    name = models.CharField(max_length=255, null=True, verbose_name=_('vnm_phone_name'))
    terms = models.CharField(max_length=20, verbose_name=_('vnm_terms_order'))
    budget = models.CharField(max_length=20, verbose_name=_('vnm_budget_order'))
    detail = models.CharField(max_length=255, verbose_name=_('vnm_detail_order'))
    file = models.FileField(null=True, verbose_name=_('vnm_file_order'), upload_to=custom_upload_to)
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='НОВЫЙ',
                              verbose_name=_('vnm_status_order'))
    date = models.DateTimeField(default=datetime.now, null=True, verbose_name=_('vnm_date_order'))

    def __str__(self):
        return self.email


class About(TranslatableModel):
    class Meta:
        verbose_name_plural = _('vnp_about')
        verbose_name = _('vn_about')

    translations = TranslatedFields(
        name=models.CharField(max_length=100, verbose_name=_('vnm_name_about'), null=True, blank=True),
        text = models.CharField(max_length=200, verbose_name=_('vnm_text_about'), null=True, blank=True),
        description = models.TextField(verbose_name=_('vnm_desc_about'), null=True, blank=True)
    )

    def __str__(self):
        return self.name


class AboutImage(models.Model):
    class Meta:
        db_table = 'head_about_image'
        verbose_name_plural = _('vmp_aboutimage')
        verbose_name = _('vm_aboutimage')

    image = models.ImageField(verbose_name=_('vnm_image_aboutimage'), upload_to=custom_upload_to)
    about = models.ForeignKey(About, related_name='about_images', on_delete=models.CASCADE,
                              verbose_name=_('vnm_about_aboutimage'))

    def __str__(self):
        return self.about.name


class Subscribers(models.Model):
    class Meta:
        verbose_name_plural = _('vmp_subscribe')
        verbose_name = _('vm_subscribe')

    email = models.EmailField(verbose_name=_('vnm_subc_email'))

