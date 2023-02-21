from django.urls import re_path
from django.views.generic import TemplateView

# from . import views

app_name = "core"


urlpatterns = [
    # path("", views.home, name="home"),
    re_path(r"^$", TemplateView.as_view(template_name="base.html"), name="home"),
    re_path(r"app.*", TemplateView.as_view(template_name="base.html"), name="home"),
]
