# Generated by Django 2.1.5 on 2019-07-31 14:36

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('personal', '0002_auto_20190731_1434'),
    ]

    operations = [
        migrations.AddField(
            model_name='accounts',
            name='Profile_picture',
            field=models.FileField(default='blah.jpg', upload_to=''),
        ),
        migrations.AlterField(
            model_name='postss',
            name='PostDate',
            field=models.DateTimeField(blank=True, default=datetime.datetime(2019, 7, 31, 14, 36, 16, 18422)),
        ),
    ]
