from django import forms
from .models import video,postss

# Create your tests here.


class CommentForm(forms.ModelForm):

    class Meta:
        model = video

        fields = ('message',)


class ReplyComment(forms.ModelForm):
    class Meta:
        model = video

        fields = ('reply_comments',)


class Upload(forms.ModelForm):
    class Meta:

        path = forms.CharField(required=False)
        model = postss
        fields = ['post_file', "descriptions","Thumbnail","title"]
