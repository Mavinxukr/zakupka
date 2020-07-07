def custom_upload_to(instance, filename):
    folder = instance._meta.model.__name__.lower()
    if instance._meta.model.__name__ == 'AboutImage':
        return 'head/{}/{}'.format('about', filename)
    elif instance._meta.model.__name__ == 'Order':
        return 'order/{}/{}'.format(instance.name, filename)
    return 'head/{}/{}/{}'.format(folder, instance.name, filename)

