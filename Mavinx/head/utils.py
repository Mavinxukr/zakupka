def custom_upload_to(instance, filename):
    folder = instance._meta.model.__name__.lower()
    if instance._meta.model.__name__ == 'AboutImage':
        path = 'head/{}/{}'.format('about', filename)
    elif instance._meta.model.__name__ == 'Order':
        path = 'order/{}/{}'.format(instance.name, filename)
    elif instance._meta.model.__name__ == 'Technology':
        path = 'technology_parent/{}/{}'.format(instance.name, filename)
    elif instance._meta.model.__name__ == 'TechnologyUsing':
        path = 'technology_child/{}/{}'.format(instance.name, filename)
    elif instance._meta.model.__name__ == 'About':
        path = 'about/{}'.format(filename)
    elif instance._meta.model.__name__ == 'BlogCaseImages':
        path = 'head/{}/{}'.format(instance.blog.id, filename)
    elif instance._meta.model.__name__ == 'ProjectNumberImages':
        path = 'head/project/{}/{}'.format(instance.project.id, filename)
    elif instance._meta.model.__name__ == 'ProjectSliderImages':
        path = 'head/project/{}/{}'.format(instance.project.id, filename)
    elif instance._meta.model.__name__ == 'BlogWriter':
        path = 'head/blog_writer/{}/{}'.format(instance.name, filename)
    else:
        path = 'head/{}/{}/{}'.format(folder, instance.name, filename)
    return path
