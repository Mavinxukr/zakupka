def custom_upload_to(instance, filename):
    folder = instance._meta.model.__name__.lower()
    if instance._meta.model.__name__ == 'AboutImage':
        return 'head/{}/{}'.format('about', filename)
    elif instance._meta.model.__name__ == 'Order':
        return 'order/{}/{}'.format(instance.name, filename)
    elif instance._meta.model.__name__ == 'Technology':
        return 'technology_parent/{}/{}'.format(instance.name, filename)
    elif instance._meta.model.__name__ == 'TechnologyUsing':
        return 'technology_child/{}/{}'.format(instance.name, filename)
    elif instance._meta.model.__name__ == 'About':
        return 'about/{}'.format(filename)
    elif instance._meta.model.__name__ == 'BlogCaseImages':
        return 'head/{}/{}'.format(instance.blog.id, filename)
    elif instance._meta.model.__name__ == 'ProjectNumberImages':
        return 'head/project/{}/{}'.format(instance.project.id, filename)
    elif instance._meta.model.__name__ == 'ProjectSliderImages':
        return 'head/project/{}/{}'.format(instance.project.id, filename)
    elif instance._meta.model.__name__ == 'BlogWriter':
        return 'head/blog_writer/{}/{}'.format(instance.name, filename)
    return 'head/{}/{}/{}'.format(folder, instance.name, filename)
