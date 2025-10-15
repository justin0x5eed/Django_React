from rest_framework.routers import DefaultRouter

from .views import ArticleCategoryViewSet, ArticleViewSet

router = DefaultRouter()
router.register(r"categories", ArticleCategoryViewSet, basename="article-category")
router.register(r"articles", ArticleViewSet, basename="article")

urlpatterns = router.urls
