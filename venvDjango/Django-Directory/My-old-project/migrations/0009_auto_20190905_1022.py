# Generated by Django 2.1.5 on 2019-09-05 10:22

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personal', '0008_auto_20190802_1640'),
    ]

    operations = [
        migrations.AlterField(
            model_name='postss',
            name='PostDate',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2019, 9, 5, 10, 22, 4, 926669)),
        ),
    ]
