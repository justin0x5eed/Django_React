import json
from typing import List, Optional, Tuple

from django.conf import settings
from django.shortcuts import render
from django.templatetags.static import static
from rest_framework import mixins, viewsets

from .models import Article, ArticleCategory
from .serializers import ArticleCategorySerializer, ArticleSerializer


class ArticleCategoryViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """Read-only endpoints for article categories."""

    queryset = ArticleCategory.objects.all()
    serializer_class = ArticleCategorySerializer


class ArticleViewSet(mixins.ListModelMixin, mixins.RetrieveModelMixin, viewsets.GenericViewSet):
    """Read-only endpoints for articles."""

    queryset = Article.objects.select_related("category", "owner")
    serializer_class = ArticleSerializer


def _vite_build_assets() -> Tuple[List[str], Optional[str]]:
    """Return CSS and JS asset URLs from the Vite manifest for production builds."""

    manifest_path = settings.VITE_MANIFEST_PATH
    entry_name = settings.VITE_ENTRYPOINT

    try:
        manifest = json.loads(manifest_path.read_text(encoding="utf-8"))
    except FileNotFoundError:
        return [], None
    except json.JSONDecodeError:
        return [], None

    entry = manifest.get(entry_name, {})
    css_urls = [static(path) for path in entry.get("css", [])]
    js_file = entry.get("file")

    return css_urls, static(js_file) if js_file else None


def index(request):
    """Render the simple homepage."""

    css_urls: List[str]
    js_url: Optional[str]

    if settings.DEBUG:
        css_urls, js_url = [], None
    else:
        css_urls, js_url = _vite_build_assets()

    context = {
        "debug": settings.DEBUG,
        "vite_dev_server": settings.VITE_DEV_SERVER,
        "vite_entrypoint": settings.VITE_ENTRYPOINT,
        "vite_css": css_urls,
        "vite_js": js_url,
    }

    return render(request, "index.html", context)
