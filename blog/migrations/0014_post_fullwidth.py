# -*- coding: utf-8 -*-
# Generated by Django 1.11.2 on 2017-06-14 20:47
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('blog', '0013_post_title_size'),
    ]

    operations = [
        migrations.AddField(
            model_name='post',
            name='fullwidth',
            field=models.BooleanField(default=True, verbose_name='Pełna szerokość strony (usuwa boczny panel)'),
        ),
    ]
