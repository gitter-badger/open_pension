# -*- coding: utf-8 -*-
# Generated by Django 1.9.5 on 2016-09-12 18:21
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('pension', '0005_investmenthome_establishment_date'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='investmenthome',
            name='establishment_date',
        ),
    ]