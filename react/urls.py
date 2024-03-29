from django.urls import path, re_path
from . import views
from django.conf import settings
from react.views import serve_react

urlpatterns = [
  re_path(r"^(?P<path>.*)$", serve_react, {"document_root": settings.REACT_APP_BUILD_PATH}),
]