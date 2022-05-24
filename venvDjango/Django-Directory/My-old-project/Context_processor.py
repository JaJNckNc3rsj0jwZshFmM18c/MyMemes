from .models import Pictures


def Context_Pictures(request):

    Picture_context = Pictures.objects.get(pk=1)
    context = {"Picture_context":Picture_context}

    return context
